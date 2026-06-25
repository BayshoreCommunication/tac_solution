import Hero from "components/home/Hero";
import RetainerModel from "components/home/RetainerModel";
import OnlineCourses from "components/home/OnlineCourses";
import ProjectEngagements from "components/home/ProjectEngagements";
import RiskSense from "components/home/RiskSense";
import RiskSensePricing from "components/home/RiskSensePricing";
import ServicesIntegration from "components/home/ServicesIntegration";
import ContactOptions from "components/home/ContactOptions";

export const metadata = {
  title: "",
  description:
    "",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  }

};


export default function Home() {
  return (
    <div>
      <Hero />
      <RetainerModel />
      <OnlineCourses />
      <ProjectEngagements />
      <RiskSense />
      <RiskSensePricing />
      <ServicesIntegration />
      <ContactOptions />
    </div>
  );
}
