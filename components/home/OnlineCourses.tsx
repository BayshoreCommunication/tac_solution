"use client";

import Image from "next/image";
import Link from "next/link";
import { Monitor, ArrowRight } from "lucide-react";
import Container from "components/layout/Container";

const COURSES = [
  {
    title: "Cybersecurity for Adults 55+",
    meta: "Self-paced • Evergreen",
    image: "/images/courses/adults-55.png",
    status: {
      text: "Live Now",
      bgClass: "bg-teal-600",
      metaColor: "text-teal-300",
    },
    channels: "Amazon KDP • Etsy • Direct",
    description: "Six-module workbook suite covering password safety, phishing, 2FA, vishing/smishing, social media privacy, and online shopping. Large print, confidence-building, plain language.",
  },
  {
    title: "GRC Foundations for Non-Technical Professionals",
    meta: "Self-paced • Professional",
    image: "/images/courses/grc-nontech.png",
    status: {
      text: "In Development",
      bgClass: "bg-indigo-600",
      metaColor: "text-indigo-300",
    },
    channels: "Direct • LinkedIn • Corporate Licensing",
    description: "Practical GRC literacy for compliance, operations, and HR professionals. Covers risk frameworks, audit basics, policy management, and regulatory landscape.",
  },
  {
    title: "Children’s Cybersecurity Series",
    meta: "Multi-format • K-5 + Teen",
    image: "/images/courses/children-security.png",
    status: {
      text: "Live Now",
      bgClass: "bg-emerald-600",
      metaColor: "text-emerald-300",
    },
    channels: "Amazon KDP • eccyber.systems • School Licensing",
    description: "Full product suite covering preschool through teen: picture books, activity workbooks, coloring pages, and printables. Teen title live on Amazon. School and classroom licensing available.",
  },
];

export default function OnlineCourses() {
  return (
    <section className="relative bg-white py-8 md:py-12 overflow-hidden border-t border-gray-100">
      <Container className="relative z-10">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Online <span className="text-primary">Courses</span>
          </h2>
          <p className="text-[15px] sm:text-base text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Scalable education products extending TAC Solutions reach beyond the advisory retainer
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch max-w-7xl mx-auto mb-16">
          {COURSES.map((course, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white rounded-[28px] overflow-hidden border-2 border-gray-100/80 shadow-sm hover:shadow-md hover:border-primary hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            >
              {/* Image Header with Text Overlay */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  sizes="(max-w: 768px) 100vw, (max-w: 1200px) 50vw, 33vw"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Status Badge */}
                <span className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-md text-white shadow-sm ${course.status.bgClass}`}>
                  {course.status.text}
                </span>

                {/* Text Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-[18px] sm:text-[20px] font-extrabold text-white leading-snug tracking-tight mb-1">
                    {course.title}
                  </h3>
                  <span className={`text-[12px] font-bold ${course.status.metaColor}`}>
                    {course.meta}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  {/* Channels */}
                  <div className="flex items-center gap-2 mb-4 text-[13px] font-semibold text-gray-500">
                    <Monitor className="h-4 w-4 text-gray-400 flex-shrink-0" strokeWidth={2} />
                    <span className="leading-tight truncate">Channel: {course.channels}</span>
                  </div>

                  {/* Description */}
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-6">
                    {course.description}
                  </p>
                </div>

                {/* View Details CTA Button */}
                <Link
                  href="/contact"
                  className="btn-primary w-full h-12 text-[14.5px] font-semibold flex items-center justify-center gap-2"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Explore More Courses bottom link */}
        <div className="flex justify-center">
          <Link
            href="/learning-hub"
            className="btn-outline px-8 h-12 lg:h-14 text-[14.5px] font-semibold flex items-center justify-center gap-2"
          >
            <span>Explore More Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </Container>
    </section>
  );
}
