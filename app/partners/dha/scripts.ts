// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`  document.getElementById('validateBtn')?.addEventListener('click', function() {
    const statusBox = document.getElementById('testResult');
    statusBox.textContent = 'Simulating FHIR validation with DHA SHR sandbox...';
    statusBox.className = 'mt-2 p-2.5 rounded bg-secondary-container text-on-secondary-container text-center font-semibold text-[11px] animate-pulse';
    
    setTimeout(() => {
      statusBox.textContent = '✓ Cryptographic Signature Valid: Signed with RCFI Root CA (DHA-2025-Pass)';
      statusBox.className = 'mt-2 p-2.5 rounded bg-primary text-secondary-fixed text-center font-semibold text-[11px]';
    }, 900);
  });`,
];
