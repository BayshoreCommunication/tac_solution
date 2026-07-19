"use client";

import { ShieldCheck, Lock, Target } from "lucide-react";
import Container from "components/layout/Container";

export default function WhoWeAre() {
  return (
    <section className="relative bg-gray-50/50 border-t border-gray-100 py-8 md:py-12 overflow-hidden">
      <Container className="relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Who <span className="text-primary">We</span> Are
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
            TAC Solutions embeds senior technology risk leadership into
            mid-market organizations and executive teams — keeping them
            compliant, insurable, and acquisition-ready.
          </p>
        </div>

        {/* Pillars Card */}
        <div className="bg-white border border-gray-100 rounded-[32px] p-8 sm:p-12 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.015)] w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 divide-y divide-gray-100 md:divide-y-0 md:divide-x md:divide-gray-100">
            {/* Pillar 1: Compliant */}
            <div className="flex flex-col items-start text-left pb-10 md:pb-0 md:pr-8 md:pl-0">
              <div className="w-16 h-16 rounded-full border-[3px] border-primary bg-primary/5 flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck className="w-7 h-7 text-primary" strokeWidth={2} />
              </div>
              <h3 className="text-2xl sm:text-3xl  text-gray-900 tracking-tight mb-4">
                Compliant
              </h3>
              <p className="text-gray-500 text-[15px] sm:text-base leading-relaxed">
                Global regulatory frameworks such as NIST CSF, HIPAA, ISO 27001,
                ISO 42001 and NIS2.
              </p>
            </div>

            {/* Pillar 2: Insurable */}
            <div className="flex flex-col items-start text-left pt-10 pb-10 md:py-0 md:px-8">
              <div className="w-16 h-16 rounded-full border-[3px] border-primary bg-primary/5 flex items-center justify-center mb-6 shadow-sm">
                <Lock className="w-7 h-7 text-primary" strokeWidth={2} />
              </div>
              <h3 className="text-2xl sm:text-3xl  text-gray-900 tracking-tight mb-4">
                Insurable
              </h3>
              <p className="text-gray-500 text-[15px] sm:text-base leading-relaxed">
                Risk posture documented, tested, and defensible.
              </p>
            </div>

            {/* Pillar 3: Acquisition-ready */}
            <div className="flex flex-col items-start text-left pt-10 md:pt-0 md:pl-8 md:pr-0">
              <div className="w-16 h-16 rounded-full border-[3px] border-primary bg-primary/5 flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-7 h-7 text-primary" strokeWidth={2} />
              </div>
              <h3 className="text-2xl sm:text-3xl  text-gray-900 tracking-tight mb-4">
                Acquisition-ready
              </h3>
              <p className="text-gray-500 text-[15px] sm:text-base leading-relaxed">
                GRC due diligence support for M&A, small and mid-market
                companies, and organization-level risk reporting.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
