import Feats from "@/components/feats";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Services from "@/components/services";
import SlotBook from "@/components/slot-book";
import SocialMedia from "@/components/social-media";
import Testimonials from "@/components/testimonials";
import { testimonialsData } from "@/constants/testimonial-data";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <Products />
      <Feats />
      <Testimonials {...testimonialsData} />
      <SlotBook />
      <SocialMedia />
    </main>
  );
}
