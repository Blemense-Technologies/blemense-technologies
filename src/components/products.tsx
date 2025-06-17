"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import AndroidLogo from "../../public/Android-Logo.svg";
import IOSLogo from "../../public/IOS-Logo.svg";
import ProductImage from "../../public/Product-Image.png";
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer, 
  staggerItem, 
  cardHover,
  blurReveal,
  magneticButton 
} from "@/lib/animations";

const PlatformButton = ({ icon, platform, delay = 0 }: { icon: any, platform: string, delay?: number }) => {
  return (
    <motion.div
      className="group relative p-4 rounded-2xl glass-card cursor-pointer overflow-hidden"
      variants={magneticButton}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      transition={{ delay }}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primaryTheme/20 to-secondaryTheme/20 rounded-2xl opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Icon */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={icon}
          alt={platform}
          width={48}
          height={48}
          className="filter drop-shadow-lg"
        />
      </motion.div>
      
      {/* Platform label */}
      <motion.p 
        className="text-center text-sm text-gray-300 mt-2 font-medium"
        whileHover={{ color: '#ffffff' }}
        transition={{ duration: 0.2 }}
      >
        {platform}
      </motion.p>
      
      {/* Hover indicator */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        whileHover={{
          borderColor: "#EFAA3A",
          boxShadow: "0 0 20px rgba(239, 170, 58, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const FeatureCard = ({ title, description, icon, delay = 0 }: { 
  title: string, 
  description: string, 
  icon: string,
  delay?: number 
}) => {
  return (
    <motion.div
      className="glass-card p-6 rounded-2xl group cursor-pointer"
      variants={cardHover}
      initial={{ opacity: 0, y: 30 }}
      whileHover="hover"
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="text-3xl mb-4"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      
      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primaryTheme/10 to-secondaryTheme/10 rounded-2xl opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const ProductTab = ({ 
  isActive, 
  onClick, 
  children 
}: { 
  isActive: boolean, 
  onClick: () => void, 
  children: React.ReactNode 
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative px-8 py-4 rounded-2xl font-medium transition-all duration-300 ${
        isActive ? 'text-white' : 'text-gray-400 hover:text-white'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primaryTheme to-secondaryTheme rounded-2xl"
          layoutId="activeTab"
          transition={{ duration: 0.3 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default function Products() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeProduct, setActiveProduct] = useState<'kuruksaarthi' | 'calcora'>('kuruksaarthi');

  const products = {
    kuruksaarthi: {
      name: "KurukSaarthi",
      version: "v 1.0.0",
      tagline: "India's Best Voting List app",
      description: "Your brand new Voting List Management tool ensuring your campaign remains smooth and successful with advanced analytics and real-time insights!",
      image: ProductImage,
      platforms: [
        { icon: AndroidLogo, name: "Android" },
        { icon: IOSLogo, name: "iOS" }
      ],
      features: [
        {
          title: "Smart Analytics",
          description: "Advanced data insights with real-time reporting and visualization",
          icon: "📊"
        },
        {
          title: "Secure Platform",
          description: "Enterprise-grade security with end-to-end encryption",
          icon: "🔒"
        },
        {
          title: "Campaign Management",
          description: "Comprehensive tools for efficient campaign coordination",
          icon: "🗳️"
        },
        {
          title: "Real-time Sync",
          description: "Instant synchronization across all team devices",
          icon: "⚡"
        }
      ],
      accent: "text-orange-500"
    },
    calcora: {
      name: "Calcora",
      version: "SaaS Platform",
      tagline: "Next-Gen Auditing & Accounting Software",
      description: "AI-powered auditing platform designed specifically for Chartered Accountants specializing in Co-operative Societies auditing with intelligent automation and collaboration tools.",
      image: null, // We'll use a placeholder or icon
      platforms: [
        { icon: "🌐", name: "Web App" },
        { icon: "☁️", name: "Cloud-based" }
      ],
      features: [
        {
          title: "AI-Powered Reporting",
          description: "Automate balance sheets, income statements, and compliance notes",
          icon: "🧠"
        },
        {
          title: "Team Collaboration",
          description: "Real-time collaboration with role-based access controls",
          icon: "👥"
        },
        {
          title: "Client Management",
          description: "Centralized dashboard for multiple societies and financial data",
          icon: "📋"
        },
        {
          title: "Document Security",
          description: "End-to-end encryption with secure cloud storage",
          icon: "🔐"
        }
      ],
      accent: "text-blue-500"
    }
  };

  const currentProduct = products[activeProduct];

  return (
    <motion.section 
      ref={containerRef}
      className="p-8 text-white max-w-7xl mx-auto"
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Header Section */}
      <motion.div 
        className="text-center space-y-6 mb-20"
        variants={blurReveal}
      >
        <motion.h2 
          className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight"
          variants={fadeInUp}
        >
          Our Innovative{" "}
          <span className="text-gradient-modern">Product Portfolio</span>
        </motion.h2>
        
        <motion.p 
          className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          Discover our range of cutting-edge software solutions designed to transform industries and empower businesses with next-generation technology.
        </motion.p>
        
        {/* Decorative line */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-primaryTheme to-secondaryTheme mx-auto rounded-full"
          variants={fadeInUp}
          whileHover={{ width: 100 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Product Tabs */}
      <motion.div 
        className="flex justify-center mb-12"
        variants={fadeInUp}
      >
        <div className="glass-card p-2 rounded-3xl">
          <ProductTab
            isActive={activeProduct === 'kuruksaarthi'}
            onClick={() => setActiveProduct('kuruksaarthi')}
          >
            🗳️ KurukSaarthi
          </ProductTab>
          <ProductTab
            isActive={activeProduct === 'calcora'}
            onClick={() => setActiveProduct('calcora')}
          >
            🧠 Calcora
          </ProductTab>
        </div>
      </motion.div>

      {/* Main Product Showcase */}
      <motion.div 
        className="relative mb-20"
        variants={staggerContainer}
        key={activeProduct}
      >
        <motion.div 
          className="modern-card p-8 lg:p-16 rounded-3xl flex flex-col lg:flex-row items-center gap-12 overflow-hidden"
          variants={cardHover}
          initial="rest"
          whileHover="hover"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-primaryTheme/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-48 h-48 bg-secondaryTheme/5 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -30, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Left Section - Content */}
          <motion.div 
            className="lg:w-1/2 space-y-8 relative z-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={staggerItem}>
              <motion.p 
                className="text-lg font-light text-secondaryTheme mb-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Introducing
              </motion.p>
              
              <motion.div 
                className="flex items-baseline gap-4 mb-6"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {currentProduct.name}
                </h3>
                <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                  {currentProduct.version}
                </span>
              </motion.div>
            </motion.div>

            <motion.blockquote 
              className="text-2xl lg:text-3xl font-medium leading-relaxed"
              variants={staggerItem}
            >
              "{currentProduct.tagline.split(' ').map((word, index) => {
                if (word === 'Best' || word === 'Next-Gen') {
                  return (
                    <motion.span 
                      key={index}
                      className={`font-bold ${currentProduct.accent}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {word}{" "}
                    </motion.span>
                  );
                }
                return word + " ";
              })}"
            </motion.blockquote>

            <motion.p 
              className="text-gray-300 text-lg leading-relaxed"
              variants={staggerItem}
            >
              {currentProduct.description}
            </motion.p>

            {/* Platform Availability */}
            <motion.div 
              className="space-y-4"
              variants={staggerItem}
            >
              <p className="text-gray-400 font-medium">Available on</p>
              <div className="flex gap-6">
                {currentProduct.platforms.map((platform, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-4 rounded-2xl cursor-pointer group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      {typeof platform.icon === 'string' ? (
                        <span className="text-3xl">{platform.icon}</span>
                      ) : (
                        <Image
                          src={platform.icon}
                          alt={platform.name}
                          width={48}
                          height={48}
                          className="filter drop-shadow-lg"
                        />
                      )}
                    </div>
                    <p className="text-center text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
                      {platform.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="magnetic-btn px-8 py-4 rounded-full text-white font-semibold">
                {activeProduct === 'calcora' ? 'Visit calcora.in' : 'Learn More'}
                <motion.svg
                  className="inline-block ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Section - Product Visualization */}
          <motion.div 
            className="lg:w-1/2 flex justify-center relative"
            variants={fadeInRight}
          >
            {activeProduct === 'kuruksaarthi' && currentProduct.image ? (
              <motion.div
                className="relative"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ duration: 0.5 }}
                style={{ perspective: 1000 }}
              >
                {/* Glow effect behind image */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primaryTheme/20 to-secondaryTheme/20 rounded-3xl blur-2xl opacity-0"
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                
                <motion.div
                  className="relative z-10"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={currentProduct.image}
                    alt={`${currentProduct.name} App Preview`}
                    width={400}
                    height={700}
                    className="rounded-3xl shadow-2xl"
                    priority
                  />
                </motion.div>
                
                {/* Floating elements around the phone */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primaryTheme to-secondaryTheme rounded-full opacity-60"
                  animate={{ 
                    y: [-5, 5, -5],
                    rotate: [0, 180, 360] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-secondaryTheme to-primaryTheme rounded-full opacity-40"
                  animate={{ 
                    y: [5, -5, 5],
                    scale: [1, 1.2, 1] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>
            ) : (
              // Calcora visualization with modern dashboard mockup
              <motion.div
                className="relative w-full max-w-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="modern-card p-8 rounded-3xl aspect-square flex flex-col items-center justify-center text-center">
                  <motion.div
                    className="text-8xl mb-6"
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    🧠
                  </motion.div>
                  <h4 className="text-2xl font-bold mb-4">AI-Powered</h4>
                  <p className="text-gray-300">Intelligent auditing solutions for modern CAs</p>
                  
                  {/* Dashboard simulation */}
                  <div className="mt-6 space-y-2 w-full">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="h-2 bg-gradient-to-r from-primaryTheme/20 to-secondaryTheme/20 rounded"
                        animate={{ 
                          scaleX: [0.6, 1, 0.8, 1],
                          opacity: [0.5, 1, 0.7, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity 
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Product Features Grid */}
      <motion.div
        className="space-y-8"
        variants={staggerContainer}
        key={`features-${activeProduct}`}
      >
        <motion.div 
          className="text-center"
          variants={fadeInUp}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Powerful Features
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the advanced capabilities that make {currentProduct.name} stand out in the competitive landscape
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {currentProduct.features.map((feature, index) => (
            <FeatureCard
              key={`${activeProduct}-${index}`}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
