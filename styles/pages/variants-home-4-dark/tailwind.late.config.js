// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "function switchTab tabId const tabs certysign elano prezio tabs.forEach t panel document.getElementById panel- btn btn- if panel.classList.remove btn.className else panel.classList.add" }],
};
