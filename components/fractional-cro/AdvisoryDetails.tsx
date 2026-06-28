"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Home, 
  ShieldCheck, 
  Workflow, 
  ClipboardList, 
  CheckCircle2, 
  HelpCircle,
  Users,
  Shield,
  TrendingUp,
  Briefcase,
  Award,
  Settings,
  ChevronDown,
  ChevronUp,
  Map,
  FileText,
  PieChart,
  Percent,
  Zap,
  ArrowRight,
  ClipboardCheck,
  Search,
  MessageSquare,
  CheckCircle
} from "lucide-react";
import Container from "components/layout/Container";

type TabType = "overview" | "included" | "process" | "deliverables" | "outcomes" | "faq";

export default function AdvisoryDetails() {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tabs = [
    { id: "overview" as TabType, label: "Overview", icon: Home },
    { id: "included" as TabType, label: "What's Included", icon: ShieldCheck },
    { id: "process" as TabType, label: "Engagement Process", icon: Workflow },
    { id: "deliverables" as TabType, label: "Deliverables", icon: ClipboardList },
    { id: "outcomes" as TabType, label: "Outcomes", icon: CheckCircle2 },
    { id: "faq" as TabType, label: "FAQ", icon: HelpCircle },
  ];

  const faqs = [
    {
      q: "How is the Advisory retainer different from hiring a full-time executive?",
      a: "It provides the same level of senior leadership and strategic risk management but at a fraction of the cost, with hours tailored precisely to your operational needs without the overhead of a full-time hire."
    },
    {
      q: "What frameworks and regulations do you support?",
      a: "We support NIST CSF, ISO 27001, ISO 42001 (AI), HIPAA, CMMC, SOC 2, DORA, NIS2, and general corporate governance requirements."
    },
    {
      q: "How is time and engagement structured?",
      a: "Engagements are structured on a monthly retainer basis with a fixed bucket of hours (e.g. 10, 20, or 40 hours) for meetings, board reporting, vulnerability scans, policy development, and advisory."
    },
    {
      q: "How do you ensure alignment with our business goals?",
      a: "We align by performing an onboarding business analysis, setting key risk parameters, mapping governance targets directly to company growth goals, and keeping touchpoints active with senior staff."
    }
  ];

  return (
    <section className="relative bg-white py-8 md:py-12 overflow-hidden">
      <Container className="relative z-10">
        
        {/* Tab Headers Navigation - Responsive scrollbar-none */}
        <div className="border-b border-gray-150 mb-12 w-full">
          <div className="flex items-center justify-start md:justify-between gap-6 md:gap-4 overflow-x-auto whitespace-nowrap pb-0 scrollbar-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 pb-4 px-1 text-[15px] font-semibold border-b-2 transition-all duration-300 ${
                    isActive 
                      ? "border-primary text-primary" 
                      : "border-transparent text-gray-500 hover:text-primary"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-gray-400 group-hover:text-primary"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Tab Content Box */}
        <div className="w-full min-h-[360px]">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-16 animate-fadeIn">
              
              {/* Top Summary Block */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Side: Summary text */}
                <div className="lg:col-span-4 flex flex-col justify-start text-center lg:text-left lg:pr-8">
                  <h3 className="text-2xl lg:text-[24px] xl:text-[30px] font-bold text-gray-900 tracking-tight mb-4">
                    Overview
                  </h3>
                  <p className="text-[15px] sm:text-base text-gray-600 leading-relaxed">
                    The Advisory package delivers continuous leadership support across risk management, governance,
                    compliance, and strategic decision-making. We act as your trusted partner, providing senior expertise and
                    executive guidance to strengthen resilience and drive business confidence.
                  </p>
                </div>

                {/* Right Side: 4 Highlights Cards */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Highlight 1 */}
                  <div className="premium-card group p-6 flex flex-col items-start text-left cursor-default">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-5 border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:border-primary">
                      <Users className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <h4 className="text-[16px] font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                      Fractional Leadership
                    </h4>
                    <div className="w-8 h-[2px] bg-primary mb-4" />
                    <p className="text-[13.5px] text-gray-500 leading-relaxed">
                      Access senior vCISO / CRO expertise without the full-time overhead.
                    </p>
                  </div>

                  {/* Highlight 2 */}
                  <div className="premium-card group p-6 flex flex-col items-start text-left cursor-default">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-5 border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:border-primary">
                      <Shield className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <h4 className="text-[16px] font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                      Risk &amp; Compliance Alignment
                    </h4>
                    <div className="w-8 h-[2px] bg-primary mb-4" />
                    <p className="text-[13.5px] text-gray-500 leading-relaxed">
                      Align security, risk, and compliance with your business objectives.
                    </p>
                  </div>

                  {/* Highlight 3 */}
                  <div className="premium-card group p-6 flex flex-col items-start text-left cursor-default">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-5 border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:border-primary">
                      <TrendingUp className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <h4 className="text-[16px] font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                      Better Decision Making
                    </h4>
                    <div className="w-8 h-[2px] bg-primary mb-4" />
                    <p className="text-[13.5px] text-gray-500 leading-relaxed">
                      Actionable insights and executive reporting that drive outcomes.
                    </p>
                  </div>

                  {/* Highlight 4 */}
                  <div className="premium-card group p-6 flex flex-col items-start text-left cursor-default">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-5 border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:border-primary">
                      <Briefcase className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <h4 className="text-[16px] font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                      Scalable Support
                    </h4>
                    <div className="w-8 h-[2px] bg-primary mb-4" />
                    <p className="text-[13.5px] text-gray-500 leading-relaxed">
                      Flexible engagement that grows with your organization.
                    </p>
                  </div>

                </div>
              </div>

              {/* Bottom: What's Included Block */}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-2xl lg:text-[24px] xl:text-[30px] font-bold text-gray-900 tracking-tight mb-8 text-center lg:text-left">
                  What&apos;s Included
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                  
                  {/* Pillar 1 */}
                  <div className="premium-card group p-6 flex flex-col items-start text-left cursor-default">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-5 border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:border-primary">
                      <Award className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                      Executive Risk Leadership
                    </h4>
                    <div className="w-8 h-[2px] bg-primary mb-6" />
                    
                    <ul className="space-y-3.5 text-[14.5px] text-gray-600 font-medium">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>Fractional vCISO / CRO support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>Board-level risk reporting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>Risk presentations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>Executive advisory and strategy</span>
                      </li>
                    </ul>
                  </div>

                  {/* Pillar 2 */}
                  <div className="premium-card group p-6 flex flex-col items-start text-left cursor-default">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-5 border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:border-primary">
                      <Shield className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                      Regulatory Guidance
                    </h4>
                    <div className="w-8 h-[2px] bg-primary mb-6" />
                    
                    <ul className="space-y-3.5 text-[14.5px] text-gray-600 font-medium">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>Multi-framework regulatory guidance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>Audit readiness &amp; support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>Control effectiveness reviews</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>Compliance program optimization</span>
                      </li>
                    </ul>
                  </div>

                  {/* Pillar 3 */}
                  <div className="premium-card group p-6 flex flex-col items-start text-left cursor-default">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-5 border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:border-primary">
                      <Settings className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                      Operational Support
                    </h4>
                    <div className="w-8 h-[2px] bg-primary mb-6" />
                    
                    <ul className="space-y-3.5 text-[14.5px] text-gray-600 font-medium">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>Vendor / third-party risk oversight</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>Incident response advisory</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>Leadership workshops</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>Risk committee participation</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

            </div>
          )}

          {/* TAB 2: WHAT'S INCLUDED */}
          {activeTab === "included" && (
            <div className="animate-fadeIn">
              <h3 className="text-2xl lg:text-[24px] xl:text-[30px] font-bold text-gray-900 tracking-tight mb-8 text-center lg:text-left">
                What&apos;s Included
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                
                {/* Pillar 1 */}
                <div className="premium-card group p-6 flex flex-col items-start text-left cursor-default">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-5 border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:border-primary">
                    <Award className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                    Executive Risk Leadership
                  </h4>
                  <div className="w-8 h-[2px] bg-primary mb-6" />
                  
                  <ul className="space-y-3.5 text-[14.5px] text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>Fractional vCISO / CRO support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>Board-level risk reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>Risk presentations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>Executive advisory and strategy</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 2 */}
                <div className="premium-card group p-6 flex flex-col items-start text-left cursor-default">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-5 border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:border-primary">
                    <Shield className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                    Regulatory Guidance
                  </h4>
                  <div className="w-8 h-[2px] bg-primary mb-6" />
                  
                  <ul className="space-y-3.5 text-[14.5px] text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>Multi-framework regulatory guidance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>Audit readiness &amp; support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>Control effectiveness reviews</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>Compliance program optimization</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 3 */}
                <div className="premium-card group p-6 flex flex-col items-start text-left cursor-default">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-5 border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:border-primary">
                    <Settings className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                    Operational Support
                  </h4>
                  <div className="w-8 h-[2px] bg-primary mb-6" />
                  
                  <ul className="space-y-3.5 text-[14.5px] text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>Vendor / third-party risk oversight</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>Incident response advisory</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>Leadership workshops</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>Risk committee participation</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: ENGAGEMENT PROCESS */}
          {activeTab === "process" && (
            <div className="animate-fadeIn text-left">
              <h3 className="text-2xl lg:text-[24px] xl:text-[30px] font-bold text-gray-900 tracking-tight mb-8 text-center lg:text-left">
                Our Engagement Process
              </h3>

              {/* Responsive process timeline flow */}
              <div className="flex flex-col md:flex-row md:items-start items-center justify-between gap-6 md:gap-2 w-full">
                
                {/* Step 1 */}
                <div className="group flex-1 flex flex-col items-center text-center px-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-white text-[11px] font-black flex items-center justify-center mb-3 shadow-sm">
                    1
                  </div>
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-primary border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:border-primary">
                    <Search className="w-6 h-6 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h4 className="text-[16px] font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                    Assessment &amp; Planning
                  </h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed max-w-[220px]">
                    We assess your current risk landscape and define priorities aligned with your goals.
                  </p>
                </div>

                {/* Arrow 1 */}
                <div className="hidden md:flex items-center justify-center h-28 self-start pt-8">
                  <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Step 2 */}
                <div className="group flex-1 flex flex-col items-center text-center px-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-white text-[11px] font-black flex items-center justify-center mb-3 shadow-sm">
                    2
                  </div>
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-primary border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:border-primary">
                    <ClipboardCheck className="w-6 h-6 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h4 className="text-[16px] font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                    Governance Optimization
                  </h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed max-w-[220px]">
                    We enhance policies, controls, and processes to strengthen governance and reduce risk.
                  </p>
                </div>

                {/* Arrow 2 */}
                <div className="hidden md:flex items-center justify-center h-28 self-start pt-8">
                  <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Step 3 */}
                <div className="group flex-1 flex flex-col items-center text-center px-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-white text-[11px] font-black flex items-center justify-center mb-3 shadow-sm">
                    3
                  </div>
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-primary border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:border-primary">
                    <Shield className="w-6 h-6 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h4 className="text-[16px] font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                    Compliance Enhancement
                  </h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed max-w-[220px]">
                    We implement and mature compliance programs across relevant frameworks.
                  </p>
                </div>

                {/* Arrow 3 */}
                <div className="hidden md:flex items-center justify-center h-28 self-start pt-8">
                  <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Step 4 */}
                <div className="group flex-1 flex flex-col items-center text-center px-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-white text-[11px] font-black flex items-center justify-center mb-3 shadow-sm">
                    4
                  </div>
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-primary border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:border-primary">
                    <TrendingUp className="w-6 h-6 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h4 className="text-[16px] font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                    Ongoing Advisory &amp; Reporting
                  </h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed max-w-[220px]">
                    Continuous leadership, reporting, and strategic guidance to drive resilience and growth.
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: DELIVERABLES */}
          {activeTab === "deliverables" && (
            <div className="animate-fadeIn text-left">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                
                {/* Deliverables List Card */}
                <div>
                  <h3 className="text-2xl lg:text-[24px] xl:text-[30px] font-bold text-gray-900 tracking-tight mb-6 text-center lg:text-left">
                    Key Deliverables
                  </h3>
                  <div className="premium-card p-6 sm:p-8 cursor-default h-full">
                    <ul className="space-y-4">
                      {[
                        "Quarterly Board Reports",
                        "Compliance Dashboards",
                        "Risk Metrics & KPIs",
                        "Executive Briefings",
                        "Strategic Recommendations"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-[15px] font-semibold text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Outcomes List Card */}
                <div>
                  <h3 className="text-2xl lg:text-[24px] xl:text-[30px] font-bold text-gray-900 tracking-tight mb-6 text-center lg:text-left">
                    Expected Outcomes
                  </h3>
                  <div className="premium-card p-6 sm:p-8 cursor-default h-full">
                    <ul className="space-y-4">
                      {[
                        "Increased executive visibility into risk",
                        "Reduced compliance and regulatory risk",
                        "Stronger governance and control environment",
                        "Improved cyber insurance positioning",
                        "Greater stakeholder confidence"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-[15px] font-semibold text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 5: OUTCOMES */}
          {activeTab === "outcomes" && (
            <div className="animate-fadeIn text-left">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                
                {/* Deliverables List Card */}
                <div>
                  <h3 className="text-2xl lg:text-[24px] xl:text-[30px] font-bold text-gray-900 tracking-tight mb-6 text-center lg:text-left">
                    Key Deliverables
                  </h3>
                  <div className="premium-card p-6 sm:p-8 cursor-default h-full">
                    <ul className="space-y-4">
                      {[
                        "Quarterly Board Reports",
                        "Compliance Dashboards",
                        "Risk Metrics & KPIs",
                        "Executive Briefings",
                        "Strategic Recommendations"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-[15px] font-semibold text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Outcomes List Card */}
                <div>
                  <h3 className="text-2xl lg:text-[24px] xl:text-[30px] font-bold text-gray-900 tracking-tight mb-6 text-center lg:text-left">
                    Expected Outcomes
                  </h3>
                  <div className="premium-card p-6 sm:p-8 cursor-default h-full">
                    <ul className="space-y-4">
                      {[
                        "Increased executive visibility into risk",
                        "Reduced compliance and regulatory risk",
                        "Stronger governance and control environment",
                        "Improved cyber insurance positioning",
                        "Greater stakeholder confidence"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-[15px] font-semibold text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 6: FAQ */}
          {activeTab === "faq" && (
            <div className="animate-fadeIn text-left">
              <h3 className="text-2xl lg:text-[24px] xl:text-[30px] font-bold text-gray-900 tracking-tight mb-8 text-center lg:text-left">
                Frequently Asked Questions
              </h3>

              <div className="space-y-0.5 border-t border-b border-gray-200">
                {[
                  {
                    q: "How is the Advisory retainer different from hiring a full-time executive?",
                    a: "It provides the same level of senior leadership and strategic risk management but at a fraction of the cost, with hours tailored precisely to your operational needs without the overhead of a full-time hire."
                  },
                  {
                    q: "What frameworks and regulations do you support?",
                    a: "We support NIST CSF, ISO 27001, ISO 42001 (AI), HIPAA, CMMC, SOC 2, DORA, NIS2, and general corporate governance requirements."
                  },
                  {
                    q: "How is time and engagement structured?",
                    a: "Engagements are structured on a monthly retainer basis with a fixed bucket of hours (e.g. 10, 20, or 40 hours) for meetings, board reporting, vulnerability scans, policy development, and advisory."
                  },
                  {
                    q: "How do you ensure alignment with our business goals?",
                    a: "We align by performing an onboarding business analysis, setting key risk parameters, mapping governance targets directly to company growth goals, and keeping touchpoints active with senior staff."
                  }
                ].map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div 
                      key={index}
                      className="border-b border-gray-150 py-1 transition-all duration-300"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full flex items-center justify-between py-4 text-[15px] sm:text-[16px] font-bold text-gray-800 text-left hover:text-primary transition-colors"
                      >
                        <span>{faq.q}</span>
                        <span className="text-xl font-medium text-gray-400 pl-4">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                          isOpen ? "max-h-40 pb-4" : "max-h-0"
                        }`}
                      >
                        <p className="text-[13.5px] sm:text-[14.5px] text-gray-500 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </Container>

      {/* Animation Utility Styling */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out forwards;
          }
        `
      }} />
    </section>
  );
}
