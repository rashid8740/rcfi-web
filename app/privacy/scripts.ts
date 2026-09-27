// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`  // Dynamic active state handler for Policy Table of Contents
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#policy-toc a');
    const sections = Array.from(navLinks).map(link => {
      const targetId = link.getAttribute('href').substring(1);
      return document.getElementById(targetId);
    }).filter(Boolean);

    function updateActiveToc() {
      const scrollPosition = window.scrollY + 200;
      let currentSectionId = '';

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          currentSectionId = section.id;
          break;
        }
      }

      navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if (href === currentSectionId) {
          link.classList.remove('text-on-surface-variant', 'hover:bg-surface-container-low');
          link.classList.add('text-primary', 'font-semibold', 'bg-surface-container');
        } else {
          link.classList.remove('text-primary', 'font-semibold', 'bg-surface-container');
          link.classList.add('text-on-surface-variant', 'hover:bg-surface-container-low');
        }
      });
    }

    window.addEventListener('scroll', updateActiveToc, { passive: true });
    updateActiveToc();
  });`,
];
