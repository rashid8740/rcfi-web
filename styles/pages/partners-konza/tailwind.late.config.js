// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "Terminal ping interactive simulator const pingBtn document.getElementById simulate-ping-btn pingStatus ping-status heartbeatValue heartbeat-value if pingBtn.addEventListener click pingStatus.innerText Pinging over Carrier-Neutral Dark Fiber... pingBtn.disabled true pingBtn.classList.add opacity-50 setTimeout simulatedLatency Math.random .toFixed heartbeatValue.innerText ms Received. Active-Active synchrony: false pingBtn.classList.remove Modal interactions openModalBtn open-briefing-modal-btn closeModalBtn close-modal-btn briefingModal briefing-modal briefingForm infrastructure-briefing-form openModalBtn.addEventListener briefingModal.classList.remove closeModalBtn.addEventListener briefingModal.classList.add briefingModal.addEventListener e e.target briefingForm.addEventListener submit e.preventDefault alert Briefing request confirmed. An Sovereign Infrastructure liaison will contact you within business hours." }],
};
