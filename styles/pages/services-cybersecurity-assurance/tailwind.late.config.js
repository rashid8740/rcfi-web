// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "const toggleBtn document.getElementById mobile-menu-toggle closeBtn mobile-menu-close drawer mobile-menu-drawer backdrop mobile-backdrop function openMenu drawer.classList.add open backdrop.classList.add closeMenu drawer.classList.remove backdrop.classList.remove if toggleBtn.addEventListener click closeBtn.addEventListener backdrop.addEventListener" }],
};
