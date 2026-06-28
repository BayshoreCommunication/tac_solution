"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "components/layout/Container";


const BACKGROUND_IMAGE = "/images/about/cta-bg.png";



export default function CTA() {
  return (
    <section className="relative bg-white pb-8 md:pb-12 overflow-hidden">
      <Container className="relative z-10">
        
        {/* Banner Card Wrapper - Width Full Container */}
        <div className="relative rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-xl overflow-hidden w-full bg-[#1F0E7F]">
          
          {/* Background Image */}
          <Image
            src={BACKGROUND_IMAGE}
            alt="CTA Background"
            fill
            className="object-cover pointer-events-none"
            sizes="100vw"
            priority
          />

          {/* Gradient Overlay to ensure premium branding & text contrast */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#4F2EE8]/95 via-[#3B1EC3]/90 to-[#1F0E7F]/85" /> */}
          

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full relative z-10">
            
            {/* Left Column: Heading, Description & Buttons */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-6 max-w-2xl">
                Strategic Governance, Risk &amp; Compliance Solutions for Modern Organizations
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
                Empowering businesses with expert cybersecurity, governance, risk, and compliance services. 
                From virtual CISO leadership to regulatory compliance and risk management, we help organizations 
                strengthen security, reduce risk, and build trust.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="relative overflow-hidden group inline-flex items-center justify-center whitespace-nowrap h-12 sm:h-14 px-6 sm:px-8 text-[14px] sm:text-[15px] font-bold bg-white text-[#4f2ee8] rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] active:scale-95"
                >
                  {/* Slide-in background */}
                  <span className="absolute inset-0 bg-[#4F2EE8] z-0 translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                  
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                    <span>Schedule a Consultation</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
                
                <Link
                  href="/services"
                  className="relative overflow-hidden group inline-flex items-center justify-center whitespace-nowrap h-12 sm:h-14 px-6 sm:px-8 text-[14px] sm:text-[15px] font-bold border border-white/30 text-white rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] active:scale-95"
                >
                  {/* Slide-in white background */}
                  <span className="absolute inset-0 bg-white z-0 translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                  
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                    <span>Explore Our Services</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>  

          </div>

        </div>

      </Container>
    </section>
  );
}
