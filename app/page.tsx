import ContactOptions from "components/home/ContactOptions";
import Hero from "components/home/Hero";
import InnerTabs from "components/InnerTabs.tsx/InnerTabs";
// import RetainerModel from "components/home/RetainerModel";
// import OnlineCourses from "components/home/OnlineCourses";
// import ProjectEngagements from "components/home/ProjectEngagements";
// import RiskSense from "components/home/RiskSense";
// import RiskSensePricing from "components/home/RiskSensePricing";
// import ServicesIntegration from "components/home/ServicesIntegration";
// import ContactOptions from "components/home/ContactOptions";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <RetainerModel />
      <OnlineCourses />
      <ProjectEngagements />
      <RiskSense />
      <RiskSensePricing />
      <ServicesIntegration />
      <ContactOptions /> */}
      <InnerTabs />
      <ContactOptions />
    </div>
  );
}
