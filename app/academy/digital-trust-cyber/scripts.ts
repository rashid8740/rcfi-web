// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`    document.addEventListener('DOMContentLoaded', function() {
      const verifyBtn = document.getElementById('run-terminal-sim');
      const terminalOutput = document.getElementById('terminal-output');
      const downloadBtn = document.getElementById('download-syllabus-btn');

      if (verifyBtn && terminalOutput) {
        verifyBtn.addEventListener('click', function() {
          verifyBtn.disabled = true;
          verifyBtn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[18px]">progress_activity</span> Running Ceremony...';
          
          terminalOutput.innerHTML = \`
            <div class="text-secondary-fixed animate-pulse font-bold">[EXECUTION IN PROGRESS] Performing split-knowledge M-of-N pin check...</div>
            <div class="text-tertiary-fixed-dim">Attesting Luna HSM hardware slot 0x01: OK</div>
            <div class="text-tertiary-fixed-dim">Loading PKCS#11 object handler [C_SignInit]: ECDSA_SHA384</div>
          \`;

          setTimeout(function() {
            terminalOutput.innerHTML = \`
              <div class="text-secondary-fixed font-bold">[VERIFICATION COMPLETED &bull; ALL GREEN]</div>
              <div>Root Certificate: <span class="text-secondary-fixed-dim">CN=Kenya Sovereign Digital Root CA v1</span></div>
              <div>Validity: <span class="text-secondary-fixed-dim">2026-2046 | Signature Algorithm: SHA384withECDSA</span></div>
              <div>FIPS 140-2 Security Status: <span class="text-secondary-fixed-dim">Zeroization armed, tamper seal intact</span></div>
              <div class="text-secondary-fixed text-label-sm mt-1 font-bold">100% On-Soil Cryptographic Attestation Successful.</div>
            \`;
            verifyBtn.disabled = false;
            verifyBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">check</span> Verification Verified';
          }, 1400);
        });
      }

      if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
          const originalText = downloadBtn.innerHTML;
          downloadBtn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[20px]">sync</span> Generating PDF...';
          setTimeout(function() {
            downloadBtn.innerHTML = '<span class="material-symbols-outlined text-[20px]">done</span> Syllabus Dispatched';
            setTimeout(function() {
              downloadBtn.innerHTML = originalText;
            }, 2500);
          }, 1200);
        });
      }
    });
  `,
];
