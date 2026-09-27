// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "Case Studies Category Filtering Micro-interaction const filterButtons document.querySelectorAll .filter-btn cards .case-card filterButtons.forEach btn btn.addEventListener click Toggle button styles b b.classList.remove b.classList.add btn.classList.remove btn.classList.add filter btn.getAttribute data-filter cards.forEach card category card.getAttribute data-category if all card.style.display card.style.opacity setTimeout card.style.transition opacity 0.3s else none toggleBtn document.getElementById mobile-menu-toggle closeBtn mobile-menu-close drawer mobile-menu-drawer backdrop mobile-backdrop function openMenu drawer.classList.add open backdrop.classList.add closeMenu drawer.classList.remove backdrop.classList.remove toggleBtn.addEventListener closeBtn.addEventListener backdrop.addEventListener" }],
};
