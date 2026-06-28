"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { 
  Phone, 
  ArrowRight, 
  ArrowUpRight, 
  FileText, 
  Download, 
  CheckCircle2, 
  Users, 
  Shield, 
  Gauge, 
  Cloud, 
  Activity, 
  Handshake, 
  Compass, 
  Network, 
  HelpCircle,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  MessageSquare
} from "lucide-react";
import Container from "components/layout/Container";
import CTA from "components/about/CTA";

// SERVICES DATA MAP FOR THE DYNAMIC PAGE
const SERVICES_DATA: Record<string, {
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  icon: any;
  overviewText: string;
  highlights: { title: string; desc: string; icon: any }[];
  benefits: { title: string; desc: string; icon: any }[];
  approach: { step: string; title: string; desc: string }[];
  deliverables: string[];
  pdfName: string;
}> = {
  "board-risk-advisory": {
    title: "Board Risk Advisory",
    badge: "GOVERNANCE",
    subtitle: "Strengthen Governance. Anticipate Risk. Protect Value.",
    description: "Our Board Risk Advisory service helps organizations build a resilient risk posture with clear oversight, structured reporting, and forward-looking insights.",
    icon: Users,
    overviewText: "Boards today face a widening range of risks—from cyber threats and regulatory shifts to operational and reputational risks. We partner with your leadership team to build a robust board-level risk framework that enhances oversight, improves decision-making, and drives long-term value.",
    highlights: [
      { title: "Board-Level Focus", desc: "Tailored for directors and executives to support effective risk oversight.", icon: Users },
      { title: "Risk Framework", desc: "Build a structured risk framework aligned with your strategy.", icon: Network },
      { title: "Actionable Insights", desc: "Deliver clear, data-driven insights for confident decision-making.", icon: FileText },
      { title: "Regulatory Alignment", desc: "Stay ahead of evolving regulations and governance expectations.", icon: Compass },
    ],
    benefits: [
      { title: "Strong Governance", desc: "Enhance board oversight and accountability.", icon: ShieldCheck },
      { title: "Reduce Uncertainty", desc: "Identify and prioritize risks before they escalate.", icon: TrendingUp },
      { title: "Regulatory Confidence", desc: "Align with global standards and compliance needs.", icon: ShieldCheck },
      { title: "Protect Business Value", desc: "Safeguard reputation, operations, and growth.", icon: DollarSign },
    ],
    approach: [
      { step: "01", title: "Understand", desc: "We learn your business, strategy, and risk landscape." },
      { step: "02", title: "Assess", desc: "Identify and evaluate key risks and control gaps." },
      { step: "03", title: "Advise", desc: "Design a tailored risk framework and governance model." },
      { step: "04", title: "Enable", desc: "Strengthen reporting, oversight, and board capabilities." },
      { step: "05", title: "Evolve", desc: "Continuously monitor, review, and adapt to emerging risks." },
    ],
    deliverables: [
      "Board risk framework and governance model",
      "Risk assessment and prioritization report",
      "Risk appetite and tolerance definition",
      "Dashboard and reporting structure",
      "Board risk committee support"
    ],
    pdfName: "board-risk-advisory-overview.pdf"
  },
  "grc-rapid-assessment": {
    title: "GRC Rapid Assessment",
    badge: "ENTRY POINT",
    subtitle: "Quick Posture Analysis. Clear Gap Discovery. Practical Roadmap.",
    description: "A comprehensive 30-day review designed to establish a solid baseline of your current governance, risk, and compliance posture.",
    icon: Gauge,
    overviewText: "Organizations need to quickly identify vulnerabilities and map out a path to compliance. Our GRC Rapid Assessment delivers a swift, deep-dive analysis of your controls and regulatory alignment to build an actionable, prioritized GRC improvement strategy.",
    highlights: [
      { title: "30-Day Velocity", desc: "Fast-tracked analysis to identify immediate gaps without operational lag.", icon: Gauge },
      { title: "Baseline Posture", desc: "Establish a clear risk benchmark based on industry-standard frameworks.", icon: Network },
      { title: "Prioritized Action", desc: "Receive a step-by-step roadmap of what to remediate first.", icon: FileText },
      { title: "Regulatory Readiness", desc: "Determine audit preparedness for NIST, ISO, HIPAA, or SOC 2.", icon: Compass },
    ],
    benefits: [
      { title: "Immediate Visibility", desc: "Gain absolute clarity on your security and compliance gaps.", icon: ShieldCheck },
      { title: "Audit Prep", desc: "Proactively discover weaknesses before external audits begin.", icon: TrendingUp },
      { title: "Cost Optimization", desc: "Invest only in GRC controls that directly resolve your high-priority risks.", icon: ShieldCheck },
      { title: "Accelerated Compliance", desc: "Shorten compliance journeys with pre-vetted guidelines.", icon: DollarSign },
    ],
    approach: [
      { step: "01", title: "Discover", desc: "Gather existing policy documentation, controls, and GRC data." },
      { step: "02", title: "Analyze", desc: "Evaluate controls against NIST, ISO, or SOC 2 frameworks." },
      { step: "03", title: "Identify Gaps", desc: "Pinpoint where compliance and security controls fall short." },
      { step: "04", title: "Build Roadmap", desc: "Draft a prioritized remediation plan with timelines and owners." },
      { step: "05", title: "Present", desc: "Deliver a clear executive brief and detailed technical reports." },
    ],
    deliverables: [
      "Comprehensive GRC gap analysis report",
      "Prioritized 12-month compliance roadmap",
      "Control effectiveness scorecard",
      "Executive summary presentation slide deck",
      "Initial policy update recommendations"
    ],
    pdfName: "grc-rapid-assessment-overview.pdf"
  },
  "regulatory-advisory-services": {
    title: "Regulatory Advisory Services",
    badge: "EU REGULATORY",
    subtitle: "Global Compliance. Simplified Regulations. Risk Mitigation.",
    description: "Navigate the complex landscape of global regulations, including NIS2, DORA, ISO 27001, HIPAA, and ISO 42001 (AI).",
    icon: Shield,
    overviewText: "Regulatory compliance is no longer optional; it is a fundamental business driver. We provide expert advice to help you design, mature, and maintain compliance programs that meet strict global mandates while supporting your organizational objectives.",
    highlights: [
      { title: "NIS2 & DORA Prep", desc: "Prepare for upcoming European directives and digital operational resilience acts.", icon: Shield },
      { title: "ISO 42001 (AI)", desc: "Govern AI developments ethically and comply with emerging AI safety acts.", icon: Network },
      { title: "Multi-Framework GRC", desc: "Implement unified control frameworks that satisfy multiple standards at once.", icon: FileText },
      { title: "Continuous Compliance", desc: "Move away from point-in-time audits toward persistent governance.", icon: Compass },
    ],
    benefits: [
      { title: "Mitigate Penalties", desc: "Avoid hefty non-compliance fines and legal liabilities.", icon: ShieldCheck },
      { title: "Expand Markets", desc: "Enter regulated international markets with proven compliance postures.", icon: TrendingUp },
      { title: "Build Stakeholder Trust", desc: "Assure customers, investors, and boards that data is secure.", icon: ShieldCheck },
      { title: "Operational Resilience", desc: "Protect against systemic risks with business continuity frameworks.", icon: DollarSign },
    ],
    approach: [
      { step: "01", title: "Framework Map", desc: "Map out standard requirements for your specific market sectors." },
      { step: "02", title: "Readiness Check", desc: "Compare current operations against framework controls." },
      { step: "03", title: "Program Design", desc: "Create policies and process guides for compliance gaps." },
      { step: "04", title: "Implementation", desc: "Embed GRC tools and train staff on standard operating procedures." },
      { step: "05", title: "Validation", desc: "Perform mock audits and verify control effectiveness." },
    ],
    deliverables: [
      "Regulatory compliance maturity report",
      "Custom unified control framework map",
      "Policies and standards documentation",
      "Audit evidence folders and artifacts",
      "Training materials and session logs"
    ],
    pdfName: "regulatory-advisory-services-overview.pdf"
  },
  "irm-consulting": {
    title: "IRM Consulting",
    badge: "TECHNOLOGY",
    subtitle: "Integrated Risk Management. Platform Support. ServiceNow Optimization.",
    description: "Supercharge your ServiceNow IRM deployment from configuration and data mapping through go-live and support.",
    icon: Cloud,
    overviewText: "Platform deployments fail due to poor data structures or misalignment with business needs. We act as implementation advisors, optimizing your ServiceNow IRM settings to create automated compliance workflows and real-time risk visibility.",
    highlights: [
      { title: "Platform Alignment", desc: "Match platform configuration to your corporate risk taxonomy.", icon: Cloud },
      { title: "Automated Flows", desc: "Replace manual spreadsheet tracking with triggered tasks.", icon: Network },
      { title: "Real-Time Reports", desc: "Aggregate risk metrics into executive-facing visual dashboards.", icon: FileText },
      { title: "ServiceNow Experts", desc: "Leverage years of direct ServiceNow integration expertise.", icon: Compass },
    ],
    benefits: [
      { title: "Process Efficiency", desc: "Reduce compliance tracking overhead by up to 50% through automation.", icon: ShieldCheck },
      { title: "Data Integrity", desc: "Consolidate all GRC audit trails into a single source of truth.", icon: TrendingUp },
      { title: "Better Collaboration", desc: "Connect risk owners, audit teams, and leaders in one system.", icon: ShieldCheck },
      { title: "Faster ROI", desc: "Accelerate your ServiceNow value realization timeline.", icon: DollarSign },
    ],
    approach: [
      { step: "01", title: "Architecture", desc: "Define data entities, authority documents, and risk registers." },
      { step: "02", title: "Configuration", desc: "Set up control objectives, indicators, and assessment flows." },
      { step: "03", title: "Integration", desc: "Connect ServiceNow with external security tools and assets." },
      { step: "04", title: "User Training", desc: "Train risk managers and control owners on platform tasks." },
      { step: "05", title: "Go-Live Support", desc: "Provide hands-on advisory during deployment and testing." },
    ],
    deliverables: [
      "ServiceNow IRM architectural blueprint",
      "Authority document and citation mapping",
      "Automated risk indicator configurations",
      "Platform dashboard layouts and reports",
      "Admin and end-user guides"
    ],
    pdfName: "irm-consulting-overview.pdf"
  },
  "ai-governance": {
    title: "AI Governance",
    badge: "AI",
    subtitle: "Ethical AI. ISO 42001 Compliance. Algorithmic Risk Management.",
    description: "Implement robust governance frameworks for machine learning, generative AI, and automated decision systems.",
    icon: Activity,
    overviewText: "AI introduces unprecedented regulatory, privacy, and security challenges. We help organizations establish practical policies, risk thresholds, and control parameters to safely design, deploy, and scale AI technologies.",
    highlights: [
      { title: "ISO 42001 Alignment", desc: "Prepare for international AI management system certifications.", icon: Activity },
      { title: "Bias Mitigation", desc: "Establish validation pipelines to identify and mitigate AI bias.", icon: Network },
      { title: "Risk Classification", desc: "Categorize AI use cases based on EU AI Act threat levels.", icon: FileText },
      { title: "Model Transparency", desc: "Implement explainable AI criteria for board oversight.", icon: Compass },
    ],
    benefits: [
      { title: "Safe Innovation", desc: "Deploy generative AI projects with confidence and clear boundaries.", icon: ShieldCheck },
      { title: "Regulatory Compliance", desc: "Ensure alignment with regional AI policies and safety mandates.", icon: TrendingUp },
      { title: "Brand Protection", desc: "Prevent reputational damage from algorithmic model failures.", icon: ShieldCheck },
      { title: "Enhanced Value", desc: "Increase model efficacy with clean data pipelines.", icon: DollarSign },
    ],
    approach: [
      { step: "01", title: "Inventory Models", desc: "Discover and catalog all active AI and ML systems in use." },
      { step: "02", title: "Risk Category", desc: "Evaluate AI systems for privacy, security, and ethical impacts." },
      { step: "03", title: "Policy Design", desc: "Establish generative AI acceptable use guidelines." },
      { step: "04", title: "Control Setup", desc: "Configure monitoring metrics for bias, accuracy, and drift." },
      { step: "05", title: "Advisory Review", desc: "Audit models periodically to verify alignment with ISO 42001." },
    ],
    deliverables: [
      "Corporate AI governance policy document",
      "AI model registry and risk classification log",
      "ISO 42001 readiness scorecard",
      "Ethical AI assessment framework",
      "Algorithmic risk mitigation guide"
    ],
    pdfName: "ai-governance-overview.pdf"
  },
  "ma-risk-due-diligence": {
    title: "M&A Risk Due Diligence",
    badge: "M&A",
    subtitle: "Pre-Acquisition GRC Review. PE Portfolio Scaling. Risk Exposure Map.",
    description: "Thorough technology risk, compliance, and cybersecurity assessments for target organizations.",
    icon: Handshake,
    overviewText: "Hidden cyber liabilities can compromise transaction values and delay integrations. Our due diligence services analyze target GRC postures to identify material exposures, estimating integration costs before signing deals.",
    highlights: [
      { title: "Threat Discovery", desc: "Reveal active security vulnerabilities and past data breaches.", icon: Handshake },
      { title: "Compliance Audit", desc: "Examine target alignment with HIPAA, GDPR, SOC 2, or PCI-DSS.", icon: Network },
      { title: "Integration Cost", desc: "Outline post-close technology consolidation costs.", icon: FileText },
      { title: "PE Portfolio GRC", desc: "Scale standard cybersecurity baselines across portfolio companies.", icon: Compass },
    ],
    benefits: [
      { title: "Protect Deal Value", desc: "Negotiate purchase prices based on validated risk findings.", icon: ShieldCheck },
      { title: "Speed Integration", desc: "Begin post-close GRC remediation planning before Day 1.", icon: TrendingUp },
      { title: "Liability Shield", desc: "Uncover hidden privacy violations and potential regulatory fines.", icon: ShieldCheck },
      { title: "Partner Trust", desc: "Assure PE investors and lenders that assets are secure.", icon: DollarSign },
    ],
    approach: [
      { step: "01", title: "Scope Scope", desc: "Establish risk assessment guidelines tailored to deal parameters." },
      { step: "02", title: "Assess Targets", desc: "Request GRC artifacts and perform outside-in scans." },
      { step: "03", title: "Identify Gaps", desc: "Map target deficiencies against required security standards." },
      { step: "04", title: "Financial Impact", desc: "Estimate remediation budgets and timeline impacts." },
      { step: "05", title: "Final Reporting", desc: "Deliver due diligence reports for deal committees." },
    ],
    deliverables: [
      "Technology due diligence assessment report",
      "Cybersecurity risk assessment scorecard",
      "Compliance gap analysis summary",
      "Estimated post-close remediation budget",
      "Day-1 integration planning checklist"
    ],
    pdfName: "ma-risk-due-diligence-overview.pdf"
  }
};

// QUICK SERVICES LIST SIDEBAR LINKS
const QUICK_SERVICES_LINKS = [
  { label: "GRC rapid assessment", slug: "grc-rapid-assessment" },
  { label: "Board risk advisory", slug: "board-risk-advisory" },
  { label: "Regulatory Advisory Services", slug: "regulatory-advisory-services" },
  { label: "IRM consulting", slug: "irm-consulting" },
  { label: "AI Governance", slug: "ai-governance" },
  { label: "M&A risk due diligence", slug: "ma-risk-due-diligence" }
];

export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const currentSlug = typeof slug === "string" ? slug : "board-risk-advisory";
  const data = SERVICES_DATA[currentSlug] || SERVICES_DATA["board-risk-advisory"];

  const handleDownload = (filename: string) => {
    // Trigger download of placeholder GRC policy overview
    const link = document.createElement("a");
    link.href = `/docs/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show visual confirmation on screen
    setDownloadSuccess(filename);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  const ServiceIcon = data.icon;

  return (
    <div>
      <section className="bg-white py-8 md:py-12">
        <Container className="w-full">
        
        {/* Main Grid: Sidebar (4 cols) & Content (8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: STICKY SIDEBAR */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8 w-full">
            
            {/* WIDGET 1: QUICK SERVICES */}
            <div className="bg-[#F8FAFC] border border-gray-150/60 p-6 rounded-3xl text-left">
              <h4 className="text-[17px] font-bold text-gray-900 mb-5 relative pb-2.5">
                Quick Services
                <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-primary" />
              </h4>
              <nav className="space-y-3">
                {QUICK_SERVICES_LINKS.map((link, idx) => {
                  const isCurrent = link.slug === currentSlug;
                  return (
                    <Link
                      key={idx}
                      href={`/services/${link.slug}`}
                      className={`flex items-center justify-between p-4 rounded-xl text-[14px] font-bold transition-all duration-300 ${
                        isCurrent
                          ? "bg-primary text-white shadow-md shadow-primary/10"
                          : "bg-white border border-gray-100 hover:border-primary/30 text-gray-600 hover:text-primary"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className={`w-4.5 h-4.5 ${isCurrent ? "text-white" : "text-gray-400 group-hover:text-primary"}`} />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* WIDGET 2: REACH OUT TO US */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#0C0466] to-[#1607A5] p-8 text-left text-white overflow-hidden shadow-lg">
              {/* Abstract decorative circles */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/5" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-white/5" />

              <h4 className="text-2xl font-bold tracking-tight mb-4 relative z-10 leading-snug">
                Reach Out To Us Whenever You Need
              </h4>
              <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed mb-6 relative z-10">
                We Are Committed To Excellence At Our IT Solutions Company
              </p>

              {/* Call row */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-[11px] font-semibold uppercase tracking-wider">Call For More Info</p>
                  <a href="tel:+1238989444" className="text-lg font-bold hover:underline">+123 8989 444</a>
                </div>
              </div>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="relative overflow-hidden group inline-flex items-center justify-center whitespace-nowrap h-12 px-6 w-full text-[14px] font-bold bg-[#4F2EE8] text-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <span className="absolute inset-0 bg-white z-0 translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-[#4F2EE8] transition-colors duration-300">
                  <span>Contact With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>



          </aside>

          {/* RIGHT COLUMN: MAIN CONTENT ROUTE */}
          <main className="lg:col-span-8 space-y-16 w-full text-left">
            
            {/* 1. VISUAL HERO BANNER */}
            <div className="relative rounded-[32px] bg-gradient-to-r from-[#0C0466] to-[#1607A5] p-8 md:p-10 shadow-xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 min-h-[300px]">
              
              {/* Graphic watermark background */}
              <div className="absolute inset-0 pointer-events-none opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,100 C30,40 70,60 100,0 L100,100 Z" fill="white" />
                </svg>
              </div>

              {/* Left Column content */}
              <div className="flex-1 flex flex-col items-start relative z-10 text-white">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-5 border border-white/20">
                  <ServiceIcon className="w-6 h-6 text-white" />
                </div>
                <span className="bg-[#3B1EC3] px-3 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase mb-4 shadow-sm">
                  {data.badge}
                </span>
                <h1 className="text-white text-2xl sm:text-3xl lg:text-[28px] xl:text-[36px] font-bold tracking-tight mb-3">
                  {data.title}
                </h1>
                <p className="text-white/90 text-sm font-semibold mb-3 leading-snug">
                  {data.subtitle}
                </p>
                <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed max-w-xl">
                  {data.description}
                </p>
              </div>

              {/* Right Column: Boardroom generated image */}
              <div className="relative w-full md:w-[280px] lg:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border border-white/10">
                <Image
                  src="/images/services/boardroom.png"
                  alt="Boardroom Meeting"
                  fill
                  className="object-cover"
                  sizes="(max-w: 768px) 100vw, 320px"
                  priority
                />
              </div>

            </div>

            {/* 2. OVERVIEW */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-[22px] xl:text-[28px] font-bold text-gray-900 tracking-tight mb-3">
                  Overview
                </h3>
                <p className="text-[14.5px] text-gray-600 leading-relaxed max-w-3xl">
                  {data.overviewText}
                </p>
              </div>

              {/* Highlight Pillar Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.highlights.map((highlight, idx) => {
                  const HighlightIcon = highlight.icon;
                  return (
                    <div 
                      key={idx}
                      className="premium-card p-5 cursor-default"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        <HighlightIcon className="w-5 h-5" />
                      </div>
                      <h4 className="text-[15px] font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
                        {highlight.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {highlight.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. KEY BENEFITS */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-[22px] xl:text-[28px] font-bold text-gray-900 tracking-tight mb-3">
                  Key Benefits
                </h3>
                <p className="text-[14px] text-gray-500 font-medium leading-relaxed">
                  Our approach delivers measurable impact by strengthening governance, reducing uncertainty, and enabling proactive risk management.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.benefits.map((benefit, idx) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <div 
                      key={idx}
                      className="premium-card p-5 cursor-default flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        <BenefitIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
                          {benefit.title}
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. OUR APPROACH */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-[22px] xl:text-[28px] font-bold text-gray-900 tracking-tight mb-3">
                  Our Approach
                </h3>
                <p className="text-[14px] text-gray-500 font-medium leading-relaxed">
                  A proven, structured process to assess, advise, and empower your board with the right risk strategy and oversight.
                </p>
              </div>

              {/* Timeline Horizontal Steps Flow */}
              <div className="flex flex-col md:flex-row md:items-start items-center justify-between gap-6 md:gap-2 w-full">
                {data.approach.map((step, idx) => (
                  <div key={idx} className="group flex-1 flex flex-col items-center text-center px-1 relative w-full">
                    {/* Circle badge */}
                    <div className="w-11 h-11 rounded-full bg-primary/5 border border-primary/20 text-primary font-bold text-[14px] flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 shadow-sm">
                      {step.step}
                    </div>

                    <h4 className="text-[14.5px] font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-[11.5px] text-gray-500 leading-relaxed max-w-[150px]">
                      {step.desc}
                    </p>

                    {/* Connecting Dotted Line Arrow on Desktop */}
                    {idx < data.approach.length - 1 && (
                      <div className="hidden md:block absolute top-5.5 left-[60%] right-[-40%] h-[1px] border-t border-dashed border-gray-300 z-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 5. WHAT WE DELIVER */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Left checklist */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-[22px] xl:text-[28px] font-bold text-gray-900 tracking-tight mb-3">
                      What We Deliver
                    </h3>
                    <p className="text-[14px] text-gray-500 font-medium leading-relaxed">
                      Comprehensive deliverables that equip your board with clarity, visibility, and confidence.
                    </p>
                  </div>

                  <ul className="space-y-3.5">
                    {data.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-[14px] font-semibold text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right dashboard image */}
                <div className="relative aspect-[16/11] rounded-[24px] overflow-hidden shadow-lg border border-gray-100/50 bg-gray-50">
                  <Image
                    src="/images/services/dashboard.png"
                    alt="GRC Dashboard Delivery"
                    fill
                    className="object-cover"
                    sizes="(max-w: 768px) 100vw, 400px"
                  />
                </div>

              </div>
            </div>

          </main>

        </div>

      </Container>
    </section>

    {/* CTA Banner with margin top */}
    <div className="mt-8 md:mt-12">
      <CTA />
    </div>
  </div>
  );
}
