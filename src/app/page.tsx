import Achievements from "@/components/achievements";
import Contactform from "@/components/contact-form";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <Achievements />
      <Projects />
      <Testimonials />
      <Contactform />
    </main>
  );
}
