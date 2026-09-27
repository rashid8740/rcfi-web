// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`    // State for the 8 Diagnostic Questions
    const auditScores = [100, 50, 100, 50, 0, 100, 100, 50]; // default initial selections

    function selectAudit(qIndex, scoreVal, btn) {
      auditScores[qIndex - 1] = scoreVal;
      
      // Update UI buttons in this question row
      const parent = btn.closest('.question-block');
      const buttons = parent.querySelectorAll('.audit-btn');
      buttons.forEach(b => {
        b.className = 'audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant';
      });
      btn.className = 'audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-secondary text-on-secondary font-semibold';

      recalculateAuditScore();
    }

    function recalculateAuditScore() {
      const sum = auditScores.reduce((a, b) => a + b, 0);
      const avg = Math.round(sum / auditScores.length);
      
      const scoreValEl = document.getElementById('score-val');
      const circleEl = document.getElementById('score-circle-bar');
      const badgeEl = document.getElementById('score-status-badge');
      const headingEl = document.getElementById('score-status-heading');
      const summaryEl = document.getElementById('score-summary');
      const gapsEl = document.getElementById('identified-gaps');

      scoreValEl.innerText = avg + '%';
      
      // Circle offset: 100 - avg
      const offset = 100 - avg;
      circleEl.style.strokeDashoffset = offset;

      // Status conditions & Gap alerts
      gapsEl.innerHTML = '';
      if (avg >= 85) {
        badgeEl.innerText = 'Exceptional';
        badgeEl.className = 'font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold';
        headingEl.innerText = 'Audit-Ready Institutional Posture';
        summaryEl.innerText = 'High compliance across PBO Act 2013 and digital trust standards.';
        gapsEl.innerHTML = '<div class="p-2.5 rounded bg-surface-container-low flex items-start gap-2 text-on-surface font-body-md text-body-md"><span class="material-symbols-outlined text-secondary text-[18px]">verified</span><span>All systems ready for formal external audit and donor defense.</span></div>';
      } else if (avg >= 60) {
        badgeEl.innerText = 'Moderate Risk';
        badgeEl.className = 'font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-bold';
        headingEl.innerText = 'Operational Gaps Detected';
        summaryEl.innerText = 'Key board sign-off or financial variance workflows require automation.';
        gapsEl.innerHTML = \`
          <div class="p-2.5 rounded bg-surface-container-low flex items-start gap-2 text-on-surface font-body-md text-body-md"><span class="material-symbols-outlined text-secondary text-[18px]">info</span><span>Unverified manual minute storage risks non-compliance during grant renewal.</span></div>
          <div class="p-2.5 rounded bg-surface-container-low flex items-start gap-2 text-on-surface font-body-md text-body-md"><span class="material-symbols-outlined text-error text-[18px]">warning</span><span>Manual budget variance reports create potential audit lag.</span></div>
        \`;
      } else {
        badgeEl.innerText = 'Critical Risk';
        badgeEl.className = 'font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-bold';
        headingEl.innerText = 'Statutory Non-Compliance Alert';
        summaryEl.innerText = 'Significant exposure to donor grant suspension or regulator sanctions.';
        gapsEl.innerHTML = \`
          <div class="p-2.5 rounded bg-surface-container-low flex items-start gap-2 text-on-surface font-body-md text-body-md"><span class="material-symbols-outlined text-error text-[18px]">error</span><span>Missing cryptographic digital signatures invalidates remote board resolutions.</span></div>
          <div class="p-2.5 rounded bg-surface-container-low flex items-start gap-2 text-on-surface font-body-md text-body-md"><span class="material-symbols-outlined text-error text-[18px]">error</span><span>Lack of 7-year immutable audit log breaches Kenya DPA 2019 standards.</span></div>
        \`;
      }
    }

    // Module Data for Interactive Tab Showcase
    const modules = [
      {
        eyebrow: "MODULE 01 // ONBOARDING & CONSTITUTION",
        title: "Organization Registration",
        badge: "Statutory Track",
        desc: "Guided six-step registration workflow supporting PBO, CBO, and CGRA legal frameworks. Validates constitution charters, vetting certificates, and statutory identity numbers directly into a tamper-evident public registry.",
        caps: [
          "Multi-track constitution builder (PBO Act 2013)",
          "Instant document authenticity validation",
          "Searchable public verification QR registry"
        ],
        outputs: [
          "CAK cryptographic verifiable certificate",
          "Complete electronic founding portfolio",
          "Statutory Gazette notice package"
        ],
        mockLabel: "Process: ENTITY_REG_STAGE_03.xml"
      },
      {
        eyebrow: "MODULE 02 // GOVERNANCE STRUCTURE",
        title: "Board & Governance",
        badge: "Charter Alignment",
        desc: "Comprehensive member profiling, committee charters, term limit alarms, and conflict-of-interest registers that enforce compliance before board voting can proceed.",
        caps: [
          "Live Conflict of Interest (COI) digital sign-off",
          "Automatic tenure expiration alerts",
          "Matrix of skills and committee balance analysis"
        ],
        outputs: [
          "Governance compliance report for statutory filing",
          "Transparent committee assignment charter",
          "Auditable trustee credentials dossier"
        ],
        mockLabel: "Matrix: TRUSTEE_COI_ACTIVE_REGISTER.db"
      },
      {
        eyebrow: "MODULE 03 // STATUTORY SESSIONS",
        title: "Meetings & Resolutions",
        badge: "Paperless Board",
        desc: "Execute agendas, automated RSVPs, quorum verification, and live cryptographic resolution voting — creating a full governance record without a single email attachment.",
        caps: [
          "Automated quorum calculation engine",
          "In-meeting anonymous and roll-call voting",
          "Integrated video and live-minute transcription"
        ],
        outputs: [
          "Cryptographically signed resolution ledger",
          "Timestamped attendance and quorum proof",
          "Automated action-item assignment tracker"
        ],
        mockLabel: "Session: COUNCIL_Q2_QUORUM_VERIFIED.log"
      },
      {
        eyebrow: "MODULE 04 // INSTITUTIONAL VISION",
        title: "Strategic Planning",
        badge: "5-Year Horizon",
        desc: "Translate multi-year strategic frameworks and Theories of Change directly into annual operational plans with cascading KPI linkages down to department heads.",
        caps: [
          "Theory of Change interactive visual mapper",
          "Annual Operating Plan (AOP) cascade system",
          "Live KPI variance and risk heatmap"
        ],
        outputs: [
          "Executive strategic scorecard for board meetings",
          "Operational resource allocation schedule",
          "Mid-term strategic review dossier"
        ],
        mockLabel: "Plan: STRAT_2025_2030_THEORY_CHANGE.json"
      },
      {
        eyebrow: "MODULE 05 // GRANT & FIELD DELIVERY",
        title: "Programmes & Projects",
        badge: "Multi-Donor Aligned",
        desc: "Traceable milestones, field activities, and granular financial allocations configured to export into USAID, Global Fund, EU, and FCDO donor formats seamlessly.",
        caps: [
          "Donor-specific chart of activity mapping",
          "Milestone disbursement authorization locks",
          "Multi-partner collaborative workspace"
        ],
        outputs: [
          "USAID & EU standard grant reporting templates",
          "Field verification photographic evidence trail",
          "Milestone burn-rate analysis sheets"
        ],
        mockLabel: "Grant: GLOBAL_FUND_HIV_R8_Q3.rep"
      },
      {
        eyebrow: "MODULE 06 // ACCOUNTABILITY & LEARNING",
        title: "MEARL Framework",
        badge: "Data-Driven Impact",
        desc: "Monitoring, Evaluation, Accountability, Research, and Learning in one suite. Aggregate indicator records, field feedback, and community complaints with verifiable traceability.",
        caps: [
          "Quantitative and qualitative indicator banks",
          "Community feedback and whistleblower tracker",
          "Geotagged data collection validation"
        ],
        outputs: [
          "Automated donor impact dashboard",
          "Accountability and beneficiary complaint report",
          "Longitudinal evaluation study extract"
        ],
        mockLabel: "Telemetry: MEARL_FIELD_INDICATORS_Q2.dat"
      },
      {
        eyebrow: "MODULE 07 // FIDUCIARY INTEGRITY",
        title: "Financial Management",
        badge: "Double-Entry Cloud",
        desc: "Institutional chart of accounts, automated multi-level requisition approvals, expenditure tagging, and continuous budget-versus-actual variance tracking.",
        caps: [
          "Zero-spreadsheet monthly reconciliation",
          "Multi-currency donor grant accounting",
          "Strict segregation of duties voucher workflow"
        ],
        outputs: [
          "Real-time Budget vs Actual variance reports",
          "Statutory audit-ready voucher archive",
          "Donor expenditure justification statements"
        ],
        mockLabel: "Ledger: FY25_Q2_EXPENDITURE_DISBURSEMENT.acc"
      },
      {
        eyebrow: "MODULE 08 // ENTERPRISE ASSURANCE",
        title: "Security & Access Control",
        badge: "CAK ECSP Hardened",
        desc: "FIDO2 two-factor authentication, granular role-based permissions, and immutable seven-year audit trails compliant with ISO 27001 and Kenya Data Protection Act 2019.",
        caps: [
          "Hardware token and TOTP 2FA enforcement",
          "Cryptographic tamper-evident write-once logs",
          "Dynamic permission provisioning by committee"
        ],
        outputs: [
          "ODPC Data Protection Compliance Certificate",
          "Full forensic system access audit export",
          "ISO 27001 compliance verification dossier"
        ],
        mockLabel: "Crypto: HARDWARE_HSM_CAK_ROOT_KEY.pem"
      }
    ];

    function switchModule(index) {
      // Highlight correct button
      for (let i = 0; i < 8; i++) {
        const btn = document.getElementById('mod-btn-' + i);
        if (i === index) {
          btn.className = 'module-tab-btn w-full text-left p-space-md rounded-xl bg-primary text-on-primary transition-all flex items-center justify-between shadow-md';
          const icon = btn.querySelector('.material-symbols-outlined');
          icon.className = 'material-symbols-outlined text-[20px] text-secondary-fixed';
        } else {
          btn.className = 'module-tab-btn w-full text-left p-space-md rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-all flex items-center justify-between';
          const icon = btn.querySelector('.material-symbols-outlined');
          icon.className = 'material-symbols-outlined text-[20px] text-secondary';
        }
      }

      // Update right panel content
      const m = modules[index];
      document.getElementById('m-eyebrow').innerText = m.eyebrow;
      document.getElementById('m-title').innerText = m.title;
      document.getElementById('m-badge').innerText = m.badge;
      document.getElementById('m-desc').innerText = m.desc;
      document.getElementById('m-mock-label').innerText = m.mockLabel;

      // Update Capabilities
      const capsEl = document.getElementById('m-caps');
      capsEl.innerHTML = m.caps.map(c => \`<li class="flex items-center gap-1.5"><span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span> \${c}</li>\`).join('');

      // Update Outputs
      const outputsEl = document.getElementById('m-outputs');
      outputsEl.innerHTML = m.outputs.map(o => \`<li class="flex items-center gap-1.5"><span class="material-symbols-outlined text-secondary text-[16px]">task</span> \${o}</li>\`).join('');
    }
  `,
];
