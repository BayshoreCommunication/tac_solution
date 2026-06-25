"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Network,
  UserCheck,
  GraduationCap,
  Smartphone,
  Brain,
} from "lucide-react";
import Container from "components/layout/Container";

/* ─── Bottom Service Cards Data ──────────────────────────── */
const SERVICES = [
  {
    icon: (
      <ShieldCheck
        className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
    label: "GRC Advisory",
  },
  {
    icon: (
      <Network
        className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
    label: "Fractional CRO",
  },
  {
    icon: (
      <UserCheck
        className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
    label: "vCISO",
  },
  {
    icon: (
      <GraduationCap
        className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
    label: "Online Courses",
  },
  {
    icon: (
      <Smartphone
        className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
    label: "TBD - Under Development",
  },
];

/* ─── Floating feature tags (right side illustration) ───── */
const FEATURE_TAGS = [
  {
    icon: <ShieldCheck className="h-4 w-4 lg:h-5 lg:w-5" strokeWidth={2} />,
    label: "Advisory",
    animClass: "float-tag-0",
  },
  {
    icon: <Brain className="h-4 w-4 lg:h-5 lg:w-5" strokeWidth={2} />,
    label: "Intelligence",
    animClass: "float-tag-1",
  },
  {
    icon: <GraduationCap className="h-4 w-4 lg:h-5 lg:w-5" strokeWidth={2} />,
    label: "Education",
    animClass: "float-tag-2",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-2 pb-10 md:pt-12 md:pb-16">
      <Container className="relative z-10 flex flex-col justify-between gap-10 md:gap-16">
        {/* ── Main Hero Row (2 Columns) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: GRC Content & CTAs - Shows second on mobile, first on desktop */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            {/* Heading */}
            <h1 className="text-3xl sm:text-6xl  font-bold leading-[1.15] tracking-tight text-gray-900 mb-3">
              Strategic Governance,<br className="hidden sm:inline" />
              <span className="text-primary"> Risk &amp; Compliance </span><br className="hidden sm:inline" />
              Solutions for Modern Organizations
            </h1>

            {/* Description Paragraph */}
            <p className="text-[16px] md:text-[17px] leading-[1.8] text-gray-500 mb-4 max-w-[580px] mx-auto lg:mx-0">
              Empowering businesses with expert cybersecurity, governance, risk, and compliance services. From virtual CISO leadership to regulatory compliance and risk management, we help organizations strengthen security, reduce risk, and build trust.
            </p>

            {/* CTAs */}
            <div className="flex flex-row gap-3 sm:gap-4 w-full justify-center lg:justify-start">
              <Link href="/contact" className="btn-primary group inline-flex items-center justify-center whitespace-nowrap h-11 md:h-14 px-3.5 sm:px-8 text-[13px] sm:text-[15px] flex-1 sm:flex-initial">
                <span>
                  <span className="inline sm:hidden">Consultation</span>
                  <span className="hidden sm:inline">Schedule a Consultation</span>
                </span>
                <ArrowRight size={15} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link href="/services" className="btn-outline group inline-flex items-center justify-center whitespace-nowrap h-11 md:h-14 px-3.5 sm:px-8 text-[13px] sm:text-[15px] flex-1 sm:flex-initial">
                <span>
                  <span className="inline sm:hidden">Services</span>
                  <span className="hidden sm:inline">Explore Our Services</span>
                </span>
                <ArrowRight size={15} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Illustration Video - Shows first on mobile, second on desktop */}
          <div className="lg:col-span-6 flex items-center justify-center relative order-1 lg:order-2">
            <div className="relative w-full flex items-center justify-center py-2 md:py-4">
              
              {/* Central image wrapper */}
              <div className="relative z-10 w-full flex justify-center">
                <Image
                  src="/images/home/hero/hero.png"
                  alt="GRC Solutions Illustration"
                  width={1100}
                  height={1100}
                  className="w-full h-auto object-contain max-h-[500px] md:max-h-[600px] lg:max-h-[680px] dxg-motion"
                  priority
                />
              </div>

            </div>
          </div>

        </div>

        {/* ── Bottom Section: Service Cards Row (Static Divs) ── */}
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="premium-card group block hover:-translate-y-2 duration-300 cursor-default select-none"
              >
                <div className="flex flex-col items-center justify-center p-4 sm:p-8 text-center h-full">
                  {/* Icon Container */}
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 shadow-sm border border-primary/10">
                    <span className="transition-colors duration-300">
                      {service.icon}
                    </span>
                  </div>
                  
                  {/* Label */}
                  <span className="text-[13px] sm:text-[15px] font-bold tracking-wide text-gray-800 transition-colors duration-300 group-hover:text-primary leading-snug">
                    {service.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* ── Custom Animations CSS Injection ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatTag-0 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
        @keyframes floatTag-1 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-12px); }
        }
        @keyframes floatTag-2 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-6px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .float-tag-0 {
          animation: floatTag-0 4s ease-in-out infinite alternate;
        }
        .float-tag-1 {
          animation: floatTag-1 5s ease-in-out infinite alternate;
        }
        .float-tag-2 {
          animation: floatTag-2 4.5s ease-in-out infinite alternate;
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
      ` }} />
    </section>
  );
}
