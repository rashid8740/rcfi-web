import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/partners-intellisoft/page.css";
import "@/styles/pages/partners-intellisoft/late.css";

export const metadata: Metadata = { title: "Intellisoft Consulting Partnership | RCFI Technology" };

export default function PartnersIntellisoftPage() {
  return (
    <div className="rcfi-partners-intellisoft" style={{ display: "contents" }}>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <div className="bg-primary-container text-on-primary h-10 px-margin flex items-center justify-between border-b border-outline/20">
          <div className="flex items-center gap-space-md font-label-sm text-label-sm tracking-wide">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                call
              </span>
              <a className="hover:text-secondary-fixed transition-colors" href="tel:+254202839200">
                +254 (0) 20 283 9200
              </a>
            </div>
            <span className="text-outline-variant">
              |
            </span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                mail
              </span>
              <a className="hover:text-secondary-fixed transition-colors" href="mailto:info@rcfi.co.ke">
                info@rcfi.co.ke
              </a>
            </div>
            <span className="hidden lg:inline text-outline-variant">
              |
            </span>
            <div className="hidden lg:flex items-center gap-2 bg-primary/40 px-2.5 py-0.5 rounded-full border border-secondary/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-fixed" />
              </span>
              <span className="text-secondary-fixed font-semibold">
                {"Accredited & CAK Licensed ECSP (TL/E-CSP 00014)"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-md font-label-sm text-label-sm">
            <Link className="hover:text-secondary-fixed transition-colors" data-path="ca-repository" href="/trust/">
              CA Repository
            </Link>
            <span className="text-outline-variant">
              |
            </span>
            <Link className="hover:text-secondary-fixed transition-colors" data-path="trust-center" href="/trust/">
              Trust Center
            </Link>
            <span className="text-outline-variant">
              |
            </span>
            <span className="text-on-primary-container hidden sm:inline">
              Kenya DPA Compliant
            </span>
          </div>
        </div>
        <div className="bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-margin h-16 flex items-center justify-between">
            <div className="flex items-center gap-space-lg">
              <Link className="flex items-center gap-3 py-1" data-path="home" href="/">
                <img alt="RCFI Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm font-bold text-primary leading-none tracking-tight">
                    RCFI
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant leading-tight tracking-wider uppercase">
                    Reprodrive Center for Innovation
                  </span>
                </div>
              </Link>
              <nav className="hidden xl:flex items-center gap-6 font-body-md text-body-md" data-active-classes="text-secondary font-semibold relative after:content-[''] after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-[2px] after:bg-secondary">
                <Link className="text-on-surface-variant hover:text-primary transition-colors py-2" data-path="services" href="/services/">
                  Services
                </Link>
                <Link className="text-on-surface-variant hover:text-primary transition-colors py-2" data-path="products" href="/products/certysign/">
                  Products
                </Link>
                <Link className="text-on-surface-variant hover:text-primary transition-colors py-2" data-path="academy" href="/academy/">
                  Academy
                </Link>
                <Link className="text-on-surface-variant hover:text-primary transition-colors py-2" data-path="partners-ecosystem" href="/partners/">
                  {"Partners & Ecosystem"}
                </Link>
                <Link className="text-on-surface-variant hover:text-primary transition-colors py-2" data-path="insights" href="/insights/">
                  Insights
                </Link>
                <Link className="text-on-surface-variant hover:text-primary transition-colors py-2" data-path="company" href="/about/">
                  Company
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-space-sm">
              <Link className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-outline-variant font-label-md text-label-md text-primary hover:bg-surface-container-low transition-colors" data-path="document-verification" href="/verify/">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  verified
                </span>
                <span>
                  Verify a Document
                </span>
              </Link>
              <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm" data-path="book-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-1">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-[104px] bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Top Meta Ribbon / Context Stripe */}
          <div className="w-full bg-surface-container-low py-space-sm">
            <div className="max-w-7xl mx-auto px-margin flex flex-wrap items-center justify-between gap-space-sm font-label-sm text-label-sm">
              <nav className="flex items-center gap-2 text-on-surface-variant">
                <Link className="hover:text-primary transition-colors" data-path="home" href="/">
                  Home
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <Link className="hover:text-primary transition-colors" data-path="partners-ecosystem" href="/partners/">
                  {"Partners & Ecosystem"}
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <span className="text-primary font-semibold">
                  IntelliSOFT Consulting
                </span>
              </nav>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[14px]">
                    verified_user
                  </span>
                  {" OpenHIE Certified Integration "}
                </span>
                <span className="text-outline-variant hidden sm:inline">
                  •
                </span>
                <span className="text-on-surface-variant font-medium hidden sm:inline">
                  ECSP Interoperability Protocol 4.2
                </span>
              </div>
            </div>
          </div>
          {/* Hero Header Section */}
          <section className="w-full bg-surface py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                <div className="lg:col-span-8 flex flex-col gap-space-sm">
                  <div className="inline-flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary-container text-secondary-fixed font-label-sm text-label-sm tracking-widest uppercase">
                      {" // ECOSYSTEM SUBPAGE // STRATEGIC DIGITAL HEALTH INTEGRATOR "}
                    </span>
                  </div>
                  <h1 className="font-display-lg text-display-lg text-primary tracking-tight">
                    {" IntelliSOFT Consulting & RCFI "}
                  </h1>
                  <p className="font-headline-sm text-headline-sm text-on-surface-variant max-w-3xl leading-relaxed">
                    {" Co-engineering Africa's most trusted, scalable open-source clinical systems and cryptographically verified digital health backbones. "}
                  </p>
                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        hub
                      </span>
                      <span className="font-label-md text-label-md text-on-surface">
                        OpenMRS / KenyaEMR Native
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        lock
                      </span>
                      <span className="font-label-md text-label-md text-on-surface">
                        Hardware Security Module Backed
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        fact_check
                      </span>
                      <span className="font-label-md text-label-md text-on-surface">
                        DPA 2019 Qualified Audit
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-space-sm">
                  <div className="bg-primary text-on-primary p-space-md rounded-xl shadow-md relative overflow-hidden">
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-secondary/20 blur-xl" />
                    <div className="flex items-center justify-between mb-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider">
                        Alliance Metric
                      </span>
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                        verified
                      </span>
                    </div>
                    <div className="font-display-lg text-display-lg text-secondary-fixed font-extrabold tracking-tight">
                      2.8M+
                    </div>
                    <p className="font-body-md text-body-md text-on-primary-container mt-1">
                      Clinical encounters cryptographically stamped via zero-latency HSM bridge across public health nodes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 1 & Section 2: Split Overview & Strategic Relationship */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                {/* Section 1: WHO THEY ARE */}
                <div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">
                        {" 01. Partner Profile "}
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">
                        Pan-African Clinical Lead
                      </span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
                      Who They Are
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                      {" IntelliSOFT Consulting is an established pan-African digital health engineering firm with more than 15 years of proven leadership implementing clinical architectures, OpenHIE frameworks, and electronic medical record systems across the continent. Serving ministries of health, WHO, CDC, and regional development partners, IntelliSOFT designs and deploys mission-critical healthcare informatics at national scale. "}
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md rounded-b-xl flex items-center gap-space-md">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        medical_services
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-primary font-semibold">
                        15+ Years Track Record
                      </span>
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        {"Kenya, Uganda, Tanzania, Rwanda & Global Health NGO Deployments"}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Section 2: THE RELATIONSHIP */}
                <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-primary text-secondary-fixed font-label-sm text-label-sm">
                        {" 02. Institutional Relationship "}
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary font-semibold">
                        Live Production Matrix
                      </span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
                      {" Strategic Technology & Implementation Co-Engineering Alliance for Secure Clinical Fabrics "}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" RCFI and IntelliSOFT co-engineer the cryptographic and digital identity layer directly into OpenHIE-compliant health applications, OpenMRS, and KenyaEMR deployments. While IntelliSOFT architects clinical data flows, terminology mediation, and hospital operational workflows, RCFI embeds automated CAK-licensed digital signatures, mTLS zero-trust communication channels, and secure document timestamping into IntelliSOFT's interoperability bridges. Together, the two organizations deliver turnkey national digital health platforms that bridge clinical utility and sovereign cryptographic compliance. "}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm mt-space-md">
                    <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-primary">
                        <span className="material-symbols-outlined text-[18px] text-secondary">
                          domain
                        </span>
                        <span className="font-title-md text-title-md font-semibold">
                          IntelliSOFT Scope
                        </span>
                      </div>
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        Clinical UX, HL7/FHIR Mediators, OpenMRS Modules, Facility Workflow Orchestration.
                      </span>
                    </div>
                    <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-primary">
                        <span className="material-symbols-outlined text-[18px] text-secondary">
                          encrypted
                        </span>
                        <span className="font-title-md text-title-md font-semibold">
                          RCFI Scope
                        </span>
                      </div>
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        Qualified Trust Anchor, CAK Root Verification, HSM Key Generation, RFC 3161 Timestamping.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 3: WHAT IT MEANS FOR CLIENTS */}
          <section className="w-full bg-surface py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="bg-primary text-on-primary rounded-xl p-space-lg shadow-md relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                  <div className="lg:col-span-8 flex flex-col gap-space-sm">
                    <div className="inline-flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-secondary/20 text-secondary-fixed font-label-sm text-label-sm tracking-wider uppercase">
                        {" 03. Client Impact & Value Delivery "}
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
                      {" Pre-Certified Sovereign Digital Health Infrastructures "}
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                      {" For health ministries, development consortiums, and national health authorities, this partnership eliminates the traditional tension between clinical software agility and statutory regulatory compliance. Clients obtain fully deployed, field-tested electronic medical record and health information exchange architectures that come pre-certified for national data protection laws, cross-border privacy covenants, and qualified electronic signature mandates—drastically reducing procurement overhead, deployment time, and post-deployment audit vulnerabilities. "}
                    </p>
                  </div>
                  <div className="lg:col-span-4 flex flex-col gap-space-sm">
                    <div className="bg-primary-container p-space-md rounded-xl flex flex-col gap-space-sm shadow-sm">
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary-fixed text-[24px]">
                          verified
                        </span>
                        <div>
                          <h4 className="font-title-md text-title-md text-on-primary font-semibold">
                            Zero Procurement Drift
                          </h4>
                          <p className="font-body-md text-body-md text-on-primary-container">
                            Avoid piecemeal vendor contracts for security layers, encryption keys, and CA licensure.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary-fixed text-[24px]">
                          policy
                        </span>
                        <div>
                          <h4 className="font-title-md text-title-md text-on-primary font-semibold">
                            Statutory Compliance Ready
                          </h4>
                          <p className="font-body-md text-body-md text-on-primary-container">
                            Pre-aligned to the Kenya Data Protection Act 2019 and East Africa Community health treaties.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary-fixed text-[24px]">
                          speed
                        </span>
                        <div>
                          <h4 className="font-title-md text-title-md text-on-primary font-semibold">
                            Rapid Facility Onboarding
                          </h4>
                          <p className="font-body-md text-body-md text-on-primary-container">
                            Turnkey E-Sign connectors pre-integrated for instant hospital-wide deployment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Visual Break: Field Realism & Architecture Context */}
          <section className="w-full bg-surface-container-low py-space-lg">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
                  <img className="w-full h-44 object-cover" data-alt="A modern hospital electronic medical record workstation in Nairobi Kenya showing healthcare clinicians viewing verified digital records on clean monitors with soft natural lighting and institutional green accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAweonM4HueHeMndhu1OQ7uPP-qE39DCzN-GN0ePIYf_dnyJEWqh-ZYEVdY9EFPlbBYSSaaWKkX3aETupMW4iYYe-X5aUIRkg9mp-86z_FKU5h7Pq4AbqgCg_WxprieXOzvhW6p1YFW3GJUIRH1KvqVXMuBdYXgeFRmao96leZAbEPekFzwcJHFY0H_YcxUiMkpEBOmd1vJZFiT1cTQd4t-gPE4sQt_PEJAXDSsH-XKS47wePHW96gK" />
                  <div className="p-space-sm flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">
                      CLINICAL TOUCHPOINT
                    </span>
                    <p className="font-title-md text-title-md text-primary font-semibold">
                      County Referral Hospital Point-of-Care
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Clinicians sign patient summaries in 180ms with embedded CertySign cryptographic keys.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
                  <img className="w-full h-44 object-cover" data-alt="A secure enterprise data center server rack housing high security HSM cryptographic appliances with emerald green LED indicator lights and fiber optic cabling." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkuuPOG5xW58aqQe2tyZD5wrVY6fPxRq7zusuUaijQv3jPAq34wIKEdmnxshGvfkj2eeTupbb2PUtaHabw9UxNMi94F6iwbktgCUaTkefG8n3dAuibDOpuzoPbIpLnYpBPlfDP4VdDWWylXObQBkAWYzQIBovEmUYk0qFmN9RCbQwg5I-YTTXwSwtWMo1M-xQI0VC8PCZs0gZx7W9EsFDHl4cjL4d-mXvkBZoWS-31Dt8MBpOyTP9T" />
                  <div className="p-space-sm flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">
                      SOVEREIGN TRUST VAULT
                    </span>
                    <p className="font-title-md text-title-md text-primary font-semibold">
                      FIPS 140-2 Level 3 HSM Enclave
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      All signatures anchored to CAK-licensed root certificates within Kenya's sovereign perimeter.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
                  <img className="w-full h-44 object-cover" data-alt="Two African health informatics engineers collaborating over architecture schematics and code on a terminal screen in an enterprise tech innovation lab." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-pnd-gJHxL8hyG6K2j1z1MyLH4wUOfQlL9aqjKAa9WRF_HW78T6MR03IKl4vYf2qNvPUvtsdfgy5ROaggoxQck2DnjntybHqv2oYJFcLcfXgCOVEIuPnHFVVU_kkcQvypLekMIR_DN3iX0o9Ebi_zCNokVZ9K60ZT3S5oLkgfY5Q-tsSSczqoPz9XgqcEdYDg0Ej2XiSQbxxfAkx8axfreK55rNH37ew-Lme975dpY-f5vWNrkT_7" />
                  <div className="p-space-sm flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">
                      CO-ENGINEERING COLLABORATIVE
                    </span>
                    <p className="font-title-md text-title-md text-primary font-semibold">
                      Joint Interoperability Lab
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Continuous integration pipeline testing FHIR resource signing across OpenHIM channels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 4: PROOF OR ARTEFACT + INTERACTIVE TRACE */}
          <section className="w-full bg-surface py-space-xl">
            <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-lg">
              <div className="flex flex-col gap-space-xs max-w-3xl">
                <span className="px-2.5 py-1 w-fit rounded-full bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                  {" 04. Technical Artefact & Deployment Proof "}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  {" The OpenHIE Cryptographic Interoperability Layer & KenyaEMR E-Sign Connector "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {" Successfully deployed in primary clinical sites, this production connector enables clinicians to digitally sign electronic patient summaries and prescription batches directly inside the KenyaEMR user interface using RCFI's CertySign PKI infrastructure. Over 2.8 million clinical encounters have been cryptographically stamped with zero latency degradation for front-line healthcare workers. "}
                </p>
              </div>
              {/* Interactive Component: Clinical Workflow & Cryptographic Signature Trace */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col gap-space-md">
                <div className="flex flex-wrap items-center justify-between gap-space-sm">
                  <div>
                    <h3 className="font-title-md text-title-md text-primary font-bold">
                      {" Interactive Execution Trace: Patient Encounter to Verifiable FHIR Record "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Click any stage in the cryptographic trace pipeline to inspect latency, data integrity payloads, and compliance protocols. "}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all flex items-center gap-1.5 shadow-sm" id="btn-simulate-trace">
                      <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                        play_circle
                      </span>
                      {" Simulate Live Encounter "}
                    </button>
                    <span className="px-2.5 py-1 bg-surface-container text-primary font-label-sm text-label-sm rounded-full" id="trace-status-badge">
                      {" Status: Idle "}
                    </span>
                  </div>
                </div>
                {/* Process Pipeline Flow */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-space-sm pt-space-xs">
                  {/* Step 1 */}
                  <div className="step-card cursor-pointer p-space-md rounded-xl bg-surface-container-low transition-all" id="step-card-1" data-rcfi-onclick="selectStep(1)">
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-7 h-7 rounded-full bg-primary text-secondary-fixed font-label-sm text-label-sm flex items-center justify-center font-bold">
                        01
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        monitor_heart
                      </span>
                    </div>
                    <h4 className="font-title-md text-title-md text-primary font-semibold">
                      EMR Interface
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      Clinician signs Encounter in KenyaEMR / OpenMRS UI.
                    </p>
                    <div className="mt-3 font-label-sm text-label-sm text-outline">
                      Payload: JSON / FHIR Bundle
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="step-card cursor-pointer p-space-md rounded-xl bg-surface-container-low transition-all" id="step-card-2" data-rcfi-onclick="selectStep(2)">
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-7 h-7 rounded-full bg-primary text-secondary-fixed font-label-sm text-label-sm flex items-center justify-center font-bold">
                        02
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        sync_alt
                      </span>
                    </div>
                    <h4 className="font-title-md text-title-md text-primary font-semibold">
                      OpenHIM Bridge
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      Interoperability mediator authenticates mTLS channel.
                    </p>
                    <div className="mt-3 font-label-sm text-label-sm text-outline">
                      Auth: Mutual TLS + OAuth2
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="step-card cursor-pointer p-space-md rounded-xl bg-surface-container-low transition-all" id="step-card-3" data-rcfi-onclick="selectStep(3)">
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-7 h-7 rounded-full bg-primary text-secondary-fixed font-label-sm text-label-sm flex items-center justify-center font-bold">
                        03
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        security
                      </span>
                    </div>
                    <h4 className="font-title-md text-title-md text-primary font-semibold">
                      RCFI HSM Signer
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      FIPS 140-2 Level 3 HSM stamps cryptographic signature.
                    </p>
                    <div className="mt-3 font-label-sm text-label-sm text-outline">
                      CA: CAK Root TL/E-CSP 00014
                    </div>
                  </div>
                  {/* Step 4 */}
                  <div className="step-card cursor-pointer p-space-md rounded-xl bg-surface-container-low transition-all" id="step-card-4" data-rcfi-onclick="selectStep(4)">
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-7 h-7 rounded-full bg-primary text-secondary-fixed font-label-sm text-label-sm flex items-center justify-center font-bold">
                        04
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        verified
                      </span>
                    </div>
                    <h4 className="font-title-md text-title-md text-primary font-semibold">
                      Verifiable Record
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      RFC 3161 Timestamped FHIR Resource stored in Trust Vault.
                    </p>
                    <div className="mt-3 font-label-sm text-label-sm text-outline">
                      Audit: Non-Repudiable Evidence
                    </div>
                  </div>
                </div>
                {/* Detail Inspector Panel */}
                <div className="bg-primary text-on-primary p-space-md rounded-xl transition-all shadow-inner" id="trace-detail-panel">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary-fixed text-[20px]" id="detail-icon">
                        monitor_heart
                      </span>
                      <span className="font-title-md text-title-md text-secondary-fixed font-bold" id="detail-title">
                        Phase 01: KenyaEMR Clinician Encounter Creation
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded bg-primary-container text-on-primary-container" id="detail-latency">
                      Processing Latency: ~42ms
                    </span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md mt-space-xs text-body-md font-body-md">
                    <div className="lg:col-span-7 text-on-primary-container leading-relaxed" id="detail-desc">
                      {" The attending physician or nurse finishes documentation in KenyaEMR's web console. Upon clicking 'Finalize Encounter', the frontend serializes the encounter bundle and invokes the CertySign JavaScript SDK extension embedded into the OpenMRS browser context. No specialized smartcards are required; user credential authorization is performed via biometric or institutional OAuth. "}
                    </div>
                    <div className="lg:col-span-5 bg-tertiary-container p-space-sm rounded-lg flex flex-col justify-center font-label-sm text-label-sm">
                      <div className="text-secondary-fixed font-semibold pb-1">
                        Cryptographic Telemetry:
                      </div>
                      <div className="text-on-tertiary-container font-mono space-y-1">
                        <div>
                          Hash Algorithm: SHA-256 (EncounterDigest)
                        </div>
                        <div>
                          Payload Type: FHIR R4 Bundle (DocumentReference)
                        </div>
                        <div>
                          Transport: WSS / TLS 1.3 Strict Cipher
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Performance / Field Benchmarks Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-xs text-center">
                  <div className="p-space-sm bg-surface-container-low rounded-lg">
                    <div className="font-title-md text-title-md text-primary font-bold">
                      186ms
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Round-Trip Signature Time
                    </div>
                  </div>
                  <div className="p-space-sm bg-surface-container-low rounded-lg">
                    <div className="font-title-md text-title-md text-primary font-bold">
                      99.995%
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      HSM Bridge Uptime SLA
                    </div>
                  </div>
                  <div className="p-space-sm bg-surface-container-low rounded-lg">
                    <div className="font-title-md text-title-md text-primary font-bold">
                      RFC 3161
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Synchronized Atomic Clock
                    </div>
                  </div>
                  <div className="p-space-sm bg-surface-container-low rounded-lg">
                    <div className="font-title-md text-title-md text-primary font-bold">
                      Zero
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Workflow Interruption Count
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 5: CTA & PROJECT INTAKE FORM */}
          <section className="w-full bg-surface-container py-space-xl">
            <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-xl">
              {/* Section CTA Intro Header */}
              <div className="max-w-3xl flex flex-col gap-space-xs">
                <span className="px-2.5 py-1 w-fit rounded-full bg-primary text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider">
                  {" 05. Collaborative Engagement "}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  {" Accelerate Your National Digital Health Deployment "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {" Engage our joint clinical informatics and cryptographic engineering teams to architect, deploy, and assure your health data ecosystem. "}
                </p>
                <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                  <a className="px-6 py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm flex items-center gap-2" href="#intake-form">
                    <span>
                      Request Joint Healthcare Consultation
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </a>
                  <button className="px-6 py-3 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm flex items-center gap-2" data-rcfi-onclick={"alert('Downloading OpenHIE & RCFI Reference Blueprints Package (PDF + FHIR Architecture Specs)...')"}>
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      file_download
                    </span>
                    <span>
                      Explore OpenHIE Reference Blueprints
                    </span>
                  </button>
                </div>
              </div>
              {/* Dedicated Project Intake Form */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg bg-surface-container-lowest rounded-xl p-space-lg shadow-md" id="intake-form">
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                      {" Health Organization & NGO Intake "}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-primary tracking-tight">
                      {" Scope Your Health Data Architecture "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Whether you are executing a national EMR rollout, an institutional OpenHIE exchange, or securing cross-border disease surveillance pipelines, our combined engineering desk handles both clinical workflow design and CAK statutory compliance. "}
                    </p>
                    <div className="flex flex-col gap-3 pt-2">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          check_circle
                        </span>
                        <span className="font-body-md text-body-md text-on-surface">
                          Integrated OpenMRS / KenyaEMR deployment roadmap
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          check_circle
                        </span>
                        <span className="font-body-md text-body-md text-on-surface">
                          {"Hardware Security Module sizing & key ceremony design"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          check_circle
                        </span>
                        <span className="font-body-md text-body-md text-on-surface">
                          Kenya DPA Section 31 Compliance Impact Assessment
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          check_circle
                        </span>
                        <span className="font-body-md text-body-md text-on-surface">
                          Joint service desk with SLA-backed technical response
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-md p-space-sm bg-surface-container-low rounded-lg flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      support_agent
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                        Direct Intake Coordination
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        ecsp-health@rcfi.co.ke | +254 (0) 20 283 9200
                      </span>
                    </div>
                  </div>
                </div>
                {/* Form Elements */}
                <div className="lg:col-span-7 bg-surface p-space-md rounded-xl shadow-inner">
                  <form className="flex flex-col gap-space-sm" id="health-intake-form" data-rcfi-onsubmit="event.preventDefault(); handleFormSubmit();">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="intake-name">
                          Lead Architect / Project Sponsor *
                        </label>
                        <input className="w-full h-11 px-3 bg-surface-container-lowest text-on-surface rounded-lg outline-none focus:bg-surface-container-lowest" id="intake-name" placeholder="Dr. Jane Mutua" required type="text" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="intake-org">
                          Organization / Agency *
                        </label>
                        <input className="w-full h-11 px-3 bg-surface-container-lowest text-on-surface rounded-lg outline-none focus:bg-surface-container-lowest" id="intake-org" placeholder="Ministry of Health / WHO Partner" required type="text" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="intake-email">
                          Institutional Email *
                        </label>
                        <input className="w-full h-11 px-3 bg-surface-container-lowest text-on-surface rounded-lg outline-none focus:bg-surface-container-lowest" id="intake-email" placeholder="j.mutua@health.go.ke" required type="email" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="intake-phone">
                          Direct Phone / WhatsApp
                        </label>
                        <input className="w-full h-11 px-3 bg-surface-container-lowest text-on-surface rounded-lg outline-none focus:bg-surface-container-lowest" id="intake-phone" placeholder="+254 700 000 000" type="tel" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="intake-nature">
                          Program Nature
                        </label>
                        <select className="w-full h-11 px-3 bg-surface-container-lowest text-on-surface rounded-lg outline-none" id="intake-nature">
                          <option value="national-emr">
                            National EMR Scaled Rollout
                          </option>
                          <option value="openhie-exchange">
                            OpenHIE Health Information Exchange
                          </option>
                          <option value="prescriptions">
                            {"Electronic Prescriptions & Digital Signatures"}
                          </option>
                          <option value="dpa-audit">
                            DPA 2019 / Regulatory Security Audit
                          </option>
                          <option value="donor-consortium">
                            Global Fund / CDC Sponsored Program
                          </option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="intake-scope">
                          Estimated Health Facilities
                        </label>
                        <select className="w-full h-11 px-3 bg-surface-container-lowest text-on-surface rounded-lg outline-none" id="intake-scope">
                          <option value="pilot">
                            1 - 10 Facilities (Pilot / Demonstration)
                          </option>
                          <option value="county">
                            11 - 50 Facilities (County Level)
                          </option>
                          <option value="regional">
                            51 - 250 Facilities (Regional Network)
                          </option>
                          <option value="national">
                            250+ Facilities (National Backbone)
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="intake-details">
                        {"System Requirements & Interoperability Context"}
                      </label>
                      <textarea className="w-full p-3 bg-surface-container-lowest text-on-surface rounded-lg outline-none" id="intake-details" placeholder="Briefly outline your EMR distribution (e.g., KenyaEMR 18.x), target timeline, and specific cryptographic signature requirements..." rows={3} defaultValue="" />
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <input className="w-4 h-4 rounded text-secondary focus:ring-0" id="intake-nda" type="checkbox" />
                      <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="intake-nda">
                        {" Request Mutual Non-Disclosure Agreement (NDA) prior to preliminary technical exchange. "}
                      </label>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <div className="font-label-sm text-label-sm text-outline flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">
                          lock
                        </span>
                        <span>
                          Protected by RCFI PKI encryption
                        </span>
                      </div>
                      <button className="px-6 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm flex items-center gap-2" type="submit">
                        <span>
                          Submit Intake Brief
                        </span>
                        <span className="material-symbols-outlined text-[18px]">
                          send
                        </span>
                      </button>
                    </div>
                    <div className="hidden p-space-sm bg-surface-container text-primary rounded-lg font-body-md text-body-md items-center gap-2" id="form-success-banner">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        check_circle
                      </span>
                      {" "}
                      <span>
                        Intake brief received. The Joint IntelliSOFT–RCFI Engineering Secretariat will contact you within 24 hours.
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* Script for Interactive Pipeline & Form Feedback */}
        </div>
      </main>
      <footer className="w-full bg-[#041f15] text-on-primary border-t border-primary">
        <div className="max-w-7xl mx-auto px-margin pt-space-xl pb-space-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-lg">
            <div className="lg:col-span-1 flex flex-col gap-space-sm">
              <div className="flex items-center gap-2">
                <span className="font-headline-md text-headline-md text-secondary-fixed font-bold tracking-tight">
                  RCFI
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                Reprodrive Center for Innovation Limited is a licensed Electronic Certification Service Provider (ECSP) anchoring sovereign digital trust across Africa.
              </p>
              <div className="flex flex-col gap-1 pt-2 font-label-sm text-label-sm text-outline-variant">
                <span>
                  CAK License: TL/E-CSP 00014
                </span>
                <span>
                  ISO 27001 Certified Infrastructure
                </span>
                <span>
                  Kenya Data Protection Act Compliant
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h3 className="font-title-md text-title-md text-secondary-fixed font-semibold">
                {"Practices & Services"}
              </h3>
              <ul className="flex flex-col gap-2 font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="pki-digital-trust" href="/services/digital-trust-pki/">
                    {"PKI & Digital Trust Infrastructure"}
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="regulatory-consultancy" href="/services/cybersecurity-assurance/">
                    Regulatory Cybersecurity Advisory
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="cloud-sovereignty" href="/services/digital-cloud-engineering/">
                    Sovereign Cloud Architectures
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <a data-path="identity-verification" href="#">
                    Biometric e-KYC Validation
                  </a>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <a data-path="enterprise-integration" href="#">
                    Enterprise API Integration
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h3 className="font-title-md text-title-md text-secondary-fixed font-semibold">
                Sovereign Platforms
              </h3>
              <ul className="flex flex-col gap-2 font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="certysign-platform" href="/products/certysign/">
                    CertySign Document Signer
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="elano-platform" href="/products/elano/">
                    Elano Trust Gateway
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="prezio-platform" href="/products/prezio/">
                    Prezio Institutional Vault
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="tsa-timestamping" href="/trust/">
                    RCFI Time-Stamping Authority
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <a data-path="hardware-security-modules" href="#">
                    Kenya National Root Integration
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h3 className="font-title-md text-title-md text-secondary-fixed font-semibold">
                {"Academy & Insights"}
              </h3>
              <ul className="flex flex-col gap-2 font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="academy-curriculum" href="/academy/digital-trust-cyber/">
                    {"Cybersecurity & Cryptography Academy"}
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="certification-tracks" href="/academy/executive-briefings/">
                    Executive Security Certification
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="insights-whitepapers" href="/insights/">
                    {"Research & Regulatory Whitepapers"}
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="press-media" href="/insights/">
                    Corporate Announcements
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <a data-path="developer-docs" href="#">
                    {"Developer Hub & SDKs"}
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h3 className="font-title-md text-title-md text-secondary-fixed font-semibold">
                {"Trust & Compliance"}
              </h3>
              <ul className="flex flex-col gap-2 font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="ca-repository" href="/trust/">
                    {"CA Public Repository & CRL"}
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="trust-center" href="/trust/">
                    Digital Trust Security Center
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="privacy-notice" href="/privacy/">
                    Kenya DPA Privacy Notice
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="terms-of-service" href="/trust/">
                    Certification Practice Statement
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="vulnerability-disclosure" href="/trust/">
                    Vulnerability Disclosure Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-space-lg pt-space-md border-t border-primary/40 flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-primary-container">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <span className="font-medium text-on-primary">
                RCFI Headquarters:
              </span>
              <span>
                5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                © 2025 RCFI Limited. All rights reserved.
              </span>
              <Link className="hover:text-secondary-fixed transition-colors" data-path="legal-statutory" href="/terms/">
                Statutory Notices
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <PageScripts scripts={scripts} />
    </div>
  );
}
