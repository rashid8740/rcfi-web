// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "function switchRepoTab tabName Hide all contents document.getElementById tab-content-policy .classList.add tab-content-roots tab-content-agreements Reset button states const tabs policy roots agreements tabs.forEach t btn tab-btn- btn.classList.remove btn.classList.add Show target content tab-content- .classList.remove Set active state activeBtn activeBtn.classList.remove activeBtn.classList.add copyToClipboard text btnElement navigator.clipboard.writeText .then originalText btnElement.innerHTML span class check /span Copied! btnElement.classList.add setTimeout btnElement.classList.remove simulateDownload filename toast document.createElement div toast.className bottom-6 right-6 px-4 transform translate-y-0 opacity-100 toast.innerHTML download_done Preparing signed artifact: strong /strong document.body.appendChild toast.style.opacity toast.style.transform translateY 10px toast.remove runDiagnosticPing pingBtn ping-btn pingStatus ping-status pingBtn.disabled true pingBtn.classList.add opacity-75 pingBtn.innerHTML animate-spin progress_activity Querying... false pingBtn.classList.remove network_ping Test Connection pingStatus.classList.remove pingStatus.classList.add" }],
};
