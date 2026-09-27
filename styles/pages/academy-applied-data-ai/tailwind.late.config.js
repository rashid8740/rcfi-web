// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "function const step1 document.getElementById step-btn-1 step2 step-btn-2 step3 step-btn-3 step4 step-btn-4 buttons [step1 step4] buttons.forEach btn index if !btn return btn.addEventListener click b b.classList.remove b.classList.add btn.classList.remove btn.classList.add" }],
};
