// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`  document.addEventListener('DOMContentLoaded', () => {
    const nodeData = {
      konza: {
        title: "Konza Technopolis Development Authority",
        category: "Government Sovereign Infrastructure",
        code: "REF: GOK-KONZA-01",
        subtitle: "National Sovereign Cloud & Datacenter Replication",
        desc: "RCFI co-locates high-assurance cryptographic HSM engines within the Tier III National Sovereign Cloud at Konza Smart City. Provides automated geo-redundant root replication, zero-trust infrastructure, and citizen-facing digital stamp services.",
        mandate: "Konza Technopolis Act & GOK Cloud Directives",
        role: "Hardware Security Module Node Beta (Co-location)",
        protocol: "PKCS#11 / REST CA / TLS 1.3 Anycast",
        linkText: "Explore Konza Subpage",
        linkHref: "/partners/konza/",
        icon: "cloud_sync",
        status: "ACTIVE IN PRODUCTION"
      },
      icta: {
        title: "Information & Communications Technology Authority (ICTA)",
        category: "Statutory Standards & Architecture",
        code: "REF: GOK-ICTA-02",
        subtitle: "Government Enterprise Architecture & Cloud Frameworks",
        desc: "RCFI aligns all cryptographic verification and signing services directly with the Kenya National Enterprise Architecture (KNEA) and ICT Authority interoperability guidelines across state departments.",
        mandate: "ICT Authority Mandate & Standards Guidelines",
        role: "Standard Compliance & Public Sector Interop Anchor",
        protocol: "KNEA / Open Standards / RESTful API",
        linkText: "Review Statutory Standards",
        linkHref: "#government-regulatory",
        icon: "account_balance",
        status: "STATUTORY BENCHMARK"
      },
      cak: {
        title: "Communications Authority of Kenya (CAK)",
        category: "Licensing Authority & National Root",
        code: "LIC: TL/E-CSP 00014",
        subtitle: "National PKI Licensing & Judicial Non-Repudiation",
        desc: "Operating as an officially licensed Electronic Certification Service Provider (ECSP) and Intermediate CA under Cap 411A. RCFI issues legally recognized advanced electronic signatures upholding judicial admissibility.",
        mandate: "Kenya Information and Communications Act (Cap 411A)",
        role: "Accredited Electronic Certification Provider (ECSP)",
        protocol: "X.509 v3 / CRL / OCSP / 4096-bit RSA",
        linkText: "Audit Legal Framework (CPS)",
        linkHref: "/repository/",
        icon: "policy",
        status: "LICENSED & REGULATED"
      },
      odpc: {
        title: "Office of the Data Protection Commissioner (ODPC)",
        category: "Statutory Privacy Regime",
        code: "REG: ODPC-DPA-2019",
        subtitle: "Data Privacy by Design & Zero-Exfiltration Guarantee",
        desc: "Rigorous compliance with the Kenya Data Protection Act of 2019. Cryptographic keys and biometric identities remain strictly in-country with zero offshore metadata leakage or foreign cloud dependency.",
        mandate: "Data Protection Act 2019 & Statutory Regulations",
        role: "Registered Data Controller & Processor Audit",
        protocol: "Privacy-Preserving PKI / In-Country HSM",
        linkText: "View Trust Center Policies",
        linkHref: "/trust/",
        icon: "shield",
        status: "DPA 99.8% COMPLIANCE"
      },
      dha: {
        title: "Digital Health Agency (DHA)",
        category: "Ministry of Health Ecosystem",
        code: "REF: MOH-DHA-TRUST",
        subtitle: "HL7 FHIR Conformance & Clinical Practitioner Signing",
        desc: "Delivering the cryptographic substrate for the national Digital Health Act rollout. Ensures practitioner smartcard certification, clinic prescription authenticity, and tamper-evident patient health records across facilities.",
        mandate: "Digital Health Act 2023 Statutory Rollout",
        role: "Clinical Integrity & Health Worker Identity Root",
        protocol: "HL7 FHIR R4 / DICOM Signing / Smartcard PKCS#15",
        linkText: "View DHA Subpage (Clearance)",
        linkHref: "/partners/dha/",
        icon: "health_and_safety",
        status: "INTEROP CERTIFIED"
      },
      afa: {
        title: "Agriculture & Food Authority (AFA)",
        category: "Ministry of Agriculture Ecosystem",
        code: "REF: MOA-AFA-SEAL",
        subtitle: "Statutory Agricultural Export Verification & Supply Seals",
        desc: "Embedding non-repudiable digital seals and cryptographic provenance onto statutory produce export permits, crop movement licenses, and food standard certificates.",
        mandate: "Agriculture and Food Authority Act (Cap 318)",
        role: "Export Certificate Digital Stamp Provider",
        protocol: "PDF-Advanced Electronic Signature (PAdES)",
        linkText: "Explore Agriculture Integrations",
        linkHref: "#government-regulatory",
        icon: "agriculture",
        status: "PRODUCTION SYSTEM"
      },
      sugar: {
        title: "Kenya Sugar Board",
        category: "Ministry of Agriculture Ecosystem",
        code: "REF: MOA-KSB-REG",
        subtitle: "Sugarcane Outgrower Quota & Verification Ledgers",
        desc: "Securing national sugarcane farmer payment registers and milling quota authorizations with tamper-evident digital records to eradicate predatory ghost billing and falsified weighments.",
        mandate: "Sugar Act Framework & Statutory Quota Rules",
        role: "Ledger Integrity & Quota Signing Infrastructure",
        protocol: "Cryptographic Tamper-Evident Ledger",
        linkText: "Explore Commodity Framework",
        linkHref: "#government-regulatory",
        icon: "grain",
        status: "ACTIVE CO-ENGINEERING"
      },
      intellisoft: {
        title: "IntelliSOFT Consulting",
        category: "Technology & Delivery Partner",
        code: "REF: ALLIANCE-IS-HEALTH",
        subtitle: "15+ Years Clinical Deployments Across Pan-Africa",
        desc: "Premier digital health partner leading clinical informatics across Africa. Integrates RCFI's CertySign and Elano engines directly into OpenMRS, KenyaEMR, and DHIS2 systems across health ministries.",
        mandate: "Strategic Health Tech Alliance Framework",
        role: "Enterprise Health Systems Integrator",
        protocol: "OpenHIE / FHIR APIs / EMR Native Connectors",
        linkText: "Explore IntelliSOFT Subpage",
        linkHref: "/partners/intellisoft/",
        icon: "code",
        status: "STRATEGIC PARTNER"
      },
      crown: {
        title: "Crown Interactive",
        category: "Technology & Delivery Partner",
        code: "REF: ALLIANCE-CI-GOV",
        subtitle: "High-Capacity Enterprise Workflow & Municipal Platforms",
        desc: "Large-scale public sector enterprise workflow architects. Deploying RCFI's digital trust and electronic signature engines across municipal utility collections, civic licenses, and corporate compliance hubs.",
        mandate: "Enterprise Workflow Delivery Partnership",
        role: "Civic Workflow & Billing Engine Integrator",
        protocol: "Enterprise REST / Microservices / HSM Gateway",
        linkText: "Explore Crown Interactive Subpage",
        linkHref: "/partners/crown-interactive/",
        icon: "lan",
        status: "DELIVERY PARTNER"
      },
      rcfi: {
        title: "RCFI Sovereign Trust Anchor",
        category: "National Trust Architecture Core",
        code: "NODE: RCFI-ROOT-CORE",
        subtitle: "Dual In-Country HSM Datacenter Facility",
        desc: "Central trusted authority uniting Kenyan statutory regulators, national data controllers, clinical databases, and commercial relying parties under one cryptographic root.",
        mandate: "Kenya Information & Communications Act ECSP Charter",
        role: "Root & Intermediate Certification Authority",
        protocol: "FIPS 140-2 Level 3 / RSA 4096 / ECC P-384",
        linkText: "Explore All Partner Pathways",
        linkHref: "#technology-delivery-partners",
        icon: "token",
        status: "ROOT ONLINE"
      }
    };

    const lines = document.querySelectorAll('.map-line');
    const nodes = document.querySelectorAll('.eco-node');
    const centerNode = document.getElementById('node-rcfi');

    function setActiveNode(key) {
      const data = nodeData[key];
      if (!data) return;

      // Update Panel
      document.getElementById('detail-category-badge').textContent = data.category;
      document.getElementById('detail-node-code').textContent = data.code;
      document.getElementById('detail-title').textContent = data.title;
      document.getElementById('detail-subtitle').textContent = data.subtitle;
      document.getElementById('detail-description').textContent = data.desc;
      document.getElementById('detail-mandate').textContent = data.mandate;
      document.getElementById('detail-role').textContent = data.role;
      document.getElementById('detail-protocol').textContent = data.protocol;
      document.getElementById('detail-link-text').textContent = data.linkText;
      document.getElementById('detail-action-link').setAttribute('href', data.linkHref);
      document.getElementById('detail-status').textContent = 'STATUS: ' + data.status;
      document.getElementById('detail-node-icon').innerHTML = \`<span class="material-symbols-outlined text-[28px]">\${data.icon}</span>\`;

      // Illuminate SVG line
      lines.forEach(l => {
        l.setAttribute('stroke', 'url(#lineGrad)');
        l.setAttribute('stroke-width', '2');
      });

      const activeLine = document.getElementById(\`line-\${key}\`);
      if (activeLine) {
        activeLine.setAttribute('stroke', 'url(#lineGradActive)');
        activeLine.setAttribute('stroke-width', '3.5');
      }
    }

    nodes.forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-node');
        setActiveNode(key);
      });
    });

    if (centerNode) {
      centerNode.addEventListener('click', () => {
        setActiveNode('rcfi');
      });
    }

    // Filter Buttons
    const filterBtns = document.querySelectorAll('.eco-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('bg-primary', 'text-on-primary');
          b.classList.add('text-on-surface-variant');
        });
        btn.classList.add('bg-primary', 'text-on-primary');
        btn.classList.remove('text-on-surface-variant');

        const cat = btn.getAttribute('data-category');
        nodes.forEach(n => {
          const nodeCat = n.getAttribute('data-cat');
          if (cat === 'all' || nodeCat === cat) {
            n.style.opacity = '1';
            n.style.pointerEvents = 'auto';
          } else {
            n.style.opacity = '0.25';
            n.style.pointerEvents = 'none';
          }
        });

        // Trigger first match
        if (cat === 'health') setActiveNode('dha');
        else if (cat === 'agri') setActiveNode('afa');
        else if (cat === 'tech') setActiveNode('intellisoft');
        else if (cat === 'regulators') setActiveNode('konza');
        else setActiveNode('konza');
      });
    });
  });`,
];
