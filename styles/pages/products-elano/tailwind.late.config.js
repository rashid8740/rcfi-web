// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "function switchElanoModule modId btn document.querySelectorAll .module-pane .forEach p p.classList.add p.classList.remove const target document.getElementById module-pane- if target.classList.remove target.classList.add .module-tab-btn b b.className btn.className updateHealthScore chks .health-chk let count chks.forEach c c.checked count++ pct Math.round chks.length scoreVal health-score-val bar health-bar badge health-status-badge scoreVal.textContent bar.style.width badge.textContent Ready For Statutory Audit badge.className else Action Required Non-Compliant Risk bg-error text-on-error" }],
};
