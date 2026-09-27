// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`    function handleFormSubmit() {
      const btn = document.getElementById('submitBtn');
      const banner = document.getElementById('formSuccessMessage');
      if (btn && banner) {
        btn.disabled = true;
        btn.classList.add('opacity-75');
        btn.innerHTML = \`
          <span class="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
          <span>Encrypting & Sending...</span>
        \`;
        setTimeout(() => {
          btn.innerHTML = \`
            <span class="material-symbols-outlined text-[20px]">check</span>
            <span>Message Sent</span>
          \`;
          banner.classList.remove('hidden');
          banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 900);
      }
    }
  `,
];
