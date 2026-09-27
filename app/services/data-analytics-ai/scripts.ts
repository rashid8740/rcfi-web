// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`  // Live console time update simulation
  function updateLiveClock() {
    const el = document.getElementById('live-clock');
    if (el) {
      const now = new Date();
      const hours = String(now.getUTCHours() + 3).padStart(2, '0');
      const mins = String(now.getUTCMinutes()).padStart(2, '0');
      const secs = String(now.getUTCSeconds()).padStart(2, '0');
      el.textContent = \`\${hours}:\${mins}:\${secs} UTC+3\`;
    }
  }
  setInterval(updateLiveClock, 1000);`,
];
