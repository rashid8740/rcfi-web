// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "function switchSimulatorTab tabKey const codeTerraform document.getElementById code-content-terraform codeK8s code-content-k8s fileName simulator-file-name btnTf btn-tab-terraform btnK8s btn-tab-k8s if terraform codeTerraform.classList.remove codeK8s.classList.add fileName.innerText cluster-mesh-sovereign.tf btnTf.className btnK8s.className else codeTerraform.classList.add codeK8s.classList.remove telecom-ingress-mtls.yaml runManifestValidation btn validate-btn output validation-output btn.innerHTML span class animate-spin refresh /span Checking... setTimeout check_circle Passed 0.12s output.innerHTML div animate-fade-in Static Syntax Rego /div Sovereign Cloud Clause Zero Root Execution handleFormSubmit event event.preventDefault statusMsg form-status-msg statusMsg.classList.remove event.target.reset" }],
};
