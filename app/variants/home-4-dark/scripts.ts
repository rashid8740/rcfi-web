// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`    function switchTab(tabId) {
      const tabs = ['certysign', 'elano', 'prezio'];
      tabs.forEach(t => {
        const panel = document.getElementById('panel-' + t);
        const btn = document.getElementById('btn-' + t);
        if (t === tabId) {
          panel.classList.remove('hidden');
          btn.className = 'px-5 py-2.5 rounded-lg font-headline-sm text-body-default font-semibold transition-all bg-primary-container text-on-primary-container shadow-md';
        } else {
          panel.classList.add('hidden');
          btn.className = 'px-5 py-2.5 rounded-lg font-headline-sm text-body-default font-semibold transition-all text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated';
        }
      });
    }
  `,
];
