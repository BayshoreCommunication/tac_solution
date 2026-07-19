"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Play, ArrowLeft, ArrowRight } from "lucide-react";
import Container from "components/layout/Container";

const TESTIMONIALS = [
  {
    name: "Raul Christiansen",
    role: "Head of Sales",
    company: "Nexa Solutions",
    stars: 5,
    quote:
      "TAC Solutions transformed the way we approach risk and compliance. It's not just easier to manage our frameworks now, but also more enjoyable for the team. The clarity and speed it brings have made a noticeable impact on our entire due diligence process.",
    image: "/images/about/team-1.png", // Will use existing image paths as fallbacks
    youtubeId: "dQw4w9WgXcQ", // Placeholder YouTube video ID
  },
  {
    name: "Sarah Jenkins",
    role: "Chief Technology Officer",
    company: "Velo Security",
    stars: 5,
    quote:
      "Securing cyber insurance was a nightmare until we implemented TAC Solutions' recommendations. They helped us document and prove our security posture, reducing our premiums by 30% and eliminating insurer friction entirely.",
    image: "/images/about/team-2.png",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    name: "Michael Chen",
    role: "VP of Operations",
    company: "Apex Global",
    stars: 5,
    quote:
      "We were prepping for a major PE acquisition and needed to prove our GRC compliance fast. TAC Solutions stepped in with organization-level reporting that wowed the investors and accelerated our deal closing by weeks.",
    image: "/images/about/team-3.png",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    name: "Elena Rostova",
    role: "Director of Compliance",
    company: "Fintech Grid",
    stars: 5,
    quote:
      "With DORA and NIS2 coming up, we were overwhelmed by the regulatory maze. TAC Solutions guided us through each framework systematically, building a resilient posture that will keep us compliant for years.",
    image: "/images/about/team-4.png",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    name: "David Kojo",
    role: "Founder",
    company: "Scribe AI",
    stars: 5,
    quote:
      "As a fast-growing startup, we didn't have a full-time CISO. Having TAC Solutions provide fractional vCISO leadership gave us Enterprise-grade security advisory at a fraction of the cost.",
    image: "/images/about/team-1.png",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    name: "Amanda Martinez",
    role: "General Counsel",
    company: "BioHealth Systems",
    stars: 5,
    quote:
      "Compliance in healthcare is non-negotiable. TAC Solutions helped us navigate HIPAA and NIST CSF with zero downtime. Their practical approach is why they are our long-term strategic governance partner.",
    image: "/images/about/team-2.png",
    youtubeId: "dQw4w9WgXcQ",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Reset video playback state when active slide changes
  useEffect(() => {
    setIsPlaying(false);
  }, [activeIndex]);

  // Autoplay functionality - cycles every 5 seconds, pauses when video is playing
  useEffect(() => {
    if (isPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isPlaying]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIndex];
  const next = TESTIMONIALS[(activeIndex + 1) % TESTIMONIALS.length];

  return (
    <section className="relative bg-white py-8 md:py-12 overflow-hidden border-t border-gray-100">
      <Container className="relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Real Stories from <span className="text-primary">Real Users</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Hear how TAC Solutions has helped businesses secure their
            infrastructure, navigate compliance, and stay risk-free.
          </p>
        </div>

        {/* Testimonials Slider Wrapper Card */}
        <div className="relative bg-white border border-gray-100 rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.015)]  flex items-center justify-center">
          {/* Navigation - Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200/80 shadow-md flex items-center justify-center text-primary hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Previous story"
          >
            <ArrowLeft className="w-5 h-5 text-[#0A0580]" strokeWidth={2.5} />
          </button>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
            {/* Left Column: Active Thumbnail/Video Player */}
            <div className="lg:col-span-4 relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-gray-100 shadow-sm border border-gray-100/85">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${current.youtubeId}?autoplay=1&rel=0`}
                  title={`${current.name} Testimonial Video`}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full group">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-w: 768px) 100vw, 33vw"
                  />
                  {/* Subtle Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300 z-10"
                      aria-label="Play video testimonial"
                    >
                      <Play className="w-6 h-6 fill-[#0A0580] text-[#0A0580] ml-1" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Center Column: Testimonial Details Card */}
            <div className="lg:col-span-5 h-full flex flex-col justify-between bg-white border border-gray-150/60 rounded-[28px] p-6 sm:p-8 shadow-sm">
              <div>
                {/* Star Ratings */}
                <div className="flex gap-1 mb-6">
                  {[...Array(current.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed mb-8 italic">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>

              {/* Author Bio */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {current.name}
                </h3>
                <p className="text-[14px] text-gray-500 font-medium">
                  {current.role}, {current.company}
                </p>
              </div>
            </div>

            {/* Right Column: Next Preview (Slides on click) */}
            <div
              onClick={handleNext}
              className="lg:col-span-3 hidden lg:block relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-gray-100 shadow-sm border border-gray-100/85 hover:scale-[1.02] cursor-pointer group transition-all duration-500"
            >
              <Image
                src={next.image}
                alt={`Next: ${next.name}`}
                fill
                className="object-cover grayscale opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                sizes="25vw"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/25 transition-colors duration-300" />

              {/* Play Button Overlay (Clicking here also slides next) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                  <Play className="w-5 h-5 fill-[#0A0580] text-[#0A0580] ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation - Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 lg:right-auto lg:left-[72.5%] xl:left-[73.5%] top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200/80 shadow-md flex items-center justify-center text-primary hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Next story"
          >
            <ArrowRight className="w-5 h-5 text-[#0A0580]" strokeWidth={2.5} />
          </button>
        </div>

        {/* Slider Navigation Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-primary"
                  : "w-2.5 bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
