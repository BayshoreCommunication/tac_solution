"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Network,
  UserCheck,
  GraduationCap,
  Smartphone,
  Brain,
  CheckCircle2,
} from "lucide-react";
import Container from "components/layout/Container";

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

const FEATURE_TAGS = [
  {
    icon: <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.1} />,
    label: "Advisory",
    className: "hero-feature-card-0",
  },
  {
    icon: <Brain className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.1} />,
    label: "Intelligence",
    className: "hero-feature-card-1",
  },
  {
    icon: (
      <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.1} />
    ),
    label: "Education",
    className: "hero-feature-card-2",
  },
];

function HeroLogoGlyph() {
  return (
    <svg
      className="hero-logo-glyph"
      viewBox="0 0 160 160"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="heroGlyphTop" x1="26" x2="134" y1="30" y2="96">
          <stop stopColor="#8f78ff" />
          <stop offset="0.52" stopColor="#522CE4" />
          <stop offset="1" stopColor="#2d17c7" />
        </linearGradient>
        <linearGradient id="heroGlyphSide" x1="58" x2="127" y1="58" y2="144">
          <stop stopColor="#653bff" />
          <stop offset="1" stopColor="#2211b8" />
        </linearGradient>
        <linearGradient id="heroGlyphEdge" x1="24" x2="91" y1="54" y2="133">
          <stop stopColor="#755cff" />
          <stop offset="1" stopColor="#361dd3" />
        </linearGradient>
      </defs>
      <path
        d="M40 55L98 23l31 17-58 33-31-18Z"
        fill="url(#heroGlyphTop)"
      />
      <path
        d="M40 55l31 18v68l-31-17V55Z"
        fill="url(#heroGlyphEdge)"
      />
      <path
        d="M71 73l58-33v28l-31 18v57l-27-15V73Z"
        fill="url(#heroGlyphSide)"
      />
      <path
        d="M92 91l27-15v43l-27 15V91Z"
        fill="#6d55ff"
        opacity="0.96"
      />
      <path
        d="M55 63l44-24 13 7-44 25-13-8Z"
        fill="#ffffff"
        opacity="0.2"
      />
    </svg>
  );
}

function HeroIllustration() {
  return (
    <div className="hero-visual-stage dxg-motion" aria-hidden="true">
      <div className="hero-visual-glow" />

      <svg
        className="hero-connectors"
        viewBox="0 0 760 520"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          className="hero-connector hero-connector-0"
          d="M350 168C390 168 404 108 443 108"
        />
        <path
          className="hero-connector hero-connector-1"
          d="M357 260H443"
        />
        <path
          className="hero-connector hero-connector-2"
          d="M350 352C390 352 404 412 443 412"
        />
        <circle className="hero-node hero-node-0" cx="350" cy="168" r="8" />
        <circle className="hero-node hero-node-1" cx="357" cy="260" r="8" />
        <circle className="hero-node hero-node-2" cx="350" cy="352" r="8" />
        <circle className="hero-node hero-node-3" cx="443" cy="108" r="10" />
        <circle className="hero-node hero-node-4" cx="443" cy="260" r="10" />
        <circle className="hero-node hero-node-5" cx="443" cy="412" r="10" />
      </svg>

      <div className="hero-orbit-shell">
        <span className="hero-orbit-ring hero-orbit-ring-outer" />
        <span className="hero-orbit-ring hero-orbit-ring-middle" />
        <span className="hero-orbit-ring hero-orbit-ring-inner" />
        <span className="hero-orbit-arc hero-orbit-arc-left" />
        <span className="hero-orbit-arc hero-orbit-arc-right" />
        <span className="hero-orbit-dot hero-orbit-dot-main" />

        <div className="hero-core">
          <div className="hero-hexagon">
            <HeroLogoGlyph />
          </div>
        </div>

        <div className="hero-pedestal">
          <span />
          <span />
          <span />
        </div>
      </div>

      {FEATURE_TAGS.map((tag) => (
        <div key={tag.label} className={`hero-feature-card ${tag.className}`}>
          <span className="hero-feature-icon">{tag.icon}</span>
          <span className="hero-feature-label">{tag.label}</span>
          <CheckCircle2 className="hero-feature-check" strokeWidth={2} />
          <span className="hero-feature-shine" />
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-2 pb-10 md:pt-12 md:pb-16">
      <Container className="relative z-10 flex flex-col justify-between gap-10 md:gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-6xl font-bold leading-[1.15] tracking-tight text-gray-900 mb-3">
              Strategic Governance,<br className="hidden sm:inline" />
              <span className="text-primary"> Risk &amp; Compliance </span>
              <br className="hidden sm:inline" />
              Solutions for Modern Organizations
            </h1>

            <p className="text-[16px] md:text-[17px] leading-[1.8] text-gray-500 mb-4 max-w-[580px] mx-auto lg:mx-0">
              Empowering businesses with expert cybersecurity, governance,
              risk, and compliance services. From virtual CISO leadership to
              regulatory compliance and risk management, we help organizations
              strengthen security, reduce risk, and build trust.
            </p>

            <div className="flex flex-row gap-3 sm:gap-4 w-full justify-center lg:justify-start">
              <Link
                href="/contact"
                className="btn-primary group inline-flex items-center justify-center whitespace-nowrap h-11 md:h-14 px-3.5 sm:px-8 text-[13px] sm:text-[15px] flex-1 sm:flex-initial"
              >
                <span>
                  <span className="inline sm:hidden">Consultation</span>
                  <span className="hidden sm:inline">
                    Schedule a Consultation
                  </span>
                </span>
                <ArrowRight
                  size={15}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="btn-outline group inline-flex items-center justify-center whitespace-nowrap h-11 md:h-14 px-3.5 sm:px-8 text-[13px] sm:text-[15px] flex-1 sm:flex-initial"
              >
                <span>
                  <span className="inline sm:hidden">Services</span>
                  <span className="hidden sm:inline">Explore Our Services</span>
                </span>
                <ArrowRight
                  size={15}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex items-center justify-center relative order-1 lg:order-2">
            <HeroIllustration />
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.label}
                className="premium-card group block hover:-translate-y-2 duration-300 cursor-default select-none"
              >
                <div className="flex flex-col items-center justify-center p-4 sm:p-8 text-center h-full">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 shadow-sm border border-primary/10">
                    <span className="transition-colors duration-300">
                      {service.icon}
                    </span>
                  </div>

                  <span className="text-[13px] sm:text-[15px] font-bold tracking-wide text-gray-800 transition-colors duration-300 group-hover:text-primary leading-snug">
                    {service.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hero-visual-stage {
          position: relative;
          width: min(100%, 760px);
          aspect-ratio: 1.46;
          isolation: isolate;
          pointer-events: none;
        }

        .hero-visual-glow {
          position: absolute;
          inset: 6% 0 2%;
          z-index: 0;
          border-radius: 999px;
          background:
            radial-gradient(circle at 27% 50%, rgba(82, 44, 228, 0.24), transparent 35%),
            radial-gradient(circle at 73% 49%, rgba(82, 44, 228, 0.12), transparent 35%),
            linear-gradient(90deg, rgba(82, 44, 228, 0.06), transparent 62%);
          filter: blur(26px);
          animation: heroGlowPulse 5.8s ease-in-out infinite;
        }

        .hero-connectors {
          position: absolute;
          inset: 0;
          z-index: 3;
          overflow: visible;
        }

        .hero-connector {
          stroke: rgba(82, 44, 228, 0.56);
          stroke-width: 3;
          stroke-linecap: round;
          stroke-dasharray: 3 12;
          animation: dashFlow 11s linear infinite;
        }

        .hero-connector-1 {
          animation-duration: 8.5s;
        }

        .hero-node {
          fill: #6c55ff;
          filter: drop-shadow(0 0 12px rgba(82, 44, 228, 0.42));
          transform-box: fill-box;
          transform-origin: center;
          animation: nodePulse 2.8s ease-in-out infinite;
        }

        .hero-node-1,
        .hero-node-4 {
          animation-delay: 0.35s;
        }

        .hero-node-2,
        .hero-node-5 {
          animation-delay: 0.7s;
        }

        .hero-orbit-shell {
          position: absolute;
          left: 0;
          top: 7%;
          z-index: 2;
          width: 52%;
          aspect-ratio: 1;
        }

        .hero-orbit-ring,
        .hero-orbit-arc {
          position: absolute;
          inset: 0;
          border-radius: 999px;
        }

        .hero-orbit-ring-outer {
          border: 3px dotted rgba(82, 44, 228, 0.32);
          animation: spinSlow 34s linear infinite;
        }

        .hero-orbit-ring-middle {
          inset: 9%;
          border: 1px solid rgba(82, 44, 228, 0.18);
          box-shadow: inset 0 0 32px rgba(82, 44, 228, 0.08);
          animation: orbitBreath 6.2s ease-in-out infinite;
        }

        .hero-orbit-ring-inner {
          inset: 18%;
          border: 2px solid rgba(82, 44, 228, 0.28);
          animation: orbitBreath 6.2s ease-in-out infinite reverse;
        }

        .hero-orbit-arc-left,
        .hero-orbit-arc-right {
          inset: 17%;
          border: 13px solid transparent;
          border-bottom-color: rgba(82, 44, 228, 0.18);
          filter: drop-shadow(0 0 18px rgba(82, 44, 228, 0.12));
        }

        .hero-orbit-arc-left {
          border-left-color: rgba(82, 44, 228, 0.13);
          transform: rotate(36deg);
          animation: arcFloatLeft 7s ease-in-out infinite;
        }

        .hero-orbit-arc-right {
          border-right-color: rgba(82, 44, 228, 0.13);
          transform: rotate(-36deg);
          animation: arcFloatRight 7s ease-in-out infinite;
        }

        .hero-orbit-dot-main {
          position: absolute;
          left: 49%;
          top: -1.3%;
          width: clamp(12px, 2vw, 22px);
          height: clamp(12px, 2vw, 22px);
          border-radius: 999px;
          background: #7964ff;
          box-shadow:
            0 0 0 9px rgba(82, 44, 228, 0.1),
            0 0 22px rgba(82, 44, 228, 0.42);
          animation: orbitDotFloat 4.5s ease-in-out infinite;
        }

        .hero-core {
          position: absolute;
          left: 50%;
          top: 49%;
          width: 54%;
          aspect-ratio: 1;
          transform: translate(-50%, -50%);
          animation: heroCoreFloat 6.4s ease-in-out infinite;
        }

        .hero-hexagon {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          clip-path: polygon(50% 0, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.58)),
            radial-gradient(circle at 50% 50%, rgba(82, 44, 228, 0.13), transparent 62%);
          border: 1px solid rgba(82, 44, 228, 0.18);
          box-shadow:
            0 28px 50px rgba(82, 44, 228, 0.18),
            inset 0 0 22px rgba(255, 255, 255, 0.92),
            inset 0 0 0 9px rgba(255, 255, 255, 0.46);
        }

        .hero-hexagon::before {
          content: "";
          position: absolute;
          inset: 7%;
          clip-path: inherit;
          border: 2px solid rgba(255, 255, 255, 0.78);
          filter: drop-shadow(0 0 14px rgba(82, 44, 228, 0.18));
        }

        .hero-logo-glyph {
          position: relative;
          z-index: 1;
          width: 62%;
          height: 62%;
          filter:
            drop-shadow(0 18px 16px rgba(82, 44, 228, 0.2))
            drop-shadow(0 3px 0 rgba(255, 255, 255, 0.45));
          animation: glyphTilt 5.6s ease-in-out infinite;
        }

        .hero-pedestal {
          position: absolute;
          left: 50%;
          bottom: -6%;
          width: 72%;
          height: 24%;
          transform: translateX(-50%);
          perspective: 520px;
        }

        .hero-pedestal span {
          position: absolute;
          left: 50%;
          transform: translateX(-50%) rotateX(64deg);
          border-radius: 999px;
          border: 2px solid rgba(82, 44, 228, 0.23);
          background: rgba(255, 255, 255, 0.64);
          box-shadow:
            0 16px 28px rgba(82, 44, 228, 0.14),
            inset 0 0 16px rgba(82, 44, 228, 0.08);
        }

        .hero-pedestal span:nth-child(1) {
          bottom: 36%;
          width: 45%;
          height: 34%;
          animation: pedestalPulse 3.8s ease-in-out infinite;
        }

        .hero-pedestal span:nth-child(2) {
          bottom: 20%;
          width: 67%;
          height: 36%;
          animation: pedestalPulse 3.8s ease-in-out infinite 0.2s;
        }

        .hero-pedestal span:nth-child(3) {
          bottom: 0;
          width: 92%;
          height: 40%;
          animation: pedestalPulse 3.8s ease-in-out infinite 0.4s;
        }

        .hero-feature-card {
          position: absolute;
          left: 50%;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: clamp(8px, 1.1vw, 14px);
          width: 49%;
          min-height: 17%;
          padding: clamp(8px, 1.2vw, 14px) clamp(10px, 1.35vw, 16px);
          overflow: hidden;
          border: 1px solid rgba(82, 44, 228, 0.2);
          border-radius: 999px;
          color: #24138f;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.72));
          box-shadow:
            0 20px 44px rgba(82, 44, 228, 0.13),
            inset 0 1px 0 rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transform-origin: 50% 50%;
        }

        .hero-feature-card-0 {
          top: 10%;
          animation: floatTagTop 5s ease-in-out infinite;
        }

        .hero-feature-card-1 {
          top: 40%;
          animation: floatTagMiddle 5.7s ease-in-out infinite 0.25s;
        }

        .hero-feature-card-2 {
          top: 70%;
          animation: floatTagBottom 5.2s ease-in-out infinite 0.5s;
        }

        .hero-feature-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 clamp(34px, 5vw, 62px);
          width: clamp(34px, 5vw, 62px);
          height: clamp(34px, 5vw, 62px);
          border-radius: 999px;
          color: #522CE4;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(82, 44, 228, 0.16);
          box-shadow:
            0 12px 26px rgba(82, 44, 228, 0.13),
            inset 0 0 18px rgba(82, 44, 228, 0.08);
          animation: iconPulse 3.4s ease-in-out infinite;
        }

        .hero-feature-label {
          flex: 1;
          min-width: 0;
          overflow: visible;
          text-overflow: clip;
          font-size: clamp(12px, 1.32vw, 20px);
          font-weight: 800;
          letter-spacing: 0.035em;
          line-height: 1;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .hero-feature-check {
          flex: 0 0 auto;
          width: clamp(20px, 3vw, 36px);
          height: clamp(20px, 3vw, 36px);
          color: #1707b9;
          animation: checkPop 3.8s ease-in-out infinite;
        }

        .hero-feature-shine {
          position: absolute;
          inset: -22% auto -22% -42%;
          width: 34%;
          transform: skewX(-18deg);
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.86), transparent);
          animation: cardShine 5s ease-in-out infinite;
        }

        @keyframes heroGlowPulse {
          0%, 100% { opacity: 0.62; transform: scale(0.98); }
          50% { opacity: 0.96; transform: scale(1.04); }
        }

        @keyframes dashFlow {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -120; }
        }

        @keyframes nodePulse {
          0%, 100% { opacity: 0.74; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.16); }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbitBreath {
          0%, 100% { opacity: 0.68; transform: scale(0.99); }
          50% { opacity: 1; transform: scale(1.035); }
        }

        @keyframes arcFloatLeft {
          0%, 100% { transform: rotate(36deg) scale(0.99); opacity: 0.72; }
          50% { transform: rotate(43deg) scale(1.02); opacity: 1; }
        }

        @keyframes arcFloatRight {
          0%, 100% { transform: rotate(-36deg) scale(0.99); opacity: 0.72; }
          50% { transform: rotate(-43deg) scale(1.02); opacity: 1; }
        }

        @keyframes orbitDotFloat {
          0%, 100% { transform: translate3d(-2px, 0, 0) scale(0.92); }
          50% { transform: translate3d(5px, 3px, 0) scale(1.08); }
        }

        @keyframes heroCoreFloat {
          0%, 100% { transform: translate(-50%, -50%) translateY(0) scale(1); }
          50% { transform: translate(-50%, -50%) translateY(-12px) scale(1.02); }
        }

        @keyframes glyphTilt {
          0%, 100% { transform: rotateY(-10deg) rotateX(4deg) translateY(0); }
          50% { transform: rotateY(8deg) rotateX(-3deg) translateY(-3px); }
        }

        @keyframes pedestalPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes floatTagTop {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -8px, 0); }
        }

        @keyframes floatTagMiddle {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -12px, 0); }
        }

        @keyframes floatTagBottom {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -7px, 0); }
        }

        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow:
              0 12px 26px rgba(82, 44, 228, 0.13),
              inset 0 0 18px rgba(82, 44, 228, 0.08);
          }
          50% {
            transform: scale(1.08);
            box-shadow:
              0 15px 32px rgba(82, 44, 228, 0.2),
              inset 0 0 20px rgba(82, 44, 228, 0.12);
          }
        }

        @keyframes checkPop {
          0%, 100% { transform: scale(1); opacity: 0.78; }
          45% { transform: scale(1.14); opacity: 1; }
        }

        @keyframes cardShine {
          0%, 50% { transform: translateX(0) skewX(-18deg); opacity: 0; }
          64% { opacity: 0.78; }
          88%, 100% { transform: translateX(430%) skewX(-18deg); opacity: 0; }
        }

        @media (max-width: 640px) {
          .hero-visual-stage {
            aspect-ratio: 1.13;
            max-width: 440px;
          }

          .hero-orbit-shell {
            left: -8%;
            top: 13%;
            width: 64%;
          }

          .hero-feature-card {
            left: 41%;
            width: 58%;
            min-height: 15%;
            padding: 8px 10px;
          }

          .hero-feature-card-0 {
            top: 16%;
          }

          .hero-feature-card-1 {
            top: 42%;
          }

          .hero-feature-card-2 {
            top: 68%;
          }

          .hero-feature-label {
            font-size: clamp(9px, 3vw, 13px);
            letter-spacing: 0.015em;
          }

          .hero-connector {
            stroke-width: 2.5;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-visual-stage *,
          .hero-visual-stage *::before,
          .hero-visual-stage *::after {
            animation: none !important;
          }
        }
      `,
        }}
      />
    </section>
  );
}
