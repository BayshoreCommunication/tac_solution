"use client";

import {
  ClipboardCheck,
  BookOpen,
  Code2,
  Briefcase,
  ShieldAlert,
  Check,
} from "lucide-react";
import Container from "components/layout/Container";

const STEPS = [
  {
    number: "1",
    title: "What it is",
    icon: (
      <ClipboardCheck
        className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110"
        strokeWidth={1.5}
      />
    ),
    description:
      "An AI-enabled decision support tool that helps risk and compliance professionals determine when situations should be classified as monitor-only, risk, elevated risk, or issue.",
  },
  {
    number: "2",
    title: "Mission",
    icon: (
      <BookOpen
        className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110"
        strokeWidth={1.5}
      />
    ),
    description:
      "Improve consistency, clarity, and defensibility in risk escalation decisions without replacing professional judgment or governance.",
  },
  {
    number: "3",
    title: "Who it’s for",
    icon: (
      <Code2
        className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110"
        strokeWidth={1.5}
      />
    ),
    description:
      "Risk Management, Compliance, Technology Risk, Operational Risk, and Audit teams in financial services and healthcare — with a framework designed to scale to other regulated sectors.",
  },
  {
    number: "4",
    title: "How it works",
    icon: (
      <Briefcase
        className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110"
        strokeWidth={1.5}
      />
    ),
    description:
      "Evaluates scenarios using risk dimensions (control effectiveness, impact, likelihood, duration, regulatory sensitivity). Hard rules act as deterministic escalation gates. Advisory scoring supports consistency — not certainty. Final accountability remains with management.",
  },
];

export default function RiskSense() {
  return (
    <section className="relative bg-white py-8 md:py-12 overflow-hidden border-t border-gray-100">
      <Container className="relative z-10">
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Risk <span className="text-primary">Sense</span>
          </h2>
          <p className="text-[15px] sm:text-base text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Advisory judgment support for financial services &amp; healthcare —
            scalable to broader regulated sectors
          </p>
        </div>

        {/* 4-Step Flow Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch max-w-7xl mx-auto relative">
          {/* Connector Line behind circles (Desktop only) */}
          <div className="absolute top-[48px] sm:top-[56px] left-[12%] right-[12%] h-[2px] bg-primary/25 -translate-y-1/2 -z-10 hidden lg:block" />

          {STEPS.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center relative"
            >
              {/* Step Circle & Floating Ring */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-8">
                {/* Dashed spinning outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary group-hover:border-primary/45 transition-colors duration-500 animate-spin-slow" />

                {/* Step Circle Container */}
                <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-100 group-hover:border-primary/20 group-hover:shadow-lg transition-all duration-300 z-10">
                  <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Number Badge */}
                <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-primary text-white text-[11px] font-bold flex items-center justify-center shadow-sm z-20">
                  {step.number}
                </div>

                {/* Desktop Small Line Dots (Connecting flow dots) */}
                {index < STEPS.length - 1 && (
                  <div className="absolute top-1/2 left-[calc(100%-8px)] right-[calc(-100%+8px)] h-[1px] -translate-y-1/2 -z-10 hidden lg:flex lg:items-center lg:justify-center">
                    <span className="w-3 h-3 rounded-full bg-primary border-4 border-white shadow-sm" />
                  </div>
                )}
              </div>

              {/* Step Detail Card */}
              <div className="w-full flex-1 bg-white rounded-3xl p-6 sm:p-8 border-2 border-gray-100/80 shadow-sm group-hover:border-primary group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col">
                {/* Title */}
                <h3 className="text-[18px] font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Accent Line */}
                <div className="w-8 h-[2px] bg-gray-300 group-hover:bg-primary transition-colors duration-300 mx-auto my-3.5" />

                {/* Description */}
                <p className="text-[14px] text-gray-500 leading-relaxed text-left">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Advisory Warning Bar */}
        <div className="max-w-5xl mx-auto mt-8 md:mt-12">
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100/50 flex-shrink-0">
              <ShieldAlert className="w-5 h-5 text-primary" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[13px] sm:text-[14px] font-semibold text-gray-700">
              <span>Advisory decision support only</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/30 hidden sm:inline" />
              <span>Not determinative</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/30 hidden sm:inline" />
              <span>Logic vX.Y</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
