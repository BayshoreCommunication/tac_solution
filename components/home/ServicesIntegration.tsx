"use client";

import { User, Brain, GraduationCap } from "lucide-react";
import Container from "components/layout/Container";

const SERVICES = [
  {
    title: "Advisory retainer",
    badge: "Fractional CRO / vCISO",
    icon: <User className="h-7 w-7" strokeWidth={1.5} />,
    description: "Your senior risk leader — embedded, ongoing, strategic. The highest touch offer. Clients who want RiskSense often come here next.",
    theme: {
      borderClass: "border-t-[6px] border-t-teal-600",
      hoverBorderClass: "hover:border-teal-500",
      iconBg: "bg-teal-50 border-teal-100/50 text-teal-600",
      badgeClass: "bg-teal-50 text-teal-700",
      titleClass: "text-teal-700",
    },
  },
  {
    title: "RiskSense",
    badge: "AI decision support tool",
    icon: <Brain className="h-7 w-7" strokeWidth={1.5} />,
    description: "Scales your judgment across the team. A lower-friction entry point for firms not yet ready for a retainer — and a natural upsell path.",
    theme: {
      borderClass: "border-t-[6px] border-t-rose-600",
      hoverBorderClass: "hover:border-rose-500",
      iconBg: "bg-rose-50 border-rose-100/50 text-rose-600",
      badgeClass: "bg-rose-50 text-rose-700",
      titleClass: "text-rose-700",
    },
  },
  {
    title: "Online courses",
    badge: "GRC education products",
    icon: <GraduationCap className="h-7 w-7" strokeWidth={1.5} />,
    description: "Broadens reach beyond direct advisory. Builds brand authority and brings new clients into the TAC Solutions ecosystem at low cost.",
    theme: {
      borderClass: "border-t-[6px] border-t-orange-500",
      hoverBorderClass: "hover:border-orange-500",
      iconBg: "bg-orange-50 border-orange-100/50 text-orange-600",
      badgeClass: "bg-orange-50 text-orange-700",
      titleClass: "text-orange-700",
    },
  },
];

export default function ServicesIntegration() {
  return (
    <section className="relative bg-[#f8fafc] py-8 md:py-12 overflow-hidden border-t border-gray-100">
      <Container className="relative z-10">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-7xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            How the TAC Solutions Services <span className="text-primary">Work Together</span>
          </h2>
          <p className="text-[15px] sm:text-base text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Three products, one firm — serving the same buyer at different levels of engagement and investment
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto -mt-[40px] lg:-mt-[80px]">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className={`group flex flex-col bg-white rounded-[28px] p-6 sm:p-8 border-2 border-gray-100/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${service.theme.borderClass} ${service.theme.hoverBorderClass}`}
            >
              
              {/* Card Header (Icon, Title, Badge) */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${service.theme.iconBg}`}>
                  {service.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className={`text-xl font-extrabold leading-tight ${service.theme.titleClass}`}>
                    {service.title}
                  </h3>
                  <div className="mt-1.5">
                    <span className={`inline-block px-3 py-0.5 text-[10px] font-extrabold tracking-wide rounded-md ${service.theme.badgeClass}`}>
                      {service.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider Line */}
              <div className="w-full h-[1px] bg-gray-100 my-4" />

              {/* Description */}
              <p className="text-[14px] text-gray-500 leading-relaxed mt-2">
                {service.description}
              </p>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
