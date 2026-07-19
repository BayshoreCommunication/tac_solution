"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  ClipboardList,
  Users,
  Building2,
  Star,
  Crown,
  Shield,
} from "lucide-react";
import Container from "components/layout/Container";

const PLANS = [
  {
    title: "Essentials",
    hours: "up to 20 hrs",
    icon: (
      <ClipboardList
        className="h-6 w-6 transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
    features: [
      "Risk posture assessment & gap analysis",
      "Policy and control framework review",
      "Compliance monitoring & status reporting",
      "Monthly executive summary",
      "Email support between engagements",
    ],
    bestFor: {
      icon: <Star className="h-4 w-4 text-amber-500 fill-amber-500" />,
      text: "Early-stage or lower-complexity compliance needs",
    },
    isRecommended: false,
  },
  {
    title: "Advisory",
    hours: "up to 40 hrs",
    icon: (
      <Users
        className="h-6 w-6 transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
    features: [
      "Full vCISO / CRO advisory function",
      "Organization-level risk reporting & presentation",
      "Regulatory guidance (multi-framework)",
      "Vendor / third-party risk oversight",
      "Incident response advisory support",
      "Bi-weekly leadership touchpoints",
    ],
    bestFor: {
      icon: <Crown className="h-4 w-4 text-primary fill-primary/25" />,
      text: "Mid-market firms requiring ongoing senior risk leadership",
    },
    isRecommended: true,
  },
  {
    title: "Executive",
    hours: "embedded",
    icon: (
      <Building2
        className="h-6 w-6 transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
    features: [
      "Embedded CRO-level leadership presence",
      "M&A / integration risk advisory",
      "EU regulatory compliance (NIS2, DORA, AI Act)",
      "IRM implementation oversight",
      "Organization seat advisory support",
      "Full incident response management",
    ],
    bestFor: {
      icon: <Shield className="h-4 w-4 text-emerald-600 fill-emerald-600/10" />,
      text: "Enterprise integration, M&A, or EU regulatory exposure",
    },
    isRecommended: false,
  },
];

export default function RetainerModel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-[#f8fafc] py-8 md:py-12 overflow-hidden border-t border-gray-100">
      <Container className="relative z-10">
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Fractional <span className="text-primary">CRO / vCISO</span>{" "}
            Retainer Model
          </h2>
          <p className="text-[15px] sm:text-base text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Senior risk leadership embedded into your team — without the
            full-time executive cost
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch max-w-7xl mx-auto">
          {PLANS.map((plan, index) => {
            const isActive =
              hoveredIndex === index ||
              (hoveredIndex === null && plan.isRecommended);

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative flex flex-col justify-between bg-white rounded-[28px] p-6 sm:p-8 border-2 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isActive
                    ? "border-primary shadow-xl scale-100 lg:scale-[1.03] z-20"
                    : "border-gray-100/80 shadow-sm scale-100 lg:scale-[1.0] z-10"
                }`}
              >
                {/* RECOMMENDED Badge */}
                {plan.isRecommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full z-10 shadow-sm border border-primary">
                    Recommended
                  </div>
                )}

                {/* Upper Section */}
                <div>
                  {/* Icon Wrapper */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 border transition-colors duration-300 ${
                      isActive
                        ? "bg-primary/5 border-primary/10 text-primary"
                        : "bg-gray-50 border-gray-100 text-gray-700"
                    }`}
                  >
                    {plan.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900">
                    {plan.title}
                  </h3>

                  {/* Accent Line */}
                  <div
                    className={`w-8 h-[2px] my-3.5 transition-colors duration-300 ${
                      isActive ? "bg-primary" : "bg-gray-300"
                    }`}
                  />

                  {/* Hours / Retention frequency */}
                  <p className="text-[14px] text-gray-500 font-medium">
                    per month <span className="text-gray-300 mx-1.5">•</span>{" "}
                    <span className="text-gray-800 font-bold">
                      {plan.hours}
                    </span>
                  </p>

                  {/* Feature Bullet Points */}
                  <ul className="space-y-4 my-8">
                    {plan.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start text-[14px] text-gray-700 leading-normal"
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center mr-3 mt-0.5">
                          <Check className="w-3.5 h-3.5" strokeWidth={3} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lower Section (Best For + Button) */}
                <div>
                  {/* Best For Box */}
                  <div
                    className={`rounded-2xl p-4 flex items-center gap-3 mb-6 transition-colors duration-300 ${
                      isActive ? "bg-primary/5" : "bg-gray-50"
                    }`}
                  >
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                      {plan.bestFor.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 leading-none mb-1">
                        Best for:
                      </span>
                      <span
                        className={`text-[12px] font-bold leading-tight transition-colors duration-300 ${
                          isActive ? "text-primary-dark" : "text-gray-600"
                        }`}
                      >
                        {plan.bestFor.text}
                      </span>
                    </div>
                  </div>

                  {/* Explore More Button */}
                  <Link
                    href="/contact"
                    className={`${
                      isActive ? "btn-primary" : "btn-outline"
                    } w-full h-12 lg:h-14 text-[14.5px] font-semibold flex items-center justify-center gap-2`}
                  >
                    <span>Explore More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
