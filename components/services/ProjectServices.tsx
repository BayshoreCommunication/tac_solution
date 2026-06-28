"use client";

import Link from "next/link";
import { 
  Gauge, 
  Users, 
  Shield, 
  Cloud, 
  Activity, 
  Handshake, 
  ArrowRight 
} from "lucide-react";
import Container from "components/layout/Container";

const ENGAGEMENTS = [
  {
    title: "GRC rapid assessment",
    slug: "grc-rapid-assessment",
    badge: "ENTRY POINT",
    icon: Gauge,
    description: "Fixed-fee 30-day risk posture review. Deliverable: gap analysis + prioritized remediation roadmap. Ideal entry point.",
  },
  {
    title: "Board risk advisory",
    slug: "board-risk-advisory",
    badge: "GOVERNANCE",
    icon: Users,
    description: "Scoped board-level risk framework, reporting structure, and governance posture review. Includes presentation materials.",
  },
  {
    title: "Regulatory Advisory Services",
    slug: "regulatory-advisory-services",
    badge: "EU REGULATORY",
    icon: Shield,
    description: "EU regulatory readiness assessment, gap analysis, and remediation roadmap.",
  },
  {
    title: "IRM consulting",
    slug: "irm-consulting",
    badge: "TECHNOLOGY",
    icon: Cloud,
    description: "Implementation oversight and advisory for IRM Phase 1 through go-live. Based on live integration experience.",
  },
  {
    title: "AI Governance",
    slug: "ai-governance",
    badge: "AI",
    icon: Activity,
    description: "AI governance framework for healthcare mobile app and SaMD vendors. HIPAA, FDA SaMD guidance, FTC Health Breach Rule.",
  },
  {
    title: "M&A risk due diligence",
    slug: "ma-risk-due-diligence",
    badge: "M&A",
    icon: Handshake,
    description: "Technology risk and compliance assessment for acquisition targets. PE portfolio and M&A advisor partnerships.",
  },
];

export default function ProjectServices() {
  return (
    <section className="relative bg-white py-8 md:py-12 overflow-hidden border-t border-gray-100">
      <Container className="relative z-10">
        
        {/* Header Title & Subtitle */}
        <div className="text-center w-full mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[45px] font-bold text-gray-900 tracking-tight mb-4">
            Project <span className="text-primary">engagements</span> &amp; add on services
          </h2>
          <p className="text-[14px] sm:text-[15px] text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Fixed-fee and scoped engagements — available standalone or alongside a retainer
          </p>
        </div>

        {/* 6-Card Grid (2 Rows on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch w-full">
          {ENGAGEMENTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-[28px] p-6 sm:p-8 bg-white border border-gray-150/70 shadow-sm hover:border-primary hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                {/* Upper Body */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    {/* Icon Container */}
                    <div className="w-14 h-14 rounded-full flex items-center justify-center border flex-shrink-0 bg-gray-50 border-gray-100 text-gray-700 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    
                    {/* Title & Badge */}
                    <div className="flex flex-col items-start text-left">
                      <h3 className="text-[17px] font-bold leading-snug mb-1 text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <span className="inline-block px-2.5 py-0.5 text-[9px] font-bold tracking-wider rounded-md bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[13.5px] text-gray-500 leading-relaxed mb-8 text-left">
                    {item.description}
                  </p>
                </div>

                {/* CTA Button pointing to details page */}
                <div className="mt-auto">
                  <Link
                    href={`/services/${item.slug}`}
                    className="btn-outline w-full h-12 text-[14px] font-bold flex items-center justify-center gap-2 transition-all duration-300 group-hover:bg-primary group-hover:text-white"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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
