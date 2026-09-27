// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "function const verifyBtn document.getElementById verify-btn certInput cert-input verificationCard verification-card form public-sector-inquiry-form successBox form-success if verifyBtn.addEventListener click val certInput.value.trim verificationCard.classList.add opacity-50 setTimeout verificationCard.innerHTML div class span check_circle /span /div strong Certificate Ref: /strong Issuer: Crown Interactive Municipal Gateway Trust Root: Kenya National Root Legal Status: Admissible under Verified At: new Date .toISOString verified Cryptographic Hash Match: Zero Tampering Detected verificationCard.classList.remove form.addEventListener submit e e.preventDefault form.classList.add successBox.classList.remove" }],
};
