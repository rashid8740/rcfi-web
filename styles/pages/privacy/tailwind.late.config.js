// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "Dynamic active state handler for Policy Table of Contents document.addEventListener DOMContentLoaded function const navLinks document.querySelectorAll #policy-toc a sections Array.from .map link targetId link.getAttribute href .substring return document.getElementById .filter Boolean updateActiveToc scrollPosition window.scrollY let currentSectionId i sections.length i-- section sections[i] if section.offsetTop section.id break navLinks.forEach link.classList.remove text-on-surface-variant hover:bg-surface-container-low link.classList.add text-primary bg-surface-container else window.addEventListener scroll passive: true" }],
};
