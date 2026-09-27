// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "document.getElementById validateBtn ?.addEventListener click function const statusBox testResult statusBox.textContent Simulating validation with sandbox... statusBox.className text-on-secondary-container setTimeout Cryptographic Signature Valid: Signed Root DHA-2025-Pass" }],
};
