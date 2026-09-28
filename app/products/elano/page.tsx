import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/products-elano/page.css";
import "@/styles/pages/products-elano/late.css";
import PartnersNavMenu from "@/components/PartnersNavMenu";

export const metadata: Metadata = { title: "Elano — Governance & Intelligence | RCFI" };

export default function ProductsElanoPage() {
  return (
    <div className="rcfi-products-elano" style={{ display: "contents" }}>
      <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="w-full bg-primary-container h-10 flex items-center">
          <div className="max-w-7xl mx-auto px-margin w-full flex items-center justify-between font-label-sm text-label-sm text-on-primary">
            <div className="flex items-center gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span>
                  ISO 27001 Certified
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span>
                  CAK Licensed ECSP
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span>
                  Kenya DPA Compliant
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                mail
              </span>
              <a className="hover:text-secondary-fixed transition-colors font-label-sm text-label-sm text-on-primary" href="mailto:info@rcfi.co.ke">
                info@rcfi.co.ke
              </a>
            </div>
          </div>
        </div>
        <div className="w-full bg-surface-container-lowest h-20 flex items-center">
          <div className="max-w-7xl mx-auto px-margin w-full h-full flex items-center justify-between gap-gutter">
            <div className="flex items-center gap-space-md">
              <img alt="RCFI Logo" className="h-8 w-auto object-contain" src="/brand/rcfi-mark.svg" />
              <div className="hidden sm:flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary leading-none">
                  RCFI
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
                  Reprodrive Center for Innovation Limited
                </span>
              </div>
            </div>
            <nav className="hidden lg:flex items-center gap-space-lg h-full" data-active-classes="text-primary font-title-md font-semibold border-b-2 border-secondary">
              <Link className="h-full flex items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" data-path="home" href="/">
                Home
              </Link>
              <Link className="h-full flex items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" data-path="certysign" href="/products/certysign/">
                CertySign
              </Link>
              <Link aria-current="page" className="h-full flex items-center transition-colors text-primary font-title-md font-semibold border-b-2 border-secondary" data-path="elano" href="/products/elano/">
                Elano
              </Link>
              <Link className="h-full flex items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" data-path="prezio" href="/products/prezio/">
                Prezio
              </Link>
              <Link className="h-full flex items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" data-path="health-security" href="/health-security/">
                Health Security
              </Link>
              <PartnersNavMenu className="h-full flex items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" />
              <Link className="h-full flex items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" data-path="about" href="/about/">
                About
              </Link>
              <Link className="h-full flex items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" data-path="careers" href="/careers/">
                Careers
              </Link>
              <Link className="h-full flex items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" data-path="contact" href="/contact/">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-space-md">
              <a className="inline-flex items-center justify-center px-space-md py-space-sm bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary font-label-md text-label-md rounded-lg transition-colors" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
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
      <main className="w-full pt-[120px] bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="relative w-full bg-primary text-on-primary overflow-hidden pt-space-xl pb-24">
            {/* Ambient Backdrop Illumination */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[780px] h-[520px] bg-primary-container/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                {/* Hero Text Content */}
                <div className="lg:col-span-6 flex flex-col items-start">
                  <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-primary-container/70 text-secondary-fixed text-label-md font-label-md mb-space-lg shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                    <span>
                      {"Governance & Intelligence Platform"}
                    </span>
                  </div>
                  <h1 className="font-display-lg text-display-lg text-on-primary mb-space-md tracking-tight leading-[1.15]">
                    {" Digital Governance Made Simple "}
                  </h1>
                  <p className="font-body-lg text-body-lg text-tertiary-fixed-dim mb-space-xl max-w-xl leading-relaxed">
                    {" Streamline institutional registration, board governance, compliance, strategic planning and certification through one secure digital platform. "}
                  </p>
                  <div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto mb-space-xl">
                    <a className="inline-flex items-center justify-center px-space-lg py-3.5 bg-secondary text-on-secondary font-title-md text-title-md rounded-lg shadow-md hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                      {" Book a Demo "}
                      <span className="material-symbols-outlined ml-2 text-[20px]">
                        arrow_forward
                      </span>
                    </a>
                    <a className="inline-flex items-center justify-center px-space-lg py-3.5 bg-tertiary-container/80 text-on-primary font-title-md text-title-md rounded-lg shadow-sm hover:bg-primary-container transition-all" data-path="contact" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                      {" Book a Sales Call "}
                    </a>
                  </div>
                  {/* Key Metrics */}
                  <div className="w-full pt-space-lg grid grid-cols-3 gap-space-md">
                    <div className="flex flex-col">
                      <span className="font-headline-lg text-headline-lg text-secondary-fixed font-bold leading-none">
                        698
                      </span>
                      <span className="font-label-md text-label-md text-tertiary-fixed-dim mt-1.5">
                        Organizations Active
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-lg text-headline-lg text-secondary-fixed font-bold leading-none">
                        1,493
                      </span>
                      <span className="font-label-md text-label-md text-tertiary-fixed-dim mt-1.5">
                        Board Meetings Run
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-lg text-headline-lg text-secondary-fixed font-bold leading-none">
                        698
                      </span>
                      <span className="font-label-md text-label-md text-tertiary-fixed-dim mt-1.5">
                        Certificates Issued
                      </span>
                    </div>
                  </div>
                </div>
                {/* Dashboard UI Mockup Preview */}
                <div className="lg:col-span-6 relative mt-space-xl lg:mt-0">
                  <div className="relative w-full rounded-xl bg-surface-container-lowest text-on-surface shadow-2xl p-space-md overflow-hidden">
                    {/* Simulated App Top Header */}
                    <div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low px-space-md py-2.5 rounded-lg">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-2.5 h-2.5 rounded-full bg-error/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-surface-tint/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim" />
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium ml-2">
                          Elano Governance Suite • Enterprise CAK Node
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-1 text-label-sm font-label-sm text-secondary bg-primary-fixed/40 px-2 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span>
                          Audit Sync Active
                        </span>
                      </div>
                    </div>
                    {/* Main Interactive Screen View */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm">
                      {/* Left Mini Nav / Status */}
                      <div className="md:col-span-4 bg-surface-container-lowest rounded-lg p-space-sm flex flex-col gap-space-sm">
                        <div className="p-space-sm bg-surface-container-low rounded-lg">
                          <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                            Institution ID
                          </div>
                          <div className="font-title-md text-title-md text-primary font-bold">
                            CGRA-048-KE
                          </div>
                          <div className="font-label-sm text-label-sm text-secondary mt-0.5">
                            Tier-1 PBO Track
                          </div>
                        </div>
                        <div className="p-space-sm bg-surface-container rounded-lg">
                          <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface">
                            <span>
                              Quorum Threshold
                            </span>
                            <span className="font-bold text-primary">
                              88%
                            </span>
                          </div>
                          <div className="w-full h-2 bg-outline-variant/30 rounded-full mt-2 overflow-hidden">
                            <div className="h-full bg-secondary rounded-full" style={{ "width": "88%" }} />
                          </div>
                          <div className="font-label-sm text-label-sm text-on-surface-variant mt-1.5">
                            7 of 8 voting directors logged
                          </div>
                        </div>
                        <div className="p-space-sm bg-surface-container-low rounded-lg">
                          <div className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                            Registration Status
                          </div>
                          <div className="inline-flex items-center gap-1.5 text-label-md font-label-md text-on-primary bg-primary-container px-2 py-1 rounded">
                            <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                              verified
                            </span>
                            <span>
                              Fully Certified
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Center/Right Dashboard Panels */}
                      <div className="md:col-span-8 flex flex-col gap-space-sm">
                        {/* Board Calendar & Quorum Card */}
                        <div className="p-space-md bg-surface-container-low rounded-lg shadow-sm">
                          <div className="flex items-center justify-between mb-space-sm">
                            <div className="flex items-center gap-space-xs">
                              <span className="material-symbols-outlined text-secondary text-[20px]">
                                event_available
                              </span>
                              <span className="font-headline-sm text-headline-sm text-primary">
                                Q2 Statutory Board Council
                              </span>
                            </div>
                            <span className="text-label-sm font-label-sm bg-secondary text-on-secondary px-2 py-0.5 rounded-full">
                              Quorum Met
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-space-xs text-label-sm font-label-sm">
                            <div className="flex flex-col">
                              <span className="font-headline-lg text-headline-lg text-secondary-fixed font-bold leading-none">
                                698
                              </span>
                              <span className="font-label-md text-label-md text-tertiary-fixed-dim mt-1.5">
                                Organizations Active
                              </span>
                            </div>
                            <div className="flex flex-col">
                              <span className="font-headline-lg text-headline-lg text-secondary-fixed font-bold leading-none">
                                1,493
                              </span>
                              <span className="font-label-md text-label-md text-tertiary-fixed-dim mt-1.5">
                                Board Meetings Run
                              </span>
                            </div>
                            <div className="flex flex-col">
                              <span className="font-headline-lg text-headline-lg text-secondary-fixed font-bold leading-none">
                                698
                              </span>
                              <span className="font-label-md text-label-md text-tertiary-fixed-dim mt-1.5">
                                Certificates Issued
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* MEARL Framework Status Indicators */}
                        <div className="p-space-md bg-surface-container-low rounded-lg shadow-sm">
                          <div className="flex items-center justify-between mb-space-xs">
                            <span className="font-title-md text-title-md text-primary font-semibold">
                              MEARL Impact Targets
                            </span>
                            <span className="text-label-sm font-label-sm text-secondary font-semibold">
                              Q2 Performance
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <div className="flex justify-between text-label-sm font-label-sm mb-1">
                                <span className="text-on-surface">
                                  Community Health Governance Track
                                </span>
                                <span className="font-semibold text-primary">
                                  94%
                                </span>
                              </div>
                              <div className="w-full h-1.5 bg-outline-variant/30 rounded-full overflow-hidden">
                                <div className="h-full bg-secondary" style={{ "width": "94%" }} />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-label-sm font-label-sm mb-1">
                                <span className="text-on-surface">
                                  County Dev Program Expenditure Audit
                                </span>
                                <span className="font-semibold text-primary">
                                  81%
                                </span>
                              </div>
                              <div className="w-full h-1.5 bg-outline-variant/30 rounded-full overflow-hidden">
                                <div className="h-full bg-primary-container" style={{ "width": "81%" }} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Recent Certificate Approvals Stream */}
                        <div className="p-space-sm bg-surface-container-lowest rounded-lg shadow-sm">
                          <div className="font-label-sm text-label-sm text-on-surface-variant mb-space-xs uppercase tracking-wider">
                            Recent Certifications Issued
                          </div>
                          <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded mb-1 text-label-sm font-label-sm">
                            <div className="flex items-center gap-1.5 truncate">
                              <span className="material-symbols-outlined text-[16px] text-secondary">
                                workspace_premium
                              </span>
                              <span className="truncate font-medium">
                                Kilifi Youth Empowerment CBO
                              </span>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap ml-2">
                              Verified
                            </span>
                          </div>
                          <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded text-label-sm font-label-sm">
                            <div className="flex items-center gap-1.5 truncate">
                              <span className="material-symbols-outlined text-[16px] text-secondary">
                                workspace_premium
                              </span>
                              <span className="truncate font-medium">
                                Rift Valley Agro-Forestry Alliance
                              </span>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap ml-2">
                              Verified
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative accent chip floating */}
                  <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-primary-container text-on-primary p-space-sm rounded-xl shadow-xl items-center gap-space-sm">
                    <span className="material-symbols-outlined text-secondary-fixed text-[26px]">
                      gavel
                    </span>
                    <div className="pr-2">
                      <div className="text-label-sm font-label-sm text-secondary-fixed font-semibold">
                        {"CAK & DPA Regulatory Bind"}
                      </div>
                      <div className="text-label-sm font-label-sm text-tertiary-fixed-dim">
                        Legally Admissible Digital Quorum
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Trusted By Section */}
          <section className="w-full bg-surface py-space-xl">
            <div className="max-w-7xl mx-auto px-margin text-center">
              <h2 className="font-headline-md text-headline-md text-primary mb-space-xs">
                {" Trusted by Leading Organizations "}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mx-auto mb-space-lg leading-relaxed">
                {" NGOs, CSOs, microfinance institutions, county governments and development agencies use Elano to digitize governance, compliance and programme management. "}
              </p>
              {/* Pill badges for institution tracks */}
              <div className="flex flex-wrap justify-center items-center gap-space-sm">
                <div className="flex items-center gap-2 px-space-md py-space-sm bg-surface-container rounded-full text-on-surface font-label-md text-label-md shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    domain
                  </span>
                  <span>
                    Kenyan NGOs
                  </span>
                </div>
                <div className="flex items-center gap-2 px-space-md py-space-sm bg-surface-container rounded-full text-on-surface font-label-md text-label-md shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    hub
                  </span>
                  <span>
                    CSO Networks
                  </span>
                </div>
                <div className="flex items-center gap-2 px-space-md py-space-sm bg-surface-container rounded-full text-on-surface font-label-md text-label-md shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    account_balance
                  </span>
                  <span>
                    County Governments
                  </span>
                </div>
                <div className="flex items-center gap-2 px-space-md py-space-sm bg-surface-container rounded-full text-on-surface font-label-md text-label-md shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    public
                  </span>
                  <span>
                    Development Agencies
                  </span>
                </div>
                <div className="flex items-center gap-2 px-space-md py-space-sm bg-surface-container rounded-full text-on-surface font-label-md text-label-md shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    payments
                  </span>
                  <span>
                    Microfinance Institutions
                  </span>
                </div>
                <div className="flex items-center gap-2 px-space-md py-space-sm bg-surface-container rounded-full text-on-surface font-label-md text-label-md shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    volunteer_activism
                  </span>
                  <span>
                    Faith-Based Organizations
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* How It Works Section */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="max-w-3xl mb-space-xl">
                <span className="font-label-md text-label-md text-secondary uppercase font-semibold tracking-wider">
                  How It Works
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary mt-space-xs mb-space-xs">
                  {" From registration to certified governance "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" Elano connects registration, certification, governance and reporting into one secure digital workflow. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Step 01 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center font-headline-sm text-headline-sm text-primary font-bold">
                        01
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        assignment_turned_in
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                      01 Register
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Guided 6-step wizard with document upload for PBO, CBO, and CGRA legal tracks. "}
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm bg-surface-container-low px-space-sm py-1.5 rounded text-label-sm font-label-sm text-primary font-medium">
                    {" Multi-track Onboarding "}
                  </div>
                </div>
                {/* Step 02 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center font-headline-sm text-headline-sm text-primary font-bold">
                        02
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        verified
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                      {"02 Review & Certify"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Admin review queue — approve, reject, clarify and issue certificates. "}
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm bg-surface-container-low px-space-sm py-1.5 rounded text-label-sm font-label-sm text-primary font-medium">
                    {" Electronic Cert Generation "}
                  </div>
                </div>
                {/* Step 03 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center font-headline-sm text-headline-sm text-primary font-bold">
                        03
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        groups
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                      03 Govern
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Board management, meetings, resolutions, attendance and governance documents. "}
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm bg-surface-container-low px-space-sm py-1.5 rounded text-label-sm font-label-sm text-primary font-medium">
                    {" Quorum & Digital Balloting "}
                  </div>
                </div>
                {/* Step 04 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center font-headline-sm text-headline-sm text-primary font-bold">
                        04
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        insights
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                      {"04 Deliver & Report"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Strategic plans, projects, M&E indicators, budgets and compliance reports. "}
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm bg-surface-container-low px-space-sm py-1.5 rounded text-label-sm font-label-sm text-primary font-medium">
                    {" Export-Ready Dashboards "}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Built for Compliance Section */}
          <section className="w-full bg-surface py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
                <div>
                  <span className="font-label-md text-label-md text-secondary uppercase font-semibold tracking-wider">
                    Built for Compliance
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary mt-space-xs">
                    {" Compliance-first governance "}
                  </h2>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                  {" Everything you need to register legally, run boards properly, and stay audit-ready. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                {/* Card 1 */}
                <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                      fact_check
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                    Legal-track registration
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" PBO, CBO, CGRA, NPO, CSO onboarding with document validation. "}
                  </p>
                </div>
                {/* Card 2 */}
                <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                      rate_review
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                    Admin review workflows
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" Assign reviewers, approve, reject, or request clarification. "}
                  </p>
                </div>
                {/* Card 3 */}
                <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                      qr_code_scanner
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                    Public verification
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" Searchable registry and certificate authenticity checks. "}
                  </p>
                </div>
                {/* Card 4 */}
                <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                      balance
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                    Governance compliance
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" Board composition rules, quorum, and conflict-of-interest tracking. "}
                  </p>
                </div>
                {/* Card 5 */}
                <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                      history_edu
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                    Audit trails
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" 7-year activity logging for registration and governance actions. "}
                  </p>
                </div>
                {/* Card 6 */}
                <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                      admin_panel_settings
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                    Role-based access
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" Granular permissions for admins, reviewers, board, staff, and donors. "}
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Platform In Action Section */}
          <section className="w-full bg-surface py-space-xl border-t border-surface-container-high/40">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-primary-fixed/30 text-primary text-label-md font-semibold mb-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    apps
                  </span>
                  <span>
                    Enterprise Architecture
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary mt-space-xs tracking-tight">
                  Eight integrated modules, one connected platform
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
                  Explore how Elano orchestrates every layer of Kenyan organizational governance, compliance, and regulatory accountability.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 mb-space-xl p-1.5 bg-surface-container-low rounded-xl">
                <button className="module-tab-btn flex items-center gap-1.5 px-space-md py-2 rounded-lg font-label-md text-label-md transition-all bg-primary text-on-primary shadow-sm" data-rcfi-onclick="switchElanoModule('reg', this)" type="button">
                  <span className="material-symbols-outlined text-[18px]">
                    how_to_reg
                  </span>
                  <span>
                    Registration
                  </span>
                </button>
                <button className="module-tab-btn flex items-center gap-1.5 px-space-md py-2 rounded-lg font-label-md text-label-md transition-all text-on-surface hover:bg-surface-container" data-rcfi-onclick="switchElanoModule('board', this)" type="button">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    badge
                  </span>
                  <span>
                    {"Board & Gov"}
                  </span>
                </button>
                <button className="module-tab-btn flex items-center gap-1.5 px-space-md py-2 rounded-lg font-label-md text-label-md transition-all text-on-surface hover:bg-surface-container" data-rcfi-onclick="switchElanoModule('meetings', this)" type="button">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    how_to_vote
                  </span>
                  <span>
                    {"Meetings & Votes"}
                  </span>
                </button>
                <button className="module-tab-btn flex items-center gap-1.5 px-space-md py-2 rounded-lg font-label-md text-label-md transition-all text-on-surface hover:bg-surface-container" data-rcfi-onclick="switchElanoModule('strategy', this)" type="button">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    track_changes
                  </span>
                  <span>
                    Strategic Plans
                  </span>
                </button>
                <button className="module-tab-btn flex items-center gap-1.5 px-space-md py-2 rounded-lg font-label-md text-label-md transition-all text-on-surface hover:bg-surface-container" data-rcfi-onclick="switchElanoModule('projects', this)" type="button">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    dataset
                  </span>
                  <span>
                    Programmes
                  </span>
                </button>
                <button className="module-tab-btn flex items-center gap-1.5 px-space-md py-2 rounded-lg font-label-md text-label-md transition-all text-on-surface hover:bg-surface-container" data-rcfi-onclick="switchElanoModule('mearl', this)" type="button">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    monitoring
                  </span>
                  <span>
                    MEARL
                  </span>
                </button>
                <button className="module-tab-btn flex items-center gap-1.5 px-space-md py-2 rounded-lg font-label-md text-label-md transition-all text-on-surface hover:bg-surface-container" data-rcfi-onclick="switchElanoModule('finance', this)" type="button">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    account_balance_wallet
                  </span>
                  <span>
                    {"Finance & Budget"}
                  </span>
                </button>
                <button className="module-tab-btn flex items-center gap-1.5 px-space-md py-2 rounded-lg font-label-md text-label-md transition-all text-on-surface hover:bg-surface-container" data-rcfi-onclick="switchElanoModule('security', this)" type="button">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    lock_reset
                  </span>
                  <span>
                    {"Security & PKI"}
                  </span>
                </button>
              </div>
              <div className="bg-surface-container-lowest rounded-xl border border-surface-container-high/60 shadow-xl overflow-hidden" id="module-preview-container">
                <div className="module-pane grid grid-cols-1 lg:grid-cols-12" id="module-pane-reg">
                  <div className="lg:col-span-5 p-space-xl flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-surface-container-high/50">
                    <div>
                      <div className="inline-flex items-center gap-2 px-space-sm py-1 bg-secondary/15 text-secondary rounded-full font-label-sm text-label-sm font-semibold mb-space-sm">
                        <span className="material-symbols-outlined text-[16px]">
                          verified
                        </span>
                        <span>
                          Step 1 of 6 Wizard Active
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">
                        {"Legal Entity Onboarding & Registry"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                        Unified digital onboarding conforming to PBO Act, CBO frameworks, Societies Act, and Non-Governmental Organizations Co-ordination Board regulations.
                      </p>
                      <div className="space-y-space-xs">
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            {"Automated constitution & bylaws verification"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            {"KRA PIN, Tax Compliance & Certificate linking"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            Instant public registry ledger minting
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-sm border-t border-surface-container flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>
                        Active Entities in Pipeline
                      </span>
                      <span className="font-bold text-primary">
                        698 Certified
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 bg-surface-container-low p-space-lg flex flex-col justify-center">
                    <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-md border border-surface-container-high/60">
                      <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high/50 mb-space-sm">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[22px]">
                            description
                          </span>
                          <span className="font-title-md text-title-md text-primary font-bold">
                            Institution Certificate Profile
                          </span>
                        </div>
                        <span className="text-label-sm font-label-sm bg-primary-fixed/40 text-secondary px-2 py-0.5 rounded-full font-semibold">
                          PKI Validated
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-space-sm mb-space-sm text-label-sm font-label-sm">
                        <div className="p-space-xs bg-surface-container-low rounded">
                          <span className="block text-on-surface-variant">
                            Track
                          </span>
                          <span className="font-semibold text-primary">
                            Public Benefit Org (PBO)
                          </span>
                        </div>
                        <div className="p-space-xs bg-surface-container-low rounded">
                          <span className="block text-on-surface-variant">
                            CAK ECSP Digest
                          </span>
                          <span className="font-semibold text-primary truncate block">
                            SHA256: 4f88e9a2c...
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2 text-label-sm font-label-sm">
                        <div className="flex items-center justify-between p-2 bg-surface-container rounded">
                          <span className="flex items-center gap-1.5 text-on-surface">
                            <span className="material-symbols-outlined text-[16px] text-secondary">
                              task_alt
                            </span>
                            {"Constitution & Governance Charter"}
                          </span>
                          <span className="text-secondary font-semibold">
                            Approved
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-surface-container rounded">
                          <span className="flex items-center gap-1.5 text-on-surface">
                            <span className="material-symbols-outlined text-[16px] text-secondary">
                              task_alt
                            </span>
                            Board Resolution for Registration
                          </span>
                          <span className="text-secondary font-semibold">
                            Certified
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-surface-container rounded">
                          <span className="flex items-center gap-1.5 text-on-surface">
                            <span className="material-symbols-outlined text-[16px] text-secondary">
                              task_alt
                            </span>
                            Kenyan Data Protection Controller Reg
                          </span>
                          <span className="text-secondary font-semibold">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="module-pane hidden grid-cols-1 lg:grid-cols-12" id="module-pane-board">
                  <div className="lg:col-span-5 p-space-xl flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-surface-container-high/50">
                    <div>
                      <div className="inline-flex items-center gap-2 px-space-sm py-1 bg-secondary/15 text-secondary rounded-full font-label-sm text-label-sm font-semibold mb-space-sm">
                        <span className="material-symbols-outlined text-[16px]">
                          groups
                        </span>
                        <span>
                          Council Management
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">
                        {"Board & Governance Intelligence"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                        Manage director profiles, statutory committee mandates, annual term limits, and automatic conflict-of-interest declarations.
                      </p>
                      <div className="space-y-space-xs">
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            {"Independence ratios & board matrix evaluation"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            Legally compliant digital consent documentation
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            {"Committee charter governance & oversight"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-sm border-t border-surface-container flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>
                        Tracked Boards
                      </span>
                      <span className="font-bold text-primary">
                        312 Active Councils
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 bg-surface-container-low p-space-lg flex flex-col justify-center">
                    <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-md border border-surface-container-high/60">
                      <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high/50 mb-space-sm">
                        <span className="font-title-md text-title-md text-primary font-bold">
                          {"Board Matrix & Quorum Engine"}
                        </span>
                        <span className="text-label-sm font-label-sm bg-secondary text-on-secondary px-2 py-0.5 rounded-full font-semibold">
                          100% Compliant
                        </span>
                      </div>
                      <div className="space-y-2 text-label-sm font-label-sm">
                        <div className="flex items-center justify-between p-2 bg-surface-container-low rounded">
                          <div className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary">
                              CW
                            </span>
                            <div>
                              <div className="font-semibold text-primary">
                                Dr. Catherine Wanjiku
                              </div>
                              <div className="text-label-sm text-on-surface-variant">
                                Chairperson • Independent
                              </div>
                            </div>
                          </div>
                          <span className="text-secondary font-semibold">
                            KYC Verified
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-surface-container-low rounded">
                          <div className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-primary">
                              JM
                            </span>
                            <div>
                              <div className="font-semibold text-primary">
                                James Maina, OGW
                              </div>
                              <div className="text-label-sm text-on-surface-variant">
                                Audit Committee Lead
                              </div>
                            </div>
                          </div>
                          <span className="text-secondary font-semibold">
                            Declaration Signed
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-surface-container-low rounded">
                          <div className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-primary">
                              FA
                            </span>
                            <div>
                              <div className="font-semibold text-primary">
                                Fatuma Ahmed
                              </div>
                              <div className="text-label-sm text-on-surface-variant">
                                Treasurer • Finance Exec
                              </div>
                            </div>
                          </div>
                          <span className="text-secondary font-semibold">
                            Compliant
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="module-pane hidden grid-cols-1 lg:grid-cols-12" id="module-pane-meetings">
                  <div className="lg:col-span-5 p-space-xl flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-surface-container-high/50">
                    <div>
                      <div className="inline-flex items-center gap-2 px-space-sm py-1 bg-secondary/15 text-secondary rounded-full font-label-sm text-label-sm font-semibold mb-space-sm">
                        <span className="material-symbols-outlined text-[16px]">
                          how_to_vote
                        </span>
                        <span>
                          Statutory Assembly
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">
                        {"Meetings, Quorum & Balloting"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                        Automate hybrid board convocations, dynamic quorum calculation, encrypted digital voting, and PKI-timestamped minutes.
                      </p>
                      <div className="space-y-space-xs">
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            Real-time quorum calculation according to statutes
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            Secret or open weighted resolution balloting
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            7-year immutable minutes archiving
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-sm border-t border-surface-container flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>
                        Meetings Completed
                      </span>
                      <span className="font-bold text-primary">
                        1,493 Convened
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 bg-surface-container-low p-space-lg flex flex-col justify-center">
                    <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-md border border-surface-container-high/60">
                      <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high/50 mb-space-sm">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[22px]">
                            how_to_vote
                          </span>
                          <span className="font-title-md text-title-md text-primary font-bold">
                            Resolution Res-2025-04
                          </span>
                        </div>
                        <span className="text-label-sm font-label-sm bg-primary text-on-primary px-2 py-0.5 rounded">
                          Adopted (88%)
                        </span>
                      </div>
                      <p className="text-label-md text-on-surface font-medium mb-3">
                        {"Approval of FY 2025/26 Strategic Capital Deployment & Sovereign Cloud Infrastructure Alignment"}
                      </p>
                      <div className="space-y-2 text-label-sm font-label-sm">
                        <div className="flex justify-between font-semibold">
                          <span>
                            In Favor (7 votes)
                          </span>
                          <span className="text-secondary">
                            87.5%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-outline-variant/30 rounded-full overflow-hidden">
                          <div className="h-full bg-secondary" style={{ "width": "87.5%" }} />
                        </div>
                        <div className="flex items-center justify-between pt-2 text-on-surface-variant text-label-sm">
                          <span>
                            Cryptographic Seal: SHA256-PKI-Signed
                          </span>
                          <span className="text-secondary font-semibold">
                            Admissible in Court
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="module-pane hidden grid-cols-1 lg:grid-cols-12" id="module-pane-strategy">
                  <div className="lg:col-span-5 p-space-xl flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-surface-container-high/50">
                    <div>
                      <div className="inline-flex items-center gap-2 px-space-sm py-1 bg-secondary/15 text-secondary rounded-full font-label-sm text-label-sm font-semibold mb-space-sm">
                        <span className="material-symbols-outlined text-[16px]">
                          track_changes
                        </span>
                        <span>
                          Vision Execution
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">
                        {"Strategic Planning & Theory of Change"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                        Align board multi-year plans, annual operational workplans (AOPs), milestones, and objective key results (OKRs) dynamically.
                      </p>
                      <div className="space-y-space-xs">
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            Interactive Theory of Change workflow maps
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            {"Departmental cascade & milestone dependency trees"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            {"Board review checkpoints & quarterly retrospectives"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-sm border-t border-surface-container flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>
                        Active Strategic Frameworks
                      </span>
                      <span className="font-bold text-primary">
                        428 Multi-Year Plans
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 bg-surface-container-low p-space-lg flex flex-col justify-center">
                    <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-md border border-surface-container-high/60">
                      <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high/50 mb-space-sm">
                        <span className="font-title-md text-title-md text-primary font-bold">
                          Pillar 2: Community Digital Inclusion
                        </span>
                        <span className="text-label-sm font-label-sm bg-secondary/15 text-secondary px-2 py-0.5 rounded font-semibold">
                          On Track
                        </span>
                      </div>
                      <div className="space-y-3 text-label-sm font-label-sm">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-on-surface font-medium">
                              County Grassroots Center Deployment
                            </span>
                            <span className="font-bold text-primary">
                              92%
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-outline-variant/30 rounded-full overflow-hidden">
                            <div className="h-full bg-secondary" style={{ "width": "92%" }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-on-surface font-medium">
                              Public Governance Literacy Curriculum
                            </span>
                            <span className="font-bold text-primary">
                              84%
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-outline-variant/30 rounded-full overflow-hidden">
                            <div className="h-full bg-secondary" style={{ "width": "84%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="module-pane hidden grid-cols-1 lg:grid-cols-12" id="module-pane-projects">
                  <div className="lg:col-span-5 p-space-xl flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-surface-container-high/50">
                    <div>
                      <div className="inline-flex items-center gap-2 px-space-sm py-1 bg-secondary/15 text-secondary rounded-full font-label-sm text-label-sm font-semibold mb-space-sm">
                        <span className="material-symbols-outlined text-[16px]">
                          dataset
                        </span>
                        <span>
                          Execution Tracking
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">
                        {"Programmes & Project Portfolios"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                        Link programme grants to measurable field outputs, multi-county timelines, activity risk matrices, and funder export digests.
                      </p>
                      <div className="space-y-space-xs">
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            {"Grant agreement & deliverable ledger tracking"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            {"Gantt milestone dependencies & early alerts"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            Automated PDF/CSV donor-compliant reporting
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-sm border-t border-surface-container flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>
                        Active Programmes
                      </span>
                      <span className="font-bold text-primary">
                        1,840 Projects
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 bg-surface-container-low p-space-lg flex flex-col justify-center">
                    <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-md border border-surface-container-high/60">
                      <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high/50 mb-space-sm">
                        <span className="font-title-md text-title-md text-primary font-bold">
                          Programme: Rift Valley Water Stewardship
                        </span>
                        <span className="text-label-sm font-label-sm bg-primary-fixed/50 text-primary px-2 py-0.5 rounded font-semibold">
                          Q3 Active
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-label-sm mb-3">
                        <div className="p-2 bg-surface-container-low rounded">
                          <div className="text-on-surface-variant">
                            Budget
                          </div>
                          <div className="font-bold text-primary">
                            KES 42.5M
                          </div>
                        </div>
                        <div className="p-2 bg-surface-container-low rounded">
                          <div className="text-on-surface-variant">
                            Disbursed
                          </div>
                          <div className="font-bold text-secondary">
                            86.4%
                          </div>
                        </div>
                        <div className="p-2 bg-surface-container-low rounded">
                          <div className="text-on-surface-variant">
                            Beneficiaries
                          </div>
                          <div className="font-bold text-primary">
                            124,000+
                          </div>
                        </div>
                      </div>
                      <div className="p-2 bg-surface-container rounded text-label-sm text-on-surface flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            task
                          </span>
                          Milestone 4: Community Borehole Solarisation
                        </span>
                        <span className="text-secondary font-bold">
                          Complete
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="module-pane hidden grid-cols-1 lg:grid-cols-12" id="module-pane-mearl">
                  <div className="lg:col-span-5 p-space-xl flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-surface-container-high/50">
                    <div>
                      <div className="inline-flex items-center gap-2 px-space-sm py-1 bg-secondary/15 text-secondary rounded-full font-label-sm text-label-sm font-semibold mb-space-sm">
                        <span className="material-symbols-outlined text-[16px]">
                          monitoring
                        </span>
                        <span>
                          Impact Intelligence
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">
                        {"MEARL: Monitoring & Accountability"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                        {"Rigorous Monitoring, Evaluation, Accountability, Research & Learning framework with field verification geocodes and feedback loops."}
                      </p>
                      <div className="space-y-space-xs">
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            {"Quantitative & qualitative baseline vs target logs"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            {"Direct beneficiary feedback & complaint resolution"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            Tamper-resistant audit evidence chain
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-sm border-t border-surface-container flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>
                        Field Data Points Tracked
                      </span>
                      <span className="font-bold text-primary">
                        920,000+ Verified
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 bg-surface-container-low p-space-lg flex flex-col justify-center">
                    <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-md border border-surface-container-high/60">
                      <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high/50 mb-space-sm">
                        <span className="font-title-md text-title-md text-primary font-bold">
                          Indicator Dashboard • Health Systems
                        </span>
                        <span className="text-label-sm font-label-sm bg-secondary text-on-secondary px-2 py-0.5 rounded-full">
                          Audit Clean
                        </span>
                      </div>
                      <div className="space-y-2 text-label-sm">
                        <div className="p-2 bg-surface-container-low rounded flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-primary">
                              Primary Healthcare Access Rate
                            </div>
                            <div className="text-on-surface-variant text-label-sm">
                              Target: 80% • Actual: 89.2%
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-secondary text-[20px]">
                            trending_up
                          </span>
                        </div>
                        <div className="p-2 bg-surface-container-low rounded flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-primary">
                              County Health Worker Retraining
                            </div>
                            <div className="text-on-surface-variant text-label-sm">
                              Target: 500 • Actual: 540 Certified
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-secondary text-[20px]">
                            trending_up
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="module-pane hidden grid-cols-1 lg:grid-cols-12" id="module-pane-finance">
                  <div className="lg:col-span-5 p-space-xl flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-surface-container-high/50">
                    <div>
                      <div className="inline-flex items-center gap-2 px-space-sm py-1 bg-secondary/15 text-secondary rounded-full font-label-sm text-label-sm font-semibold mb-space-sm">
                        <span className="material-symbols-outlined text-[16px]">
                          account_balance_wallet
                        </span>
                        <span>
                          Fiduciary Integrity
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">
                        {"Financial Management & Approvals"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                        Fiduciary controls built for non-profits and public institutions: multi-tier approval matrix, grant allocations, and real-time burn tracking.
                      </p>
                      <div className="space-y-space-xs">
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            {"Automated segregation of duties & authorization limits"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            Granular donor expenditure category restrictions
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            Exportable audit trails for external statutory auditors
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-sm border-t border-surface-container flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>
                        Audit Clearance Rate
                      </span>
                      <span className="font-bold text-primary">
                        99.8% Compliant
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 bg-surface-container-low p-space-lg flex flex-col justify-center">
                    <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-md border border-surface-container-high/60">
                      <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high/50 mb-space-sm">
                        <span className="font-title-md text-title-md text-primary font-bold">
                          Statutory Spend Authorization
                        </span>
                        <span className="text-label-sm font-label-sm bg-primary-fixed/40 text-secondary px-2 py-0.5 rounded font-semibold">
                          Dual Sign-Off
                        </span>
                      </div>
                      <div className="space-y-2 text-label-sm font-label-sm">
                        <div className="flex items-center justify-between p-2 bg-surface-container-low rounded">
                          <div className="truncate">
                            <div className="font-semibold text-primary truncate">
                              Requisition #REQ-2025-089 (County Field Equipment)
                            </div>
                            <div className="text-on-surface-variant text-label-sm">
                              KES 3,840,000 • Donor Grant G-889
                            </div>
                          </div>
                          <span className="text-secondary font-semibold whitespace-nowrap ml-2">
                            Approved
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-surface-container-low rounded">
                          <div className="truncate">
                            <div className="font-semibold text-primary truncate">
                              Requisition #REQ-2025-090 (External Audit Review Retainer)
                            </div>
                            <div className="text-on-surface-variant text-label-sm">
                              KES 950,000 • Core Budget Line 12
                            </div>
                          </div>
                          <span className="text-primary font-semibold whitespace-nowrap ml-2">
                            Pending CEO
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="module-pane hidden grid-cols-1 lg:grid-cols-12" id="module-pane-security">
                  <div className="lg:col-span-5 p-space-xl flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-surface-container-high/50">
                    <div>
                      <div className="inline-flex items-center gap-2 px-space-sm py-1 bg-secondary/15 text-secondary rounded-full font-label-sm text-label-sm font-semibold mb-space-sm">
                        <span className="material-symbols-outlined text-[16px]">
                          shield
                        </span>
                        <span>
                          Kenya DPA 2019 Certified
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">
                        {"Security, PKI & Sovereign Data"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                        Certified under CAK Electronic Certification Service Provider rules. Zero foreign cloud leakage with 100% sovereign Kenyan data residency.
                      </p>
                      <div className="space-y-space-xs">
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            FIPS 140-2 Level 3 Hardware Security Modules
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            7-year immutable, tamper-evident audit ledger
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-body-md text-on-surface">
                          <span className="text-secondary font-bold">
                            ✓
                          </span>
                          <span>
                            Role-based cryptographic access control (RBAC)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-sm border-t border-surface-container flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>
                        Encryption Standard
                      </span>
                      <span className="font-bold text-primary">
                        AES-256-GCM + PKI
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 bg-surface-container-low p-space-lg flex flex-col justify-center">
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <img alt="Sovereign Kenyan Data Center" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1VV_uNGw4-p5lwQujZZ3gaFFsM9HZMCRGuKjbHbUJ-sTP3qfv8Y3yaIRraomHZ0intqwYdkCAUvhOe6Y-PYyOguoOeCEdgcJ2tgnC6biUQS8g01Au-QKdcI5L1fG8WW0Zh05S8RjBFT6NShD4cbUSeCRaEmlo9zCeeXZN63YynvbRLqgEWBgRO1VFOIAr26s4jC5kmP6Vj_S1RV9RjVEDCXi-Y4v-wdPG_5feftqXAPomyn9ecjyw0Slg" />
                      <div className="absolute inset-0 bg-primary/60 p-space-md flex flex-col justify-end text-on-primary">
                        <div className="font-headline-sm text-headline-sm font-bold">
                          Nairobi Sovereign Facility Node
                        </div>
                        <p className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                          Data strictly localized under the Kenya Data Protection Act, 2019.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Product Modules Section */}
          <section className="w-full bg-surface py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-md text-label-md text-secondary uppercase font-semibold tracking-wider">
                  Product Modules
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary mt-space-xs">
                  {" Eight integrated modules, one platform "}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Mod 1 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center text-primary mb-space-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      how_to_reg
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold mb-1">
                    Organization Registration
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {"6-step wizard, legal tracks, public registry & verification."}
                  </p>
                </div>
                {/* Mod 2 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center text-primary mb-space-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      badge
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold mb-1">
                    {"Board & Governance"}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Member profiles, committees, conflict-of-interest tracking.
                  </p>
                </div>
                {/* Mod 3 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center text-primary mb-space-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      how_to_vote
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold mb-1">
                    {"Meetings & Resolutions"}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Agendas, RSVP, minutes, voting, and quorum.
                  </p>
                </div>
                {/* Mod 4 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center text-primary mb-space-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      track_changes
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold mb-1">
                    Strategic Planning
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Multi-year plans, AOPs, and KPI monitoring.
                  </p>
                </div>
                {/* Mod 5 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center text-primary mb-space-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      dataset
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold mb-1">
                    {"Programmes & Projects"}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Milestones, budget linkage, CSV/PDF export.
                  </p>
                </div>
                {/* Mod 6 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center text-primary mb-space-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      monitoring
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold mb-1">
                    {"MEL & Accountability"}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Indicators, evaluations, complaint tracking.
                  </p>
                </div>
                {/* Mod 7 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center text-primary mb-space-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      account_balance_wallet
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold mb-1">
                    Financial Management
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Chart of accounts, budget approvals, budget vs. actual.
                  </p>
                </div>
                {/* Mod 8 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center text-primary mb-space-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      lock_reset
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold mb-1">
                    {"Security & Access"}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    2FA, role-based access, 7-year audit trails.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Built for Every Stakeholder Section */}
          <section className="w-full bg-surface py-space-xl border-t border-surface-container-high/40">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                <div className="lg:col-span-6">
                  <div className="inline-flex items-center gap-2 px-space-md py-1 rounded-full bg-secondary/15 text-secondary text-label-md font-semibold mb-space-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      health_and_safety
                    </span>
                    <span>
                      Interactive Compliance Audit
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-space-xs">
                    Governance Health Check
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-md leading-relaxed">
                    Evaluate your institution's compliance posture across Kenyan statutory requirements, board composition rules, and data sovereignty in seconds.
                  </p>
                  <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-sm">
                    <label className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg cursor-pointer transition-all hover:bg-surface-container">
                      <input defaultChecked className="health-chk w-4 h-4 text-secondary rounded focus:ring-secondary" data-rcfi-onchange="updateHealthScore()" type="checkbox" />
                      <span className="font-label-md text-label-md text-on-surface">
                        {"Statutory Board Quorum & Digital PKI Minutes (CAK Mandate)"}
                      </span>
                    </label>
                    <label className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg cursor-pointer transition-all hover:bg-surface-container">
                      <input defaultChecked className="health-chk w-4 h-4 text-secondary rounded focus:ring-secondary" data-rcfi-onchange="updateHealthScore()" type="checkbox" />
                      <span className="font-label-md text-label-md text-on-surface">
                        Kenya Data Protection Act (DPA 2019) Sovereign Storage Node
                      </span>
                    </label>
                    <label className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg cursor-pointer transition-all hover:bg-surface-container">
                      <input defaultChecked className="health-chk w-4 h-4 text-secondary rounded focus:ring-secondary" data-rcfi-onchange="updateHealthScore()" type="checkbox" />
                      <span className="font-label-md text-label-md text-on-surface">
                        {"7-Year Tamper-Evident Immutable Activity & Audit Trail"}
                      </span>
                    </label>
                    <label className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg cursor-pointer transition-all hover:bg-surface-container">
                      <input defaultChecked className="health-chk w-4 h-4 text-secondary rounded focus:ring-secondary" data-rcfi-onchange="updateHealthScore()" type="checkbox" />
                      <span className="font-label-md text-label-md text-on-surface">
                        {"Annual Conflict of Interest Register & Board Independence"}
                      </span>
                    </label>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-xl border border-surface-container-high/60 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        Audit Readiness Index
                      </span>
                      <span className="text-label-sm font-label-sm bg-secondary text-on-secondary px-3 py-1 rounded-full font-semibold" id="health-status-badge">
                        Ready For Statutory Audit
                      </span>
                    </div>
                    <div className="flex items-end gap-3 mb-space-md">
                      <span className="font-display-lg text-display-lg font-bold text-secondary leading-none" id="health-score-val">
                        100%
                      </span>
                      <span className="font-body-md text-body-md text-on-surface-variant pb-1">
                        {"Overall Governance & Regulatory Rating"}
                      </span>
                    </div>
                    <div className="w-full h-3 bg-outline-variant/30 rounded-full overflow-hidden mb-space-md">
                      <div className="h-full bg-secondary transition-all" id="health-bar" style={{ "width": "100%" }} />
                    </div>
                    <div className="grid grid-cols-2 gap-space-sm text-label-sm font-label-sm">
                      <div className="p-space-sm bg-surface-container-low rounded-lg">
                        <span className="block text-on-surface-variant">
                          CAK ECSP Legality
                        </span>
                        <span className="font-bold text-primary">
                          Admissible in Kenyan Courts
                        </span>
                      </div>
                      <div className="p-space-sm bg-surface-container-low rounded-lg">
                        <span className="block text-on-surface-variant">
                          Data Residency
                        </span>
                        <span className="font-bold text-primary">
                          Nairobi Data Center
                        </span>
                      </div>
                    </div>
                    <div className="mt-space-md pt-space-sm border-t border-surface-container-high/60 flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Generate full downloadable diagnostic
                      </span>
                      <Link className="inline-flex items-center gap-1 text-secondary font-semibold font-label-md hover:underline" data-path="book-a-meeting" href="/contact/">
                        {"Request Audit Pack "}
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-space-xl rounded-xl overflow-hidden bg-primary text-on-primary shadow-xl border border-primary-container grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-6 relative">
                  <img alt={"Enterprise Security & Sovereignty Data Center"} className="w-full h-full object-cover min-h-[280px]" src="https://lh3.googleusercontent.com/aida/AEtjO1VV_uNGw4-p5lwQujZZ3gaFFsM9HZMCRGuKjbHbUJ-sTP3qfv8Y3yaIRraomHZ0intqwYdkCAUvhOe6Y-PYyOguoOeCEdgcJ2tgnC6biUQS8g01Au-QKdcI5L1fG8WW0Zh05S8RjBFT6NShD4cbUSeCRaEmlo9zCeeXZN63YynvbRLqgEWBgRO1VFOIAr26s4jC5kmP6Vj_S1RV9RjVEDCXi-Y4v-wdPG_5feftqXAPomyn9ecjyw0Slg" />
                  <div className="absolute inset-0 bg-primary/40 backdrop-blur-[1px]" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-md text-secondary-fixed text-label-sm font-semibold border border-secondary-fixed/20">
                    <span className="material-symbols-outlined text-[16px]">
                      shield
                    </span>
                    <span>
                      Nairobi Tier III Sovereign Infrastructure
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-6 p-space-xl flex flex-col justify-between">
                  <div className="mb-space-md">
                    <span className="text-label-sm uppercase tracking-wider text-secondary-fixed font-semibold">
                      {"Enterprise Security & Sovereignty"}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-primary font-bold mt-1 mb-2">
                      Kenyan Data Sovereignty With Tier III Isolation
                    </h3>
                    <p className="font-body-md text-body-md text-tertiary-fixed-dim leading-relaxed">
                      Unlike foreign governance tools that route board resolutions and donor finances overseas, Elano maintains all primary and replica nodes inside Nairobi with continuous hardware cryptographic signing.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-space-sm font-label-sm text-label-sm mb-space-md">
                    <div className="bg-primary-container/70 p-space-sm rounded-lg">
                      <div className="font-semibold text-secondary-fixed">
                        100% In-Country Storage
                      </div>
                      <div className="text-tertiary-fixed-dim">
                        Zero foreign cloud export
                      </div>
                    </div>
                    <div className="bg-primary-container/70 p-space-sm rounded-lg">
                      <div className="font-semibold text-secondary-fixed">
                        {"ISO 27001 & DPA 2019"}
                      </div>
                      <div className="text-tertiary-fixed-dim">
                        Full statutory compliance
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <a className="inline-flex items-center justify-center px-space-md py-2.5 bg-secondary hover:bg-secondary-fixed text-on-secondary hover:text-on-secondary-fixed font-label-md rounded-lg font-semibold transition-colors" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                      Schedule Infrastructure Briefing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="max-w-3xl mb-space-xl">
                <span className="font-label-md text-label-md text-secondary uppercase font-semibold tracking-wider">
                  BUILT FOR EVERY STAKEHOLDER
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary mt-space-xs mb-space-xs">
                  {" One platform for everyone shaping governance "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" From NGOs and regulators to board members and the public, Elano brings registration, governance, compliance and reporting together in one secure digital ecosystem. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
                {/* Stakeholder 1 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start">
                  <div className="text-3xl mb-space-sm select-none">
                    🏢
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold mb-1">
                    {"NGOs & CSOs"}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Registration, governance, programmes and impact tracking.
                  </p>
                </div>
                {/* Stakeholder 2 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start">
                  <div className="text-3xl mb-space-sm select-none">
                    🏦
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold mb-1">
                    Institutions
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Board governance, compliance, reporting and oversight.
                  </p>
                </div>
                {/* Stakeholder 3 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start">
                  <div className="text-3xl mb-space-sm select-none">
                    🏛
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold mb-1">
                    Government
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Certification, public registry and application review.
                  </p>
                </div>
                {/* Stakeholder 4 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start">
                  <div className="text-3xl mb-space-sm select-none">
                    👥
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold mb-1">
                    Board Members
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Meetings, approvals, collaboration and governance.
                  </p>
                </div>
                {/* Stakeholder 5 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start">
                  <div className="text-3xl mb-space-sm select-none">
                    🌍
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold mb-1">
                    The Public
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Verify certified organizations with confidence.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonials Section */}
          <section className="w-full bg-surface py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-space-xs">
                  {" Trusted by institutions that cannot afford mistakes "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" Organizations across Kenya rely on Elano to improve governance, accountability and operational transparency. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* Quote 1 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="text-secondary mb-space-md select-none">
                      <span className="material-symbols-outlined text-[32px]">
                        format_quote
                      </span>
                    </div>
                    <p className="font-body-lg text-body-lg text-on-surface mb-space-lg leading-relaxed italic">
                      {" “Registration used to take weeks. Today every application, review and certificate is tracked digitally.” "}
                    </p>
                  </div>
                  <div className="pt-space-md bg-surface-container-low px-space-md py-space-sm rounded-lg">
                    <div className="font-title-md text-title-md text-primary font-semibold">
                      Programme Director
                    </div>
                    <div className="font-label-sm text-label-sm text-secondary">
                      Kenyan NGO
                    </div>
                  </div>
                </div>
                {/* Quote 2 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="text-secondary mb-space-md select-none">
                      <span className="material-symbols-outlined text-[32px]">
                        format_quote
                      </span>
                    </div>
                    <p className="font-body-lg text-body-lg text-on-surface mb-space-lg leading-relaxed italic">
                      {" “Board meetings, resolutions and governance records are finally centralized in one secure platform.” "}
                    </p>
                  </div>
                  <div className="pt-space-md bg-surface-container-low px-space-md py-space-sm rounded-lg">
                    <div className="font-title-md text-title-md text-primary font-semibold">
                      Board Secretary
                    </div>
                    <div className="font-label-sm text-label-sm text-secondary">
                      CSO
                    </div>
                  </div>
                </div>
                {/* Quote 3 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="text-secondary mb-space-md select-none">
                      <span className="material-symbols-outlined text-[32px]">
                        format_quote
                      </span>
                    </div>
                    <p className="font-body-lg text-body-lg text-on-surface mb-space-lg leading-relaxed italic">
                      {" “Leadership can now monitor strategy, projects, finance and reporting from one dashboard.” "}
                    </p>
                  </div>
                  <div className="pt-space-md bg-surface-container-low px-space-md py-space-sm rounded-lg">
                    <div className="font-title-md text-title-md text-primary font-semibold">
                      CEO
                    </div>
                    <div className="font-label-sm text-label-sm text-secondary">
                      Development Agency
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Closing Call To Action Banner */}
          <section className="w-full pb-space-xl bg-surface">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="relative bg-primary text-on-primary rounded-xl p-space-xl md:p-16 overflow-hidden shadow-xl text-center flex flex-col items-center">
                {/* Translucent radial background highlight */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 max-w-2xl flex flex-col items-center">
                  <h2 className="font-display-lg text-display-lg text-on-primary mb-space-md tracking-tight">
                    {" Ready to govern digitally? "}
                  </h2>
                  <p className="font-body-lg text-body-lg text-tertiary-fixed-dim mb-space-lg leading-relaxed">
                    {" See how Elano helps Kenyan institutions register, certify, and govern with confidence. "}
                  </p>
                  <a className="inline-flex items-center justify-center px-space-xl py-3.5 bg-secondary text-on-secondary font-title-md text-title-md rounded-lg shadow-md hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all mb-space-xl" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                    {" Book a Demo "}
                    <span className="material-symbols-outlined ml-2 text-[20px]">
                      arrow_forward
                    </span>
                  </a>
                  <p className="font-label-md text-label-md text-tertiary-fixed-dim max-w-xl">
                    {" Digital signatures, PKI as a Service, e-KYC, governance and business management software — serving Nairobi, Kenya, East Africa, and Africa. "}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-primary text-on-primary pt-space-xl pb-space-lg">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
            <div>
              <div className="flex items-center gap-space-sm mb-space-md">
                <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                    hub
                  </span>
                </div>
                <span className="font-headline-sm text-headline-sm text-on-primary">
                  RCFI
                </span>
              </div>
              <p className="font-body-md text-body-md text-tertiary-fixed-dim mb-space-sm">
                Reprodrive Center for Innovation Limited
              </p>
              <p className="font-body-md text-body-md text-tertiary-fixed-dim mb-space-md leading-relaxed">
                5th Floor, Hifadhi House,
                <br />
                Along ICD Road,
                <br />
                Nairobi, Kenya
              </p>
              <div className="flex items-center gap-space-xs text-secondary-fixed">
                <span className="material-symbols-outlined text-[16px]">
                  mail
                </span>
                <a className="font-label-md text-label-md text-secondary-fixed hover:text-secondary-fixed-dim transition-colors" href="mailto:info@rcfi.co.ke">
                  info@rcfi.co.ke
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-on-primary mb-space-md">
                Products
              </h4>
              <ul className="space-y-space-sm">
                <li className="font-body-md text-body-md">
                  <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="certysign" href="/products/certysign/">
                    CertySign
                  </Link>
                </li>
                <li className="font-body-md text-body-md">
                  <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="elano" href="/products/elano/">
                    Elano
                  </Link>
                </li>
                <li className="font-body-md text-body-md">
                  <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="prezio" href="/products/prezio/">
                    Prezio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-on-primary mb-space-md">
                Company
              </h4>
              <ul className="space-y-space-sm">
                <li className="font-body-md text-body-md">
                  <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="home" href="/">
                    Home
                  </Link>
                </li>
                <li className="font-body-md text-body-md">
                  <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="about" href="/about/">
                    About Us
                  </Link>
                </li>
                <li className="font-body-md text-body-md">
                  <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="careers" href="/insights/">
                    Updates
                  </Link>
                </li>
                <li className="font-body-md text-body-md">
                  <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="contact" href="/contact/">
                    Contact
                  </Link>
                </li>
                <li className="font-body-md text-body-md">
                  <a className="text-secondary-fixed hover:text-secondary-fixed-dim font-medium transition-colors" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                    Book a Meeting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-on-primary mb-space-md">
                Compliance Seals
              </h4>
              <div className="flex flex-col gap-space-sm">
                <div className="p-space-sm rounded-lg bg-primary-container/60 flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                    verified_user
                  </span>
                  <div>
                    <div className="font-label-md text-label-md text-on-primary font-semibold">
                      ISO 27001 Certified
                    </div>
                    <div className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                      Information Security Standard
                    </div>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-primary-container/60 flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                    gavel
                  </span>
                  <div>
                    <div className="font-label-md text-label-md text-on-primary font-semibold">
                      CAK Licensed
                    </div>
                    <div className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                      Electronic Cert. Service Provider
                    </div>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-primary-container/60 flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                    security
                  </span>
                  <div>
                    <div className="font-label-md text-label-md text-on-primary font-semibold">
                      Kenya DPA Compliant
                    </div>
                    <div className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                      Data Protection Act, 2019
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <div className="font-label-sm text-label-sm text-tertiary-fixed-dim">
              © 2025 Reprodrive Center for Innovation Limited (RCFI). All rights reserved.
            </div>
            <div className="flex items-center gap-space-md font-label-sm text-label-sm text-tertiary-fixed-dim">
              <Link className="hover:text-secondary-fixed transition-colors" href="/privacy/">
                Privacy Policy
              </Link>
              <Link className="hover:text-secondary-fixed transition-colors" href="/terms/">
                Terms of Service
              </Link>
              <Link className="hover:text-secondary-fixed transition-colors" href="/insights/">
                Security Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <PageScripts scripts={scripts} />
    </div>
  );
}
