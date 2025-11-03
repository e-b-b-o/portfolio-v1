// navigation Button

const navButton = document.getElementById("collapsible-button");
const navLinks = document.querySelector(".nav-links-mobile");
const navBtns = document.querySelectorAll("button[data-page]");
const content = document.getElementById("content");

navButton.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const homeContent = content.innerHTML;

navBtns.forEach((btn) => {
  btn.addEventListener("click", async () => {
    const page = btn.dataset.page;

    if (page === "home") {
      content.innerHTML = homeContent;
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    try {
      const response = await fetch(`${page}.html`);
      const html = await response.text();
      content.innerHTML = html;
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.log("Error Loading Page:", error);
      content.innerHTML = "<p> Sorry something went wrong.</p>";
    }
  });
});
