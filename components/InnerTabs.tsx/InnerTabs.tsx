"use client";

import React, { useState } from "react";

import RetainerModel from "components/home/RetainerModel";
import OnlineCourses from "components/home/OnlineCourses";
import ProjectEngagements from "components/home/ProjectEngagements";
import RiskSense from "components/home/RiskSense";
import RiskSensePricing from "components/home/RiskSensePricing";
import ServicesIntegration from "components/home/ServicesIntegration";

const tabs = [
  { id: "retainer", label: "Retainer Model" },
  { id: "courses", label: "Learning Hub" },
  { id: "projects", label: "Project Engagements" },
  { id: "risksense", label: "RiskSense" },
  { id: "pricing", label: "RiskSense Pricing" },
  { id: "integration", label: "Services Integration" },
] as const;

const components = {
  retainer: <RetainerModel />,
  courses: <OnlineCourses />,
  projects: <ProjectEngagements />,
  risksense: <RiskSense />,
  pricing: <RiskSensePricing />,
  integration: <ServicesIntegration />,
};

type TabId = keyof typeof components;

const InnerTabs = () => {
  const [activeTab, setActiveTab] = useState<TabId>("retainer");

  return (
    <section className="relative overflow-hidden border-t border-gray-100 bg-gray-50/50 py-8 md:py-12">
      <div className=" mx-auto ">
        {/* Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "border-primary bg-primary text-white shadow-lg"
                  : "border-gray-200 bg-white text-gray-700 hover:border-primary hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>{components[activeTab]}</div>
      </div>
    </section>
  );
};

export default InnerTabs;
