import Achievements from "@/components/achievements";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <Achievements />
      <Projects />
    </main>
  );
}
