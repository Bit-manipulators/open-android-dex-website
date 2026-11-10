// Basic interactivity for the Open Android Dex website.
// Placeholder for future enhancements (e.g., mobile menu, smooth scroll polyfills).

document.addEventListener("DOMContentLoaded", () => {
  console.log("Open Android Dex website loaded.");

  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      menu.classList.toggle("open");
    });

    // Close menu when a link is clicked
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        menu.classList.remove("open");
      });
    });
  }
});
