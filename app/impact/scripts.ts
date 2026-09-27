// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`  // Case Studies Category Filtering Micro-interaction
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.case-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle button styles
      filterButtons.forEach(b => {
        b.classList.remove('bg-primary', 'text-on-primary');
        b.classList.add('bg-surface-container', 'text-on-surface-variant');
      });
      btn.classList.remove('bg-surface-container', 'text-on-surface-variant');
      btn.classList.add('bg-primary', 'text-on-primary');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease-in-out';
            card.style.opacity = '1';
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });`,
`const toggleBtn = document.getElementById('mobile-menu-toggle'); const closeBtn = document.getElementById('mobile-menu-close'); const drawer = document.getElementById('mobile-menu-drawer'); const backdrop = document.getElementById('mobile-backdrop'); function openMenu() { drawer.classList.add('open'); backdrop.classList.add('open'); } function closeMenu() { drawer.classList.remove('open'); backdrop.classList.remove('open'); } if(toggleBtn) toggleBtn.addEventListener('click', openMenu); if(closeBtn) closeBtn.addEventListener('click', closeMenu); if(backdrop) backdrop.addEventListener('click', closeMenu);`,
];
