// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`    // 1. Signature Playground Logic
    const signerInput = document.getElementById('signer-name-input');
    const signaturePreview = document.getElementById('signature-preview');
    const sigMeta = document.getElementById('sig-meta');
    const liveTsCode = document.getElementById('live-ts-code');

    if (signerInput) {
      signerInput.addEventListener('input', function(e) {
        const val = e.target.value.trim() || "Dr. Grace M. Wanjiku";
        signaturePreview.textContent = val;
      });
    }

    function setSignatureStyle(style, btn) {
      document.querySelectorAll('.style-toggle-btn').forEach(b => {
        b.classList.remove('bg-secondary', 'text-white', 'active');
        b.classList.add('bg-primary-container', 'text-on-primary-container');
      });
      btn.classList.add('bg-secondary', 'text-white', 'active');
      btn.classList.remove('bg-primary-container', 'text-on-primary-container');

      if (style === 'cursive') {
        signaturePreview.className = "text-2xl text-slate-900 font-cursive transition-all duration-200";
        sigMeta.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span><span>Verified: Kenya National ID Card (Pass-KYC)</span>';
      } else if (style === 'formal') {
        signaturePreview.className = "text-xl font-bold tracking-tight text-slate-900 uppercase font-sans border-b-2 border-slate-900 pb-0.5 inline-block";
        sigMeta.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span><span>Corporate Signatory Seal: Board Verified</span>';
      } else if (style === 'digital') {
        signaturePreview.className = "text-sm font-mono-code text-emerald-800 font-bold bg-emerald-100/70 px-2 py-1 rounded inline-block";
        sigMeta.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span><span>X.509 ECSP Token: KE-CAK-8842-HW</span>';
      }
    }

    // 2. API Tab Switcher
    function switchApiTab(lang, btn) {
      document.querySelectorAll('.api-tab').forEach(b => {
        b.classList.remove('bg-secondary', 'text-white', 'active');
        b.classList.add('bg-[#0b281d]', 'text-white/70');
      });
      btn.classList.add('bg-secondary', 'text-white', 'active');
      btn.classList.remove('bg-[#0b281d]', 'text-white/70');

      document.getElementById('code-curl').classList.add('hidden');
      document.getElementById('code-python').classList.add('hidden');
      document.getElementById('code-node').classList.add('hidden');

      document.getElementById('code-' + lang).classList.remove('hidden');
    }

    // 3. Live Document Verifier Logic
    function setVerifySample(id) {
      document.getElementById('verify-input').value = id;
      runDocumentVerification();
    }

    function runDocumentVerification() {
      const input = document.getElementById('verify-input').value.trim();
      const cardSuccess = document.getElementById('verify-card-success');
      const title = document.getElementById('result-status-title');
      const subtitle = document.getElementById('result-status-subtitle');
      const badge = document.getElementById('result-license-badge');
      const signer = document.getElementById('result-signer');
      const ts = document.getElementById('result-timestamp');
      const statute = document.getElementById('result-statute');
      const hash = document.getElementById('result-hash');

      if (input.includes('FAIL') || input.includes('TAMPER')) {
        // Tampered example
        cardSuccess.className = "p-4 sm:p-5 rounded-xl bg-red-50/90 border border-red-300";
        title.className = "text-sm font-bold text-red-900 block";
        title.textContent = "DOCUMENT TAMPERED OR HASH MISMATCH";
        subtitle.className = "text-[11px] text-red-700";
        subtitle.textContent = "Signature invalidated! Document bytes altered after execution.";
        badge.className = "px-2.5 py-1 rounded bg-red-200 text-red-900 font-mono-code text-xs font-bold";
        badge.textContent = "TAMPER DETECTED";
        signer.textContent = "UNKNOWN / REJECTED SIGNATURE";
        ts.textContent = "REVOCATION RECORDED: CRL-2026-INVALID";
        statute.textContent = "INADMISSIBLE (Evidence Act §106B Failed)";
        hash.textContent = "7a89f...MISMATCHED_CRYPTO_DIGEST_FAIL";
      } else if (input.includes('CERT-X509')) {
        // Certificate Query
        cardSuccess.className = "p-4 sm:p-5 rounded-xl bg-emerald-50/80 border border-emerald-300";
        title.className = "text-sm font-bold text-emerald-900 block";
        title.textContent = "X.509 SOVEREIGN ROOT CA CERTIFICATE VALID";
        subtitle.className = "text-[11px] text-emerald-700";
        subtitle.textContent = "Root CA: RCFI Sovereign Trust Authority (Serial #KE-ROOT-001)";
        badge.className = "px-2.5 py-1 rounded bg-emerald-200/80 text-emerald-900 font-mono-code text-xs font-bold";
        badge.textContent = "CAK TL/E-CSP 00014";
        signer.textContent = "Reprodrive Center for Innovation Ltd (Corporate Entity)";
        ts.textContent = "Valid: 2024-01-01 to 2034-01-01 (10-Year Root)";
        statute.textContent = "KICA Cap 411A Qualified Trust Service";
        hash.textContent = "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08";
      } else {
        // Standard Document verified
        cardSuccess.className = "p-4 sm:p-5 rounded-xl bg-emerald-50/80 border border-emerald-300";
        title.className = "text-sm font-bold text-emerald-900 block";
        title.textContent = "DOCUMENT CRYPTOGRAPHICALLY VALID";
        subtitle.className = "text-[11px] text-emerald-700";
        subtitle.textContent = "RCFI Sovereign Root CA · OCSP Status: Good · CRL Checked";
        badge.className = "px-2.5 py-1 rounded bg-emerald-200/80 text-emerald-900 font-mono-code text-xs font-bold";
        badge.textContent = "CAK TL/E-CSP 00014";
        signer.textContent = "Dr. Grace M. Wanjiku (Advocate of High Court)";
        ts.textContent = "2026-03-29 14:22:04 EAT (Nairobi Root TSA)";
        statute.textContent = "KICA Cap 411A & Evidence Act §106B";
        hash.textContent = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      }
    }

    // 4. ROI Calculator
    function calculateROI() {
      const docs = parseInt(document.getElementById('range-docs').value);
      const days = parseInt(document.getElementById('range-days').value);
      const hours = parseFloat(document.getElementById('range-hours').value);

      document.getElementById('val-docs').textContent = docs.toLocaleString();
      document.getElementById('val-days').textContent = days + (days === 1 ? ' day' : ' days');
      document.getElementById('val-hours').textContent = hours.toFixed(1) + ' hrs';

      // Computations
      const hoursSavedPerYear = Math.round(docs * hours * 12);
      // Assume hourly admin cost rate of KES 600 + KES 150 printing/courier paper cost per doc
      const annualMoneySaved = Math.round((hoursSavedPerYear * 600) + (docs * 150 * 12));

      document.getElementById('stat-hours-saved').textContent = hoursSavedPerYear.toLocaleString() + ' hrs';
      document.getElementById('stat-speed-up').textContent = 'From ' + days + ' days';
      document.getElementById('stat-kes-saved').textContent = 'KES ' + annualMoneySaved.toLocaleString();
    }

    // Initialize default calculation
    calculateROI();
  `,
];
