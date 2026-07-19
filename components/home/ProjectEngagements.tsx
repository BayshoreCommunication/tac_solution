"use client";

import Link from "next/link";
import {
  ArrowRight,
  Gauge,
  Users,
  Globe,
  Cloud,
  Activity,
  Handshake,
} from "lucide-react";
import Container from "components/layout/Container";

const ENGAGEMENTS = [
  {
    title: "GRC rapid assessment",
    slug: "grc-rapid-assessment",
    badge: "ENTRY POINT",
    icon: (
      <Gauge
        className="h-8 w-8 transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
    description:
      "Fixed-fee 30-day risk posture review. Deliverable: gap analysis + prioritized remediation roadmap. Ideal entry point.",
  },
  {
    title: "Organization risk advisory",
    slug: "organization-risk-advisory",
    badge: "GOVERNANCE",
    icon: (
      <Users
        className="h-8 w-8 transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
    description:
      "Scoped organization-level risk framework, reporting structure, and governance posture review. Includes presentation materials.",
  },
  {
    title: "Regulatory Advisory",
    slug: "regulatory-advisory-services",
    badge: "EU REGULATORY",
    icon: (
      <Globe
        className="h-8 w-8 transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
    description:
      "Regulatory readiness assessment, gap analysis, and remediation roadmap.",
  },
  {
    title: "IRM Consulting",
    slug: "irm-consulting",
    badge: "TECHNOLOGY",
    icon: (
      <Cloud
        className="h-8 w-8 transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
    description:
      "Implementation oversight and advisory for ServiceNow IRM Phase 1 through go-live. Based on live integration experience.",
  },
  {
    title: "AI governance",
    slug: "ai-governance",
    badge: "HEALTHCARE AI",
    icon: (
      <Activity
        className="h-8 w-8 transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
    description:
      "AI governance framework for healthcare mobile apps and SaMD vendors. HIPAA, FDA SaMD guidance, FTC Health Breach Rule.",
  },
  {
    title: "M&A risk due diligence",
    slug: "ma-risk-due-diligence",
    badge: "M&A",
    icon: (
      <Handshake
        className="h-8 w-8 transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
    description:
      "Technology risk and compliance assessment for acquisition targets. small and mid-market and M&A advisor partnerships.",
  },
];

export default function ProjectEngagements() {
  return (
    <section className="relative bg-[#f8fafc] py-8 md:py-12 overflow-hidden border-t border-gray-100">
      <Container className="relative z-10">
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-7xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Project <span className="text-primary">Engagements</span> &amp; Add
            on Services
          </h2>
          <p className="text-[15px] sm:text-base text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Fixed-fee and scoped engagements — available standalone or alongside
            a retainer
          </p>
        </div>

        {/* 6-Card Grid (2 Rows on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch max-w-7xl mx-auto">
          {ENGAGEMENTS.map((item, index) => (
            <Link
              key={index}
              href={`/services/${item.slug}`}
              className="group relative flex flex-col justify-between bg-white rounded-[28px] p-6 sm:p-8 border-2 border-gray-100/80 shadow-sm hover:shadow-xl hover:border-primary hover:scale-100 lg:hover:scale-[1.03] hover:z-10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer"
            >
              {/* Upper Body */}
              <div>
                <div className="flex items-center justify-start gap-3 mb-6">
                  {/* Icon Wrapper */}
                  <div className="w-16 lg:w-20 lg:h-20 h-16 rounded-full flex items-center justify-center border  border-gray-100 text-gray-700 bg-primary/5 group-hover:border-primary/10 group-hover:text-primary transition-colors duration-300 shrink-0">
                    <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 inline-block">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    {/* Title */}
                    <h3 className="text-[20px] font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Badge Category */}
                    <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-wider rounded-md  text-gray-500 bg-primary/10 group-hover:text-primary transition-colors duration-300 ">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[14px] text-gray-500 leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* CTA Button at bottom */}
              <div className="mt-auto">
                <div className="btn-outline w-full h-12 lg:h-14 text-[14.5px] font-semibold flex items-center justify-center gap-2">
                  <span>Explore More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
