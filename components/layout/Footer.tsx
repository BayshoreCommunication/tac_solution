"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Container from "components/layout/Container";

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="relative bg-white border-t border-gray-100 pt-16">
      <Container className="relative z-10">
        
        {/* Main Footer Links (4 Columns Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Column 1: Logo & Brand Description */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <div className="relative w-[130px] sm:w-[155px] lg:w-[175px] mb-6">
              <Image 
                src="/images/logo.png" 
                alt="Logo" 
                width={500} 
                height={400} 
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            
            <p className="text-[14px] font-medium leading-[1.7] text-gray-500 mb-6 max-w-[320px]">
              Empowering learners with in-demand tech skills, real-world projects, and career support to build a better future.
            </p>
            
            {/* Accent Line */}
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-[12px] font-extrabold tracking-wider text-primary uppercase mb-2">
              Company
            </h4>
            <div className="w-8 h-[2px] bg-primary mb-6" />
            <nav className="flex flex-col space-y-4 text-[14px] font-semibold text-gray-500">
              <Link href="/about" className="hover:text-primary transition-colors duration-200">About us</Link>
              <Link href="/fractional-cro" className="hover:text-primary transition-colors duration-200">Fractional CRO</Link>
              <Link href="/services" className="hover:text-primary transition-colors duration-200">Services</Link>
              <Link href="/learning-hub" className="hover:text-primary transition-colors duration-200">Learning Hub</Link>
              <Link href="/contact" className="hover:text-primary transition-colors duration-200">Contact</Link>
            </nav>
          </div>

          {/* Column 3: Courses */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-[12px] font-extrabold tracking-wider text-primary uppercase mb-2">
              Courses
            </h4>
            <div className="w-8 h-[2px] bg-primary mb-6" />
            <nav className="flex flex-col space-y-4 text-[14px] font-semibold text-gray-500">
              <Link href="/courses/cybersecurity" className="hover:text-primary transition-colors duration-200">Cybersecurity</Link>
              <Link href="/courses/grc-foundations" className="hover:text-primary transition-colors duration-200">GRC Foundations</Link>
              <Link href="/courses/children-series" className="hover:text-primary transition-colors duration-200">Children&apos;s Cybersecurity Series</Link>
              <Link href="/courses/teen-safety" className="hover:text-primary transition-colors duration-200">Teen Cyber Safety</Link>
              <Link href="/courses/digital-safety" className="hover:text-primary transition-colors duration-200">Digital Safety Basics</Link>
              <Link href="/courses/identity-protection" className="hover:text-primary transition-colors duration-200">Password &amp; Identity Protection</Link>
            </nav>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-[12px] font-extrabold tracking-wider text-primary uppercase mb-2">
              Contact
            </h4>
            <div className="w-8 h-[2px] bg-primary mb-6" />
            <div className="flex flex-col space-y-4 w-full">
              
              {/* Email */}
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:info@tacsolutionsllc.com" className="text-[14px] font-semibold text-gray-600 hover:text-primary transition-colors truncate">
                  tacsolutionsllc.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+18137085566" className="text-[14px] font-semibold text-gray-600 hover:text-primary transition-colors">
                  +1 (813) 708-5566
                </a>
              </div>

              {/* Location 1 */}
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[14px] font-semibold text-gray-600">
                  Washington, DC, USA
                </span>
              </div>

              {/* Location 2 */}
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[14px] font-semibold text-gray-600">
                  Greensboro, NC, USA
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Newsletter Subscription Bar Container */}
        <div className="max-w-7xl mx-auto my-12">
          <div className="bg-[#f5f3ff] sm:bg-[#f5f3ff]/60 border border-primary/5 rounded-[28px] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
            
            {/* Left Block (Mail icon + text info) */}
            <div className="flex items-center gap-4 text-left w-full lg:w-auto">
              <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[16px] font-extrabold text-gray-900 leading-snug">
                  Stay Updated with TAC SOLUTIONS
                </h4>
                <p className="text-[13px] font-medium text-gray-500 mt-1 leading-tight">
                  Get the latest updates, courses, events, and resources delivered to your inbox.
                </p>
              </div>
            </div>

            {/* Right Block (Input + Submit Button) */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3 w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                required
                className="w-full lg:w-80 h-12 px-4 rounded-lg bg-white border border-gray-200 text-[14px] text-gray-700 focus:border-primary transition-all outline-none"
              />
              <button
                type="submit"
                className="btn-primary px-8 h-12 text-[14.5px] font-semibold flex items-center justify-center gap-2 flex-shrink-0"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="w-full h-[1px] bg-gray-100 mb-6" />
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] font-semibold text-gray-400 pb-8 text-center sm:text-left">
          <span><span className="text-primary hover:underline transition-colors">Tac Solutions</span> @{new Date().getFullYear()}. All rights reserved.</span>
          <span>
            Design &amp; Developed by{" "}
            <a 
              href="https://bayshorecommunication.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline transition-colors"
            >
              Bayshore Communication
            </a>
          </span>
        </div>

      </Container>
    </footer>
  );
}
