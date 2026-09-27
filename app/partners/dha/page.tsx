import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/partners-dha/page.css";
import "@/styles/pages/partners-dha/late.css";

export const metadata: Metadata = { title: "Digital Health Agency Partnership | RCFI Technology" };

export default function PartnersDhaPage() {
  return (
    <div className="rcfi-partners-dha" style={{ display: "contents" }}>
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
          {/* Breadcrumb & Eyebrow Ribbon */}
          <section className="w-full bg-surface-container-low border-b border-outline-variant/30 py-4 px-margin">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
              <nav className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
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
                  Digital Health Agency (DHA)
                </span>
              </nav>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-secondary-fixed text-label-sm font-label-sm uppercase tracking-wider self-start md:self-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse" />
                {" // ECOSYSTEM SUBPAGE // STATUTORY HEALTH INTEROPERABILITY "}
              </div>
            </div>
          </section>
          {/* Hero Header Block */}
          <section className="w-full bg-surface py-12 lg:py-16 px-margin">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 flex flex-col gap-5">
                <div className="inline-flex items-center gap-2 text-label-sm font-label-sm text-secondary uppercase tracking-widest font-bold">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    health_and_safety
                  </span>
                  {" Kenya Digital Health Act 2023 Statutory Anchor "}
                </div>
                <h1 className="font-display-lg text-display-lg text-primary tracking-tight font-extrabold leading-tight">
                  {" Digital Health Agency (DHA) & RCFI "}
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                  {" National clinical data interoperability, HL7® FHIR® cryptographic verification, and statutory health data governance under the Kenya Digital Health Act 2023. "}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      verified_user
                    </span>
                    {" CAK Lic: TL/E-CSP 00014 "}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      vpn_key
                    </span>
                    {" Section 48 Non-Repudiation "}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      dataset
                    </span>
                    {" HL7® FHIR® R4 Envelope "}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-4 bg-primary text-on-primary rounded-xl p-6 shadow-md relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-secondary-fixed text-label-sm font-label-sm uppercase font-semibold">
                    Regulatory Framework
                  </span>
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                    policy
                  </span>
                </div>
                <p className="font-headline-sm text-headline-sm font-bold text-on-primary mb-2">
                  Statutory Mandate
                </p>
                <p className="text-on-primary-container font-body-md text-body-md leading-relaxed">
                  {" Binding nationwide health network interoperability across Kenya's Level 4, 5, and 6 referral networks with the National Shared Health Record (SHR). "}
                </p>
                <div className="mt-5 pt-4 border-t border-primary-container flex items-center justify-between font-label-sm text-label-sm text-secondary-fixed">
                  <span>
                    Act No. 15 of 2023
                  </span>
                  <span className="text-on-primary font-mono">
                    Gazette Vol. CXXV
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* Section 1 & Section 2 Bento Grid (Who They Are + The Relationship) */}
          <section className="w-full bg-surface-container-low py-14 px-margin">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
              {/* Section 1: WHO THEY ARE */}
              <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-headline-sm">
                      01
                    </span>
                    <div>
                      <span className="text-label-sm font-label-sm uppercase tracking-widest text-secondary font-bold">
                        Apex Regulator Profile
                      </span>
                      <h2 className="font-headline-md text-headline-md font-bold text-primary">
                        WHO THEY ARE
                      </h2>
                    </div>
                  </div>
                  <div className="lg:max-w-3xl">
                    <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                      {" The Digital Health Agency (DHA) is the apex statutory regulator established under the Digital Health Act 2023 to coordinate, administer, and regulate the national integrated health information system in Kenya. It establishes national digital health standards, oversees the Shared Health Record (SHR), and enforces clinical data confidentiality across public and private health networks. "}
                    </p>
                  </div>
                </div>
              </div>
              {/* Section 2: THE RELATIONSHIP */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-sm flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-headline-sm">
                        02
                      </span>
                      <div>
                        <span className="text-label-sm font-label-sm uppercase tracking-widest text-secondary font-bold">
                          Ecosystem Protocol Binding
                        </span>
                        <h2 className="font-headline-md text-headline-md font-bold text-primary">
                          THE RELATIONSHIP
                        </h2>
                      </div>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg mt-2">
                      <h3 className="font-title-md text-title-md text-primary font-bold">
                        {" National Health Interoperability Infrastructure & Evidentiary Clinical PKI Anchor. "}
                      </h3>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" RCFI provides the statutory cryptographic trust substrate and digital signing layer integrated into the national health data exchange. In alignment with DHA technical working groups, RCFI engineers HL7® FHIR® R4 message signing protocols, automated KenyaEMR practitioner identity verification, and tamper-evident audit logging for the Master Patient Registry and UPI (Unique Personal Identifier) federation. This ensures that every laboratory result, clinical prescription, and cross-county patient referral bears non-repudiable digital signatures compliant with Section 48 of the Digital Health Act. "}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-outline-variant/30">
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm font-bold text-primary">
                        47
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Counties Target
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm font-bold text-secondary">
                        {"<12ms"}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Signing Latency
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm font-bold text-primary">
                        Zero
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        PII Exposure
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 rounded-xl overflow-hidden shadow-sm relative min-h-[360px] lg:min-h-full">
                  <img alt="African digital health specialists and clinical informatics engineers in Nairobi reviewing HL7 FHIR clinical registries on tablets and large dashboards" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1Uv-djxOH9isaVXRLvwpduRiTGqEfp296MbBejDSxXZ7F4wveOaAIPPLoANGuEWL83L040J6YgVLhzjxFhDr2SviYSg6h2SiStzis0XiekJ3X_F-Q-aBV89rS2F6ZvW9n1-ZHb8rxZIpHSc3pB_QWxt6KhcOTvB9iVONWo-NBva_EH4VeAv1TIluRGu1_VABT5EVUwsP7dzSeS70GlmhgAzSOJTqhd1a1SSNXBVJ_B4CqVMsDHigqM1nh0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex flex-col justify-end p-6 text-on-primary">
                    <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold">
                      Clinical Informatics Operations
                    </span>
                    <p className="font-title-md text-title-md font-bold text-on-primary">
                      Nairobi DHA Validation Testbed
                    </p>
                    <p className="font-body-md text-body-md text-on-primary-container text-xs">
                      {"Real-time health ledger validation & HL7 practitioner assertion."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 3: WHAT IT MEANS FOR CLIENTS */}
          <section className="w-full bg-surface py-14 px-margin">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-headline-sm">
                  03
                </span>
                <div>
                  <span className="text-label-sm font-label-sm uppercase tracking-widest text-secondary font-bold">
                    Industry Value Proposition
                  </span>
                  <h2 className="font-headline-md text-headline-md font-bold text-primary">
                    WHAT IT MEANS FOR CLIENTS
                  </h2>
                </div>
              </div>
              <div className="bg-primary text-on-primary rounded-xl p-8 lg:p-12 shadow-md relative overflow-hidden">
                <div className="max-w-4xl relative z-10 flex flex-col gap-6">
                  <p className="font-body-lg text-body-lg text-on-primary leading-relaxed text-lg">
                    {" Healthcare facility operators, hospital management software vendors, diagnostic laboratory networks, and telemedicine platforms can achieve instant, frictionless compliance with the Digital Health Act 2023 without re-architecting their legacy backends. By connecting through RCFI's DHA-aligned PKI gateways, healthcare providers eliminate legal exposure to medical malpractice claims arising from unverified digital records, protect patient biometric and clinical privacy under strict sovereign encryption, and guarantee immediate interoperability with the national Social Health Authority (SHA) claims switch. "}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    <div className="p-4 rounded-lg bg-primary-container/60 border border-secondary/20">
                      <div className="flex items-center gap-2 text-secondary-fixed mb-1">
                        <span className="material-symbols-outlined text-[20px]">
                          shield
                        </span>
                        <span className="font-title-md text-title-md font-semibold">
                          Malpractice Shield
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-primary-container text-sm">
                        {" Cryptographically sealed audit trails provide evidentiary proof in statutory medical board adjudications. "}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary-container/60 border border-secondary/20">
                      <div className="flex items-center gap-2 text-secondary-fixed mb-1">
                        <span className="material-symbols-outlined text-[20px]">
                          lock
                        </span>
                        <span className="font-title-md text-title-md font-semibold">
                          Sovereign Privacy
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-primary-container text-sm">
                        {" Biometric patient identifiers and clinical histories encrypted at rest and in transit under Kenya DPA standards. "}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary-container/60 border border-secondary/20">
                      <div className="flex items-center gap-2 text-secondary-fixed mb-1">
                        <span className="material-symbols-outlined text-[20px]">
                          sync_alt
                        </span>
                        <span className="font-title-md text-title-md font-semibold">
                          SHA Switch Ready
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-primary-container text-sm">
                        {" Zero friction electronic reimbursement and pre-authorization processing with the Social Health Authority. "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 4: PROOF OR ARTEFACT (Interactive Testbed & Payload Validator) */}
          <section className="w-full bg-surface-container-low py-14 px-margin">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-headline-sm">
                  04
                </span>
                <div>
                  <span className="text-label-sm font-label-sm uppercase tracking-widest text-secondary font-bold">
                    Verification Artifact
                  </span>
                  <h2 className="font-headline-md text-headline-md font-bold text-primary">
                    PROOF OR ARTEFACT
                  </h2>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-sm flex flex-col gap-6">
                <div>
                  <h3 className="font-title-md text-title-md font-bold text-primary">
                    {" Artefact: The Kenya National Health Interoperability FHIR Validation Matrix & E-Sign Conformance Kit. "}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-4xl">
                    {" A joint reference implementation demonstrated across 47 county referral hospitals, featuring automated digital signing of FHIR R4 Patient and DiagnosticReport resources in under 12 milliseconds. The published conformance benchmark validated zero PII leakage during county-to-national data synchronization, establishing the statutory technical standard for hospital EMR accreditation in Kenya. "}
                  </p>
                </div>
                {/* Interactive Inspector Widget */}
                <div className="mt-4 bg-[#0a1813] rounded-xl p-6 text-on-primary font-mono text-sm overflow-hidden shadow-inner">
                  <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-tertiary-container gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-error" />
                      <span className="w-3 h-3 rounded-full bg-secondary-fixed" />
                      <span className="w-3 h-3 rounded-full bg-secondary-container" />
                      <span className="text-on-primary-container text-xs ml-2 font-body-md">
                        FHIR-R4-DiagnosticReport-Signed-Envelope.json
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded bg-primary text-secondary-fixed text-xs font-semibold">
                        CAK ROOT CA 00014 SEALED
                      </span>
                      <button className="px-3 py-1 bg-secondary text-on-primary rounded text-xs hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors" id="validateBtn">
                        {" Run Conformance Test "}
                      </button>
                    </div>
                  </div>
                  {/* Payload Display */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-8 overflow-x-auto text-xs leading-relaxed text-tertiary-fixed font-mono p-2">
                      <pre id="jsonPayload">
                        {"{\n  "}
                        <span className="text-secondary-fixed">
                          {"\"resourceType\""}
                        </span>
                        {": "}
                        <span className="text-white">
                          {"\"DiagnosticReport\""}
                        </span>
                        {",\n  "}
                        <span className="text-secondary-fixed">
                          {"\"id\""}
                        </span>
                        {": "}
                        <span className="text-white">
                          {"\"ke-dha-shr-98214-diag\""}
                        </span>
                        {",\n  "}
                        <span className="text-secondary-fixed">
                          {"\"meta\""}
                        </span>
                        {": {\n    "}
                        <span className="text-secondary-fixed">
                          {"\"profile\""}
                        </span>
                        {": ["}
                        <span className="text-white">
                          {"\"http://health.go.ke/fhir/StructureDefinition/ke-diagnostic-report\""}
                        </span>
                        {"],\n    "}
                        <span className="text-secondary-fixed">
                          {"\"security\""}
                        </span>
                        {": [{\n      "}
                        <span className="text-secondary-fixed">
                          {"\"system\""}
                        </span>
                        {": "}
                        <span className="text-white">
                          {"\"urn:ietf:bcp:145\""}
                        </span>
                        {",\n      "}
                        <span className="text-secondary-fixed">
                          {"\"code\""}
                        </span>
                        {": "}
                        <span className="text-white">
                          {"\"RCFI-PKI-DHA-SEC48\""}
                        </span>
                        {"\n    }]\n  },\n  "}
                        <span className="text-secondary-fixed">
                          {"\"status\""}
                        </span>
                        {": "}
                        <span className="text-white">
                          {"\"final\""}
                        </span>
                        {",\n  "}
                        <span className="text-secondary-fixed">
                          {"\"subject\""}
                        </span>
                        {": {\n    "}
                        <span className="text-secondary-fixed">
                          {"\"reference\""}
                        </span>
                        {": "}
                        <span className="text-white">
                          {"\"Patient/UPI-KE-849204812\""}
                        </span>
                        {",\n    "}
                        <span className="text-secondary-fixed">
                          {"\"display\""}
                        </span>
                        {": "}
                        <span className="text-white">
                          {"\"National UPI Cryptographic Token\""}
                        </span>
                        {"\n  },\n  "}
                        <span className="text-secondary-fixed">
                          {"\"rcfi_digital_signature\""}
                        </span>
                        {": {\n    "}
                        <span className="text-secondary-fixed">
                          {"\"algorithm\""}
                        </span>
                        {": "}
                        <span className="text-white">
                          {"\"RSA-SHA256\""}
                        </span>
                        {",\n    "}
                        <span className="text-secondary-fixed">
                          {"\"signer_license\""}
                        </span>
                        {": "}
                        <span className="text-white">
                          {"\"KMPDC-MD-74192\""}
                        </span>
                        {",\n    "}
                        <span className="text-secondary-fixed">
                          {"\"tsp_timestamp\""}
                        </span>
                        {": "}
                        <span className="text-white">
                          {"\"2025-02-28T09:41:22.014+03:00\""}
                        </span>
                        {",\n    "}
                        <span className="text-secondary-fixed">
                          {"\"signature_value\""}
                        </span>
                        {": "}
                        <span className="text-secondary-fixed font-bold">
                          {"\"a4f890c2e91981...[VERIFIED STATUTORY ROOT]\""}
                        </span>
                        {"\n  }\n}"}
                      </pre>
                    </div>
                    <div className="lg:col-span-4 bg-primary-container/40 p-4 rounded-lg flex flex-col gap-3 text-xs">
                      <span className="text-secondary-fixed font-bold uppercase tracking-wider font-label-sm">
                        Compliance Verification
                      </span>
                      <div className="flex items-center justify-between py-1 border-b border-tertiary">
                        <span className="text-on-primary-container">
                          Section 48 e-Signature
                        </span>
                        <span className="text-secondary-fixed font-semibold">
                          VALID (RCFI CA)
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-tertiary">
                        <span className="text-on-primary-container">
                          Master Patient UPI Binding
                        </span>
                        <span className="text-secondary-fixed font-semibold">
                          AUTHENTIC
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-tertiary">
                        <span className="text-on-primary-container">
                          Interoperability Conformance
                        </span>
                        <span className="text-secondary-fixed font-semibold">
                          100% FHIR R4
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-tertiary">
                        <span className="text-on-primary-container">
                          Signing Latency
                        </span>
                        <span className="text-secondary-fixed font-semibold">
                          9.4 ms
                        </span>
                      </div>
                      <div className="mt-2 p-2.5 rounded bg-primary text-secondary-fixed text-center font-semibold text-[11px]" id="testResult">
                        {" Status: Conformance Active "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 5: CTA & INTAKE FORM RELEVANT TO RELATIONSHIP */}
          <section className="w-full bg-surface py-16 px-margin">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* CTA Copy & Direct Triggers */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-headline-sm">
                      05
                    </span>
                    <div>
                      <span className="text-label-sm font-label-sm uppercase tracking-widest text-secondary font-bold">
                        Mandatory National Onboarding
                      </span>
                      <h2 className="font-headline-md text-headline-md font-bold text-primary">
                        {"CTA & NEXT STEPS"}
                      </h2>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-extrabold text-primary leading-tight mt-2">
                    {" Certify Your Health Platform with DHA Standards. "}
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    {" Schedule an architectural review with RCFI's clinical informatics and digital trust engineering practice to prepare your health system for mandatory national certification. "}
                  </p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                    <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container transition-colors shadow-sm text-center" href="#intakeForm">
                      <span className="material-symbols-outlined text-[18px]">
                        verified
                      </span>
                      {" Commission Health Interoperability Audit "}
                    </a>
                    <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface-container text-primary font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors text-center" data-rcfi-onclick="alert('Downloading DHA FHIR Signing Technical Specification v2.4 (PDF)...')">
                      <span className="material-symbols-outlined text-[18px]">
                        download
                      </span>
                      {" Download FHIR Signing Spec "}
                    </button>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-outline-variant/30 flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary text-[28px]">
                    contact_support
                  </span>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md font-semibold text-primary">
                      Direct Technical Working Group Desk
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      Email: dha-support@rcfi.co.ke | Hotdesk: +254 (0) 20 283 9240
                    </span>
                  </div>
                </div>
              </div>
              {/* Professional Clinical Intake Form */}
              <div className="lg:col-span-6 bg-surface-container-lowest rounded-xl p-8 shadow-md" id="intakeForm">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-outline-variant/30">
                  <div>
                    <h4 className="font-title-md text-title-md font-bold text-primary">
                      DHA Conformance Intake
                    </h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      {"For Hospital CTOs, Health-Tech Vendors & County Health Executives"}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    assignment_turned_in
                  </span>
                </div>
                <form className="flex flex-col gap-4" data-rcfi-onsubmit="event.preventDefault(); document.getElementById('formSuccess').classList.remove('hidden');">
                  <div>
                    <label className="block font-label-sm text-label-sm font-semibold text-on-surface mb-1">
                      {"Full Legal Name & Title"}
                    </label>
                    <input className="w-full px-3 py-2.5 rounded-lg bg-surface border border-outline-variant/50 focus:border-secondary focus:outline-none font-body-md text-body-md text-on-surface" placeholder="Dr. Jane M. Kariuki - Chief Information Officer" required type="text" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-sm text-label-sm font-semibold text-on-surface mb-1">
                        Institution / Vendor Name
                      </label>
                      <input className="w-full px-3 py-2.5 rounded-lg bg-surface border border-outline-variant/50 focus:border-secondary focus:outline-none font-body-md text-body-md text-on-surface" placeholder="Aga Khan University Hospital / MediTech Ltd" required type="text" />
                    </div>
                    <div>
                      <label className="block font-label-sm text-label-sm font-semibold text-on-surface mb-1">
                        Organization Category
                      </label>
                      <select className="w-full px-3 py-2.5 rounded-lg bg-surface border border-outline-variant/50 focus:border-secondary focus:outline-none font-body-md text-body-md text-on-surface">
                        <option>
                          Level 5/6 Referral Hospital
                        </option>
                        <option>
                          County Department of Health
                        </option>
                        <option>
                          Hospital Management Software Vendor
                        </option>
                        <option>
                          Diagnostic Laboratory Network
                        </option>
                        <option>
                          Telemedicine / Digital Health Platform
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-sm text-label-sm font-semibold text-on-surface mb-1">
                        Official Professional Email
                      </label>
                      <input className="w-full px-3 py-2.5 rounded-lg bg-surface border border-outline-variant/50 focus:border-secondary focus:outline-none font-body-md text-body-md text-on-surface" placeholder="cio@institution.co.ke" required type="email" />
                    </div>
                    <div>
                      <label className="block font-label-sm text-label-sm font-semibold text-on-surface mb-1">
                        Phone Number
                      </label>
                      <input className="w-full px-3 py-2.5 rounded-lg bg-surface border border-outline-variant/50 focus:border-secondary focus:outline-none font-body-md text-body-md text-on-surface" placeholder="+254 700 000 000" required type="tel" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm font-semibold text-on-surface mb-1">
                      {"Current Architecture & Target Interoperability Milestone"}
                    </label>
                    <textarea className="w-full px-3 py-2.5 rounded-lg bg-surface border border-outline-variant/50 focus:border-secondary focus:outline-none font-body-md text-body-md text-on-surface" placeholder="Briefly specify your EMR engine (e.g. KenyaEMR, OpenMRS, proprietary) and desired timeline for DHA SHR integration..." rows={3} defaultValue="" />
                  </div>
                  <div className="flex items-start gap-2 pt-1">
                    <input className="mt-1" id="statutoryConsent" required type="checkbox" />
                    <label className="font-label-sm text-label-sm text-on-surface-variant leading-snug" htmlFor="statutoryConsent">
                      {" I certify that our institution processes clinical records under the Kenya Data Protection Act 2019 and request technical appraisal for Section 48 digital health compliance. "}
                    </label>
                  </div>
                  <button className="w-full mt-2 py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-2" type="submit">
                    <span className="material-symbols-outlined text-[18px]">
                      send
                    </span>
                    {" Submit Formal Review Request "}
                  </button>
                  <div className="hidden mt-2 p-3 rounded-lg bg-secondary/15 text-secondary font-body-md text-body-md text-center font-semibold" id="formSuccess">
                    {" Submission received. An RCFI Clinical Informatics Lead will contact your technical office within 4 business hours. "}
                  </div>
                </form>
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
