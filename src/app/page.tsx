import Feats from "@/components/feats";
import Hero from "@/components/hero";
import SlotBook from "@/components/slot-book";
import Testimonials from "@/components/testimonials";
import { testimonialsData } from "@/constants/testimonial-data";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Feats />
      <Testimonials {...testimonialsData} />
      <SlotBook />
    </main>
  );
}
