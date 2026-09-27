// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`  // Terminal ping interactive simulator
  const pingBtn = document.getElementById('simulate-ping-btn');
  const pingStatus = document.getElementById('ping-status');
  const heartbeatValue = document.getElementById('heartbeat-value');

  if (pingBtn) {
    pingBtn.addEventListener('click', () => {
      pingStatus.innerText = 'Pinging AZ-KONZA-01 over Carrier-Neutral Dark Fiber...';
      pingBtn.disabled = true;
      pingBtn.classList.add('opacity-50');

      setTimeout(() => {
        const simulatedLatency = (0.8 + Math.random() * 0.6).toFixed(2);
        heartbeatValue.innerText = simulatedLatency + 'ms';
        pingStatus.innerText = 'SYN-ACK Received. Active-Active synchrony: 100% (RTT: ' + simulatedLatency + 'ms)';
        pingBtn.disabled = false;
        pingBtn.classList.remove('opacity-50');
      }, 700);
    });
  }

  // Modal interactions
  const openModalBtn = document.getElementById('open-briefing-modal-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const briefingModal = document.getElementById('briefing-modal');
  const briefingForm = document.getElementById('infrastructure-briefing-form');

  if (openModalBtn && briefingModal) {
    openModalBtn.addEventListener('click', () => {
      briefingModal.classList.remove('hidden');
    });
  }

  if (closeModalBtn && briefingModal) {
    closeModalBtn.addEventListener('click', () => {
      briefingModal.classList.add('hidden');
    });
  }

  if (briefingModal) {
    briefingModal.addEventListener('click', (e) => {
      if (e.target === briefingModal) {
        briefingModal.classList.add('hidden');
      }
    });
  }

  if (briefingForm) {
    briefingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Briefing request confirmed. An RCFI Sovereign Infrastructure liaison will contact you within 2 business hours.');
      briefingModal.classList.add('hidden');
    });
  }`,
];
