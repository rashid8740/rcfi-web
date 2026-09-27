// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "document.addEventListener DOMContentLoaded function const verifyBtn document.getElementById run-terminal-sim terminalOutput terminal-output downloadBtn download-syllabus-btn if verifyBtn.addEventListener click verifyBtn.disabled true verifyBtn.innerHTML span class animate-spin progress_activity /span Running Ceremony... terminalOutput.innerHTML div Performing split-knowledge M-of-N pin check... /div Attesting Luna hardware slot 0x01: Loading object handler [C_SignInit]: setTimeout &bull Root Certificate: Kenya Sovereign Digital v1 Validity: Signature Algorithm: SHA384withECDSA Security Status: Zeroization armed tamper seal intact On-Soil Cryptographic Attestation Successful. false check Verification Verified downloadBtn.addEventListener originalText downloadBtn.innerHTML sync Generating done Syllabus Dispatched" }],
};
