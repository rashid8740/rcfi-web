import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/trust/page.css";
import "@/styles/pages/trust/late.css";
import PartnersNavMenu from "@/components/PartnersNavMenu";

export const metadata: Metadata = { title: "Trust Center & CA Repository | RCFI Technology" };

export default function TrustPage() {
  return (
    <div className="rcfi-trust" style={{ display: "contents" }}>
      <header className="fixed top-0 left-0 right-0 w-full z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="bg-primary text-on-primary w-full h-10 px-margin flex items-center justify-between font-label-sm text-label-sm">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
            <div className="flex items-center gap-space-md overflow-hidden">
              <span className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
                ISO 27001 Certified
              </span>
              <span className="hidden sm:flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
                CAK Licensed ECSP (TL/E-CSP 00014)
              </span>
              <span className="hidden md:flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
                Kenya DPA Compliant
              </span>
            </div>
            <div className="flex items-center gap-space-md">
              <a className="text-primary-fixed hover:text-on-primary transition-colors" href="mailto:info@rcfi.co.ke">
                info@rcfi.co.ke
              </a>
              <span className="text-outline-variant">
                |
              </span>
              <Link className="text-on-primary hover:text-secondary-fixed transition-colors flex items-center gap-1" data-path="verify-document" href="/verify/">
                <span className="material-symbols-outlined text-[14px]">
                  verified
                </span>
                /verify/
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest/95 backdrop-blur-xl h-20 px-margin flex items-center justify-between border-b border-surface-container">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
            <div className="flex items-center gap-space-md">
              <img alt="RCFI Mosaic tile logo Reprodrive Center for Innovation Limited" className="h-8 w-auto object-contain" src="/brand/rcfi-mark.svg" />
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold leading-none">
                  RCFI
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight mt-0.5 hidden sm:inline">
                  Reprodrive Center for Innovation Limited
                </span>
              </div>
            </div>
            <nav className="hidden xl:flex items-center gap-space-sm" data-active-classes="bg-primary-container text-on-primary-container font-bold rounded-lg">
              <Link className="px-space-sm py-space-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" data-path="home" href="/">
                Home
              </Link>
              <Link className="px-space-sm py-space-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" data-path="services" href="/services/">
                Services
              </Link>
              <Link className="px-space-sm py-space-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" data-path="products-overview" href="/products/certysign/">
                Products
              </Link>
              <Link className="px-space-sm py-space-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" data-path="academy" href="/academy/">
                Academy
              </Link>
              <PartnersNavMenu className="px-space-sm py-space-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" />
              <Link aria-current="page" className="px-space-sm py-space-xs transition-colors bg-primary-container text-on-primary-container font-bold rounded-lg" data-path="trust-center" href="/trust/">
                Trust Center
              </Link>
              <Link className="px-space-sm py-space-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" data-path="about" href="/about/">
                About
              </Link>
              <Link className="px-space-sm py-space-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" data-path="contact" href="/contact/">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-space-md">
              <Link className="hidden sm:inline-flex items-center justify-center bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container px-space-md py-2.5 rounded-lg font-label-md text-label-md transition-all shadow-[0_1px_8px_rgba(0,0,0,0.04)]" data-path="verify-document" href="/verify/">
                Verify a Document
              </Link>
              <a className="inline-flex items-center justify-center bg-secondary text-on-secondary hover:bg-primary hover:text-on-primary px-space-md py-2.5 rounded-lg font-label-md text-label-md transition-all" data-path="book-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-30 bg-surface min-h-[calc(100vh-280px)]">
        <div className="flex flex-col w-full">
          {/* Top Sovereign Header / Hero Section */}
          <section className="relative w-full bg-primary text-on-primary py-space-xl overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <defs>
                  {" "}
                  <pattern height="48" id="grid-pattern" patternUnits="userSpaceOnUse" width="48">
                    {" "}
                    <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#6cf8bb" strokeWidth="0.75" />
                    {" "}
                  </pattern>
                  {" "}
                </defs>
                {" "}
                <rect fill="url(#grid-pattern)" height="100%" width="100%" />
                {" "}
              </svg>
            </div>
            <div className="max-w-7xl mx-auto px-margin relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
                <div className="max-w-3xl space-y-space-md">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container/15 text-secondary-fixed text-label-sm font-label-sm uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                    {" Institutional Accreditation & Sovereign Security "}
                  </div>
                  <h1 className="text-display-lg font-headline-lg text-on-primary tracking-tight">
                    {" Don't take our word for it. "}
                    <span className="text-secondary-fixed underline decoration-secondary-fixed decoration-2 underline-offset-8">
                      Verify it.
                    </span>
                  </h1>
                  <p className="text-body-lg font-body-lg text-tertiary-fixed-dim leading-relaxed">
                    {" We operate Kenya’s licensed public key infrastructure and national-scale trust services under strict regulatory oversight. Here is our license charter, audit credentials, cryptographic endpoints, and policies in plain sight. "}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-space-sm shrink-0">
                  <a className="inline-flex items-center justify-center gap-2 px-space-md py-3 rounded-lg bg-secondary text-on-secondary hover:bg-secondary-fixed hover:text-on-secondary-fixed font-label-md text-label-md transition-all shadow-md" href="#repository-matrix">
                    <span className="material-symbols-outlined text-[18px]">
                      download
                    </span>
                    {" Root & Intermediate Bundles "}
                  </a>
                  <a className="inline-flex items-center justify-center gap-2 px-space-md py-3 rounded-lg bg-surface-container-lowest/10 text-on-primary hover:bg-surface-container-lowest/20 font-label-md text-label-md backdrop-blur-sm transition-all" href="#endpoints">
                    <span className="material-symbols-outlined text-[18px]">
                      terminal
                    </span>
                    {" Query Endpoints "}
                  </a>
                </div>
              </div>
              {/* Trust Badges Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mt-space-xl pt-space-md border-t border-primary-container">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest/10 flex items-center justify-center text-secondary-fixed shrink-0">
                    <span className="material-symbols-outlined">
                      verified
                    </span>
                  </div>
                  <div>
                    <div className="text-label-sm font-label-sm text-tertiary-fixed-dim uppercase">
                      License Authority
                    </div>
                    <div className="text-body-md font-body-md text-on-primary font-semibold">
                      CAK Accredited
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest/10 flex items-center justify-center text-secondary-fixed shrink-0">
                    <span className="material-symbols-outlined">
                      lock
                    </span>
                  </div>
                  <div>
                    <div className="text-label-sm font-label-sm text-tertiary-fixed-dim uppercase">
                      Security Tier
                    </div>
                    <div className="text-body-md font-body-md text-on-primary font-semibold">
                      FIPS 140-2 Level 3
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest/10 flex items-center justify-center text-secondary-fixed shrink-0">
                    <span className="material-symbols-outlined">
                      shield
                    </span>
                  </div>
                  <div>
                    <div className="text-label-sm font-label-sm text-tertiary-fixed-dim uppercase">
                      Privacy Standard
                    </div>
                    <div className="text-body-md font-body-md text-on-primary font-semibold">
                      ODPC Compliant
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest/10 flex items-center justify-center text-secondary-fixed shrink-0">
                    <span className="material-symbols-outlined">
                      schedule
                    </span>
                  </div>
                  <div>
                    <div className="text-label-sm font-label-sm text-tertiary-fixed-dim uppercase">
                      SLA Commitment
                    </div>
                    <div className="text-body-md font-body-md text-on-primary font-semibold">
                      99.95% Availability
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Live Status & Vital Counters Bar */}
          <section className="w-full bg-surface-container-low py-8 shadow-inner">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-lg text-center md:text-left">
                <div className="space-y-1">
                  <div className="text-headline-lg font-headline-lg text-primary tracking-tight">
                    47
                  </div>
                  <div className="text-body-md font-body-md text-on-surface-variant">
                    Kenyan Counties Covered
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-headline-lg font-headline-lg text-primary tracking-tight">
                    10,000+
                  </div>
                  <div className="text-body-md font-body-md text-on-surface-variant">
                    Verified Identities Served
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-headline-lg font-headline-lg text-primary tracking-tight">
                    50K+
                  </div>
                  <div className="text-body-md font-body-md text-on-surface-variant">
                    Legal Signatures Sealed
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-headline-lg font-headline-lg text-primary tracking-tight">
                    4+ Years
                  </div>
                  <div className="text-body-md font-body-md text-on-surface-variant">
                    Zero-Breach Track Record
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 1: Statutory Licensing & Regulatory Charters */}
          <section className="w-full bg-surface-container-lowest py-space-xl">
            <div className="max-w-7xl mx-auto px-margin space-y-space-xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div>
                  <span className="text-label-sm font-label-sm text-secondary uppercase font-bold tracking-wider">
                    Statutory Mandate
                  </span>
                  <h2 className="text-headline-md font-headline-md text-primary mt-1">
                    {"Regulatory Licensing & Charters"}
                  </h2>
                </div>
                <p className="text-body-md font-body-md text-on-surface-variant max-w-lg">
                  {" Licensed under the Kenya Information and Communications Act (KICA) and audited continuously by national digital identity task forces. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                {/* License Card 1 */}
                <div className="group relative rounded-xl bg-surface-container-lowest p-space-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary" />
                  <div className="space-y-space-md">
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-2.5 py-1 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                        CAK ECSP 00014
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        verified_user
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-title-md font-title-md text-primary">
                        Communications Authority ECSP
                      </h3>
                      <p className="text-label-sm font-label-sm text-on-surface-variant uppercase font-medium">
                        TL/E-CSP 00014
                      </p>
                    </div>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      {" Authorized Electronic Certification Service Provider & Intermediate Certification Authority under Kenya's National PKI Framework. Fully legally enforceable under Section 83G of the KICA Act. "}
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-4 flex items-center justify-between">
                    <span className="text-label-sm font-label-sm text-on-surface-variant">
                      Public Register Status: Active
                    </span>
                    <a className="inline-flex items-center gap-1 text-label-md font-label-md text-secondary font-semibold hover:text-primary transition-colors" href="https://ke-cirt.go.ke/licensed-accredited-e-csps/" rel="noopener noreferrer" target="_blank">
                      {" Verify On Register "}
                      <span className="material-symbols-outlined text-[16px]">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>
                {/* License Card 2 */}
                <div className="group relative rounded-xl bg-surface-container-lowest p-space-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-container" />
                  <div className="space-y-space-md">
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-2.5 py-1 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                        ODPC Regulated
                      </span>
                      <span className="material-symbols-outlined text-primary text-[24px]">
                        policy
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-title-md font-title-md text-primary">
                        Kenya Data Protection Act 2019
                      </h3>
                      <p className="text-label-sm font-label-sm text-on-surface-variant uppercase font-medium">
                        {"Controller & Processor Compliant"}
                      </p>
                    </div>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      {" Full ODPC registration guaranteeing data residency within Kenya. Zero unauthorized cross-border metadata routing, with dedicated resident Data Protection Officer (DPO) oversight. "}
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-4 flex items-center justify-between">
                    <span className="text-label-sm font-label-sm text-on-surface-variant">
                      DPO Desk Available
                    </span>
                    <a className="inline-flex items-center gap-1 text-label-md font-label-md text-secondary font-semibold hover:text-primary transition-colors" href="mailto:dpo@rcfi.co.ke">
                      {" dpo@rcfi.co.ke "}
                      <span className="material-symbols-outlined text-[16px]">
                        mail
                      </span>
                    </a>
                  </div>
                </div>
                {/* License Card 3 */}
                <div className="group relative rounded-xl bg-surface-container-lowest p-space-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary" />
                  <div className="space-y-space-md">
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-2.5 py-1 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                        ISO/IEC 27001:2022
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        workspace_premium
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-title-md font-title-md text-primary">
                        Information Security Management
                      </h3>
                      <p className="text-label-sm font-label-sm text-on-surface-variant uppercase font-medium">
                        Comprehensive ISMS Scope
                      </p>
                    </div>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      {" Independently audited scope covering cryptographic key generation, hardware security module lifecycles, enterprise document signing, and physical access controls. "}
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-4 flex items-center justify-between">
                    <span className="text-label-sm font-label-sm text-on-surface-variant">
                      Annual Re-Certification 2024
                    </span>
                    <span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-secondary font-bold">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      {" Verified Valid "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Visual Proof: Cryptographic Center Architecture */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="rounded-2xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                  <div className="lg:col-span-5 space-y-space-md">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-on-secondary-container text-label-sm font-label-sm font-bold uppercase">
                      {" Infrastructure Blueprint "}
                    </div>
                    <h2 className="text-headline-md font-headline-md text-primary">
                      {" Hardware Security Modules & Nairobi Facility Isolation "}
                    </h2>
                    <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                      {" RCFI stores its Root and Issuing CA private keys within zero-compromise FIPS 140-2 Level 3 hardware security modules located in high-security Nairobi Tier III data facilities. Keys never leave the cryptographic boundary in plaintext. "}
                    </p>
                    <div className="space-y-space-sm pt-2">
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary mt-0.5">
                          key
                        </span>
                        <div>
                          <div className="text-title-md font-title-md text-primary">
                            M-of-N Multi-Custodian Ceremonies
                          </div>
                          <p className="text-body-md font-body-md text-on-surface-variant">
                            Key creation and signing ceremonies require cryptographic quorums of vetted trust custodians.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary mt-0.5">
                          router
                        </span>
                        <div>
                          <div className="text-title-md font-title-md text-primary">
                            Air-Gapped Root Isolation
                          </div>
                          <p className="text-body-md font-body-md text-on-surface-variant">
                            The RCFI Primary Root CA remains physically disconnected in a fire-rated vault, operational only for intermediate renewals.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="relative rounded-xl overflow-hidden shadow-xl">
                      <img className="w-full h-80 lg:h-96 object-cover" data-alt="High security cryptographic data center server room with high-end server racks, glowing emerald green fiber optic cables, clean modern high-tech enterprise facility in Nairobi Kenya with pristine concrete floors and biometric security doors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_-oQ5tLb1Oy7sq0o7_CMDxyyqdLBTMxVR6cQG0vtPaJElT1B6bitM3pes7r14zeqQkE-Wg0Qlq5ZhS6H_RPng5lLjgRAzsgfFdy4ahzF1s6EWo5u_W4rMnwt5qBlymYMjo3di6ekvA1_JwWiKWLuhTcyN7Y5ouqqXGwMOaH6ZAiAQ6UpfXTn96woVHZu8j6WihJyPO0V4FltcZlkXKa2OSqQBxVUtlsYcXJtYJQRkPT-bPg3dVbim" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-between text-on-surface">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-secondary animate-ping" />
                          <span className="text-label-md font-label-md font-bold">
                            Nairobi HSM Cluster 01: Operational
                          </span>
                        </div>
                        <span className="text-label-sm font-label-sm bg-primary text-on-primary px-2.5 py-1 rounded">
                          Tamper Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 2: CA Repository Downloads & Endpoints (Build-ready /repository/ core) */}
          <section className="w-full bg-surface py-space-xl" id="repository-matrix">
            <div className="max-w-7xl mx-auto px-margin space-y-space-xl">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-label-sm font-label-sm text-secondary uppercase font-bold tracking-wider">
                  Public Documentation
                </span>
                <h2 className="text-headline-lg font-headline-lg text-primary tracking-tight">
                  {"CA Repository & Legal Artifacts"}
                </h2>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  {" Freely inspect and integrate our Certification Practice Statement (CPS), Certificate Policy (CP), and public root trust anchors. "}
                </p>
              </div>
              {/* Tab Navigation / Interactive Switcher */}
              <div className="flex justify-center border-b border-surface-container">
                <div className="inline-flex gap-2 p-1.5 rounded-xl bg-surface-container-low" id="repo-tabs">
                  <button className="px-space-md py-2 text-label-md font-label-md rounded-lg transition-all bg-primary text-on-primary shadow-sm" id="tab-btn-policy" data-rcfi-onclick="switchRepoTab('policy')">
                    {" Policy & Legal Disclosures "}
                  </button>
                  <button className="px-space-md py-2 text-label-md font-label-md rounded-lg transition-all text-on-surface-variant hover:text-primary" id="tab-btn-roots" data-rcfi-onclick="switchRepoTab('roots')">
                    {" Certificates & Trust Anchors "}
                  </button>
                  <button className="px-space-md py-2 text-label-md font-label-md rounded-lg transition-all text-on-surface-variant hover:text-primary" id="tab-btn-agreements" data-rcfi-onclick="switchRepoTab('agreements')">
                    {" Participant Agreements "}
                  </button>
                </div>
              </div>
              {/* Tab 1: Policy Files */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg" id="tab-content-policy">
                {/* CP Card */}
                <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary-container/20 text-secondary text-label-sm font-label-sm font-bold">
                        Version 2.4
                      </span>
                      <span className="text-label-sm font-label-sm text-on-surface-variant">
                        PDF • 4.2 MB
                      </span>
                    </div>
                    <h3 className="text-title-md font-title-md text-primary">
                      RCFI Certificate Policy (CP)
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      {" Comprehensive statement indicating what certificate usage parameters and legal assurances apply to subscribers and relying parties across civil, financial, and governmental domains. "}
                    </p>
                    <div className="pt-2 text-label-sm font-label-sm text-on-surface-variant">
                      <span className="font-semibold text-primary">
                        SHA-256 Checksum:
                      </span>
                      <code className="block mt-1 p-2 rounded bg-surface-container-low text-primary text-[11px] overflow-x-auto">
                        4a9e5b83cf0415a77b819f201e74a62174c105cb8f9d0c75ee9a3d42fb561219
                      </code>
                    </div>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center justify-between">
                    <span className="text-label-sm font-label-sm text-on-surface-variant">
                      Updated: Jan 2025
                    </span>
                    <button className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md transition-colors" data-rcfi-onclick="simulateDownload('RCFI-Certificate-Policy-v2.4.pdf')">
                      <span className="material-symbols-outlined text-[18px]">
                        download
                      </span>
                      {" Download CP (PDF) "}
                    </button>
                  </div>
                </div>
                {/* CPS Card */}
                <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary-container/20 text-secondary text-label-sm font-label-sm font-bold">
                        Version 2.4
                      </span>
                      <span className="text-label-sm font-label-sm text-on-surface-variant">
                        PDF • 6.8 MB
                      </span>
                    </div>
                    <h3 className="text-title-md font-title-md text-primary">
                      Certification Practice Statement (CPS)
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      {" Technical, physical, and operational disclosures of the practices RCFI employs in issuing, managing, revoking, and renewing public key certificates. "}
                    </p>
                    <div className="pt-2 text-label-sm font-label-sm text-on-surface-variant">
                      <span className="font-semibold text-primary">
                        SHA-256 Checksum:
                      </span>
                      <code className="block mt-1 p-2 rounded bg-surface-container-low text-primary text-[11px] overflow-x-auto">
                        b80362c96ae7756f7ef5e25a62f8546bdf3b5ef29314da4be630dbda2cc3514a
                      </code>
                    </div>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center justify-between">
                    <span className="text-label-sm font-label-sm text-on-surface-variant">
                      Updated: Jan 2025
                    </span>
                    <button className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md transition-colors" data-rcfi-onclick="simulateDownload('RCFI-Certification-Practice-Statement-v2.4.pdf')">
                      <span className="material-symbols-outlined text-[18px]">
                        download
                      </span>
                      {" Download CPS (PDF) "}
                    </button>
                  </div>
                </div>
              </div>
              {/* Tab 2: Root & Intermediate Certificates (Hidden by default) */}
              <div className="hidden space-y-space-md" id="tab-content-roots">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                  {/* Root CA */}
                  <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="px-2.5 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                        Root Level 0
                      </span>
                      <span className="text-secondary font-semibold text-label-sm">
                        4096-bit RSA / SHA-384
                      </span>
                    </div>
                    <h3 className="text-title-md font-title-md text-primary">
                      RCFI Sovereign Root CA G1
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant mt-1">
                      {" Top-level trust anchor recognized under CAK National PKI repository. Valid through 2045. "}
                    </p>
                    <div className="my-4 p-3 rounded bg-surface-container-low text-[12px] font-mono text-on-surface-variant overflow-x-auto space-y-1">
                      <div>
                        <strong>
                          Serial:
                        </strong>
                        {" 4F:92:A0:13:5B:C9:82:11:44:EE"}
                      </div>
                      <div>
                        <strong>
                          Fingerprint (SHA-1):
                        </strong>
                        {" 8A 72 C3 D4 10 99 E1 B2 FA 30"}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <button className="flex-1 py-2 rounded bg-surface-container text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md transition-all text-center" data-rcfi-onclick="simulateDownload('rcfi-root-ca-g1.crt')">
                        {" Download .CRT "}
                      </button>
                      <button className="flex-1 py-2 rounded bg-surface-container text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md transition-all text-center" data-rcfi-onclick="simulateDownload('rcfi-root-ca-g1.pem')">
                        {" Download .PEM "}
                      </button>
                    </div>
                  </div>
                  {/* Intermediate Issuing CA */}
                  <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="px-2.5 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                        Issuing Sub-CA
                      </span>
                      <span className="text-secondary font-semibold text-label-sm">
                        3072-bit RSA / SHA-256
                      </span>
                    </div>
                    <h3 className="text-title-md font-title-md text-primary">
                      RCFI Enterprise Intermediate CA 2024
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant mt-1">
                      {" Direct issuing certification authority for corporate, institutional, and judicial digital signatures. "}
                    </p>
                    <div className="my-4 p-3 rounded bg-surface-container-low text-[12px] font-mono text-on-surface-variant overflow-x-auto space-y-1">
                      <div>
                        <strong>
                          Serial:
                        </strong>
                        {" 1B:77:E5:90:3A:D8:01:4F:99:C2"}
                      </div>
                      <div>
                        <strong>
                          Fingerprint (SHA-1):
                        </strong>
                        {" 3C 51 B9 A0 E7 88 12 F4 90 D5"}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <button className="flex-1 py-2 rounded bg-surface-container text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md transition-all text-center" data-rcfi-onclick="simulateDownload('rcfi-intermediate-ca-2024.crt')">
                        {" Download .CRT "}
                      </button>
                      <button className="flex-1 py-2 rounded bg-surface-container text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md transition-all text-center" data-rcfi-onclick="simulateDownload('rcfi-intermediate-ca-2024.pem')">
                        {" Download .PEM "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tab 3: Participant Agreements (Hidden by default) */}
              <div className="hidden space-y-space-md" id="tab-content-agreements">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                  <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
                    <h3 className="text-title-md font-title-md text-primary">
                      Subscriber Agreement (Terms of Use)
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant mt-2">
                      {" Statutory responsibilities, certificate key custody obligations, and usage boundaries for individuals and organizations issued digital certificates by RCFI. "}
                    </p>
                    <button className="mt-space-md inline-flex items-center gap-2 text-secondary font-semibold text-label-md hover:text-primary" data-rcfi-onclick="simulateDownload('RCFI-Subscriber-Agreement-2025.pdf')">
                      <span className="material-symbols-outlined text-[18px]">
                        picture_as_pdf
                      </span>
                      {" Download Subscriber Agreement (PDF) "}
                    </button>
                  </div>
                  <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
                    <h3 className="text-title-md font-title-md text-primary">
                      Relying Party Agreement (RPA)
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant mt-2">
                      {" Standard legal protections, warranties, and obligations for third-party entities verifying digital signatures generated via RCFI PKI credentials. "}
                    </p>
                    <button className="mt-space-md inline-flex items-center gap-2 text-secondary font-semibold text-label-md hover:text-primary" data-rcfi-onclick="simulateDownload('RCFI-Relying-Party-Agreement-2025.pdf')">
                      <span className="material-symbols-outlined text-[18px]">
                        picture_as_pdf
                      </span>
                      {" Download Relying Party Terms (PDF) "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Real-Time Endpoints & Validation Desk (Interactive Query Zone) */}
          <section className="w-full bg-surface-container py-space-xl" id="endpoints">
            <div className="max-w-7xl mx-auto px-margin space-y-space-lg">
              <div>
                <span className="text-label-sm font-label-sm text-secondary uppercase font-bold tracking-wider">
                  Automated Verification
                </span>
                <h2 className="text-headline-md font-headline-md text-primary mt-1">
                  Live Cryptographic Query Endpoints
                </h2>
                <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl">
                  {" High-availability programmatic interfaces for validation daemons, enterprise firewalls, and document management stacks. "}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
                {/* OCSP Live Card */}
                <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-md space-y-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                      <h3 className="text-title-md font-title-md text-primary">
                        Online Certificate Status Protocol (OCSP)
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-bold">
                      RFC 6960
                    </span>
                  </div>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    {" Zero-latency, real-time revocation verification checking direct X.509 status without downloading heavy revocation registries. "}
                  </p>
                  <div className="space-y-2">
                    <div className="text-label-sm font-label-sm text-on-surface-variant uppercase font-semibold">
                      Production Endpoint
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container font-mono text-[13px] text-primary">
                      <span id="endpoint-ocsp">
                        http://ocsp.rcfi.co.ke
                      </span>
                      <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 font-sans text-label-sm" data-rcfi-onclick="copyToClipboard('http://ocsp.rcfi.co.ke', this)">
                        <span className="material-symbols-outlined text-[16px]">
                          content_copy
                        </span>
                        {" Copy "}
                      </button>
                    </div>
                  </div>
                  <div className="p-3 rounded bg-surface-container-low flex items-center justify-between text-body-md font-body-md text-on-surface-variant">
                    <span>
                      Uptime Commitment
                    </span>
                    <span className="font-semibold text-secondary">
                      99.95% Availability SLA
                    </span>
                  </div>
                </div>
                {/* CRL Distribution Point Card */}
                <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-md space-y-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                      <h3 className="text-title-md font-title-md text-primary">
                        Certificate Revocation List (CRL)
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-bold">
                      RFC 5280
                    </span>
                  </div>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    {" Authoritative, cryptographically signed delta and base revocation lists republished automatically every 60 minutes. "}
                  </p>
                  <div className="space-y-2">
                    <div className="text-label-sm font-label-sm text-on-surface-variant uppercase font-semibold">
                      Distribution Point URL
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container font-mono text-[13px] text-primary">
                      <span id="endpoint-crl">
                        http://crl.rcfi.co.ke/rcfi-ca.crl
                      </span>
                      <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 font-sans text-label-sm" data-rcfi-onclick="copyToClipboard('http://crl.rcfi.co.ke/rcfi-ca.crl', this)">
                        <span className="material-symbols-outlined text-[16px]">
                          content_copy
                        </span>
                        {" Copy "}
                      </button>
                    </div>
                  </div>
                  <div className="p-3 rounded bg-surface-container-low flex items-center justify-between text-body-md font-body-md text-on-surface-variant">
                    <span>
                      Re-issuance Interval
                    </span>
                    <span className="font-semibold text-secondary">
                      Every 60 Minutes Guaranteed
                    </span>
                  </div>
                </div>
              </div>
              {/* Quick Interactive Ping Simulator */}
              <div className="rounded-xl bg-primary text-on-primary p-space-lg shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between gap-space-md">
                  <div className="space-y-1">
                    <div className="text-title-md font-title-md text-on-primary">
                      Live Endpoint Telemetry Check
                    </div>
                    <p className="text-body-md font-body-md text-tertiary-fixed-dim">
                      {" Verify real-time responsiveness of the Nairobi OCSP responder node. "}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-secondary-container text-on-primary-fixed hover:bg-secondary-fixed font-label-md text-label-md transition-all" id="ping-btn" data-rcfi-onclick="runDiagnosticPing()">
                      <span className="material-symbols-outlined text-[18px]">
                        network_ping
                      </span>
                      {" Test OCSP Connection "}
                    </button>
                    <div className="hidden items-center gap-2 px-3 py-1.5 rounded bg-surface-container-lowest/10 text-secondary-fixed text-label-sm font-mono" id="ping-status">
                      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      {" 200 OK • 14ms Latency "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 3: Sovereign Infrastructure & Hardware Security */}
          <section className="w-full bg-surface-container-lowest py-space-xl">
            <div className="max-w-7xl mx-auto px-margin space-y-space-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-6 space-y-space-md">
                  <span className="text-label-sm font-label-sm text-secondary uppercase font-bold tracking-wider">
                    Hardware Integrity
                  </span>
                  <h2 className="text-headline-md font-headline-md text-primary">
                    Sovereignty Built on Dedicated Nairobi Hardware
                  </h2>
                  <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                    {" Unlike foreign cloud signers who process Kenyan identity credentials in offshore jurisdictions, RCFI maintains physical ownership of localized, hardware-isolated infrastructure. Every cryptographic operation adheres to Kenyan national security mandates. "}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-sm">
                    <div className="p-space-md rounded-xl bg-surface-container-low space-y-1">
                      <div className="text-headline-sm font-headline-sm text-primary">
                        FIPS 140-2
                      </div>
                      <div className="text-label-md font-label-md font-bold text-secondary">
                        Level 3 Physical Tamper Seal
                      </div>
                      <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                        {" Cryptographic zeroization triggers if any physical chassis intrusion or thermal attack occurs. "}
                      </p>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low space-y-1">
                      <div className="text-headline-sm font-headline-sm text-primary">
                        24/7 SOC
                      </div>
                      <div className="text-label-md font-label-md font-bold text-secondary">
                        Active Threat Surveillance
                      </div>
                      <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                        {" Real-time SIEM monitoring with dedicated national telecommunications CIRT escalations. "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img className="w-full h-80 object-cover" data-alt="Close up shot of enterprise cryptographic hardware security modules in a modern server room, green status indicator lights, fiber cables, high security telecommunications equipment in Nairobi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTejeMCigIZktaD072wexOCHH2fj8n5jODboRYiKQ64sXv0C6sI2cuXY5PBPknKIIMbimy1q8zDQWACKzzNCmO_co_Q5f4VXWpgsdQ19Q-Lw6JUk87F7kRJV6UqGSytPA_Wx5ZSkDw4rDsVDduulrvS_795grRvJkCUNDFKZJuAFNABo22o_58hjkUVnMP7JiJYxPCTdXcZFDNGyFnxa2jnI_FaNxQkpPKgXJ_ykIXrdCrywHXKnmN" />
                    <div className="absolute inset-0 bg-primary/20" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Trust Audit Escalation / Incident Contact Section */}
          <section className="w-full bg-primary-container text-on-primary py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="rounded-2xl bg-surface-container-lowest/10 p-space-lg md:p-space-xl backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-space-lg">
                <div className="space-y-space-xs max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-secondary-fixed text-label-sm font-label-sm font-bold uppercase">
                    <span className="material-symbols-outlined text-[16px]">
                      security_update_warning
                    </span>
                    {" Certificate Revocation & Vulnerability Reporting "}
                  </div>
                  <h2 className="text-headline-sm font-headline-sm text-on-primary">
                    Suspect a compromised key or signature fraud?
                  </h2>
                  <p className="text-body-md font-body-md text-tertiary-fixed-dim">
                    {" Our Certificate Authority Emergency Desk accepts 24/7 high-priority revocation reports and security advisories under signed PGP channels. "}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-space-sm shrink-0">
                  <a className="inline-flex items-center justify-center gap-2 px-space-md py-3 rounded-lg bg-error text-on-error hover:bg-error-container hover:text-on-error-container font-label-md text-label-md transition-all font-semibold" href="mailto:verify@rcfi.co.ke?subject=High-Priority%20CA%20Revocation%20Request">
                    <span className="material-symbols-outlined text-[18px]">
                      flag
                    </span>
                    {" Emergency Revocation Desk "}
                  </a>
                  <Link className="inline-flex items-center justify-center gap-2 px-space-md py-3 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container font-label-md text-label-md transition-all font-semibold" data-path="verify-document" href="/verify/">
                    {" Validate a Signature "}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-primary text-on-primary pt-16 pb-12 mt-16">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-12 border-b border-tertiary-container">
            <div className="space-y-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary font-bold text-[20px]">
                    verified_user
                  </span>
                </div>
                <span className="font-headline-sm text-headline-sm text-on-primary font-bold">
                  RCFI
                </span>
              </div>
              <p className="font-body-md text-body-md text-tertiary-fixed-dim leading-relaxed">
                Reprodrive Center for Innovation Limited is a licensed Electronic Certification Service Provider (ECSP) delivering cryptographic trust, digital signature infrastructure, and sovereign telecommunications innovation.
              </p>
              <div className="pt-space-xs font-label-sm text-label-sm text-secondary-fixed">
                <p>
                  Communications Authority License:
                </p>
                <p className="font-semibold text-on-primary">
                  TL/E-CSP 00014
                </p>
              </div>
            </div>
            <div className="space-y-space-md">
              <span className="font-title-md text-title-md text-on-primary block">
                Nairobi Headquarters
              </span>
              <div className="space-y-space-xs font-body-md text-body-md text-tertiary-fixed-dim">
                <p className="text-on-primary font-medium">
                  Hifadhi House, 5th Floor
                </p>
                <p>
                  Along ICD Road, Off Mombasa Road
                </p>
                <p>
                  Nairobi, Kenya
                </p>
                <p className="pt-2">
                  P.O. Box 28392 - 00200
                </p>
                <p>
                  {"Email: "}
                  <a className="text-secondary-fixed hover:underline" href="mailto:info@rcfi.co.ke">
                    info@rcfi.co.ke
                  </a>
                </p>
                <p>
                  {"Verification Desk: "}
                  <a className="text-secondary-fixed hover:underline" href="mailto:verify@rcfi.co.ke">
                    verify@rcfi.co.ke
                  </a>
                </p>
              </div>
            </div>
            <div className="space-y-space-md">
              <span className="font-title-md text-title-md text-on-primary block">
                {"Trust & Compliance"}
              </span>
              <ul className="space-y-space-xs font-body-md text-body-md text-tertiary-fixed-dim">
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="trust-center" href="/trust/">
                    Trust Center Overview
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="ca-repository" href="/trust/">
                    Certification Authority Repository
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="certificate-revocation-list" href="/trust/">
                    Certificate Revocation List (CRL)
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="data-protection" href="/privacy/">
                    Kenya DPA Compliance Notice
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="iso-certifications" href="/trust/">
                    ISO/IEC 27001:2022 Registry
                  </Link>
                </li>
                <li>
                  <a className="hover:text-secondary-fixed transition-colors" data-path="security-whitepapers" href="#">
                    {"Security & Architecture Specs"}
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-space-md">
              <span className="font-title-md text-title-md text-on-primary block">
                {"Solutions & Academy"}
              </span>
              <ul className="space-y-space-xs font-body-md text-body-md text-tertiary-fixed-dim">
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="certysign" href="/products/certysign/">
                    CertySign Enterprise e-Signature
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="elano-platform" href="/products/elano/">
                    Elano Identity Verification
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="prezio-cryptography" href="/products/prezio/">
                    {"Prezio HSM & Cryptography"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="academy" href="/academy/">
                    RCFI Technical Academy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="ecosystem" href="/partners/">
                    Pan-African Partner Ecosystem
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="legal" href="/terms/">
                    {"Terms of Service & Legal Notices"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-space-md font-label-sm text-label-sm text-tertiary-fixed-dim">
            <div>
              © 2025 Reprodrive Center for Innovation Limited (RCFI). All rights reserved. Registered in the Republic of Kenya.
            </div>
            <div className="flex items-center gap-space-md">
              <Link className="hover:text-on-primary transition-colors" data-path="legal" href="/terms/">
                Legal Notice
              </Link>
              <span className="text-tertiary-container">
                •
              </span>
              <Link className="hover:text-on-primary transition-colors" data-path="privacy-policy" href="/privacy/">
                Privacy Policy
              </Link>
              <span className="text-tertiary-container">
                •
              </span>
              <Link className="hover:text-on-primary transition-colors" data-path="ca-repository" href="/trust/">
                {"CPS & CP Repo"}
              </Link>
              <span className="text-tertiary-container">
                •
              </span>
              <Link className="text-secondary-fixed hover:underline" data-path="verify-document" href="/verify/">
                Validator Portal
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <PageScripts scripts={scripts} />
    </div>
  );
}
