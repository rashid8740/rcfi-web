// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`  // Simple interactive feedback on validation sandbox run button
  const runBtn = document.getElementById('run-validation-btn');
  const validatorBadge = document.getElementById('validator-badge');

  if (runBtn && validatorBadge) {
    runBtn.addEventListener('click', function() {
      validatorBadge.textContent = 'VALIDATING...';
      validatorBadge.className = 'bg-surface-container text-on-surface text-label-sm font-label-sm px-2 py-0.5 rounded font-bold animate-pulse';

      setTimeout(function() {
        validatorBadge.textContent = '100% VALIDATED';
        validatorBadge.className = 'bg-secondary-container text-on-secondary-container text-label-sm font-label-sm px-2 py-0.5 rounded font-bold';
      }, 700);
    });
  }`,
];
