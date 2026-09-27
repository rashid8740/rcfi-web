// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`  function switchTab(mode) {
    const idBtn = document.getElementById('tab-id-btn');
    const fileBtn = document.getElementById('tab-file-btn');
    const idPanel = document.getElementById('panel-id');
    const filePanel = document.getElementById('panel-file');

    if (mode === 'id') {
      idBtn.className = 'flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-label-md text-label-md transition-all bg-primary text-on-primary shadow-sm font-semibold';
      fileBtn.className = 'flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-label-md text-label-md transition-all text-on-surface-variant hover:text-primary font-semibold';
      idPanel.classList.remove('hidden');
      filePanel.classList.add('hidden');
    } else {
      fileBtn.className = 'flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-label-md text-label-md transition-all bg-primary text-on-primary shadow-sm font-semibold';
      idBtn.className = 'flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-label-md text-label-md transition-all text-on-surface-variant hover:text-primary font-semibold';
      filePanel.classList.remove('hidden');
      idPanel.classList.add('hidden');
    }
  }

  function setSample(code, targetState) {
    const input = document.getElementById('doc-identifier');
    if (input) {
      input.value = code;
    }
    setSimState(targetState);
  }

  function simulateVerify(state) {
    setSimState(state);
    const scrollTarget = document.getElementById('state-' + state);
    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function setSimState(state) {
    const states = ['valid', 'tampered', 'notfound'];
    states.forEach(function (s) {
      const container = document.getElementById('state-' + s);
      const btn = document.getElementById('btn-state-' + s);
      if (container) {
        if (s === state) {
          container.classList.remove('hidden');
        } else {
          container.classList.add('hidden');
        }
      }
      if (btn) {
        if (s === state) {
          btn.className = 'px-3 py-1 rounded font-semibold transition-colors bg-primary text-on-primary';
        } else {
          btn.className = 'px-3 py-1 rounded font-semibold transition-colors text-on-surface-variant hover:text-primary';
        }
      }
    });
  }`,
];
