"use client";

import { 
  Eye, 
  Shield, 
  TrendingUp, 
  AlertTriangle, 
  Check, 
  User, 
  Users, 
  Building2, 
  Handshake, 
  Globe, 
  LayoutDashboard, 
  Tag 
} from "lucide-react";
import Container from "components/layout/Container";

const CATEGORIES = [
  {
    title: "Monitor only",
    icon: <Eye className="h-6 w-6 text-blue-600" strokeWidth={1.5} />,
    bgClass: "bg-blue-50 border-blue-100",
    description: "Situation noted; no escalation required at this time",
  },
  {
    title: "Risk",
    icon: <Shield className="h-6 w-6 text-orange-500" strokeWidth={1.5} />,
    bgClass: "bg-orange-50 border-orange-100",
    description: "Warrants formal risk acceptance or treatment plan",
  },
  {
    title: "Elevated risk",
    icon: <TrendingUp className="h-6 w-6 text-purple-600" strokeWidth={1.5} />,
    bgClass: "bg-purple-50 border-purple-100",
    description: "Requires expedited escalation and executive awareness",
  },
  {
    title: "Issue",
    icon: <AlertTriangle className="h-6 w-6 text-red-600" strokeWidth={1.5} />,
    bgClass: "bg-red-50 border-red-100",
    description: "Breach of threshold — mandatory escalation triggered",
  },
];

const PRICING_ITEMS = [
  {
    title: "Individual access",
    subtitle: "Single practitioner license",
    icon: <User className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Team access",
    subtitle: "Pilot scope dependent on team size",
    icon: <Users className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Enterprise / custom",
    subtitle: "Full org rollout or white-label",
    icon: <Building2 className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "TAC Solutions clients",
    subtitle: "Bundled option available",
    icon: <Handshake className="h-5 w-5" strokeWidth={1.5} />,
  },
];

export default function RiskSensePricing() {
  return (
    <section className="relative bg-white py-8 md:py-12 overflow-hidden border-t border-gray-100">
      <Container className="relative z-10">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-7xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            RiskSense — <span className="text-primary">Decision Framework &amp; Pricing</span>
          </h2>
          <p className="text-[15px] sm:text-base text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Built for financial services and healthcare — Framework designed to scale across regulated sectors
          </p>
        </div>

        {/* Row 1: 4 Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {CATEGORIES.map((cat, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white rounded-3xl p-6 border-2 border-gray-100/80 shadow-sm hover:shadow-xl hover:border-primary hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 ${cat.bgClass}`}>
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {cat.title}
                </h3>
              </div>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2: 2 Large Containers (Dashboard & Pricing) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-7xl mx-auto">
          
          {/* Manager Dashboard Card */}
          <div className="group lg:col-span-7 flex flex-col bg-white rounded-[32px] p-6 sm:p-8 border-2 border-gray-100/80 shadow-sm hover:shadow-xl hover:border-primary hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-50 pb-4">
              <LayoutDashboard className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-primary transition-colors duration-300">
                Manager dashboard
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center flex-1">
              
              {/* Bullet Points */}
              <div className="md:col-span-6 space-y-4">
                {[
                  "Portfolio snapshot: classification mix + average confidence",
                  "Highlights low-confidence items and hard-rule triggers",
                  "Surfaces recurring themes for management awareness",
                  "Designed for calm oversight — not performance scoring"
                ].map((bullet, bIndex) => (
                  <div key={bIndex} className="flex items-start text-[14px] text-gray-700 leading-normal">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Donut Chart & Mockup Visual */}
              <div className="md:col-span-6 bg-slate-50 border border-gray-100 rounded-2xl p-4 sm:p-5 space-y-4 shadow-inner">
                
                {/* Classification Mix Pie Box */}
                <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-center gap-4">
                  
                  {/* Donut CSS conic-gradient */}
                  <div 
                    className="relative w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{
                      background: "conic-gradient(#522CE4 0% 35%, #f97316 35% 65%, #a855f7 65% 85%, #ef4444 85% 100%)"
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-inner" />
                  </div>

                  {/* Legend Grid */}
                  <div className="flex-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Classification mix</span>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[11px] font-semibold text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#522CE4]" />
                        <span>Monitor: 35%</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
                        <span>Risk: 30%</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
                        <span>Elevated: 20%</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
                        <span>Issue: 15%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Average Confidence Sparkline Box */}
                <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Average confidence</span>
                    <span className="text-xl font-black text-gray-900">78%</span>
                  </div>
                  
                  {/* SVG Sparkline */}
                  <div className="h-6 w-full opacity-80">
                    <svg viewBox="0 0 100 24" className="w-full h-full text-primary overflow-visible">
                      <path 
                        d="M0,15 Q15,8 30,14 T60,5 T90,12 L100,10" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Counter Stats Blocks */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Low confidence</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-extrabold text-red-600">7</span>
                      {/* mini bar squares mockup */}
                      <div className="flex gap-0.5">
                        <span className="w-1.5 h-3 bg-red-100 rounded-sm" />
                        <span className="w-1.5 h-3 bg-red-300 rounded-sm" />
                        <span className="w-1.5 h-3 bg-red-500 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Hard-rule triggers</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-extrabold text-orange-500">4</span>
                      {/* mini bar squares mockup */}
                      <div className="flex gap-0.5">
                        <span className="w-1.5 h-3 bg-orange-100 rounded-sm" />
                        <span className="w-1.5 h-3 bg-orange-300 rounded-sm" />
                        <span className="w-1.5 h-3 bg-orange-400 rounded-sm" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Pricing Model Card */}
          <div className="group lg:col-span-5 flex flex-col bg-white rounded-[32px] p-6 sm:p-8 border-2 border-gray-100/80 shadow-sm hover:shadow-xl hover:border-primary hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-50 pb-4">
              <Tag className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-primary transition-colors duration-300">
                Pricing model
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch flex-1">
              
              {/* Tiers List */}
              <div className="md:col-span-7 flex flex-col justify-between py-1 space-y-4">
                {PRICING_ITEMS.map((item, pIndex) => (
                  <div key={pIndex} className="flex items-center gap-4 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className="w-10 h-10 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 text-primary">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-bold text-gray-800 leading-snug">{item.title}</span>
                      <span className="text-[11px] font-medium text-gray-400 leading-tight">{item.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Box Highlight */}
              <div className="md:col-span-5 bg-primary/5 border border-primary/10 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100/50 mb-3 flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <p className="text-[11px] sm:text-[12px] font-bold text-gray-600 leading-relaxed">
                  Currently scoped for financial services and healthcare. Architecture supports expansion to federal, retail, and other regulated sectors.
                </p>
              </div>

            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
