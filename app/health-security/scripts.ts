// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`  (function() {
    const faqItems = document.querySelectorAll('#faq-accordion .faq-item');
    faqItems.forEach(item => {
      const trigger = item.querySelector('.faq-trigger');
      const content = item.querySelector('.faq-content');
      const icon = item.querySelector('.faq-icon');

      trigger.addEventListener('click', () => {
        const isExpanded = !content.classList.contains('hidden');

        // Close all items
        faqItems.forEach(otherItem => {
          otherItem.querySelector('.faq-content').classList.add('hidden');
          const otherIcon = otherItem.querySelector('.faq-icon');
          otherIcon.style.transform = 'rotate(0deg)';
        });

        // Toggle current item
        if (!isExpanded) {
          content.classList.remove('hidden');
          icon.style.transform = 'rotate(180deg)';
        }
      });
    });

    // Automatically open first FAQ for prominent context
    if (faqItems.length > 0) {
      faqItems[0].querySelector('.faq-content').classList.remove('hidden');
      faqItems[0].querySelector('.faq-icon').style.transform = 'rotate(180deg)';
    }
  })();`,
];
