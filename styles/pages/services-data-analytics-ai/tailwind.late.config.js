// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "Live console time update simulation function updateLiveClock const el document.getElementById live-clock if now new Date hours String now.getUTCHours .padStart mins now.getUTCMinutes secs now.getUTCSeconds el.textContent setInterval" }],
};
