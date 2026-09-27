// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "function switchStep stepNumber const cards document.getElementById card-step-1 card-step-2 card-step-3 buttons btn-step-1 btn-step-2 btn-step-3 cards.forEach card index if card.classList.remove opacity-70 card.classList.add scale-[1.02] else buttons.forEach btn btn.classList.add btn.classList.remove" }],
};
