// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`  function switchStep(stepNumber) {
    const cards = [
      document.getElementById('card-step-1'),
      document.getElementById('card-step-2'),
      document.getElementById('card-step-3')
    ];
    const buttons = [
      document.getElementById('btn-step-1'),
      document.getElementById('btn-step-2'),
      document.getElementById('btn-step-3')
    ];

    cards.forEach((card, index) => {
      if (index === stepNumber - 1) {
        card.classList.remove('bg-surface-container-low', 'opacity-70');
        card.classList.add('bg-surface-container-lowest', 'shadow-md', 'scale-[1.02]');
      } else {
        card.classList.remove('bg-surface-container-lowest', 'shadow-md', 'scale-[1.02]');
        card.classList.add('bg-surface-container-low', 'opacity-70');
      }
    });

    buttons.forEach((btn, index) => {
      if (index === stepNumber - 1) {
        btn.classList.add('bg-primary', 'text-on-primary');
        btn.classList.remove('text-on-surface-variant');
      } else {
        btn.classList.remove('bg-primary', 'text-on-primary');
        btn.classList.add('text-on-surface-variant');
      }
    });
  }`,
];
