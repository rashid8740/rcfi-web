// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`  function switchRepoTab(tabName) {
    // Hide all contents
    document.getElementById('tab-content-policy').classList.add('hidden');
    document.getElementById('tab-content-roots').classList.add('hidden');
    document.getElementById('tab-content-agreements').classList.add('hidden');

    // Reset button states
    const tabs = ['policy', 'roots', 'agreements'];
    tabs.forEach(t => {
      const btn = document.getElementById('tab-btn-' + t);
      btn.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
      btn.classList.add('text-on-surface-variant');
    });

    // Show target content
    document.getElementById('tab-content-' + tabName).classList.remove('hidden');

    // Set active button state
    const activeBtn = document.getElementById('tab-btn-' + tabName);
    activeBtn.classList.remove('text-on-surface-variant');
    activeBtn.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');
  }

  function copyToClipboard(text, btnElement) {
    navigator.clipboard.writeText(text).then(() => {
      const originalText = btnElement.innerHTML;
      btnElement.innerHTML = '<span class="material-symbols-outlined text-[16px]">check</span> Copied!';
      btnElement.classList.add('text-secondary');
      setTimeout(() => {
        btnElement.innerHTML = originalText;
        btnElement.classList.remove('text-secondary');
      }, 2000);
    });
  }

  function simulateDownload(filename) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 transition-all transform translate-y-0 opacity-100';
    toast.innerHTML = '<span class="material-symbols-outlined text-secondary-fixed">download_done</span><span>Preparing signed artifact: <strong>' + filename + '</strong></span>';
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  function runDiagnosticPing() {
    const pingBtn = document.getElementById('ping-btn');
    const pingStatus = document.getElementById('ping-status');

    pingBtn.disabled = true;
    pingBtn.classList.add('opacity-75');
    pingBtn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[18px]">progress_activity</span> Querying...';

    setTimeout(() => {
      pingBtn.disabled = false;
      pingBtn.classList.remove('opacity-75');
      pingBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">network_ping</span> Test OCSP Connection';
      pingStatus.classList.remove('hidden');
      pingStatus.classList.add('flex');
    }, 600);
  }`,
];
