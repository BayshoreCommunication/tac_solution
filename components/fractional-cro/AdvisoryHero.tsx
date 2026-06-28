"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import Container from "components/layout/Container";

// Background Image Path - Please replace this with your actual image path
const BACKGROUND_IMAGE = "/images/about/cta-bg.png";


export default function AdvisoryHero() {
  return (
    <section className="relative bg-white py-8 md:py-12 overflow-hidden">
      <Container className="relative z-10">
        
        {/* Banner Card Wrapper - Width Full Container */}
        <div className="relative rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-xl overflow-hidden w-full bg-[#12078A]">
          
          {/* Background Image */}
          <Image
            src={BACKGROUND_IMAGE}
            alt="Advisory Retainer Hero Background"
            fill
            className="object-cover pointer-events-none"
            sizes="100vw"
            priority
          />

          

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full relative z-10">
            
            {/* Left Column: Breadcrumbs, Badge, Header & Description */}
            <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-xs sm:text-[13px] text-white/60 mb-6 font-medium">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="text-white/40 font-normal">&gt;</span>
                <Link href="/fractional-cro" className="hover:text-white transition-colors">Fractional CRO</Link>
                <span className="text-white/40 font-normal">&gt;</span>
                <span className="text-white font-semibold">Advisory Retainer</span>
              </nav>

              {/* Recommended Badge */}
              <span className="bg-[#3B1EC3] px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-white tracking-widest uppercase mb-6 inline-block shadow-sm">
                Recommended
              </span>

              {/* Main Titles */}
              <h1 className="text-white text-3xl sm:text-4xl lg:text-[44px] xl:text-[56px] font-bold leading-[1.1] tracking-tight mb-4">
                Advisory Retainer
              </h1>
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-snug mb-4 max-w-2xl">
                Embedded senior risk leadership without the cost of a full-time executive.
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
                Recommended for mid-market organizations requiring ongoing guidance and executive-level oversight.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="relative overflow-hidden group inline-flex items-center justify-center whitespace-nowrap h-12 sm:h-14 px-6 sm:px-8 text-[14px] sm:text-[15px] font-bold bg-white text-[#4f2ee8] rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] active:scale-95"
                >
                  {/* Slide-in background */}
                  <span className="absolute inset-0 bg-[#4F2EE8] z-0 translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                  
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                    <span>Schedule Discovery Call</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
                
                <a
                  href="/docs/advisory-retainer-overview.pdf" // Placeholder document path
                  download
                  className="relative overflow-hidden group inline-flex items-center justify-center whitespace-nowrap h-12 sm:h-14 px-6 sm:px-8 text-[14px] sm:text-[15px] font-bold border border-white/30 text-white rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  {/* Slide-in white background */}
                  <span className="absolute inset-0 bg-white z-0 translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                  
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                    <Download className="w-4 h-4" />
                    <span>Download Overview</span>
                  </span>
                </a>
              </div>

            </div>


          </div>

        </div>

      </Container>
    </section>
  );
}
