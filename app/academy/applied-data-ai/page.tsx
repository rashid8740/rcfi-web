import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/academy-applied-data-ai/page.css";
import "@/styles/pages/academy-applied-data-ai/late.css";

export const metadata: Metadata = { title: "Applied Data & AI Programme | RCFI Academy" };

export default function AcademyAppliedDataAiPage() {
  return (
    <div className="rcfi-academy-applied-data-ai" style={{ display: "contents" }}>
      <div className="w-full fixed top-0 left-0 right-0 z-50">
        <div className="w-full bg-primary text-on-primary border-b border-primary-container/40">
          <div className="max-w-7xl mx-auto px-margin flex items-center justify-between h-10 font-label-sm text-label-sm">
            <div className="flex items-center gap-space-lg">
              <a className="hover:text-secondary-fixed transition-colors flex items-center gap-space-xs font-label-sm text-label-sm" href="tel:+254202839200">
                +254 (0) 20 283 9200
              </a>
              <span className="text-primary-container font-bold">
                •
              </span>
              <a className="hover:text-secondary-fixed transition-colors flex items-center gap-space-xs font-label-sm text-label-sm" href="mailto:info@rcfi.co.ke">
                info@rcfi.co.ke
              </a>
              <span className="hidden lg:inline text-primary-container font-bold">
                •
              </span>
              <div className="hidden lg:flex items-center gap-space-xs bg-primary-container/60 px-space-sm py-0.5 rounded border border-secondary/30">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                <span className="text-surface-bright font-label-sm text-label-sm">
                  {"Accredited & CAK Licensed ECSP (TL/E-CSP 00014)"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-md">
              <Link className="hover:text-secondary-fixed transition-colors font-label-sm text-label-sm" data-path="ca-repository" href="/trust/">
                CA Repository
              </Link>
              <span className="text-primary-container font-bold">
                •
              </span>
              <Link className="hover:text-secondary-fixed transition-colors font-label-sm text-label-sm" data-path="trust-center" href="/trust/">
                Trust Center
              </Link>
            </div>
          </div>
        </div>
        <header className="w-full bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="h-20 max-w-7xl mx-auto px-margin flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <Link className="flex items-center gap-space-sm group" data-path="home" href="/">
                <img alt="Exact replica of the real RCFI logo as shown in the screenshot: A pixelated / tiled mosaic icon on the left with 4 rounded square tiles in forest green and teal forming a dynamic cluster or cross, followed by bold dark green sans-serif uppercase text 'RCFI', and below it in smaller clean sans-serif text 'Reprodrive Center for Innovation Limited'. Clean transparent or white background.. Brand logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
                <div className="hidden sm:flex flex-col">
                  <span className="font-headline-sm text-headline-sm leading-none text-primary tracking-tight font-bold">
                    RCFI
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase text-[10px] leading-tight">
                    Center for Innovation
                  </span>
                </div>
              </Link>
            </div>
            <nav className="hidden xl:flex items-center gap-space-md h-full" data-active-classes="text-primary font-title-md border-b-2 border-secondary font-semibold">
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md py-space-sm flex items-center gap-1" data-path="services" href="/services/">
                Services
              </Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md py-space-sm flex items-center gap-1" data-path="products" href="/products/certysign/">
                Products
              </Link>
              <Link aria-current="page" className="transition-colors py-space-sm flex items-center gap-1 text-primary font-title-md border-b-2 border-secondary font-semibold" data-path="academy" href="/academy/">
                Academy
              </Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md py-space-sm flex items-center gap-1" data-path="insights" href="/insights/">
                Insights
              </Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md py-space-sm flex items-center gap-1" data-path="company" href="/about/">
                Company
              </Link>
            </nav>
            <div className="flex items-center gap-space-sm sm:gap-space-md">
              <Link className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container-low border border-secondary/30 text-secondary hover:bg-secondary-container/20 font-label-md text-label-md transition-colors" data-path="verify-document" href="/verify/">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Verify Document
              </Link>
              <a className="inline-flex items-center justify-center px-space-md py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-title-md text-title-md shadow-sm transition-all" data-path="book-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
      <main className="w-full pt-[120px] bg-background flex-1">
        <div className="flex flex-col w-full">
          {/* Top Breadcrumb & Sovereign Context Rail */}
          <section className="w-full bg-surface-bright py-space-sm">
            <div className="max-w-7xl mx-auto px-margin flex flex-wrap items-center justify-between gap-space-sm font-label-md text-label-md">
              <nav className="flex items-center gap-space-xs text-on-surface-variant">
                <Link className="hover:text-primary transition-colors" data-path="home" href="/">
                  Home
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <Link className="hover:text-primary transition-colors" data-path="academy" href="/academy/">
                  Academy
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <span className="text-primary font-semibold">
                  {"Applied Data & AI Programme"}
                </span>
              </nav>
              <div className="flex items-center gap-space-sm text-secondary font-label-sm text-label-sm">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="tracking-wide uppercase font-semibold">
                  Cohort 04 Admissions Open • Nairobi GPU Cluster Active
                </span>
              </div>
            </div>
          </section>
          {/* Split Dark Institutional Hero */}
          <section className="w-full bg-primary text-on-primary relative overflow-hidden py-space-xl">
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <defs>
                  {" "}
                  <pattern height="40" id="grid-pki" patternUnits="userSpaceOnUse" width="40">
                    {" "}
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6cf8bb" strokeWidth="0.75" />
                    {" "}
                  </pattern>
                  {" "}
                </defs>
                {" "}
                <rect fill="url(#grid-pki)" height="100%" width="100%" />
                {" "}
              </svg>
            </div>
            <div className="max-w-7xl mx-auto px-margin relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                {/* Left Hero Narrative Column */}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-xs">
                    <span className="text-secondary-fixed font-mono tracking-widest text-label-sm font-bold">
                      // ACADEMY PROGRAMME 03 // SOVEREIGN INTELLIGENCE
                    </span>
                  </div>
                  <h1 className="font-display-lg text-display-lg text-surface-bright tracking-tight">
                    {" Applied Data & AI Programme "}
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed max-w-2xl">
                    {" AI that ships, not slides. Master high-scale data engineering, predictive inference engines, private LLM orchestration, and algorithmic audit trails deployed strictly within sovereign African regulatory perimeters. "}
                  </p>
                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    <a className="inline-flex items-center justify-center px-space-lg py-3 rounded-lg bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed transition-all font-title-md text-title-md font-bold shadow-md" href="#register">
                      {" Apply for Cohort 04 "}
                    </a>
                    <a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-lg bg-primary-container/80 text-surface-bright hover:bg-primary-container transition-all font-title-md text-title-md" href="#curriculum">
                      <span className="material-symbols-outlined text-[18px]">
                        download
                      </span>
                      {" Download 10-Week Syllabus "}
                    </a>
                  </div>
                  {/* Compliance Certification Badges */}
                  <div className="pt-space-md flex flex-wrap items-center gap-space-xs">
                    <span className="px-2.5 py-1 rounded bg-tertiary-container/70 text-tertiary-fixed text-label-sm font-label-sm">
                      {" In-Country Hosting Compliant "}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-tertiary-container/70 text-tertiary-fixed text-label-sm font-label-sm">
                      {" Section 48 DPA 2019 Aligned "}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-tertiary-container/70 text-tertiary-fixed text-label-sm font-label-sm">
                      {" ISO/IEC 42001 AI Management "}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-secondary-container/20 text-secondary-fixed-dim text-label-sm font-label-sm">
                      {" Zero Foreign Data Transit "}
                    </span>
                  </div>
                </div>
                {/* Right Side: Real-Time Sovereign AI Pipeline Monitor Card */}
                <div className="lg:col-span-5 flex flex-col gap-space-sm">
                  <div className="bg-surface-container-lowest/10 backdrop-blur-md rounded-xl p-space-md text-on-primary shadow-2xl flex flex-col gap-space-md">
                    {/* Facility Photo Placeholder with exact DataStore pattern */}
                    <div className="relative w-full h-44 rounded-lg overflow-hidden bg-primary-container">
                      <img alt="Nairobi Sovereign High-Performance Data Center with server racks, optical fiber cabling, and security engineers" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1VxLeyC3EyN3eTq-yzb_8jhq_OUUscU_5rpSArke8w9Lz7UaP3cKMx3w_XH-8v70ncYJQIkSaN3eqk6xHrQXDDykKcK8VgZCWCHm312yndUb6HBlnuzwUxZCZu5Y-lTDNus_cKtJN-z6hXKMv2mh7uXuzZLrl6ZICqaHXGjlYuQK10007TW90uWFFZiuYBa3pw6Uj3NKtRkICZK95zkDfPertboZwCzFExcprGq60sq8xb1HLLOl6oTDw" />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary/90 text-secondary-fixed font-label-sm text-label-sm tracking-wider uppercase font-semibold">
                        {" Nairobi Sovereign DSTA Node "}
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-primary/90 text-on-primary font-mono text-[10px]">
                        {" HSM: Thales Luna eIDAS "}
                      </div>
                    </div>
                    {/* Pipeline Live Metrics Matrix */}
                    <div className="flex flex-col gap-space-sm pt-space-xs">
                      <div className="flex items-center justify-between font-label-sm text-label-sm text-on-primary-container">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                          {" SOVEREIGN PIPELINE RUNNER #0482 "}
                        </span>
                        <span className="font-mono text-secondary-fixed">
                          HEALTH: 99.98%
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-space-xs font-body-md text-body-md">
                        <div className="bg-primary-container/40 p-space-xs rounded flex flex-col">
                          <span className="text-on-primary-container font-label-sm text-label-sm">
                            PII Tokenization Rate
                          </span>
                          <span className="font-headline-sm text-headline-sm font-bold text-surface-bright">
                            100.0%
                          </span>
                          <span className="text-[10px] text-secondary-fixed-dim font-mono">
                            Zero raw leakage
                          </span>
                        </div>
                        <div className="bg-primary-container/40 p-space-xs rounded flex flex-col">
                          <span className="text-on-primary-container font-label-sm text-label-sm">
                            Local GPU Inference
                          </span>
                          <span className="font-headline-sm text-headline-sm font-bold text-surface-bright">
                            14.2 ms
                          </span>
                          <span className="text-[10px] text-secondary-fixed-dim font-mono">
                            Nvidia A100 Sovereign
                          </span>
                        </div>
                      </div>
                      {/* Airflow DAG Status Line */}
                      <div className="bg-primary-container/50 p-space-xs rounded flex items-center justify-between text-label-sm font-label-sm">
                        <span className="text-on-primary-container font-mono">
                          DAG: rcfi_dpa_pipeline_v4
                        </span>
                        <span className="text-secondary-fixed font-mono font-semibold">
                          RUNNING • STEP 4/5
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-tertiary-fixed-dim font-mono">
                        <span>
                          RFC 3161 Certified Timestamp
                        </span>
                        <span>
                          SHA-256 Validated
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Quick Key Stats Strip */}
              <div className="mt-space-xl grid grid-cols-2 md:grid-cols-4 gap-space-sm bg-primary-container/40 rounded-xl p-space-md">
                <div className="flex flex-col">
                  <span className="font-headline-md text-headline-md font-bold text-secondary-fixed">
                    10 Weeks
                  </span>
                  <span className="font-label-md text-label-md text-on-primary-container">
                    Intensive Hybrid Delivery
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-md text-headline-md font-bold text-secondary-fixed">
                    100%
                  </span>
                  <span className="font-label-md text-label-md text-on-primary-container">
                    Real Production Datasets
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-md text-headline-md font-bold text-secondary-fixed">
                    20 Fellows
                  </span>
                  <span className="font-label-md text-label-md text-on-primary-container">
                    Strict Cohort Cap
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-md text-headline-md font-bold text-secondary-fixed">
                    CAK • PKI
                  </span>
                  <span className="font-label-md text-label-md text-on-primary-container">
                    Verifiable Digital Credential
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* Sovereign Curriculum Section */}
          <section className="w-full bg-surface py-space-xl" id="curriculum">
            <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-xl">
              <div className="flex flex-col gap-space-xs max-w-3xl">
                <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest">
                  // RIGOROUS FOUR-TIER ARCHITECTURE
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  {" Curriculum Built for High-Stakes African Infrastructure "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" No generic Kaggle notebooks. Fellows execute engineering patterns directly against air-gapped financial, health, and telecoms infrastructure mirrors. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                {/* Module 01 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-lg bg-surface-container text-primary font-headline-sm text-headline-sm font-bold flex items-center justify-center">
                        {" 01 "}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                        Weeks 1 – 3
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold">
                      {" Modern Sovereign Data Engineering & Streaming Pipelines "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Architect resilient lakehouses on in-country infrastructure. Master batch and streaming ingest topologies using Apache Airflow, dbt transformations, and Apache Kafka cluster orchestration without outbound cloud egress. "}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-space-xs">
                      <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-mono text-[11px] font-semibold">
                        dbt-core
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-mono text-[11px] font-semibold">
                        Apache Airflow
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-mono text-[11px] font-semibold">
                        Kafka Streams
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-mono text-[11px] font-semibold">
                        MinIO Object Lake
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-sm bg-surface-container-low rounded-lg p-space-sm flex items-center gap-space-xs text-on-surface font-label-md text-label-md">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      verified
                    </span>
                    <span>
                      Production Lab: 100M-Record Telecom CDR Streaming Engine
                    </span>
                  </div>
                </div>
                {/* Module 02 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-lg bg-surface-container text-primary font-headline-sm text-headline-sm font-bold flex items-center justify-center">
                        {" 02 "}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                        Weeks 4 – 5
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold">
                      {" PII Anonymization & Kenya DPA 2019 Regulatory Compliance "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Implement cryptographic tokenization, deterministic HMAC masking, and k-anonymity matrices. Generate provably differential-private synthetic data for cross-border analytics in alignment with Section 48 & ODPC frameworks. "}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-space-xs">
                      <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-mono text-[11px] font-semibold">
                        ODPC Section 48
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-mono text-[11px] font-semibold">
                        k-Anonymity
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-mono text-[11px] font-semibold">
                        Differential Privacy
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-mono text-[11px] font-semibold">
                        HMAC-SHA256
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-sm bg-surface-container-low rounded-lg p-space-sm flex items-center gap-space-xs text-on-surface font-label-md text-label-md">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      verified
                    </span>
                    <span>
                      Production Lab: Automated ODPC Regulatory Data Sanitizer
                    </span>
                  </div>
                </div>
                {/* Module 03 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-lg bg-surface-container text-primary font-headline-sm text-headline-sm font-bold flex items-center justify-center">
                        {" 03 "}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                        Weeks 6 – 8
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold">
                      {" Applied Machine Learning & High-Impact Predictive Models "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Design, calibrate, and serve high-throughput inference systems. Build production credit default classifiers, real-time mobile money fraud detection algorithms, and anomaly detection engines for public treasury tracking. "}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-space-xs">
                      <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-mono text-[11px] font-semibold">
                        XGBoost / LightGBM
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-mono text-[11px] font-semibold">
                        FastAPI Serving
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-mono text-[11px] font-semibold">
                        MLflow Tracking
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-mono text-[11px] font-semibold">
                        Triton Inference
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-sm bg-surface-container-low rounded-lg p-space-sm flex items-center gap-space-xs text-on-surface font-label-md text-label-md">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      verified
                    </span>
                    <span>
                      Production Lab: Sub-20ms Mobile Money Fraud Arbiter
                    </span>
                  </div>
                </div>
                {/* Module 04 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-lg bg-surface-container text-primary font-headline-sm text-headline-sm font-bold flex items-center justify-center">
                        {" 04 "}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                        Weeks 9 – 10
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold">
                      {" Sovereign LLMs, RAG Architectures & AI Governance "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Fine-tune open-weights models (Llama 3, Mistral) on indigenous and regional datasets. Deploy private retrieval-augmented generation (RAG) backed by pgvector, with rigorous model auditability under ISO/IEC 42001. "}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-space-xs">
                      <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-mono text-[11px] font-semibold">
                        LoRA / QLoRA
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-mono text-[11px] font-semibold">
                        pgvector + Hybrid Search
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-mono text-[11px] font-semibold">
                        ISO/IEC 42001
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-mono text-[11px] font-semibold">
                        Model Lineage Seals
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-sm bg-surface-container-low rounded-lg p-space-sm flex items-center gap-space-xs text-on-surface font-label-md text-label-md">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      verified
                    </span>
                    <span>
                      Production Lab: Local Judicial Precedent RAG with Cryptographic Proofs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Interactive Lineage & Validation Console */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest">
                    // MODEL LINEAGE LAB // RFC 3161 ASSURANCE
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    {" Sovereign Pipeline Validation Console "}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" Explore how data shifts from raw institutional source to verifiable cryptographic model output inside our local runtime. "}
                  </p>
                </div>
                <div className="flex items-center gap-space-xs bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  <span className="font-mono text-label-sm text-label-sm text-primary font-semibold">
                    ACTIVE AUDIT RUNNER: RCFI-KENYA-DSTA-01
                  </span>
                </div>
              </div>
              {/* Console Visual Workflow */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md">
                  {/* Step 1 */}
                  <div className="cursor-pointer p-space-md rounded-lg bg-surface-container transition-all flex flex-col gap-space-xs" id="step-btn-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-label-sm text-label-sm font-bold text-secondary">
                        STAGE 01
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        database
                      </span>
                    </div>
                    <h4 className="font-title-md text-title-md text-primary font-bold">
                      Institutional Ingest
                    </h4>
                    <p className="text-[12px] text-on-surface-variant">
                      {"Raw financial & telecom records ingested via mutual TLS."}
                    </p>
                  </div>
                  {/* Step 2 */}
                  <div className="cursor-pointer p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col gap-space-xs" id="step-btn-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-label-sm text-label-sm font-bold text-secondary">
                        STAGE 02
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        lock
                      </span>
                    </div>
                    <h4 className="font-title-md text-title-md text-primary font-bold">
                      Cryptographic Mask
                    </h4>
                    <p className="text-[12px] text-on-surface-variant">
                      In-memory SHA-256 pseudonymization and PII shredding.
                    </p>
                  </div>
                  {/* Step 3 */}
                  <div className="cursor-pointer p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col gap-space-xs" id="step-btn-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-label-sm text-label-sm font-bold text-secondary">
                        STAGE 03
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        memory
                      </span>
                    </div>
                    <h4 className="font-title-md text-title-md text-primary font-bold">
                      GPU Sovereign Train
                    </h4>
                    <p className="text-[12px] text-on-surface-variant">
                      Local cluster execution on isolated hardware partitions.
                    </p>
                  </div>
                  {/* Step 4 */}
                  <div className="cursor-pointer p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col gap-space-xs" id="step-btn-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-label-sm text-label-sm font-bold text-secondary">
                        STAGE 04
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        verified_user
                      </span>
                    </div>
                    <h4 className="font-title-md text-title-md text-primary font-bold">
                      PKI Seal Issuance
                    </h4>
                    <p className="text-[12px] text-on-surface-variant">
                      Model weights signed by CAK-licensed Root CA timestamp.
                    </p>
                  </div>
                </div>
                {/* Terminal Output Screen */}
                <div className="bg-primary rounded-lg p-space-md font-mono text-surface-bright text-body-md flex flex-col gap-space-xs shadow-inner">
                  <div className="flex items-center justify-between text-on-primary-container text-label-sm border-b pb-2">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-error" />
                      <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim" />
                      <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                      <span className="ml-2">
                        rcfi-sovereign-kernel :: lineage_audit.sh
                      </span>
                    </span>
                    <span className="text-secondary-fixed">
                      STATUS: 200 OK
                    </span>
                  </div>
                  <div className="py-space-xs flex flex-col gap-1 text-[13px] leading-relaxed">
                    <p className="text-secondary-fixed">
                      [INFO] Initializing Ingest Session: Tenant=KenyaCommercialBank_CoreV4
                    </p>
                    <p className="text-on-primary-container">
                      [SECURE] In-Memory Memory Fence Activated (0x7ffe42a9b)
                    </p>
                    <p className="text-on-primary-container">
                      [AUDIT] Section 48 DPA 2019 Tokenizer: 4,120,400 records scrubbed in 2.14s
                    </p>
                    <p className="text-on-primary-container">
                      [COMPUTE] Tensor Execution on Local A100 Nodes (Nairobi_Zone_Alpha)
                    </p>
                    <p className="text-secondary-fixed-dim">
                      [SIGNING] Issuing PKI Certification Seal: serialNumber=00:EA:41:9B:02:88:C1
                    </p>
                    <p className="text-surface-bright font-bold">
                      [VERIFIED] Model Weights Locked. Cryptographic Lineage Manifest: RCFI-L-2026-X4
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Candidate Profile & Career Transformation */}
          <section className="w-full bg-surface-bright py-space-xl">
            <div className="max-w-7xl mx-auto px-margin grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest">
                  // ADMISSIONS TARGET // FELLOW PROFILE
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  {" Designed for Builders at Critical Regional Junctions "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {" The Applied Data & AI Programme is not for entry-level hobbyists. We recruit technologists charged with delivering mission-critical analytics inside highly regulated environments. "}
                </p>
                {/* Secondary Visual Placeholder: Classroom / High-tech Collaboration */}
                <div className="relative w-full h-52 rounded-xl overflow-hidden shadow-sm mt-space-xs">
                  <img className="w-full h-full object-cover" data-alt="Senior African data engineers and tech leaders in a modern glass conference room in Nairobi analyzing machine learning pipelines on high resolution monitors with green code interfaces" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_Z77BoUPxlvxFvnpP7ajH0J2w7EU_UDWhY-GfQSGqDHgEe_4mkzsLwZ__Uwek8m-XHSO_HQh9ukn3PJKU0lT16kWuOM-3nV6CgqM2bveOnONXkLW3s8WlrqAIicCErdFAXDsdlBcgzKPjSCQojiMv6A9O2e9MYButjaA2dnEP1pnRvNTbLws9igElE_VVyyp81zvyZnjsxCCg0JHI0zHZ2HJJLCP5tQh5BjlrV4p-hqpLhjxwxqNT" />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-surface/90 text-primary font-label-sm text-label-sm font-bold">
                    {" Cohort 03 Capstone Review Session "}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs">
                  <span className="w-8 h-8 rounded bg-surface-container text-primary flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[20px]">
                      analytics
                    </span>
                  </span>
                  <h4 className="font-title-md text-title-md text-primary font-bold">
                    Senior Data Analysts
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Transitioning from descriptive SQL/dashboarding to building production ML pipelines and sovereign ML systems.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs">
                  <span className="w-8 h-8 rounded bg-surface-container text-primary flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[20px]">
                      precision_manufacturing
                    </span>
                  </span>
                  <h4 className="font-title-md text-title-md text-primary font-bold">
                    Machine Learning Engineers
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Seeking to master in-country hardware optimizations, low-latency API serving, and cryptographic compliance audits.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs">
                  <span className="w-8 h-8 rounded bg-surface-container text-primary flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[20px]">
                      account_balance
                    </span>
                  </span>
                  <h4 className="font-title-md text-title-md text-primary font-bold">
                    {"BI & Data Architects"}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Leading institutional data modernization programs with strict data residency mandates and zero overseas transit.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs">
                  <span className="w-8 h-8 rounded bg-surface-container text-primary flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[20px]">
                      security
                    </span>
                  </span>
                  <h4 className="font-title-md text-title-md text-primary font-bold">
                    {"Quant Risk & Compliance Officers"}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Mandated with evaluating automated decision-making engines for algorithmic bias, explainability, and ODPC adherence.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Admissions & Registration Workspace */}
          <section className="w-full bg-surface-container py-space-xl" id="register">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
                {/* Application Left Callout */}
                <div className="lg:col-span-5 bg-primary text-on-primary p-space-xl flex flex-col justify-between">
                  <div className="flex flex-col gap-space-md">
                    <span className="font-mono text-secondary-fixed text-label-sm font-bold tracking-widest">
                      // REGISTRATION PORTAL
                    </span>
                    <h3 className="font-headline-lg text-headline-lg text-surface-bright tracking-tight">
                      {" Cohort 04 Admissions "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                      {" Admissions operate on a rolling evaluation schedule. Fellows are admitted upon technical screening and institutional sponsorship verification. "}
                    </p>
                    <div className="flex flex-col gap-space-sm pt-space-sm">
                      <div className="flex items-center gap-space-xs font-body-md text-body-md">
                        <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                          event
                        </span>
                        <span>
                          Cohort Commencement: October 2026
                        </span>
                      </div>
                      <div className="flex items-center gap-space-xs font-body-md text-body-md">
                        <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                          schedule
                        </span>
                        <span>
                          Format: 10 Weeks • Hybrid Weekend Workshops
                        </span>
                      </div>
                      <div className="flex items-center gap-space-xs font-body-md text-body-md">
                        <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                          groups
                        </span>
                        <span>
                          Seats Available: 7 of 20 Remaining
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* NITA Levy Endorsement Badge */}
                  <div className="mt-space-lg p-space-md rounded-xl bg-primary-container/60 flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-secondary-fixed text-[24px]">
                      verified
                    </span>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-surface-bright font-semibold">
                        NITA Accredited Provider
                      </span>
                      <span className="text-[12px] text-on-primary-container">
                        {" Kenyan corporate employers are eligible for 100% training levy reimbursement through the National Industrial Training Authority. "}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Registration Interactive Form */}
                <div className="lg:col-span-7 p-space-xl flex flex-col justify-center">
                  <form className="flex flex-col gap-space-md" id="admissions-form" data-rcfi-onsubmit="event.preventDefault(); document.getElementById('success-msg').classList.remove('hidden');">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="fullName">
                          Full Legal Name
                        </label>
                        <input className="w-full h-11 px-3.5 rounded-lg bg-surface-bright text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary" id="fullName" placeholder="e.g. Dr. Amani Mwangi" required type="text" />
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="workEmail">
                          Official Work Email
                        </label>
                        <input className="w-full h-11 px-3.5 rounded-lg bg-surface-bright text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary" id="workEmail" placeholder="amani.mwangi@institution.co.ke" required type="email" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="orgType">
                          Institutional Sector
                        </label>
                        <select className="w-full h-11 px-3.5 rounded-lg bg-surface-bright text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary" id="orgType">
                          <option>
                            Tier 1/2 Commercial Bank
                          </option>
                          <option>
                            {"Telecommunications & Fintech Operator"}
                          </option>
                          <option>
                            Public Health Governance Body
                          </option>
                          <option>
                            Government Ministry / Parastatal
                          </option>
                          <option>
                            Independent Enterprise
                          </option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="experienceLevel">
                          Python / SQL Experience
                        </label>
                        <select className="w-full h-11 px-3.5 rounded-lg bg-surface-bright text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary" id="experienceLevel">
                          <option>
                            2 - 4 Years Production Experience
                          </option>
                          <option>
                            5 - 8 Years Senior Engineering
                          </option>
                          <option>
                            8+ Years Lead / Architectural
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="profileLink">
                        LinkedIn or GitHub Profile
                      </label>
                      <input className="w-full h-11 px-3.5 rounded-lg bg-surface-bright text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary" id="profileLink" placeholder="https://linkedin.com/in/amani-mwangi" required type="url" />
                    </div>
                    <div className="flex items-start gap-space-xs pt-space-xs">
                      <input className="mt-1 w-4 h-4 rounded text-secondary focus:ring-secondary" id="dpaConsent" required type="checkbox" />
                      <label className="font-body-md text-body-md text-on-surface-variant text-[13px]" htmlFor="dpaConsent">
                        {" I consent to RCFI processing my application data strictly within Kenya in compliance with the Data Protection Act 2019. "}
                      </label>
                    </div>
                    <button className="w-full py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-title-md text-title-md font-bold transition-all shadow-md" type="submit">
                      {" Submit Cohort 04 Application "}
                    </button>
                    {/* Inline Success Alert (Initially Hidden) */}
                    <div className="hidden p-space-md rounded-lg bg-secondary-container text-on-secondary-container font-body-md text-body-md flex items-center gap-space-xs" id="success-msg">
                      <span className="material-symbols-outlined text-[20px]">
                        check_circle
                      </span>
                      <span>
                        Application received. The Academy Admissions Board will contact your verified work email within 48 hours.
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* Interactive Terminal Switcher Logic */}
        </div>
      </main>
      <footer className="w-full bg-primary text-on-primary border-t border-primary-container/60">
        <div className="max-w-7xl mx-auto px-margin pt-space-xl pb-space-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-md text-headline-md text-secondary-fixed tracking-tight font-bold">
                  RCFI
                </span>
              </div>
              <p className="text-on-primary-container font-body-md text-body-md leading-relaxed">
                Reprodrive Center for Innovation Limited. Pan-African digital trust infrastructure, cryptographic assurance, and enterprise academy ecosystem.
              </p>
              <div className="flex flex-col gap-space-xs pt-space-xs font-label-sm text-label-sm text-tertiary-fixed-dim">
                <div className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                  <span>
                    CAK Licensed ECSP (TL/E-CSP 00014)
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                  <span>
                    ISO 27001:2022 Certified
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                  <span>
                    Kenya DPA Compliant Operator
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-surface-bright font-semibold tracking-wide">
                {"Practices & Services"}
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="services-trust-pki" href="/services/digital-trust-pki/">
                    {"Digital Trust & PKI"}
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="services-cybersecurity" href="/services/cybersecurity-assurance/">
                    {"Cybersecurity & Assurance"}
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="services-health-governance" href="/services/digital-health-governance/">
                    Digital Health Governance
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="services-data-ai" href="/services/data-analytics-ai/">
                    {"Data, Analytics & AI"}
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="services-cloud-engineering" href="/services/digital-cloud-engineering/">
                    {"Digital & Cloud Engineering"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-surface-bright font-semibold tracking-wide">
                Sovereign Platforms
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="product-certysign" href="/products/certysign/">
                    CertySign Platform
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="product-elano" href="/products/elano/">
                    Elano Enterprise
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="product-prezio" href="/products/prezio/">
                    Prezio Identity
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="repository-cps" href="/trust/">
                    Certification Practice Statement
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="verify-document" href="/verify/">
                    Document Validation Hub
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-surface-bright font-semibold tracking-wide">
                {"Academy & Insights"}
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="academy-overview" href="/academy/">
                    Academy Programs
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="academy-health-interoperability" href="/services/digital-health-governance/">
                    Health Interoperability
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="insights-the-trust-layer" href="/insights/">
                    The Trust Layer Journal
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="insights-sovereignty-series" href="/insights/">
                    The Sovereignty Series
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="insights-knowledge-hub" href="/insights/">
                    {"Knowledge Hub & RFCs"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-surface-bright font-semibold tracking-wide">
                {"Trust & Compliance"}
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="trust-center" href="/trust/">
                    {"Security & Trust Portal"}
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="ca-repository" href="/trust/">
                    CA Public Repository
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="compliance-audit" href="/trust/">
                    Third-Party SOC/ISO Audits
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="legal-privacy" href="/privacy/">
                    {"Data Protection & Privacy"}
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="responsible-disclosure" href="/trust/">
                    Vulnerability Disclosure
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-space-xl pt-space-md border-t border-primary-container/50 flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-primary-container font-label-md text-label-md">
            <div className="flex items-center gap-space-xs text-center md:text-left">
              <span>
                5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya.
              </span>
            </div>
            <div className="text-center md:text-right">
              © 2026 Reprodrive Center for Innovation Limited (RCFI). All sovereign rights reserved.
            </div>
          </div>
        </div>
      </footer>
      <PageScripts scripts={scripts} />
    </div>
  );
}
