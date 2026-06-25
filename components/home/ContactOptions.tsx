"use client";

import Link from "next/link";
import { 
  Target, 
  Headphones, 
  Users, 
  GraduationCap, 
  Clock, 
  Calendar, 
  ArrowRight 
} from "lucide-react";
import Container from "components/layout/Container";

const OPTIONS = [
  {
    kicker: "Not sure where to start",
    title: "GRC Rapid Assessment",
    icon: <Target className="h-6 w-6" strokeWidth={1.5} />,
    description: "30-day fixed-fee review — gap analysis + roadmap delivered. Applies toward retainer.",
    metaTime: "30 Days",
    metaType: "Fixed-Fee",
    theme: {
      hoverBorderClass: "hover:border-teal-500",
      iconBg: "bg-teal-50 border-teal-100/50 text-teal-600",
      titleClass: "text-teal-600",
      badgeBg: "bg-teal-50/50 text-teal-700 border-teal-100/30",
      accentLineBg: "bg-teal-500",
    },
  },
  {
    kicker: "Ready for ongoing support",
    title: "Advisory Retainer Discovery Call",
    icon: <Headphones className="h-6 w-6" strokeWidth={1.5} />,
    description: "20-minute no-obligation call to assess fit and right-size the engagement.",
    metaTime: "20 Minutes",
    metaType: "No Obligation",
    theme: {
      hoverBorderClass: "hover:border-blue-500",
      iconBg: "bg-blue-50 border-blue-100/50 text-blue-600",
      titleClass: "text-blue-600",
      badgeBg: "bg-blue-50/50 text-blue-700 border-blue-100/30",
      accentLineBg: "bg-blue-500",
    },
  },
  {
    kicker: "Need team-level consistency",
    title: "RiskSense Pilot Discussion",
    icon: <Users className="h-6 w-6" strokeWidth={1.5} />,
    description: "Individual or team license. Pilot scope designed around your org size and risk volume.",
    metaTime: "30-45 Minutes",
    metaType: "Pilot-Focused",
    theme: {
      hoverBorderClass: "hover:border-rose-500",
      iconBg: "bg-rose-50 border-rose-100/50 text-rose-600",
      titleClass: "text-rose-600",
      badgeBg: "bg-rose-50/50 text-rose-700 border-rose-100/30",
      accentLineBg: "bg-rose-500",
    },
  },
  {
    kicker: "Exploring GRC education",
    title: "GRC Education Options",
    icon: <GraduationCap className="h-6 w-6" strokeWidth={1.5} />,
    description: "Self-paced access or corporate seat licensing for your compliance or audit team.",
    metaTime: "15-30 Minutes",
    metaType: "Info Call",
    theme: {
      hoverBorderClass: "hover:border-orange-500",
      iconBg: "bg-orange-50 border-orange-100/50 text-orange-600",
      titleClass: "text-orange-600",
      badgeBg: "bg-orange-50/50 text-orange-700 border-orange-100/30",
      accentLineBg: "bg-orange-500",
    },
  },
];

export default function ContactOptions() {
  return (
    <section className="relative bg-white py-8 md:py-12 overflow-hidden border-t border-gray-100">
      <Container className="relative z-10">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Let’s <span className="text-primary">talk</span>
          </h2>
          <p className="text-[15px] sm:text-base text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            The right starting point depends on where your risk posture is today.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto -mt-[20px] lg:-mt-[40px]">
          {OPTIONS.map((opt, index) => (
            <div
              key={index}
              className={`group flex flex-col justify-between bg-white rounded-[28px] p-6 border-2 border-gray-100/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${opt.theme.hoverBorderClass}`}
            >
              <div>
                {/* Header Icon, Kicker, Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${opt.theme.iconBg}`}>
                    {opt.icon}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">{opt.kicker}</span>
                    <h3 className={`text-[15px] font-extrabold leading-snug ${opt.theme.titleClass}`}>
                      {opt.title}
                    </h3>
                  </div>
                </div>

                {/* Accent Line */}
                <div className={`w-8 h-[2px] ${opt.theme.accentLineBg} mb-4 mt-2`} />

                {/* Description */}
                <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed mb-6">
                  {opt.description}
                </p>
              </div>

              {/* Bottom Metadata Bar */}
              <div className={`rounded-xl p-3 border flex items-center justify-between text-[11px] font-bold ${opt.theme.badgeBg}`}>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 opacity-70" />
                  <span>{opt.metaTime}</span>
                </div>
                <span className="opacity-30">|</span>
                <span>{opt.metaType}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner Bar */}
        <div className="max-w-7xl mx-auto mt-8 md:mt-12">
          <div className="bg-[#f9fafb] border border-gray-100 rounded-[28px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-left w-full md:w-auto">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100/50 flex-shrink-0 text-primary">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[16px] font-extrabold text-gray-900 leading-snug">
                    Not sure which option is right for you?
                  </h4>
                  <p className="text-[14px] font-medium text-gray-500 mt-1">
                    We’ll help you choose the best next step.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-[1px] h-10 bg-gray-200" />
            </div>
            
            <Link
              href="/contact"
              className="btn-primary px-8 h-12 lg:h-14 text-[14.5px] font-semibold flex items-center justify-center gap-2 flex-shrink-0 w-full md:w-auto"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </Container>
    </section>
  );
}
