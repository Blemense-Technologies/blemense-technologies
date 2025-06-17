"use client";
import { motion } from 'framer-motion';
import Feats from "@/components/feats";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Services from "@/components/services";
import SlotBook from "@/components/slot-book";
import SocialMedia from "@/components/social-media";
import Testimonials from "@/components/testimonials";
import { testimonialsData } from "@/constants/testimonial-data";
import { staggerContainer, sectionEntrance } from "@/lib/animations";

const sections = [
  { component: Hero, name: "hero" },
  { component: Services, name: "services" },
  { component: Products, name: "products" },
  { component: Feats, name: "features" },
  { component: Testimonials, name: "testimonials", props: testimonialsData },
  { component: SlotBook, name: "booking" },
  { component: SocialMedia, name: "social" },
];

export default function Home() {
  return (
    <motion.main 
      className="relative overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section - Full height */}
      <motion.section
        id="hero"
        className="relative min-h-screen"
        variants={sectionEntrance}
      >
        <Hero />
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="relative py-16 md:py-24 lg:py-32"
        variants={sectionEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Services />
      </motion.section>

      {/* Products Section */}
      <motion.section
        id="products"
        className="relative py-16 md:py-24 lg:py-32"
        variants={sectionEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Products />
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="relative py-16 md:py-24 lg:py-32"
        variants={sectionEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Feats />
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="relative py-16 md:py-24 lg:py-32"
        variants={sectionEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Testimonials {...testimonialsData} />
      </motion.section>

      {/* Booking Section */}
      <motion.section
        id="booking"
        className="relative py-16 md:py-24 lg:py-32"
        variants={sectionEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <SlotBook />
      </motion.section>

      {/* Social Media Section */}
      <motion.section
        id="social"
        className="relative py-16 md:py-24 lg:py-32"
        variants={sectionEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <SocialMedia />
      </motion.section>

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primaryTheme/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondaryTheme/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-3/4 left-1/2 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </motion.main>
  );
}
