import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/verify/page.css";
import "@/styles/pages/verify/late.css";

export const metadata: Metadata = { title: "Verify a Document | RCFI" };

export default function VerifyPage() {
  return (
    <div className="rcfi-verify" style={{ display: "contents" }}>
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
              <img alt="RCFI Mosaic tile logo Reprodrive Center for Innovation Limited" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
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
              <Link className="px-space-sm py-space-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" data-path="ecosystem" href="/ecosystem/">
                Ecosystem
              </Link>
              <Link className="px-space-sm py-space-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" data-path="trust-center" href="/trust/">
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
          {/* Interactive Background Glow & Geometric Canvas */}
          <div className="relative w-full overflow-hidden pb-16">
            {/* Ambient cryptographic watermark decoration */}
            <div className="absolute -top-24 right-0 w-[580px] h-[580px] bg-secondary-container/20 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-96 -left-32 w-[480px] h-[480px] bg-primary-container/15 rounded-full blur-3xl pointer-events-none -z-10" />
            {/* Hero Header Component */}
            <section className="max-w-7xl mx-auto px-margin pt-6 sm:pt-10">
              <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                {/* Live Status Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-container text-secondary-fixed font-label-md text-label-md mb-6 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-fixed" />
                  </span>
                  <span>
                    {"Public Verification Service · Free & Instant"}
                  </span>
                </div>
                <h1 className="font-display-lg text-display-lg sm:text-[56px] text-primary tracking-tight font-bold leading-tight">
                  {" Check anything we’ve certified. "}
                  <span className="text-secondary underline decoration-secondary-container decoration-4 underline-offset-8">
                    Free. No account.
                  </span>
                </h1>
                <p className="mt-6 font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  {" Anyone, anywhere can verify an RCFI or CertySign issued credential, certificate, or signed document in milliseconds. Tampering shows instantly, cryptographically backed by Kenya's National PKI. "}
                </p>
                {/* Trust Badges Under Header */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-on-surface-variant font-label-sm text-label-sm">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      verified_user
                    </span>
                    {" CAK Root CA Anchored "}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      fingerprint
                    </span>
                    {" Zero Document Upload Required "}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      history_edu
                    </span>
                    {" Kenya DPA Compliant "}
                  </span>
                </div>
              </div>
              {/* Core Verification Engine Module */}
              <div className="mt-12 bg-surface-container-lowest rounded-2xl shadow-xl p-6 sm:p-10 relative overflow-hidden">
                {/* Accent top bar decoration */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary-container via-secondary to-primary-container" />
                {/* Verification Method Selector Tabs */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-surface-container">
                  <div className="inline-flex p-1.5 bg-surface-container-low rounded-xl w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-label-md text-label-md transition-all bg-primary text-on-primary shadow-sm font-semibold" id="tab-id-btn" data-rcfi-onclick="switchTab('id')">
                      <span className="material-symbols-outlined text-[18px]">
                        pin
                      </span>
                      {" Verify by Document ID / Serial Number "}
                    </button>
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-label-md text-label-md transition-all text-on-surface-variant hover:text-primary font-semibold" id="tab-file-btn" data-rcfi-onclick="switchTab('file')">
                      <span className="material-symbols-outlined text-[18px]">
                        upload_file
                      </span>
                      {" Upload Signed PDF / Scan QR Code "}
                    </button>
                  </div>
                  <div className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary" />
                    {" Real-time OCSP / CRL responder: "}
                    <strong className="text-primary font-mono">
                      ONLINE (4ms)
                    </strong>
                  </div>
                </div>
                {/* Tab Panel 1: Document ID / Serial */}
                <div className="mt-8" id="panel-id">
                  <form className="space-y-4" data-rcfi-onsubmit="event.preventDefault(); simulateVerify('valid');">
                    <label className="block font-title-md text-title-md text-primary font-semibold" htmlFor="doc-identifier">
                      {" Enter Document Hash, Serial Number, or CertySign ID "}
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                          <span className="material-symbols-outlined text-[20px]">
                            search_check
                          </span>
                        </div>
                        <input className="w-full h-14 pl-12 pr-4 bg-surface-container-low text-on-surface rounded-xl font-mono text-sm focus:outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all" id="doc-identifier" placeholder="e.g. KES-2026-88914-ECSP or e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" type="text" defaultValue="KES-2026-88914-ECSP" />
                      </div>
                      <button className="h-14 px-8 rounded-xl bg-secondary text-on-secondary hover:bg-primary transition-all flex items-center justify-center gap-2 font-title-md text-title-md font-bold shadow-md hover:shadow-lg shrink-0 cursor-pointer" type="submit">
                        <span>
                          Verify Now
                        </span>
                        <span className="material-symbols-outlined text-[20px]">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </form>
                  {/* Fast Preset Samples for Testing */}
                  <div className="mt-4 flex flex-wrap items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                    <span className="font-semibold text-primary">
                      Live Test Cases:
                    </span>
                    <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-primary hover:text-on-primary transition-colors text-primary font-mono" data-rcfi-onclick="setSample('KES-2026-88914-ECSP', 'valid')">
                      Valid CAK Cert
                    </button>
                    <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-error hover:text-on-error transition-colors text-on-surface-variant font-mono" data-rcfi-onclick="setSample('KES-2026-00441-TAMPER', 'tampered')">
                      Tampered Payload
                    </button>
                    <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-outline hover:text-on-primary transition-colors text-on-surface-variant font-mono" data-rcfi-onclick="setSample('KES-UNKNOWN-99120-X', 'notfound')">
                      Unregistered Hash
                    </button>
                  </div>
                </div>
                {/* Tab Panel 2: File Upload / QR (Hidden by default) */}
                <div className="mt-8 hidden" id="panel-file">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Drag and Drop Box */}
                    <div className="flex-1 p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer flex flex-col items-center justify-center text-center group" data-rcfi-onclick="simulateVerify('valid')">
                      <div className="w-16 h-16 rounded-2xl bg-primary text-on-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-md">
                        <span className="material-symbols-outlined text-[32px]">
                          picture_as_pdf
                        </span>
                      </div>
                      <p className="font-title-md text-title-md text-primary font-bold">
                        Drop your signed PDF here
                      </p>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        {"Hash is calculated client-side in browser memory. "}
                        <strong className="text-secondary">
                          Your document never leaves your device.
                        </strong>
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md font-semibold shadow-sm">
                        <span className="material-symbols-outlined text-[16px]">
                          folder_open
                        </span>
                        {" Browse Signed Document "}
                      </span>
                    </div>
                    {/* QR Code Scan Box */}
                    <div className="w-full md:w-72 p-6 rounded-2xl bg-surface-container flex flex-col items-center justify-center text-center">
                      <div className="w-14 h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center mb-3 shadow-sm">
                        <span className="material-symbols-outlined text-[28px] text-secondary">
                          qr_code_scanner
                        </span>
                      </div>
                      <h2 className="font-title-md text-title-md text-primary font-bold">
                        Camera QR Scan
                      </h2>
                      <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                        Scan the tamper-evident RCFI QR imprint printed on physical documents.
                      </p>
                      <button className="mt-4 w-full py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container transition-colors flex items-center justify-center gap-1.5" data-rcfi-onclick="simulateVerify('valid')">
                        <span className="material-symbols-outlined text-[16px]">
                          videocam
                        </span>
                        {" Launch Scanner "}
                      </button>
                    </div>
                  </div>
                </div>
                {/* Verification Results Dashboard Component */}
                <div className="mt-10 pt-8 border-t border-surface-container">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-title-md text-title-md text-primary font-bold">
                        Cryptographic Evaluation State
                      </span>
                      <span className="text-outline-variant font-label-sm text-label-sm">
                        • Interactive Preview Switcher:
                      </span>
                    </div>
                    {/* Toggle buttons for mockup states */}
                    <div className="inline-flex rounded-lg bg-surface-container p-1 text-xs">
                      <button className="px-3 py-1 rounded font-semibold transition-colors bg-primary text-on-primary" id="btn-state-valid" data-rcfi-onclick="setSimState('valid')">
                        1. Valid
                      </button>
                      <button className="px-3 py-1 rounded font-semibold transition-colors text-on-surface-variant hover:text-primary" id="btn-state-tampered" data-rcfi-onclick="setSimState('tampered')">
                        2. Tampered
                      </button>
                      <button className="px-3 py-1 rounded font-semibold transition-colors text-on-surface-variant hover:text-primary" id="btn-state-notfound" data-rcfi-onclick="setSimState('notfound')">
                        3. Not Found
                      </button>
                    </div>
                  </div>
                  {/* STATE 1: VALID (Default) */}
                  <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 shadow-sm" id="state-valid">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-surface-container">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary-container text-primary flex items-center justify-center shrink-0 shadow-sm">
                          <span className="material-symbols-outlined text-[28px] font-bold" style={{ "fontVariationSettings": "'FILL' 1" }}>
                            verified
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                              {" Cryptographically Valid & Tamper-Evident "}
                            </span>
                            <span className="text-on-surface-variant font-label-sm text-label-sm">
                              Cert # 44091-E-CAK
                            </span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">
                            National PKI Integrity Verified
                          </h3>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            The digital signature matches the exact certificate hierarchy registered with the Communications Authority of Kenya.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <Link className="px-4 py-2 rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors font-label-md text-label-md font-semibold flex items-center gap-1.5" href="/trust/">
                          <span className="material-symbols-outlined text-[16px]">
                            download
                          </span>
                          {" Certificate Chain (.p7b) "}
                        </Link>
                        <Link className="px-4 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-colors font-label-md text-label-md font-semibold flex items-center gap-1.5" href="/trust/">
                          <span className="material-symbols-outlined text-[16px]">
                            print
                          </span>
                          {" Audit Attestation "}
                        </Link>
                      </div>
                    </div>
                    {/* Detail Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 font-body-md text-body-md">
                      <div className="p-4 rounded-xl bg-surface-container-low">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">
                          Authenticated Signer
                        </span>
                        <p className="font-semibold text-primary">
                          Ian Kigen Kisorio
                        </p>
                        <p className="font-label-sm text-label-sm text-secondary font-medium mt-0.5">
                          CEO, RCFI Technology (Qualified Cert)
                        </p>
                        <p className="font-mono text-xs text-on-surface-variant mt-2">
                          ID: KES-PP-A00918481
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-surface-container-low">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">
                          Certification Authority
                        </span>
                        <p className="font-semibold text-primary">
                          RCFI Intermediate CA v2
                        </p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                          CAK Root Lic: TL/E-CSP 00014
                        </p>
                        <div className="flex items-center gap-1 mt-2 text-secondary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">
                            lock
                          </span>
                          {" Chain Valid to Root CA "}
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-surface-container-low">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">
                          RFC 3161 Qualified Timestamp
                        </span>
                        <p className="font-semibold text-primary">
                          15 Sep 2026 · 10:42:18 EAT
                        </p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                          Kenya Bureau of Standards Sync
                        </p>
                        <p className="font-mono text-xs text-secondary font-medium mt-2">
                          Offset: ±0.002ms accuracy
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-surface-container-low">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">
                          SHA-256 Digest Match
                        </span>
                        <p className="font-mono text-xs text-primary font-bold truncate" title="b3f81e84a92c47895e63013d3326ad7818e38525b6823525287f31cfa003eec9">
                          {" b3f81e84a92c47895e63013d3326... "}
                        </p>
                        <p className="font-label-sm text-label-sm text-secondary font-semibold mt-1">
                          Verified on National Ledger
                        </p>
                        <span className="inline-flex items-center gap-1 text-[11px] text-on-surface-variant mt-2 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          {" 0 alterations detected "}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* STATE 2: TAMPERED (Alert) */}
                  <div className="bg-error-container/20 rounded-xl p-6 sm:p-8 hidden" id="state-tampered">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-error text-on-error flex items-center justify-center shrink-0 shadow-sm">
                        <span className="material-symbols-outlined text-[28px] font-bold" style={{ "fontVariationSettings": "'FILL' 1" }}>
                          gpp_bad
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm font-bold uppercase tracking-wider">
                            {" Tampered / Signature Invalid "}
                          </span>
                          <span className="text-error font-label-sm text-label-sm font-mono font-bold">
                            ERR_DIGEST_MISMATCH_0x9A
                          </span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-error font-bold mt-2">
                          Cryptographic digest mismatch detected
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-3xl">
                          {" Document content was modified after signing. Because cryptographic signatures bind the exact raw bitstream of the certified file, even modifying one single space, metadata entry, or pixel invalidates the integrity proof instantly. "}
                        </p>
                        {/* Comparison box */}
                        <div className="mt-6 p-4 rounded-xl bg-surface-container-lowest grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                          <div>
                            <span className="text-on-surface-variant font-sans font-semibold block mb-1">
                              Original Signed Digest:
                            </span>
                            <p className="p-2 rounded bg-surface-container text-primary break-all">
                              f42c75a020be8b7b253fa28df77f7223b5d38a08...
                            </p>
                          </div>
                          <div>
                            <span className="text-error font-sans font-semibold block mb-1">
                              Computed Hash from Supplied Payload:
                            </span>
                            <p className="p-2 rounded bg-error-container/50 text-error font-bold break-all">
                              f42c75a020be8b7b253fa28df77f7223b5d38a99 [FAILED BYTE AT 0x3FC]
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-4">
                          <span className="font-label-sm text-label-sm text-error font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">
                              warning
                            </span>
                            {" Do not execute or accept this document for statutory reliance. "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* STATE 3: NOT FOUND */}
                  <div className="bg-surface-container rounded-xl p-6 sm:p-8 hidden" id="state-notfound">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-tertiary text-on-primary flex items-center justify-center shrink-0 shadow-sm">
                        <span className="material-symbols-outlined text-[28px] font-bold">
                          search_off
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="inline-block px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold uppercase tracking-wider mb-1">
                          {" Identifier Unregistered "}
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                          No Certificate Found for this Reference
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-2xl">
                          {" The document ID or hash you submitted has not been published to the RCFI Certified Repository or Kenya Communications Authority CRL. "}
                        </p>
                        <div className="mt-4 p-4 rounded-xl bg-surface-container-lowest max-w-xl">
                          <h4 className="font-label-md text-label-md font-bold text-primary mb-2">
                            Recommended Checks:
                          </h4>
                          <ul className="list-disc pl-5 font-body-md text-body-md text-on-surface-variant space-y-1">
                            <li>
                              {"Confirm that you included the full prefix (e.g., "}
                              <code className="font-mono text-primary font-semibold">
                                KES-2026-...
                              </code>
                              ).
                            </li>
                            <li>
                              If verifying a foreign electronic signature, verify through that jurisdiction's national trust registry.
                            </li>
                            <li>
                              For certificates issued within the last 5 minutes, sync propagation may take up to 60 seconds.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Canonical Statistics Strip */}
            <section className="max-w-7xl mx-auto px-margin mt-16">
              <div className="bg-primary text-on-primary rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-lg">
                {/* SVG Data Stream Ambient Accents */}
                <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
                  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <defs>
                      {" "}
                      <pattern height="40" id="grid-pki" patternUnits="userSpaceOnUse" width="40">
                        {" "}
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        {" "}
                      </pattern>
                      {" "}
                    </defs>
                    {" "}
                    <rect fill="url(#grid-pki)" height="100%" width="100%" />
                    {" "}
                  </svg>
                </div>
                <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-tertiary-container">
                  <div className="pt-4 lg:pt-0">
                    <span className="font-display-lg text-display-lg sm:text-[44px] text-secondary-fixed font-bold block">
                      50K+
                    </span>
                    <span className="font-label-md text-label-md text-tertiary-fixed-dim uppercase tracking-wider block mt-1">
                      Signatures Verified
                    </span>
                    <p className="font-body-md text-body-md text-surface-container-highest mt-1">
                      Executed on CertySign
                    </p>
                  </div>
                  <div className="pt-4 lg:pt-0 lg:pl-8">
                    <span className="font-display-lg text-display-lg sm:text-[44px] text-secondary-fixed font-bold block">
                      10,000+
                    </span>
                    <span className="font-label-md text-label-md text-tertiary-fixed-dim uppercase tracking-wider block mt-1">
                      Certificates Issued
                    </span>
                    <p className="font-body-md text-body-md text-surface-container-highest mt-1">
                      Under CAK Lic TL/E-CSP 00014
                    </p>
                  </div>
                  <div className="pt-4 lg:pt-0 lg:pl-8">
                    <span className="font-display-lg text-display-lg sm:text-[44px] text-secondary-fixed font-bold block">
                      99.9%
                    </span>
                    <span className="font-label-md text-label-md text-tertiary-fixed-dim uppercase tracking-wider block mt-1">
                      Verification Accuracy
                    </span>
                    <p className="font-body-md text-body-md text-surface-container-highest mt-1">
                      Zero False Trust Acceptances
                    </p>
                  </div>
                  <div className="pt-4 lg:pt-0 lg:pl-8">
                    <span className="font-display-lg text-display-lg sm:text-[44px] text-secondary-fixed font-bold block">
                      100%
                    </span>
                    <span className="font-label-md text-label-md text-tertiary-fixed-dim uppercase tracking-wider block mt-1">
                      Kenyan Data Sovereignty
                    </span>
                    <p className="font-body-md text-body-md text-surface-container-highest mt-1">
                      {"Local HSMs & In-Country OCSP"}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* How Verification Works Section (3 Plain-Language Steps) */}
            <section className="max-w-7xl mx-auto px-margin mt-20">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-secondary font-label-md text-label-md font-bold uppercase tracking-wider">
                  Cryptographic Mechanism
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-2">
                  How verification works in 3 plain-language steps
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
                  {" Behind every instant confirmation is an unshakeable mathematical proof governed by ISO 27001 standards and Kenya's regulatory guidelines. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Step 1 Card */}
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="w-12 h-12 rounded-xl bg-surface-container text-primary font-display-lg text-display-lg flex items-center justify-center font-bold">
                        {" 01 "}
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[28px]">
                        lock_clock
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold">
                      Compute Hash
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" The file's unique cryptographic fingerprint (SHA-256) is generated locally on your machine. Your private documents never travel across external networks unencrypted. "}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-surface-container flex items-center gap-2 text-on-surface-variant font-mono text-xs">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    {" 256-bit irreversibility "}
                  </div>
                </div>
                {/* Step 2 Card */}
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="w-12 h-12 rounded-xl bg-surface-container text-primary font-display-lg text-display-lg flex items-center justify-center font-bold">
                        {" 02 "}
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[28px]">
                        account_balance
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold">
                      Check Authority
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" The signature certificate is validated up to the Communications Authority of Kenya Root CA and queried against live real-time OCSP and Certificate Revocation Lists (CRL). "}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-surface-container flex items-center gap-2 text-on-surface-variant font-mono text-xs">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    {" Root Certificate Trust Chain "}
                  </div>
                </div>
                {/* Step 3 Card */}
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="w-12 h-12 rounded-xl bg-surface-container text-primary font-display-lg text-display-lg flex items-center justify-center font-bold">
                        {" 03 "}
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[28px]">
                        timeline
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold">
                      {"Confirm Integrity & Timestamp"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" An independent RFC 3161 certified hardware timestamp verifies the exact second the transaction became legal and binding, providing tamper-evident court admissability. "}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-surface-container flex items-center gap-2 text-on-surface-variant font-mono text-xs">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    {" Admissible under Kenya Evidence Act "}
                  </div>
                </div>
              </div>
            </section>
            {/* Visual Architecture & Technical Spec Showcase */}
            <section className="max-w-7xl mx-auto px-margin mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-low rounded-3xl p-8 sm:p-12">
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary font-semibold">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      security
                    </span>
                    {" National Cryptographic Standard "}
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold leading-tight">
                    {" Designed for institutional scrutiny and cross-border recognition. "}
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    {" RCFI certificates are verified directly against root authority keys provisioned within sovereign FIPS 140-2 Level 3 hardware security modules (HSMs). Each validation delivers an auditable proof bundle compatible with international electronic signature frameworks. "}
                  </p>
                  <div className="space-y-3 font-body-md text-body-md text-on-surface">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-secondary-container text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[16px] font-bold">
                          check
                        </span>
                      </span>
                      <span>
                        {"Fully compliant with the "}
                        <strong>
                          Kenya Data Protection Act 2019
                        </strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-secondary-container text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[16px] font-bold">
                          check
                        </span>
                      </span>
                      <span>
                        {"Recognized under "}
                        <strong>
                          eIDAS Qualified Electronic Signature (QES)
                        </strong>
                        {" equivalents"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-secondary-container text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[16px] font-bold">
                          check
                        </span>
                      </span>
                      <span>
                        {"Direct root pinning with "}
                        <strong>
                          National PKI Root Certification Authority
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Visual Architecture Graphic */}
                <div className="lg:col-span-6">
                  <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                      <span className="font-label-sm text-label-sm font-bold text-on-surface-variant uppercase">
                        PKI Verification Ladder
                      </span>
                      <span className="font-mono text-xs text-secondary font-semibold">
                        STATUS: ANCHORED
                      </span>
                    </div>
                    {/* Tier 1 */}
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-surface-container-low">
                      <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          assured_workload
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-title-md text-title-md text-primary font-bold">
                          Communications Authority Root CA
                        </p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          Kenya Sovereign National Root Certification Authority
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        check_circle
                      </span>
                    </div>
                    {/* Flow Connector */}
                    <div className="flex justify-center -my-2 text-outline-variant">
                      <span className="material-symbols-outlined text-[20px]">
                        south
                      </span>
                    </div>
                    {/* Tier 2 */}
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-surface-container-low">
                      <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          hub
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-title-md text-title-md text-primary font-bold">
                          RCFI Licensed ECSP Intermediate
                        </p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          License: TL/E-CSP 00014 · ISO 27001 Certified
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        check_circle
                      </span>
                    </div>
                    {/* Flow Connector */}
                    <div className="flex justify-center -my-2 text-outline-variant">
                      <span className="material-symbols-outlined text-[20px]">
                        south
                      </span>
                    </div>
                    {/* Tier 3 */}
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-secondary-container/30">
                      <div className="w-10 h-10 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          description
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-title-md text-title-md text-primary font-bold">
                          Verified End-Entity Document / Certificate
                        </p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          {"SHA-256 Digest Match & RFC 3161 Qualified Timestamp"}
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Enterprise Integration / API Developer Callout Strip */}
            <section className="max-w-7xl mx-auto px-margin mt-20">
              <div className="bg-primary text-on-primary rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
                <div className="space-y-3 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-secondary-fixed font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">
                      terminal
                    </span>
                    {" High-Throughput REST APIs "}
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold leading-tight">
                    {" Need automated verification in your enterprise ERP, HR, or national portal? "}
                  </h2>
                  <p className="font-body-lg text-body-lg text-tertiary-fixed-dim">
                    {" Automate mass document ingestion, compliance audits, and instant verification queries with our low-latency JSON REST endpoints, complete with webhook dispatch. "}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
                  <Link className="px-6 py-3.5 rounded-xl bg-secondary text-on-secondary hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all font-title-md text-title-md font-bold flex items-center justify-center gap-2 shadow-lg" href="/verify/">
                    <span>
                      Explore Verification APIs
                    </span>
                    <span className="material-symbols-outlined text-[20px]">
                      arrow_forward
                    </span>
                  </Link>
                  <a className="px-6 py-3.5 rounded-xl bg-primary-container text-on-primary hover:bg-tertiary-container transition-all font-title-md text-title-md font-semibold flex items-center justify-center gap-2" href="#">
                    <span className="material-symbols-outlined text-[20px]">
                      menu_book
                    </span>
                    <span>
                      API Docs
                    </span>
                  </a>
                </div>
              </div>
            </section>
          </div>
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
