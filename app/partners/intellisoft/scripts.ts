// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`    const traceData = {
      1: {
        title: "Phase 01: KenyaEMR Clinician Encounter Creation",
        latency: "Processing Latency: ~42ms",
        desc: "The attending physician or nurse finishes documentation in KenyaEMR's web console. Upon clicking 'Finalize Encounter', the frontend serializes the encounter bundle and invokes the CertySign JavaScript SDK extension embedded into the OpenMRS browser context. No specialized smartcards are required; user credential authorization is performed via biometric or institutional OAuth.",
        icon: "monitor_heart",
        telemetry: ["Hash Algorithm: SHA-256 (EncounterDigest)", "Payload Type: FHIR R4 Bundle (DocumentReference)", "Transport: WSS / TLS 1.3 Strict Cipher"]
      },
      2: {
        title: "Phase 02: OpenHIM Mediator Verification & Routing",
        latency: "Processing Latency: ~38ms",
        desc: "IntelliSOFT's OpenHIE-compliant Health Information Mediator receives the encounter transmission. It validates clinical schema rules, performs ICD-11 / SNOMED CT terminology checks, confirms consent directives, and opens an isolated mutual-TLS pipe toward the RCFI Digital Trust Gateway.",
        icon: "sync_alt",
        telemetry: ["mTLS Handshake: Ed25519 Ephemeral Keys", "Mediator Engine: OpenHIM Core 6.1.4", "Schema Validation: HL7 FHIR US-Core / AFRO Profile"]
      },
      3: {
        title: "Phase 03: RCFI Hardware Security Module Signer",
        latency: "Processing Latency: ~64ms",
        desc: "The cryptographic payload enters the RCFI FIPS 140-2 Level 3 Hardware Security Module enclave. The clinician's CAK-licensed signing key (managed under zero-knowledge partition) generates an immutable PAdES / CAdES signature without clinical health content ever leaving the sovereign perimeter.",
        icon: "security",
        telemetry: ["HSM Level: FIPS 140-2 Level 3 Tamper Resistant", "Signature Profile: CAdES-BES with QCStatements", "Root Authority: RCFI Root CA (CAK Lic: TL/E-CSP 00014)"]
      },
      4: {
        title: "Phase 04: Verifiable FHIR Record & Atomic Timestamping",
        latency: "Processing Latency: ~42ms",
        desc: "The RCFI Time-Stamping Authority binds an RFC 3161 atomic timestamp directly to the signed encounter bundle. The resulting verifiable clinical record is dispatched back to KenyaEMR and published to the national health registry, establishing legal non-repudiation admissible in court under Kenya's Evidence Act.",
        icon: "verified",
        telemetry: ["Timestamp Format: RFC 3161 Qualified Token", "Clock Synchronization: GPS + Atomic Stratum-1 Clock", "Registry Storage: Tamper-evident Audit Ledger"]
      }
    };

    function selectStep(stepNumber) {
      document.querySelectorAll('.step-card').forEach((card, index) => {
        if (index + 1 === stepNumber) {
          card.classList.remove('bg-surface-container-low');
          card.classList.add('bg-surface-container', 'shadow-md');
        } else {
          card.classList.remove('bg-surface-container', 'shadow-md');
          card.classList.add('bg-surface-container-low');
        }
      });

      const data = traceData[stepNumber];
      document.getElementById('detail-title').innerText = data.title;
      document.getElementById('detail-latency').innerText = data.latency;
      document.getElementById('detail-desc').innerText = data.desc;
      document.getElementById('detail-icon').innerText = data.icon;
    }

    // Interactive Simulation Runner
    document.getElementById('btn-simulate-trace').addEventListener('click', function() {
      const statusBadge = document.getElementById('trace-status-badge');
      const steps = [1, 2, 3, 4];
      let currentIdx = 0;

      statusBadge.innerText = 'Status: Executing Trace Pipeline...';
      statusBadge.className = 'px-2.5 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full font-semibold';

      const interval = setInterval(() => {
        if (currentIdx < steps.length) {
          selectStep(steps[currentIdx]);
          currentIdx++;
        } else {
          clearInterval(interval);
          statusBadge.innerText = 'Status: Encounter Verified in 186ms';
          statusBadge.className = 'px-2.5 py-1 bg-surface-container-highest text-primary font-label-sm text-label-sm rounded-full font-semibold';
        }
      }, 700);
    });

    function handleFormSubmit() {
      const banner = document.getElementById('form-success-banner');
      banner.classList.remove('hidden');
      banner.classList.add('flex');
      document.getElementById('health-intake-form').reset();
    }

    // Default step 1 selection
    selectStep(1);
  `,
];
