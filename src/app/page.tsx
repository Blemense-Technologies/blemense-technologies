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
import { generateWebsiteStructuredData, generateServiceStructuredData } from "@/lib/seo";

const sections = [
  { component: Hero, name: "hero" },
  { component: Services, name: "services" },
  { component: Products, name: "products" },
  { component: Feats, name: "features" },
  { component: Testimonials, name: "testimonials", props: testimonialsData },
  { component: SlotBook, name: "booking" },
  { component: SocialMedia, name: "social" },
];

const services = [
  {
    name: "Web Development",
    description: "Custom web applications built with modern technologies like React, Next.js, and Node.js",
    provider: "Blemense Technologies"
  },
  {
    name: "Mobile App Development", 
    description: "Native and cross-platform mobile applications for iOS and Android",
    provider: "Blemense Technologies"
  },
  {
    name: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions",
    provider: "Blemense Technologies"
  },
  {
    name: "UI/UX Design",
    description: "User-centered design and intuitive user interfaces",
    provider: "Blemense Technologies"
  },
  {
    name: "Tech Consulting",
    description: "Strategic technology consulting and digital transformation services",
    provider: "Blemense Technologies"
  }
];

export default function Home() {
  const websiteStructuredData = generateWebsiteStructuredData();
  const serviceStructuredData = generateServiceStructuredData(services);

  return (
    <>
      {/* Structured Data for Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData)
        }}
      />
      
      {/* Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData)
        }}
      />

      <motion.main 
        className="relative overflow-hidden"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section - Full viewport height */}
        <motion.section
          id="hero"
          className="relative min-h-screen"
          variants={sectionEntrance}
        >
          <Hero />
        </motion.section>

        {/* Content Sections with Enhanced Spacing */}
        <div className="relative bg-gradient-to-b from-black via-gray-900 to-black">
          
          {/* Services Section */}
          <motion.section
            id="services"
            className="relative py-20 sm:py-28 lg:py-36 xl:py-44"
            variants={sectionEntrance}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primaryTheme/5 to-transparent" />
            <Services />
          </motion.section>

          {/* Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8 sm:mx-16 lg:mx-32" />

          {/* Products Section */}
          <motion.section
            id="products"
            className="relative py-20 sm:py-28 lg:py-36 xl:py-44"
            variants={sectionEntrance}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondaryTheme/5 to-transparent" />
            <Products />
          </motion.section>

          {/* Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8 sm:mx-16 lg:mx-32" />

          {/* Features Section */}
          <motion.section
            id="features"
            className="relative py-20 sm:py-28 lg:py-36 xl:py-44"
            variants={sectionEntrance}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
            <Feats />
          </motion.section>

          {/* Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8 sm:mx-16 lg:mx-32" />

          {/* Testimonials Section */}
          <motion.section
            id="testimonials"
            className="relative py-20 sm:py-28 lg:py-36 xl:py-44"
            variants={sectionEntrance}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primaryTheme/3 to-transparent" />
            <Testimonials {...testimonialsData} />
          </motion.section>

          {/* Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8 sm:mx-16 lg:mx-32" />

          {/* Booking Section */}
          <motion.section
            id="booking"
            className="relative py-20 sm:py-28 lg:py-36 xl:py-44"
            variants={sectionEntrance}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondaryTheme/3 to-transparent" />
            <SlotBook />
          </motion.section>

          {/* Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8 sm:mx-16 lg:mx-32" />

          {/* Social Media Section */}
          <motion.section
            id="social"
            className="relative py-20 sm:py-28 lg:py-36 xl:py-44"
            variants={sectionEntrance}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent" />
            <SocialMedia />
          </motion.section>
        </div>

        {/* Enhanced Background System */}
        <div className="fixed inset-0 pointer-events-none z-[-1]">
          {/* Primary animated gradient orb */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primaryTheme/3 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 120, 0],
              y: [0, -60, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Secondary animated gradient orb */}
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondaryTheme/3 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -180, 0],
              y: [0, 120, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Tertiary rotating gradient orb */}
          <motion.div
            className="absolute top-3/4 left-1/2 w-[300px] h-[300px] bg-purple-500/3 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.6, 1],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Additional atmospheric orbs */}
          <motion.div
            className="absolute top-1/2 right-1/3 w-[200px] h-[200px] bg-cyan-500/2 rounded-full blur-3xl"
            animate={{
              scale: [0.8, 1.4, 0.8],
              x: [0, 80, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] bg-pink-500/2 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 0.9, 1.1],
              x: [0, -60, 0],
              y: [0, 80, 0],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.main>
    </>
  );
}
