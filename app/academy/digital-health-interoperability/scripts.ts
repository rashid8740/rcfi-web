// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`  // Interactive Validation Terminal Emulation
  const runBtn = document.getElementById('run-validation-btn');
  const resetBtn = document.getElementById('reset-terminal-btn');
  const output = document.getElementById('validation-output');
  const check1 = document.getElementById('check-item-1');
  const check2 = document.getElementById('check-item-2');
  const check3 = document.getElementById('check-item-3');
  const check4 = document.getElementById('check-item-4');

  function setIcon(el, icon, colorClass) {
    const iconEl = el.querySelector('.check-icon');
    if (iconEl) {
      iconEl.textContent = icon;
      iconEl.className = 'material-symbols-outlined text-[20px] check-icon ' + colorClass;
    }
  }

  function resetTerminal() {
    setIcon(check1, 'hourglass_top', 'text-secondary-fixed');
    setIcon(check2, 'hourglass_top', 'text-secondary-fixed');
    setIcon(check3, 'hourglass_top', 'text-secondary-fixed');
    setIcon(check4, 'hourglass_top', 'text-secondary-fixed');
    output.innerHTML = \`<div>&gt; STATUS: IDLE. Ready for ingest.</div><div>&gt; Click 'Validate FHIR Bundle' to initiate automated pipeline checks.</div>\`;
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', resetTerminal);
  }

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      output.innerHTML = \`<div>&gt; [0.00s] Ingesting FHIR R4 Bundle 'rcfi-ke-enc-99214'...</div>\`;
      setIcon(check1, 'sync', 'animate-spin text-secondary-fixed');

      setTimeout(() => {
        setIcon(check1, 'check_circle', 'text-secondary-fixed');
        output.innerHTML += \`<div>&gt; [0.28s] FHIR Schema VALID: 2 resources profiled against KE Core IG.</div>\`;
        setIcon(check2, 'sync', 'animate-spin text-secondary-fixed');
      }, 500);

      setTimeout(() => {
        setIcon(check2, 'check_circle', 'text-secondary-fixed');
        output.innerHTML += \`<div>&gt; [0.64s] UPI Match Confirmed: National Health Registry status: ACTIVE.</div>\`;
        setIcon(check3, 'sync', 'animate-spin text-secondary-fixed');
      }, 1000);

      setTimeout(() => {
        setIcon(check3, 'verified', 'text-secondary-fixed');
        output.innerHTML += \`<div>&gt; [0.92s] PKI Trust Anchored: CertySign CAK Seal (ECDSA-SHA256) VALID.</div>\`;
        setIcon(check4, 'sync', 'animate-spin text-secondary-fixed');
      }, 1500);

      setTimeout(() => {
        setIcon(check4, 'lock_open_right', 'text-secondary-fixed');
        output.innerHTML += \`<div>&gt; [1.18s] Kenya DHA 2023 Consent Check: PASS. Payload routed to SHR testbed.</div><div class="font-bold text-on-primary">&gt; COMPLETED: 4 of 4 verification passes. Readiness status: CERTIFIED.</div>\`;
      }, 2000);
    });
  }`,
`const toggleBtn = document.getElementById('mobile-menu-toggle'); const closeBtn = document.getElementById('mobile-menu-close'); const drawer = document.getElementById('mobile-menu-drawer'); const backdrop = document.getElementById('mobile-backdrop'); function openMenu() { drawer.classList.add('open'); backdrop.classList.add('open'); } function closeMenu() { drawer.classList.remove('open'); backdrop.classList.remove('open'); } if(toggleBtn) toggleBtn.addEventListener('click', openMenu); if(closeBtn) closeBtn.addEventListener('click', closeMenu); if(backdrop) backdrop.addEventListener('click', closeMenu);`,
];
