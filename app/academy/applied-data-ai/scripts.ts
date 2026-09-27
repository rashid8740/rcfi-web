// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`    (function() {
      const step1 = document.getElementById('step-btn-1');
      const step2 = document.getElementById('step-btn-2');
      const step3 = document.getElementById('step-btn-3');
      const step4 = document.getElementById('step-btn-4');
      const buttons = [step1, step2, step3, step4];

      buttons.forEach((btn, index) => {
        if (!btn) return;
        btn.addEventListener('click', () => {
          buttons.forEach(b => {
            b.classList.remove('bg-surface-container');
            b.classList.add('bg-surface-container-low');
          });
          btn.classList.remove('bg-surface-container-low');
          btn.classList.add('bg-surface-container');
        });
      });
    })();
  `,
];
