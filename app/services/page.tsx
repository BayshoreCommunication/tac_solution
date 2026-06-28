import CTA from "components/about/CTA";
import Testimonials from "components/about/Testimonials";
import ProjectServices from "components/services/ProjectServices";

export default function ServicesPage() {
  return (
    <div>
      <ProjectServices />
      <Testimonials />
      <CTA />
    </div>
  );
}
