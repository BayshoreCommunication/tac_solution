"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  ClipboardCheck, 
  Shield, 
  TrendingUp, 
  CheckCircle,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import Container from "components/layout/Container";

export default function AdvisoryProcessDetails() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
    <section className="relative bg-white py-12 md:py-16 overflow-hidden">
      <Container className="relative z-10">
        
        {/* SECTION 1: ENGAGEMENT PROCESS */}
        <div className="mb-20 text-left">
          <h3 className="text-2xl lg:text-[24px] xl:text-[30px] font-bold text-gray-900 tracking-tight mb-12 text-center lg:text-left">
            Our Engagement Process
          </h3>

          {/* Timeline steps */}
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

        {/* SECTION 2: DELIVERABLES & OUTCOMES */}
        <div className="mb-20 text-left">
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

        {/* SECTION 3: FAQ ACCORDION */}
        <div className="mb-20 text-left">
          <h3 className="text-2xl lg:text-[24px] xl:text-[30px] font-bold text-gray-900 tracking-tight mb-8 text-center lg:text-left">
            Frequently Asked Questions
          </h3>

          <div className="space-y-0.5 border-t border-b border-gray-200">
            {faqs.map((faq, index) => {
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

        {/* SECTION 4: BOTTOM CTA BANNER */}
        <div className="w-full">
          <div className="relative rounded-[24px] bg-gradient-to-r from-[#0C0466] to-[#1607A5] p-8 sm:p-10 shadow-xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            
            {/* Background vector visual flare */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,100 C30,40 70,60 100,0 L100,100 Z" fill="white" />
              </svg>
            </div>

            {/* Left side content */}
            <div className="flex items-center gap-5 w-full lg:w-auto relative z-10">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                <MessageSquare className="w-7 h-7 text-primary" />
              </div>
              <div className="flex flex-col text-left">
                <h4 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
                  Ready to strengthen your risk leadership?
                </h4>
                <p className="text-white/80 text-sm sm:text-base mt-1 max-w-2xl leading-relaxed">
                  Let&apos;s discuss how our Advisory Retainer can help your organization stay compliant, resilient, and future-ready.
                </p>
              </div>
            </div>

            {/* Right side CTA Button */}
            <div className="w-full lg:w-auto flex justify-start lg:justify-end relative z-10">
              <Link
                href="/contact"
                className="relative overflow-hidden group inline-flex items-center justify-center whitespace-nowrap h-12 sm:h-14 px-6 sm:px-8 text-[14px] sm:text-[15px] font-bold bg-white text-[#4f2ee8] rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
              >
                {/* Slide-in background */}
                <span className="absolute inset-0 bg-[#4F2EE8] z-0 translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300 justify-center w-full">
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

          </div>
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
