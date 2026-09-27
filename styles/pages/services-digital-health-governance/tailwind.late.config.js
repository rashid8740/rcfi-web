// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "Simple interactive feedback on validation sandbox run button const runBtn document.getElementById run-validation-btn validatorBadge validator-badge if runBtn.addEventListener click function validatorBadge.textContent validatorBadge.className bg-surface-container setTimeout" }],
};
