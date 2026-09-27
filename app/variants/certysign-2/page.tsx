import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/pages/variants-certysign-2/page.css";

export const metadata: Metadata = { title: "CertySign (variant 2) | RCFI" };

export default function VariantsCertysign2Page() {
  return (
    <div className="rcfi-variants-certysign-2" style={{ display: "contents" }}>
      <header className="fixed top-0 w-full z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="w-full bg-primary-container text-on-primary font-label-sm text-label-sm h-10 px-margin">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
            <div className="flex items-center gap-space-md overflow-x-auto whitespace-nowrap py-1">
              <span className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                ISO 27001 Certified
              </span>
              <span className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                CAK Licensed ECSP
              </span>
              <span className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                Kenya DPA Compliant
              </span>
            </div>
            <div className="flex items-center gap-space-md">
              <a className="flex items-center gap-space-xs text-on-primary hover:text-secondary-fixed transition-colors" href="mailto:info@rcfi.co.ke">
                <span className="material-symbols-outlined text-[14px]">
                  mail
                </span>
                info@rcfi.co.ke
              </a>
            </div>
          </div>
        </div>
        <div className="w-full bg-surface-container-lowest h-20 px-margin">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <a className="flex items-center gap-space-sm" data-path="home" href="#">
                <img alt="Exact replica of the real RCFI logo as shown in the screenshot: A pixelated / tiled mosaic icon on the left with 4 rounded square tiles in forest green and teal forming a dynamic cluster or cross, followed by bold dark green sans-serif uppercase text 'RCFI', and below it in smaller clean sans-serif text 'Reprodrive Center for Innovation Limited'. Clean transparent or white background.. Brand logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
              </a>
            </div>
            <nav className="hidden lg:flex items-center gap-space-md h-full" data-active-classes="text-primary font-title-md relative after:content-[''] after:absolute after:bottom-[-26px] after:left-0 after:w-full after:h-0.5 after:bg-secondary">
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" data-path="home" href="/">
                Home
              </Link>
              <Link aria-current="page" className="transition-colors text-primary font-title-md relative after:content-[''] after:absolute after:bottom-[-26px] after:left-0 after:w-full after:h-0.5 after:bg-secondary" data-path="certysign" href="/products/certysign/">
                CertySign
              </Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" data-path="elano" href="/products/elano/">
                Elano
              </Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" data-path="prezio" href="/products/prezio/">
                Prezio
              </Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" data-path="health-security" href="/health-security/">
                Health Security
              </Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" data-path="about" href="/about/">
                About
              </Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" data-path="careers" href="/careers/">
                Careers
              </Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" data-path="contact" href="/contact/">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-space-sm">
              <a className="hidden sm:inline-flex items-center justify-center px-space-md py-space-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-[120px] bg-surface">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="relative w-full bg-primary overflow-hidden text-on-primary py-space-xl lg:py-28">
            {/* Atmospheric Ambient Mesh & Light Orbs */}
            <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,#006c49,transparent_70%)]" />
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-container/30 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[100px] pointer-events-none" />
            {/* Subtle Technical Grid Lines */}
            {" "}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              {" "}
              <defs>
                {" "}
                <pattern height="48" id="hero-grid" patternUnits="userSpaceOnUse" width="48">
                  {" "}
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.75" />
                  {" "}
                </pattern>
                {" "}
              </defs>
              {" "}
              <rect fill="url(#hero-grid)" height="100%" width="100%" />
              {" "}
            </svg>
            <div className="relative max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                {/* Hero Left Column: Narrative & Action */}
                <div className="lg:col-span-6 flex flex-col gap-space-lg">
                  {/* Compliance Verification Micro-chip */}
                  <div className="inline-flex items-center gap-space-xs self-start px-3 py-1 rounded-full bg-primary-container/80 text-secondary-fixed font-label-sm text-label-sm shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                    <span>
                      Licensed Electronic Certification Service Provider (ECSP)
                    </span>
                  </div>
                  {/* Main Hero Title */}
                  <h1 className="font-display-lg text-display-lg tracking-tight text-on-primary">
                    {" Sign with certainty "}
                  </h1>
                  {/* Supporting Pitch */}
                  <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl">
                    {" Create legally binding digital signatures, verify identities, and manage documents — on one platform. "}
                  </p>
                  {/* Dual Call to Actions */}
                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    <a className="inline-flex items-center justify-center gap-space-xs px-6 py-3.5 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-[15px] font-semibold hover:bg-secondary-fixed transition-all shadow-md transform hover:-translate-y-0.5" href="https://certysign.io" rel="noopener noreferrer" target="_blank">
                      <span>
                        Start Free at certysign.io
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </a>
                    <a className="inline-flex items-center justify-center gap-space-xs px-6 py-3.5 rounded-full bg-surface-container-lowest/10 text-on-primary font-headline-sm text-[15px] font-semibold hover:bg-surface-container-lowest/20 transition-all backdrop-blur-sm" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined text-[18px]">
                        call
                      </span>
                      <span>
                        Book a Sales Call
                      </span>
                    </a>
                  </div>
                  {/* Key Metrics Trio with Live Micro-Counters */}
                  <div className="grid grid-cols-3 gap-space-md pt-space-lg">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-display-lg text-3xl lg:text-4xl text-on-primary font-bold tracking-tight">
                        99.9%
                      </span>
                      <span className="font-label-md text-label-md text-on-primary-container">
                        Verification accuracy
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-display-lg text-3xl lg:text-4xl text-on-primary font-bold tracking-tight">
                        30 sec
                      </span>
                      <span className="font-label-md text-label-md text-on-primary-container">
                        Average sign time
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-display-lg text-3xl lg:text-4xl text-on-primary font-bold tracking-tight">
                        50K+
                      </span>
                      <span className="font-label-md text-label-md text-on-primary-container">
                        Verified signatures
                      </span>
                    </div>
                  </div>
                </div>
                {/* Hero Right Column: High Fidelity Multi-Device Showcase Mockup */}
                <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
                  <div className="relative w-full max-w-[560px] aspect-[16/12] flex items-center justify-center">
                    {/* Atmospheric Glow behind devices */}
                    <div className="absolute inset-4 rounded-3xl bg-secondary-container/20 blur-2xl transform scale-95 pointer-events-none" />
                    {/* Laptop Viewport Device Mockup */}
                    <div className="relative z-10 w-[82%] rounded-xl bg-[#091e16] p-2.5 shadow-2xl">
                      {/* Laptop Screen Header Bar */}
                      <div className="w-full bg-[#05150f] rounded-t-lg px-3 py-1.5 flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-on-primary-container/60 font-mono">
                          <span className="material-symbols-outlined text-[12px] text-secondary-fixed">
                            lock
                          </span>
                          <span>
                            app.certysign.io/verify
                          </span>
                        </div>
                        <div className="w-10" />
                      </div>
                      {/* Laptop Inner Screen Content */}
                      <div className="w-full bg-primary-container rounded-b-lg p-3 text-on-primary flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded bg-secondary-fixed flex items-center justify-center text-primary font-bold text-[10px]">
                              C
                            </span>
                            <span className="font-title-md text-[12px] font-bold text-on-primary">
                              CertySign Studio
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-secondary/30 text-secondary-fixed text-[9px] font-semibold">
                            PKI Validated
                          </span>
                        </div>
                        {/* Document Interactive Preview Card inside Laptop */}
                        <div className="bg-primary/90 rounded-lg p-3 flex flex-col gap-2">
                          <div className="flex items-center justify-between text-[11px] text-on-primary-container">
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-[13px] text-secondary-fixed">
                                description
                              </span>
                              {" Commercial_Lease_Agreement_Final.pdf "}
                            </span>
                            <span className="text-secondary-fixed text-[10px] font-mono">
                              SHA-256 • Timestamps Active
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-primary-container rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-secondary-fixed rounded-full" />
                          </div>
                          <div className="flex items-center justify-between pt-1">
                            <div className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-secondary-fixed text-[14px]">
                                verified
                              </span>
                              <span className="text-[10px] text-on-primary">
                                Signer: Legal Counsel Verified
                              </span>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-secondary text-on-secondary text-[10px] font-medium">
                              Digital Signature Stamp
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Laptop Base Plate */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[104%] h-2.5 bg-[#0f291f] rounded-b-xl shadow-lg flex items-center justify-center">
                        <div className="w-12 h-1 bg-[#1b4334] rounded-full" />
                      </div>
                    </div>
                    {/* Tablet Floating Mockup Overlap (Right) */}
                    <div className="absolute -right-2 top-8 z-20 w-[46%] rounded-xl bg-surface-container-lowest p-2 shadow-2xl transform translate-x-2">
                      <div className="w-full bg-surface-container-low rounded-lg p-2.5 flex flex-col gap-1.5 text-on-surface">
                        <div className="flex items-center justify-between">
                          <span className="font-headline-sm text-[11px] text-primary font-bold">
                            Enterprise Security
                          </span>
                          <span className="w-2 h-2 rounded-full bg-secondary" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center justify-between bg-surface-container-lowest p-1.5 rounded text-[10px]">
                            <span className="text-on-surface-variant flex items-center gap-1">
                              <span className="material-symbols-outlined text-[12px] text-secondary">
                                shield
                              </span>
                              {" PKI Certificate "}
                            </span>
                            <span className="text-secondary font-bold font-mono">
                              2048-bit
                            </span>
                          </div>
                          <div className="flex items-center justify-between bg-surface-container-lowest p-1.5 rounded text-[10px]">
                            <span className="text-on-surface-variant flex items-center gap-1">
                              <span className="material-symbols-outlined text-[12px] text-secondary">
                                history_toggle_off
                              </span>
                              {" RFC 3161 TSA "}
                            </span>
                            <span className="text-secondary font-bold font-mono">
                              Sync Active
                            </span>
                          </div>
                          <div className="flex items-center justify-between bg-surface-container-lowest p-1.5 rounded text-[10px]">
                            <span className="text-on-surface-variant flex items-center gap-1">
                              <span className="material-symbols-outlined text-[12px] text-secondary">
                                verified_user
                              </span>
                              {" Identity KYC "}
                            </span>
                            <span className="text-primary font-semibold">
                              100% Passed
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Mobile Phone Floating Mockup Overlap (Bottom Right) */}
                    <div className="absolute right-4 -bottom-4 z-30 w-[30%] rounded-2xl bg-surface-container-lowest p-2 shadow-2xl">
                      <div className="w-full bg-surface-container rounded-xl p-2 flex flex-col items-center gap-1 text-center">
                        <div className="w-8 h-1 bg-outline-variant/60 rounded-full mb-1" />
                        <span className="material-symbols-outlined text-secondary text-[22px]">
                          draw
                        </span>
                        <span className="font-title-md text-[10px] font-bold text-on-surface">
                          Instant Sign
                        </span>
                        <div className="w-full bg-surface-container-lowest rounded p-1 flex items-center justify-center">
                          <svg className="w-16 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 30">
                            {" "}
                            <path d="M5 22 Q 25 5, 45 20 T 80 12 T 95 24" strokeLinecap="round" />
                            {" "}
                          </svg>
                        </div>
                        <span className="text-[8px] text-on-surface-variant">
                          Non-Repudiation Guaranteed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section: What is CertySign? */}
          <section className="w-full bg-surface py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin flex flex-col items-center text-center">
              {/* Sub-pill tag */}
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-surface-container-high text-primary font-label-md text-label-md mb-space-sm">
                {" What is CertySign? "}
              </div>
              {/* Section Heading */}
              <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface max-w-2xl">
                {" Digital signatures, simplified. "}
              </h2>
              {/* Description */}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-xs mb-space-xl">
                {" Sign documents online with legally recognised digital signatures backed by trusted PKI technology. "}
              </p>
              {/* 3 Feature Cards / Pillars */}
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-space-lg text-left">
                {/* Pillar 1: Sign */}
                <div className="group flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col gap-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                      <span className="material-symbols-outlined text-[26px]">
                        edit_note
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Sign
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {" Upload and digitally sign documents in seconds from anywhere. "}
                      </p>
                    </div>
                  </div>
                  <div className="mt-space-lg pt-space-sm flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                    <span>
                      Any device, instant workflow
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </div>
                </div>
                {/* Pillar 2: Verify */}
                <div className="group flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col gap-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                      <span className="material-symbols-outlined text-[26px]">
                        badge
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Verify
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {" Every signer is authenticated using secure digital certificates. "}
                      </p>
                    </div>
                  </div>
                  <div className="mt-space-lg pt-space-sm flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                    <span>
                      Identity verification anchored
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </div>
                </div>
                {/* Pillar 3: Protect */}
                <div className="group flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col gap-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                      <span className="material-symbols-outlined text-[26px]">
                        security
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Protect
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {" Every document is tamper-proof and can be verified at any time. "}
                      </p>
                    </div>
                  </div>
                  <div className="mt-space-lg pt-space-sm flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                    <span>
                      Cryptographic integrity seal
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-lowest py-space-xl lg:py-24 relative border-y border-outline-variant/60">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
                <span className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-primary-container/30 text-secondary font-label-sm uppercase tracking-widest font-bold mb-space-xs">
                  <span className="material-symbols-outlined text-[15px]">
                    draw
                  </span>
                  Interactive Signature Playground
                </span>
                <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
                  Experience instant cryptographic signing
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
                  Test the real-time creation of an X.509 PKI digital signature with CAK-anchored timestamping and verify tamper-detection mechanisms live.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                <div className="lg:col-span-7 bg-surface rounded-2xl p-space-lg shadow-sm border border-outline-variant/60 flex flex-col gap-space-md">
                  <div className="flex items-center justify-between border-b border-outline-variant/60 pb-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-label-md">
                        1
                      </span>
                      <span className="font-title-md font-semibold text-on-surface">
                        Digital Signing Canvas
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1 text-[12px] text-secondary font-medium bg-secondary/15 px-2.5 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      Ready to Sign
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-md text-on-surface-variant font-medium">
                      Type or Draw Signer Name
                    </label>
                    <div className="relative">
                      <input className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/60 font-headline-sm text-primary text-[18px] focus:outline-none focus:border-secondary shadow-sm" id="signer-input" placeholder="Enter full legal name..." type="text" defaultValue="Dr. Joseph Otieno, Chief Registrar" />
                      <span className="material-symbols-outlined absolute right-3 top-3.5 text-secondary text-[20px]">
                        verified
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between text-label-sm text-on-surface-variant">
                      <span>
                        Simulated Stylus / Pad Signature
                      </span>
                      <span className="text-[11px] text-secondary font-mono">
                        X: 240px | Y: 68px
                      </span>
                    </div>
                    <div className="w-full h-32 rounded-xl bg-surface-container-lowest border border-outline-variant/60 relative flex items-center justify-center overflow-hidden p-4">
                      <svg className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 400 100">
                        <path d="M20 70 Q 50 15, 80 65 T 140 40 T 190 75 T 250 30 T 320 65 T 380 45" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M110 55 L 290 55" stroke="#006c49" strokeDasharray="4 4" strokeLinecap="round" strokeWidth="1.5" />
                      </svg>
                      <span className="absolute bottom-2 right-3 text-[10px] text-on-surface-variant/60 font-mono">
                        CAK ECSP Dynamic Biometric Path
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                    <div className="flex flex-col gap-0.5 p-2.5 rounded-lg bg-surface-container-low">
                      <span className="text-[11px] text-on-surface-variant font-medium">
                        PKI Certificate Serial
                      </span>
                      <span className="font-mono text-[12px] text-primary font-semibold truncate">
                        KE-ECSP-2026-9941-F1
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 p-2.5 rounded-lg bg-surface-container-low">
                      <span className="text-[11px] text-on-surface-variant font-medium">
                        Signing Ceremony
                      </span>
                      <span className="text-[12px] text-secondary font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          gavel
                        </span>
                        Enforceable Under Kenya DPA
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-space-lg">
                  <div className="bg-primary text-on-primary rounded-2xl p-space-lg shadow-xl relative overflow-hidden flex flex-col gap-space-md">
                    <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-secondary/30 blur-2xl pointer-events-none" />
                    <div className="flex items-center justify-between border-b border-primary-container pb-space-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-secondary-fixed text-primary flex items-center justify-center font-bold text-label-md">
                          <span className="material-symbols-outlined text-[18px]">
                            verified
                          </span>
                        </span>
                        <div>
                          <h3 className="font-title-md font-bold text-on-primary">
                            Real-Time Cryptographic Seal
                          </h3>
                          <span className="text-[11px] text-secondary-fixed font-mono">
                            RFC 3161 TSA Live Anchor
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-space-sm font-mono text-[12px]">
                      <div className="bg-[#05150f] p-3 rounded-lg border border-primary-container/80 flex flex-col gap-1">
                        <div className="text-secondary-fixed flex items-center justify-between font-semibold text-[11px]">
                          <span>
                            SHA-256 DOCUMENT HASH
                          </span>
                          <span className="text-on-primary-container text-[10px]">
                            HEX DIGEST
                          </span>
                        </div>
                        <span className="text-on-primary break-all text-[11px] leading-relaxed">
                          8f4c7e2b19a0d33e5c98d672fa014bca782199b5e390c5fa411082c3de6a19f0
                        </span>
                      </div>
                      <div className="bg-[#05150f] p-3 rounded-lg border border-primary-container/80 flex flex-col gap-1">
                        <div className="text-secondary-fixed flex items-center justify-between font-semibold text-[11px]">
                          <span>
                            CAK ROOT CA ANCHOR
                          </span>
                          <span className="text-secondary-fixed text-[10px]">
                            ACTIVE
                          </span>
                        </div>
                        <span className="text-on-primary-container text-[11px]">
                          CN=Kenya National PKI Root CA 01, O=Communications Authority of Kenya, C=KE
                        </span>
                      </div>
                      <div className="bg-[#05150f] p-3 rounded-lg border border-primary-container/80 flex items-center justify-between">
                        <span className="text-on-primary-container text-[11px]">
                          Qualified Timestamp:
                        </span>
                        <span className="text-secondary-fixed font-semibold text-[11px]">
                          2026-04-18T10:14:22.091Z
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-xs text-label-sm text-secondary-fixed pt-1">
                      <span className="material-symbols-outlined text-[18px]">
                        lock
                      </span>
                      <span>
                        FIPS 140-2 Level 3 Hardware Security Vault Verified
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface rounded-2xl p-space-md border border-outline-variant/60 shadow-sm flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-sm text-[15px] font-bold text-on-surface flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          fact_check
                        </span>
                        Document Verification Quick-Check
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-[11px] font-semibold">
                        RFC 3161
                      </span>
                    </div>
                    <p className="font-body-md text-[13px] text-on-surface-variant">
                      Simulate document tamper detection by verifying hash integrity against the blockchain-grade immutable audit ledger.
                    </p>
                    <div className="flex gap-2">
                      <input className="w-full px-3 py-2 text-[12px] font-mono rounded bg-surface-container-low border border-outline-variant/60 text-on-surface" readOnly type="text" defaultValue="d7a8fbb307d7809469ca9abcb0082e4f8d5651e468d7bcd07620ce498c2ec5" />
                      <button className="px-3 py-2 bg-secondary text-on-secondary rounded font-label-sm font-semibold hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors shrink-0 flex items-center gap-1" type="button">
                        <span className="material-symbols-outlined text-[16px]">
                          search
                        </span>
                        Verify
                      </button>
                    </div>
                    <div className="flex items-center justify-between pt-1 text-[11px]">
                      <span className="text-on-surface-variant font-medium">
                        Test Presets:
                      </span>
                      <div className="flex items-center gap-2">
                        <button className="px-2.5 py-1 rounded bg-secondary-container/30 text-secondary hover:bg-secondary hover:text-on-secondary transition-colors font-medium flex items-center gap-1" type="button">
                          <span className="material-symbols-outlined text-[13px]">
                            check_circle
                          </span>
                          Sample Valid
                        </button>
                        <button className="px-2.5 py-1 rounded bg-error-container text-error hover:bg-error hover:text-on-error transition-colors font-medium flex items-center gap-1" type="button">
                          <span className="material-symbols-outlined text-[13px]">
                            warning
                          </span>
                          Sample Tampered
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Core Platform Capabilities */}
          <section className="w-full bg-surface-container-low py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin">
              {/* Eyebrow & Header */}
              <div className="flex flex-col items-start gap-space-xs max-w-3xl mb-space-xl">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                  {" CORE PLATFORM CAPABILITIES "}
                </span>
                <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
                  {" Everything you need to sign, verify, and trust. "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" Built for businesses, government and regulated industries that need secure, legally recognised digital transactions. "}
                </p>
              </div>
              {/* 6 Numbered Capability Cards (with styled 01-06 badges in light mint/green) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                {/* Card 01 */}
                <div className="flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-lg bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                        {" 01 "}
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        signature
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-title-md text-title-md text-on-surface font-semibold">
                        Digital signatures
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Create legally binding signatures in seconds — draw, type, or upload. "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Card 02 */}
                <div className="flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-lg bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                        {" 02 "}
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        workspace_premium
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-title-md text-title-md text-on-surface font-semibold">
                        Signature certificates
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" X.509 digital certificates for individuals and organizations. "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Card 03 */}
                <div className="flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-lg bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                        {" 03 "}
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        key
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-title-md text-title-md text-on-surface font-semibold">
                        PKI security
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Cryptographically secure signatures with full non-repudiation. "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Card 04 */}
                <div className="flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-lg bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                        {" 04 "}
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        lock_reset
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-title-md text-title-md text-on-surface font-semibold">
                        Tamper-proof verification
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Detect any change made to a document after signing. "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Card 05 */}
                <div className="flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-lg bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                        {" 05 "}
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        schedule
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-title-md text-title-md text-on-surface font-semibold">
                        Trusted timestamps
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" RFC 3161 timestamp authority — proof of exact signing time. "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Card 06 */}
                <div className="flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-lg bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                        {" 06 "}
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        account_tree
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-title-md text-title-md text-on-surface font-semibold">
                        Workflow automation
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Multi-level approval flows tracked in real time. "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Built for Every Business */}
          <section className="w-full bg-surface py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-space-xs">
                  {" BUILT FOR EVERY BUSINESS "}
                </span>
                <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
                  {" Use cases across every industry "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
                  {" From banking and healthcare to government and legal services, CertySign delivers secure, legally trusted digital signing workflows for every organization. "}
                </p>
              </div>
              {/* Interactive / Structured Badge & Card Grid of Use Cases */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-space-md">
                <div className="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                  <span className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      account_balance
                    </span>
                  </span>
                  <span className="font-headline-sm text-[15px] font-semibold text-on-surface">
                    Government contracts
                  </span>
                </div>
                <div className="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                  <span className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      gavel
                    </span>
                  </span>
                  <span className="font-headline-sm text-[15px] font-semibold text-on-surface">
                    {"Legal & court filings"}
                  </span>
                </div>
                <div className="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                  <span className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      payments
                    </span>
                  </span>
                  <span className="font-headline-sm text-[15px] font-semibold text-on-surface">
                    {"Loan agreements & KYC"}
                  </span>
                </div>
                <div className="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                  <span className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      badge
                    </span>
                  </span>
                  <span className="font-headline-sm text-[15px] font-semibold text-on-surface">
                    {"HR & employment contracts"}
                  </span>
                </div>
                <div className="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                  <span className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      medical_services
                    </span>
                  </span>
                  <span className="font-headline-sm text-[15px] font-semibold text-on-surface">
                    Healthcare consent forms
                  </span>
                </div>
                <div className="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                  <span className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      real_estate_agent
                    </span>
                  </span>
                  <span className="font-headline-sm text-[15px] font-semibold text-on-surface">
                    {"Real estate & leases"}
                  </span>
                </div>
                <div className="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                  <span className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      inventory_2
                    </span>
                  </span>
                  <span className="font-headline-sm text-[15px] font-semibold text-on-surface">
                    {"Procurement & supply chain"}
                  </span>
                </div>
                <div className="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                  <span className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      school
                    </span>
                  </span>
                  <span className="font-headline-sm text-[15px] font-semibold text-on-surface">
                    Academic certificates
                  </span>
                </div>
                <div className="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                  <span className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      handshake
                    </span>
                  </span>
                  <span className="font-headline-sm text-[15px] font-semibold text-on-surface">
                    SME service contracts
                  </span>
                </div>
                <div className="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                  <span className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      public
                    </span>
                  </span>
                  <span className="font-headline-sm text-[15px] font-semibold text-on-surface">
                    Cross-border agreements
                  </span>
                </div>
                <div className="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors col-span-2 sm:col-span-1 lg:col-span-2">
                  <span className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      verified
                    </span>
                  </span>
                  <span className="font-headline-sm text-[15px] font-semibold text-on-surface">
                    Public document verification
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* Regulatory & Compliance Pillars Section */}
          <section className="w-full bg-surface-container-lowest py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-xl">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-space-xs">
                  {" REGULATORY RIGOR & TRUST "}
                </span>
                <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
                  {" Compliant. Accredited. Sovereign. "}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                {/* Pillar 1: Kenya Data Protection Act */}
                <div className="relative bg-surface rounded-xl p-space-lg shadow-sm flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="w-12 h-12 rounded-xl bg-primary-container text-secondary-fixed flex items-center justify-center">
                        <span className="material-symbols-outlined text-[26px]">
                          policy
                        </span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                        {" DPA 2019 "}
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Kenya Data Protection Act
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {" Fully compliant with Kenya's data protection regulations to ensure sensitive information remains secure and sovereign. "}
                      </p>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center gap-2 text-secondary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[18px]">
                      check_circle
                    </span>
                    <span>
                      Data Sovereign Infrastructure
                    </span>
                  </div>
                </div>
                {/* Pillar 2: ISO 27001 Certified */}
                <div className="relative bg-surface rounded-xl p-space-lg shadow-sm flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="w-12 h-12 rounded-xl bg-primary-container text-secondary-fixed flex items-center justify-center">
                        <span className="material-symbols-outlined text-[26px]">
                          verified_user
                        </span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                        {" ISO/IEC 27001 "}
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        ISO 27001 Certified
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {" Built on internationally recognized information security standards to protect your documents and digital workflows. "}
                      </p>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center gap-2 text-secondary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[18px]">
                      check_circle
                    </span>
                    <span>
                      Audited Security Controls
                    </span>
                  </div>
                </div>
                {/* Pillar 3: CAK-authorized ECSP */}
                <div className="relative bg-surface rounded-xl p-space-lg shadow-sm flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="w-12 h-12 rounded-xl bg-primary-container text-secondary-fixed flex items-center justify-center">
                        <span className="material-symbols-outlined text-[26px]">
                          vpn_key
                        </span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                        {" CAK Licensed "}
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        CAK-authorized ECSP
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {" Licensed by the Communications Authority of Kenya as an Electronic Certification Service Provider. "}
                      </p>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center gap-2 text-secondary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[18px]">
                      check_circle
                    </span>
                    <span>
                      Legal Court Admissibility
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface py-space-xl lg:py-24 border-t border-outline-variant/60">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl group border border-outline-variant/60">
                  <div className="relative w-full h-[400px] overflow-hidden bg-primary">
                    <img alt="Ultra-modern sovereign data center interior in Nairobi with secure server racks and cryptographic infrastructure" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300" src="https://lh3.googleusercontent.com/aida/AEtjO1VV_uNGw4-p5lwQujZZ3gaFFsM9HZMCRGuKjbHbUJ-sTP3qfv8Y3yaIRraomHZ0intqwYdkCAUvhOe6Y-PYyOguoOeCEdgcJ2tgnC6biUQS8g01Au-QKdcI5L1fG8WW0Zh05S8RjBFT6NShD4cbUSeCRaEmlo9zCeeXZN63YynvbRLqgEWBgRO1VFOIAr26s4jC5kmP6Vj_S1RV9RjVEDCXi-Y4v-wdPG_5feftqXAPomyn9ecjyw0Slg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
                  </div>
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-container/90 text-secondary-fixed font-label-sm text-label-sm shadow-md backdrop-blur-sm border border-secondary-fixed/30">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-pulse" />
                    <span>
                      Nairobi HSM Vault: In-Country Root Key Protection
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-space-md rounded-xl bg-primary/90 backdrop-blur-sm border border-primary-container flex items-center justify-between text-on-primary">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-10 h-10 rounded-lg bg-secondary-fixed text-primary flex items-center justify-center font-bold">
                        <span className="material-symbols-outlined text-[24px]">
                          dns
                        </span>
                      </span>
                      <div>
                        <h4 className="font-title-md text-[15px] font-bold text-on-primary">
                          FIPS 140-2 Level 3 Compliant
                        </h4>
                        <p className="font-label-sm text-[12px] text-on-primary-container">
                          Hardware Security Module (HSM) Cryptographic Key Escrow
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-secondary text-on-secondary font-label-sm text-[11px] font-semibold shrink-0">
                      Active Tier-III
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-6 flex flex-col gap-space-md">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                    SOVEREIGN CRYPTOGRAPHIC ASSURANCE
                  </span>
                  <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
                    {"Cryptographic Security & FIPS 140-2 HSM Infrastructure"}
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    All cryptographic root keys and signing ceremonies are hosted inside sovereign Nairobi data center facilities, ensuring legal jurisdiction and zero third-party cross-border exposure for Kenyan enterprises and government agencies.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                    <div className="flex flex-col gap-1 p-space-md rounded-xl bg-surface-container-low border border-outline-variant/60">
                      <div className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined text-secondary text-[22px]">
                          shield_with_heart
                        </span>
                        <span className="font-headline-sm text-[15px] font-bold">
                          In-Country Root CA
                        </span>
                      </div>
                      <p className="font-body-md text-[13px] text-on-surface-variant">
                        Keys never leave sovereign borders, ensuring uncompromising alignment with the Kenya Data Protection Act 2019.
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 p-space-md rounded-xl bg-surface-container-low border border-outline-variant/60">
                      <div className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined text-secondary text-[22px]">
                          lock_clock
                        </span>
                        <span className="font-headline-sm text-[15px] font-bold">
                          RFC 3161 TSA Vault
                        </span>
                      </div>
                      <p className="font-body-md text-[13px] text-on-surface-variant">
                        Audited timestamp authorities generating non-repudiable legal proofs valid across Kenyan and international courts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-md pt-space-sm">
                    <div className="flex items-center gap-2 text-secondary font-label-md font-semibold">
                      <span className="material-symbols-outlined text-[20px]">
                        verified
                      </span>
                      CAK Authorized ECSP
                    </div>
                    <div className="flex items-center gap-2 text-secondary font-label-md font-semibold">
                      <span className="material-symbols-outlined text-[20px]">
                        lock
                      </span>
                      Hardware Encrypted
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Final Call-to-Action Banner */}
          <section className="w-full bg-primary text-on-primary py-space-xl lg:py-24 relative overflow-hidden">
            {/* Ambient mesh glow inside CTA */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#4edea3,transparent_70%)]" />
            <div className="relative max-w-5xl mx-auto px-margin text-center flex flex-col items-center gap-space-md">
              <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-primary-container text-secondary-fixed font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[15px]">
                  lock
                </span>
                <span>
                  Enterprise PKI Infrastructure
                </span>
              </div>
              <h2 className="font-display-lg text-display-lg tracking-tight text-on-primary">
                {" Start signing today "}
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl">
                {" Join organizations securing documents with enterprise-grade PKI. "}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-md">
                <a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-[16px] font-semibold hover:bg-secondary-fixed transition-all shadow-lg transform hover:-translate-y-0.5" href="https://certysign.io" rel="noopener noreferrer" target="_blank">
                  <span>
                    Get Started Free
                  </span>
                </a>
                <a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-surface-container-lowest/10 text-on-primary font-headline-sm text-[16px] font-semibold hover:bg-surface-container-lowest/20 transition-all backdrop-blur-sm" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                  <span>
                    Book a Sales Call
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-primary text-on-primary pt-space-xl pb-space-lg">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl">
            <div className="flex flex-col gap-space-md">
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-primary">
                  RCFI
                </span>
                <span className="font-label-sm text-label-sm text-on-primary-container">
                  Reprodrive Center for Innovation Limited
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-primary-container">
                Pioneering trusted electronic certification services, verifiable cryptographic trust anchors, and enterprise digital solutions.
              </p>
              <div className="flex items-center gap-space-sm">
                <a className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center hover:bg-secondary transition-colors text-on-primary" href="#">
                  <span className="material-symbols-outlined text-[16px]">
                    public
                  </span>
                </a>
                <a className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center hover:bg-secondary transition-colors text-on-primary" href="#">
                  <span className="material-symbols-outlined text-[16px]">
                    share
                  </span>
                </a>
                <a className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center hover:bg-secondary transition-colors text-on-primary" href="#">
                  <span className="material-symbols-outlined text-[16px]">
                    forum
                  </span>
                </a>
                <a className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center hover:bg-secondary transition-colors text-on-primary" href="#">
                  <span className="material-symbols-outlined text-[16px]">
                    video_camera_front
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h4 className="font-title-md text-title-md text-secondary-fixed mb-space-xs">
                Products
              </h4>
              <Link className="font-body-md text-body-md text-on-primary-container hover:text-on-primary transition-colors" data-path="certysign" href="/products/certysign/">
                CertySign
              </Link>
              <Link className="font-body-md text-body-md text-on-primary-container hover:text-on-primary transition-colors" data-path="elano" href="/products/elano/">
                Elano
              </Link>
              <Link className="font-body-md text-body-md text-on-primary-container hover:text-on-primary transition-colors" data-path="prezio" href="/products/prezio/">
                Prezio
              </Link>
              <Link className="font-body-md text-body-md text-on-primary-container hover:text-on-primary transition-colors" data-path="health-security" href="/health-security/">
                Health Security
              </Link>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h4 className="font-title-md text-title-md text-secondary-fixed mb-space-xs">
                Company
              </h4>
              <Link className="font-body-md text-body-md text-on-primary-container hover:text-on-primary transition-colors" data-path="home" href="/">
                Home
              </Link>
              <Link className="font-body-md text-body-md text-on-primary-container hover:text-on-primary transition-colors" data-path="about" href="/about/">
                About Us
              </Link>
              <Link className="font-body-md text-body-md text-on-primary-container hover:text-on-primary transition-colors" data-path="careers" href="/careers/">
                Careers
              </Link>
              <Link className="font-body-md text-body-md text-on-primary-container hover:text-on-primary transition-colors" data-path="contact" href="/contact/">
                Contact
              </Link>
              <a className="font-body-md text-body-md text-on-primary-container hover:text-on-primary transition-colors" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h4 className="font-title-md text-title-md text-secondary-fixed mb-space-xs">
                {"Contact & Regulatory"}
              </h4>
              <p className="font-body-md text-body-md text-on-primary-container flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-[18px] shrink-0">
                  location_on
                </span>
                5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya
              </p>
              <a className="font-body-md text-body-md text-on-primary-container hover:text-secondary-fixed transition-colors flex items-center gap-space-xs" href="mailto:info@rcfi.co.ke">
                <span className="material-symbols-outlined text-[18px] shrink-0">
                  mail
                </span>
                info@rcfi.co.ke
              </a>
              <div className="mt-space-sm flex flex-wrap gap-space-xs">
                <span className="px-space-xs py-0.5 rounded bg-primary-container font-label-sm text-label-sm text-secondary-fixed">
                  ISO 27001
                </span>
                <span className="px-space-xs py-0.5 rounded bg-primary-container font-label-sm text-label-sm text-secondary-fixed">
                  CAK ECSP
                </span>
                <span className="px-space-xs py-0.5 rounded bg-primary-container font-label-sm text-label-sm text-secondary-fixed">
                  Kenya DPA
                </span>
              </div>
            </div>
          </div>
          <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm">
            <p className="font-label-sm text-label-sm text-on-primary-container text-center md:text-left">
              © 2026 Reprodrive Center for Innovation Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-primary-container">
              <Link className="hover:text-on-primary transition-colors" href="/privacy/">
                Privacy Policy
              </Link>
              <Link className="hover:text-on-primary transition-colors" href="/terms/">
                Terms of Service
              </Link>
              <Link className="hover:text-on-primary transition-colors" href="/trust/">
                {"Security & Compliance"}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
