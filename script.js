// Basic interactivity for the Open Android Dex website.
// Placeholder for future enhancements (e.g., mobile menu, smooth scroll polyfills).

document.addEventListener("DOMContentLoaded", () => {
  console.log("Open Android Dex website loaded.");

  // Dark mode toggle
  const themeToggle = document.querySelector(".theme-toggle");
  const html = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
    themeToggle.setAttribute("aria-pressed", savedTheme === "dark");
  } else if (systemDark) {
    html.setAttribute("data-theme", "dark");
    themeToggle.setAttribute("aria-pressed", "true");
  }

  themeToggle.addEventListener("click", () => {
    const isDark = html.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";
    html.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    themeToggle.setAttribute("aria-pressed", String(nextTheme === "dark"));
  });
});
