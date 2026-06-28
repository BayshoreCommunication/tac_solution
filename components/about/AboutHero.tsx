"use client";

import Image from "next/image";
import { Users } from "lucide-react";
import Container from "components/layout/Container";

// Image Paths - Please replace these with your actual image file paths
const IMAGE_PATHS = {
  topLeft: "/images/about/team-1.png",      // Top Left image
  bottomLeft: "/images/about/team-2.png",   // Bottom Left image
  topRight: "/images/about/team-3.png",     // Top Right image
  bottomRight: "/images/about/team-4.png",  // Bottom Right image
};

export default function AboutHero() {
  return (
    <section className="relative bg-white py-8 md:py-12 overflow-hidden">
      <Container className="relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            About <span className="text-primary">TAC Solutions</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
            TAC Solutions embeds senior technology risk leadership into mid-market boards and executive teams —
            keeping them compliant, insurable, and acquisition-ready.
          </p>
        </div>

        {/* Responsive Grid Block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch w-full">
          
          {/* Left Column - Stacked Images (Image 1 & Image 2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm hover:scale-[1.01] transition-transform duration-500 bg-gray-50 border border-gray-100">
              <Image
                src={IMAGE_PATHS.topLeft}
                alt="TAC Solutions Team Workspace"
                fill
                className="object-cover"
                sizes="(max-w: 640px) 100vw, (max-w: 1024px) 50vw, 33vw"
              />
            </div>
            
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm hover:scale-[1.01] transition-transform duration-500 bg-gray-50 border border-gray-100">
              <Image
                src={IMAGE_PATHS.bottomLeft}
                alt="TAC Solutions Technology Monitoring"
                fill
                className="object-cover"
                sizes="(max-w: 640px) 100vw, (max-w: 1024px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Center Column - Tall Gradient Info Card */}
          <div className="relative flex flex-col justify-center items-center rounded-[24px] overflow-hidden shadow-lg bg-gradient-to-b from-[#0A0580] via-[#050266] to-[#04014F] p-8 sm:p-10 text-white min-h-[420px] lg:min-h-0">
            {/* Geometric Lines Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="-20%" y1="0" x2="60%" y2="100%" stroke="white" strokeWidth="1.5" />
                <line x1="10%" y1="0" x2="90%" y2="100%" stroke="white" strokeWidth="1.5" />
                <line x1="40%" y1="0" x2="120%" y2="100%" stroke="white" strokeWidth="1.5" />
                <line x1="70%" y1="0" x2="150%" y2="100%" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>

            {/* White Group Icon Circle */}
            <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-md">
              <Users className="text-[#050266] w-7 h-7" strokeWidth={2.5} />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-sm">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                TAC Solutions
              </h2>
              <p className="text-white/85 text-[14px] sm:text-[15px] leading-relaxed">
                TAC Solutions is a trusted partner in cybersecurity and compliance. We help organizations navigate risk,
                strengthen resilience, and achieve their business goals through practical, results-driven solutions and
                expert guidance. Our mission is simple: empower organizations to build a secure, compliant, and
                future-ready tomorrow.
              </p>
            </div>
          </div>

          {/* Right Column - Stacked Images (Image 3 & Image 4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm hover:scale-[1.01] transition-transform duration-500 bg-gray-50 border border-gray-100">
              <Image
                src={IMAGE_PATHS.topRight}
                alt="TAC Solutions Professional Meeting"
                fill
                className="object-cover"
                sizes="(max-w: 640px) 100vw, (max-w: 1024px) 50vw, 33vw"
              />
            </div>

            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm hover:scale-[1.01] transition-transform duration-500 bg-gray-50 border border-gray-100">
              <Image
                src={IMAGE_PATHS.bottomRight}
                alt="TAC Solutions Analytics Discussion"
                fill
                className="object-cover"
                sizes="(max-w: 640px) 100vw, (max-w: 1024px) 50vw, 33vw"
              />
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
