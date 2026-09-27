// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "function switchTab mode const idBtn document.getElementById tab-id-btn fileBtn tab-file-btn idPanel panel-id filePanel panel-file if id idBtn.className fileBtn.className idPanel.classList.remove filePanel.classList.add else filePanel.classList.remove idPanel.classList.add setSample code targetState input doc-identifier input.value setSimState simulateVerify state scrollTarget state- scrollTarget.scrollIntoView behavior: smooth block: center states valid tampered notfound states.forEach s container btn btn-state- container.classList.remove container.classList.add btn.className" }],
};
