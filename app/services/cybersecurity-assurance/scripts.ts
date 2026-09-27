// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`const toggleBtn = document.getElementById('mobile-menu-toggle'); const closeBtn = document.getElementById('mobile-menu-close'); const drawer = document.getElementById('mobile-menu-drawer'); const backdrop = document.getElementById('mobile-backdrop'); function openMenu() { drawer.classList.add('open'); backdrop.classList.add('open'); } function closeMenu() { drawer.classList.remove('open'); backdrop.classList.remove('open'); } if(toggleBtn) toggleBtn.addEventListener('click', openMenu); if(closeBtn) closeBtn.addEventListener('click', closeMenu); if(backdrop) backdrop.addEventListener('click', closeMenu);`,
];
