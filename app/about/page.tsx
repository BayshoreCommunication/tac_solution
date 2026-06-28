import AboutHero from "components/about/AboutHero";
import WhoWeAre from "components/about/WhoWeAre";
import Testimonials from "components/about/Testimonials";
import CTA from "components/about/CTA";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <WhoWeAre />
      <Testimonials />
      <CTA />
    </div>
  );
}

