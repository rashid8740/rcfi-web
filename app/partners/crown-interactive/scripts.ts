// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`    (function() {
      const verifyBtn = document.getElementById('verify-btn');
      const certInput = document.getElementById('cert-input');
      const verificationCard = document.getElementById('verification-card');
      const form = document.getElementById('public-sector-inquiry-form');
      const successBox = document.getElementById('form-success');

      if (verifyBtn && certInput && verificationCard) {
        verifyBtn.addEventListener('click', function() {
          const val = certInput.value.trim() || 'NBI-URB-2025-08491';
          verificationCard.classList.add('opacity-50');
          setTimeout(function() {
            verificationCard.innerHTML = \`
              <div class="flex items-center justify-between">
                <span class="text-[12px] font-bold text-secondary-fixed flex items-center gap-1">
                  <span class="material-symbols-outlined text-[16px]">check_circle</span>
                  AUTHENTICATED SOVEREIGN SEAL
                </span>
                <span class="text-[10px] px-2 py-0.5 rounded bg-primary text-secondary-fixed">VALID</span>
              </div>
              <div class="text-[11px] text-on-primary-container space-y-1">
                <div><strong class="text-on-primary">Certificate Ref:</strong> \` + val + \`</div>
                <div><strong class="text-on-primary">Issuer:</strong> Crown Interactive Municipal Gateway</div>
                <div><strong class="text-on-primary">Trust Root:</strong> RCFI Kenya National Root CA (TL/E-CSP 00014)</div>
                <div><strong class="text-on-primary">Legal Status:</strong> 100% Admissible under KICA § 83C</div>
                <div><strong class="text-on-primary">Verified At:</strong> \` + new Date().toISOString() + \`</div>
              </div>
              <div class="pt-2 border-t border-white/10 flex items-center justify-between">
                <div class="flex items-center gap-1 text-[11px] text-secondary-fixed">
                  <span class="material-symbols-outlined text-[14px]">verified</span>
                  <span>Cryptographic Hash Match: 100%</span>
                </div>
                <span class="text-[10px] text-outline-variant">Zero Tampering Detected</span>
              </div>
            \`;
            verificationCard.classList.remove('opacity-50');
          }, 350);
        });
      }

      if (form && successBox) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          form.classList.add('hidden');
          successBox.classList.remove('hidden');
        });
      }
    })();
  `,
];
