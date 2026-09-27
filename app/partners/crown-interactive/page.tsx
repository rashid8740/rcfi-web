import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/partners-crown-interactive/page.css";
import "@/styles/pages/partners-crown-interactive/late.css";

export const metadata: Metadata = { title: "Crown Interactive Partnership | RCFI Technology" };

export default function PartnersCrownInteractivePage() {
  return (
    <div className="rcfi-partners-crown-interactive" style={{ display: "contents" }}>
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
          <div className="w-full bg-surface-container-low py-4 px-margin">
            <div className="max-w-7xl mx-auto flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
              <Link className="hover:text-primary transition-colors" data-path="home" href="/">
                Home
              </Link>
              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>
              <Link className="hover:text-primary transition-colors" data-path="partners-ecosystem" href="/partners/">
                {"Partners & Ecosystem"}
              </Link>
              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>
              <span className="text-primary font-semibold">
                Crown Interactive
              </span>
            </div>
          </div>
          <section className="w-full bg-surface py-space-xl px-margin relative overflow-hidden">
            <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold tracking-wider uppercase shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  {" // ECOSYSTEM SUBPAGE // PUBLIC SECTOR & WORKFLOW AUTOMATION "}
                </div>
                <h1 className="font-display-lg text-display-lg text-primary tracking-tight font-extrabold">
                  {" Crown Interactive & RCFI "}
                </h1>
                <p className="font-headline-sm text-headline-sm text-on-surface-variant font-normal leading-relaxed">
                  {" High-volume digital workflow orchestration, municipal revenue assurance, and legally verifiable civic processes across African governments. "}
                </p>
                <div className="flex flex-wrap gap-space-md pt-2">
                  <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-lg text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                      assured_workload
                    </span>
                    <span className="font-label-md text-label-md font-medium">
                      Public Sector Automation
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-lg text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                      gavel
                    </span>
                    <span className="font-label-md text-label-md font-medium">
                      KICA § 83C Legal Enforceability
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-lg text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                      security
                    </span>
                    <span className="font-label-md text-label-md font-medium">
                      Qualified e-Seals
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-space-sm bg-surface-container-lowest p-space-md rounded-xl shadow-md">
                <div className="flex items-center justify-between pb-3 border-b-0">
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">
                    Alliance Mandate
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-label-sm font-semibold bg-primary-container text-on-primary">
                    ACTIVE DEPLOYMENT
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-surface-container-low p-3 rounded-lg flex flex-col">
                    <span className="font-display-lg text-headline-md font-bold text-primary leading-tight">
                      450/m
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Sealing Velocity
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-lg flex flex-col">
                    <span className="font-display-lg text-headline-md font-bold text-secondary leading-tight">
                      100%
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Court Admissibility
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-lg flex flex-col">
                    <span className="font-display-lg text-headline-md font-bold text-primary leading-tight">
                      0%
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Permit Forgery
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-lg flex flex-col">
                    <span className="font-display-lg text-headline-md font-bold text-secondary leading-tight">
                      Sec. 83C
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Statutory Alignment
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-lowest py-space-xl px-margin">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img className="w-full h-80 object-cover" data-alt="Modern municipal digital operations control center in an African government headquarters. Professional engineers and civic administrators in tailored attire review digital citizen workflow maps and real-time revenue assurance dashboards displayed on multi-panel ultra-wide monitors, bathed in deep pine greens and mint neon highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM-oKLOo7Z8ZszRX6SMB19bPJbx22pDqNo56Wt5krsQ7_v4DXjF7y9MyRLtEhEbQ1CkN5_qgacZgDNaVNwsoPyN9jDkdbw--HqQW3P5eV0UOtB5q3spmRNmTn4EsEn0AfL_lxDzmQcyEqwxc9ZcDd4AabkYRSE3_Ek3HmC059Eq-Z0iwRyt_R8PEJquDLNt9-ccNraqCFMWE8fE0t_goC3GI6tV0X3ZxjO3ZJiXsOtCxMMQ1YqEvaD" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-on-primary">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
                      Partner Identity
                    </span>
                    <p className="font-headline-sm text-headline-sm font-bold">
                      Crown Interactive Platform Ops
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-space-sm">
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-secondary">
                    // 01 WHO THEY ARE
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                  {" Civic Delivery & Enterprise Utility Automation Leaders "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  {" Crown Interactive is a premier African enterprise and public-sector platform delivery specialist focused on automating complex public administration, municipal services, and utility billing operations. Their high-capacity software platforms power digital governance, citizen self-service portals, and transaction auditing for leading public institutions and regulated utilities. "}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  <div className="bg-surface p-4 rounded-lg flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      account_balance
                    </span>
                    <div>
                      <h4 className="font-title-md text-title-md font-semibold text-primary">
                        Civic Architecture
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Engineered for departmental workflows, sub-county desks, and state corporation registries.
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface p-4 rounded-lg flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      receipt_long
                    </span>
                    <div>
                      <h4 className="font-title-md text-title-md font-semibold text-primary">
                        Revenue Assurance
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Real-time payment gateway reconciliations with multi-tier citizen billing modules.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container py-space-xl px-margin">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-2 max-w-3xl">
                <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-secondary">
                  // 02 THE RELATIONSHIP
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                  {" Turnkey Public Sector Workflow Automation & Qualified Electronic Seal Integration "}
                </h2>
              </div>
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col gap-space-md">
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  {" RCFI and Crown Interactive collaborate to integrate tamper-evident cryptographic assurance, automated electronic sealing, and qualified digital document verification into municipal and national government service pipelines. Crown Interactive delivers the workflow orchestration engines, payment gateway integrations, and citizen customer-facing portals, while RCFI embeds automated root-level PKI timestamping, corporate e-Seals, and Section 83C KICA evidentiary legal certainty directly into every generated invoice, permit, and civic registry extract. "}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-2">
                  <div className="bg-surface-container-low p-5 rounded-lg flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold">
                      {" 1 "}
                    </div>
                    <h4 className="font-title-md text-title-md font-semibold text-primary">
                      {"Workflow & Portal Ingestion"}
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Crown Interactive orchestrates citizen requests, approvals, inter-departmental routing, and fee reconciliations seamlessly.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-5 rounded-lg flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">
                      {" 2 "}
                    </div>
                    <h4 className="font-title-md text-title-md font-semibold text-primary">
                      RCFI Trust HSM Pipeline
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Upon clearance, documents flow to RCFI's licensed HSM infrastructure, which stamps a cryptographically validated corporate seal and TSA token.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-5 rounded-lg flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold">
                      {" 3 "}
                    </div>
                    <h4 className="font-title-md text-title-md font-semibold text-primary">
                      Statutory Legal Certainty
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {"The issued document carries an immutable cryptographic payload qualifying under Kenya Information & Communications Act (KICA) § 83C."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-lowest py-space-xl px-margin">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-6 flex flex-col gap-space-sm">
                <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-secondary">
                  // 03 WHAT IT MEANS FOR CLIENTS
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                  {" Sovereign Protection Against Leakage, Fraud & Evidentiary Disputes "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  {" County governments, national regulatory agencies, and state corporations can completely modernize public revenue collection, procurement approvals, and citizen document issuance without risking audit fraud, revenue leakage, or legal repudiation in commercial disputes. Citizens and institutional counterparties receive digitally verifiable permits, land rate clearances, and trade licenses that can be validated instantly via public verification portals—streamlining bureaucratic turnarounds from weeks to seconds while maintaining ironclad anti-tamper security. "}
                </p>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-surface">
                    <span className="material-symbols-outlined text-secondary">
                      verified_user
                    </span>
                    <span className="font-body-md text-body-md text-on-surface font-medium">
                      Tamper-Evident Multi-Tier Municipal Certificates
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-surface">
                    <span className="material-symbols-outlined text-secondary">
                      speed
                    </span>
                    <span className="font-body-md text-body-md text-on-surface font-medium">
                      Turnaround accelerated from 14 business days to under 30 seconds
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-surface">
                    <span className="material-symbols-outlined text-secondary">
                      balance
                    </span>
                    <span className="font-body-md text-body-md text-on-surface font-medium">
                      {"Irrefutable evidentiary standing before Kenya Commercial & Tax Courts"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img className="w-full h-96 object-cover" data-alt="Close-up of a high-tech civic document verification workstation in Kenya. An enterprise tablet and desktop display render an authenticated municipal business permit with verified cryptographic seals, high-security green digital watermarks, dynamic QR verification markers, and audit metadata in crisp resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_kWlMqJvGOPpdLs2zxfP5ow6GbIcTleE0mc_WVj6G4L3YfzqDvzZXqvaeTsQh70uqrnIJDq1YvyugzvSjlfIXcBwkDxx80uf2dtMoclimgzemsKqEVyMkA_gIsyI-PLq43yNwfkKamTGqzEZNjhESa7xqUzAh_uYYZz_tucuYGZ_Gm9D46BR9K0SFXYgBZ-mOwINPNP_vN8if4kWkVzVXDZODqYs-XGavysE-7LP3sNt8LGNkqyWg" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/70 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="font-label-sm text-label-sm font-semibold text-primary">
                      Live CAK Root Validation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-[#061A14] text-on-primary py-space-xl px-margin relative">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-secondary-fixed">
                    // 04 PROOF OR ARTEFACT
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold">
                    {" Artefact: The Municipal Revenue & Civic Document Electronic Seal Gateway "}
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                    {" A high-throughput enterprise gateway integrated into automated billing and licensing workflows, generating legally binding, CAK-licensed cryptographically sealed clearance certificates at a throughput of 450 documents per minute. The system achieved a 100% evidentiary admissibility rating in regional commercial courts and eliminated forged municipal building permits in deployed pilot jurisdictions. "}
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-primary/60 px-4 py-2 rounded-lg border-0 self-start md:self-auto">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                    terminal
                  </span>
                  <span className="font-label-md text-label-md text-secondary-fixed font-semibold">
                    Gateway Status: Operational (v3.4-prod)
                  </span>
                </div>
              </div>
              <div className="bg-[#0b281f] rounded-xl p-space-md shadow-2xl flex flex-col gap-space-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-primary/40">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-secondary-fixed" />
                    <span className="font-mono text-label-sm text-on-primary-container ml-2">
                      rcfi-crown-gateway://console.node.ke
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-label-sm text-secondary-fixed">
                    <span className="material-symbols-outlined text-[16px]">
                      lock
                    </span>
                    <span>
                      TLS 1.3 / HSM-Level E-Seal Engine
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
                  <div className="lg:col-span-7 flex flex-col gap-space-sm bg-[#041710] p-4 rounded-lg font-mono text-label-sm">
                    <div className="flex items-center justify-between text-outline-variant pb-2 border-b border-white/5">
                      <span>
                        ACTIVE TRANSACTION STREAM
                      </span>
                      <span className="text-secondary-fixed" id="batch-counter">
                        Batch #9482-TX
                      </span>
                    </div>
                    <div className="flex flex-col gap-3 py-2 text-on-primary-container" id="stream-content">
                      <div className="p-2.5 rounded bg-[#0b281f] flex flex-col gap-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-secondary-fixed font-bold">
                            DOC: NBI-URB-2025-08491 (Single Business Permit)
                          </span>
                          <span className="text-on-tertiary-container">
                            200 OK • 12ms
                          </span>
                        </div>
                        <div className="text-[10px] text-outline-variant truncate">
                          SHA-256: e8b9560f2d8544e6b1897e937d363b9ef77e382d33c8479e0a6d1a938c201724
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-secondary-fixed">
                          <span className="material-symbols-outlined text-[12px]">
                            check_circle
                          </span>
                          <span>
                            RCFI Qualified e-Seal + CAK Root Timestamp Attached
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded bg-[#0b281f] flex flex-col gap-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-secondary-fixed font-bold">
                            DOC: MKS-REV-2025-11042 (Land Rates Clearance)
                          </span>
                          <span className="text-on-tertiary-container">
                            200 OK • 14ms
                          </span>
                        </div>
                        <div className="text-[10px] text-outline-variant truncate">
                          SHA-256: 7f12a83e0c655b399201fba41c9006b528148b812f8623ad92110c7104b2a9e2
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-secondary-fixed">
                          <span className="material-symbols-outlined text-[12px]">
                            check_circle
                          </span>
                          <span>
                            RCFI Qualified e-Seal + CAK Root Timestamp Attached
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded bg-[#0b281f] flex flex-col gap-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-secondary-fixed font-bold">
                            DOC: KSM-BLD-2025-00389 (Structural Approval Permit)
                          </span>
                          <span className="text-on-tertiary-container">
                            200 OK • 18ms
                          </span>
                        </div>
                        <div className="text-[10px] text-outline-variant truncate">
                          SHA-256: 3c914bf681cbb47c94514210d510255eb9031c6a28ff11e86ba0145c2678da40
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-secondary-fixed">
                          <span className="material-symbols-outlined text-[12px]">
                            check_circle
                          </span>
                          <span>
                            RCFI Qualified e-Seal + CAK Root Timestamp Attached
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px]">
                      <span className="text-on-primary-container">
                        Gateway Latency: 16.4ms avg
                      </span>
                      <span className="text-secondary-fixed">
                        Throughput: 450 docs/min
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex flex-col gap-space-sm bg-[#041710] p-4 rounded-lg">
                    <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary-fixed">
                      Live Verification Tester
                    </span>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-sm text-label-sm text-on-primary-container">
                        Input Certificate / Audit Reference
                      </label>
                      <div className="flex gap-2">
                        <input className="flex-1 bg-[#0b281f] text-on-primary px-3 py-2 rounded text-body-md focus:outline-none focus:bg-[#12382c]" id="cert-input" type="text" defaultValue="NBI-URB-2025-08491" />
                        <button className="px-4 py-2 rounded bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold hover:bg-secondary-fixed-dim transition-colors flex items-center gap-1" id="verify-btn" type="button">
                          <span className="material-symbols-outlined text-[16px]">
                            verified
                          </span>
                          <span>
                            Inspect
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="mt-2 bg-[#0b281f] p-3 rounded flex flex-col gap-2" id="verification-card">
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] font-bold text-secondary-fixed flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">
                            check_circle
                          </span>
                          {" AUTHENTICATED SOVEREIGN SEAL "}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-primary text-secondary-fixed">
                          VALID
                        </span>
                      </div>
                      <div className="text-[11px] text-on-primary-container space-y-1">
                        <div>
                          <strong className="text-on-primary">
                            Issuer:
                          </strong>
                          {" Crown Interactive Municipal Gateway"}
                        </div>
                        <div>
                          <strong className="text-on-primary">
                            Trust Root:
                          </strong>
                          {" RCFI Kenya National Root CA (TL/E-CSP 00014)"}
                        </div>
                        <div>
                          <strong className="text-on-primary">
                            Legal Basis:
                          </strong>
                          {" KICA Act § 83C / Evidence Act § 106B"}
                        </div>
                        <div>
                          <strong className="text-on-primary">
                            Timestamp:
                          </strong>
                          {" 2025-05-18T14:32:09.112 UTC"}
                        </div>
                      </div>
                      <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[11px] text-secondary-fixed">
                          <span className="material-symbols-outlined text-[14px]">
                            qr_code_2
                          </span>
                          <span>
                            Cryptographic QR: Embedded
                          </span>
                        </div>
                        <span className="text-[10px] text-outline-variant">
                          Integrity Intact
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low py-space-xl px-margin">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
              <div className="lg:col-span-5 flex flex-col gap-space-sm">
                <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-secondary">
                  // 05 ENGAGE THE ALLIANCE
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                  {" Modernize Public Sector Delivery with Cryptographic Trust "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  {" Consult with our joint enterprise architecture team to automate high-capacity civic workflows with sovereign legal evidentiary standing. "}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors shadow-md" href="#engagement-form">
                    {" Schedule Public Sector Workshop "}
                  </a>
                  <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold hover:bg-on-secondary-container transition-colors shadow-md" href="#engagement-form">
                    {" Request Civic Automation Demo "}
                  </a>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-xl mt-4 flex flex-col gap-2">
                  <h4 className="font-title-md text-title-md font-semibold text-primary">
                    Key Implementation Areas
                  </h4>
                  <ul className="space-y-1.5 font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        check_circle
                      </span>
                      {" Unified County Revenue Automation (UCRS) "}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        check_circle
                      </span>
                      {" Water, Power & Utility Billing Systems "}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        check_circle
                      </span>
                      {" Court-Grade Land & Structural Permitting Registries "}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        check_circle
                      </span>
                      {" State Agency Regulatory Enforcement Notices "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-7" id="engagement-form">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-lg flex flex-col gap-space-md">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                      Public-Sector Strategic Inquiry
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {"Direct liaison with the Joint RCFI & Crown Interactive Technical Working Group."}
                    </p>
                  </div>
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4" id="public-sector-inquiry-form">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm font-semibold text-primary">
                        Official Full Name *
                      </label>
                      <input className="w-full h-11 px-3 rounded-lg bg-surface text-on-surface focus:outline-none focus:bg-surface-container-low transition-colors" placeholder="e.g., Dr. Jane Omwamba" required type="text" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm font-semibold text-primary">
                        Official Email Address *
                      </label>
                      <input className="w-full h-11 px-3 rounded-lg bg-surface text-on-surface focus:outline-none focus:bg-surface-container-low transition-colors" placeholder="name@county.go.ke or institutional" required type="email" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm font-semibold text-primary">
                        Public Institution / Regulatory Body *
                      </label>
                      <input className="w-full h-11 px-3 rounded-lg bg-surface text-on-surface focus:outline-none focus:bg-surface-container-low transition-colors" placeholder="e.g., County Government of Nairobi" required type="text" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm font-semibold text-primary">
                        Direct Phone / Office Extension *
                      </label>
                      <input className="w-full h-11 px-3 rounded-lg bg-surface text-on-surface focus:outline-none focus:bg-surface-container-low transition-colors" placeholder="+254 (0) 700 000 000" required type="tel" />
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm font-semibold text-primary">
                        Primary Operational Need *
                      </label>
                      <select className="w-full h-11 px-3 rounded-lg bg-surface text-on-surface focus:outline-none focus:bg-surface-container-low transition-colors font-body-md text-body-md" required>
                        <option value="">
                          Select Priority Mandate
                        </option>
                        <option value="municipal-revenue">
                          {"Municipal Revenue Assurance & Billing Sealing"}
                        </option>
                        <option value="permits-licensing">
                          {"Anti-Tamper Building Permits & Unified Trade Licenses"}
                        </option>
                        <option value="court-admissibility">
                          KICA § 83C Court-Admissible Document Archive
                        </option>
                        <option value="joint-workshop">
                          {"Joint Architecture & Integration Workshop"}
                        </option>
                        <option value="custom-gateway">
                          Dedicated State Corporation Sealing Gateway
                        </option>
                      </select>
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm font-semibold text-primary">
                        {"Workflow Volume & Architecture Details"}
                      </label>
                      <textarea className="w-full p-3 rounded-lg bg-surface text-on-surface focus:outline-none focus:bg-surface-container-low transition-colors font-body-md text-body-md" placeholder="Specify estimated monthly document volumes, existing ERP/billing systems, or statutory compliance deadlines..." rows={3} defaultValue="" />
                    </div>
                    <div className="md:col-span-2 flex items-start gap-2 pt-1">
                      <input className="mt-1 w-4 h-4 rounded text-primary" id="dpa-consent" required type="checkbox" />
                      <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="dpa-consent">
                        {" I authorize RCFI and Crown Interactive to process institutional contact data in compliance with the Kenya Data Protection Act, 2019 for the purpose of architectural consultation. "}
                      </label>
                    </div>
                    <div className="md:col-span-2 pt-2">
                      <button className="w-full h-12 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-md" type="submit">
                        <span className="material-symbols-outlined text-[18px]">
                          send
                        </span>
                        <span>
                          Submit Public Sector Strategic Inquiry
                        </span>
                      </button>
                    </div>
                  </form>
                  <div className="hidden p-4 rounded-lg bg-secondary-container text-on-secondary-container font-body-md text-body-md flex items-center gap-2" id="form-success">
                    <span className="material-symbols-outlined text-secondary">
                      task_alt
                    </span>
                    <span>
                      {"Strategic inquiry logged. The joint RCFI & Crown Interactive public sector team will respond within 4 business hours."}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
