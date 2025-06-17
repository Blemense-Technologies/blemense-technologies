"use client";
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import GridNormal from '../../public/Grid - Normal.svg'
import { serviceData, serviceCategories } from '@/constants/service-data'
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem, 
  cardHover,
  blurReveal
} from '@/lib/animations'

type ServiceCategory = 'all' | 'development' | 'design' | 'consulting' | 'marketing';

const CategoryFilter = ({ 
  category, 
  isActive, 
  onClick, 
  icon,
  name,
  count 
}: { 
  category: ServiceCategory,
  isActive: boolean, 
  onClick: () => void,
  icon: string,
  name: string,
  count: number
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-3 ${
        isActive ? 'text-white' : 'text-gray-400 hover:text-white'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 glass-card rounded-2xl border border-white/10"
          layoutId="activeCategory"
          transition={{ duration: 0.3 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-3">
        <span className="text-xl">{icon}</span>
        <span>{name}</span>
        <span className={`text-xs px-2 py-1 rounded-full ${
          isActive ? 'bg-secondaryTheme text-black' : 'bg-gray-700 text-gray-300'
        }`}>
          {count}
        </span>
      </span>
    </motion.button>
  );
};

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative modern-card p-8 rounded-3xl space-y-6 group cursor-pointer overflow-hidden"
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      {/* Animated Background Grid */}
      <motion.div
        className="absolute right-0 bottom-6 scale-[1.5] opacity-10"
        animate={isHovered ? { 
          scale: 1.8, 
          rotate: 15,
          opacity: 0.2 
        } : {
          scale: 1.5,
          rotate: 0,
          opacity: 0.1
        }}
        transition={{ duration: 0.5 }}
      >
        <Image 
          src={GridNormal}
          alt={"grid_bg"}
          height={200}
          width={200}
        />
      </motion.div>
      
      {/* Dynamic gradient overlay */}
      <motion.div
        className={`absolute inset-0 ${service.gradientClass} rounded-3xl opacity-0`}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Service Icon */}
        <motion.div 
          className="flex items-center gap-4 mb-6"
          whileHover={{ x: 10 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-5xl"
            animate={isHovered ? { 
              scale: 1.2, 
              rotate: [0, -10, 10, 0],
            } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.6 }}
          >
            {service.icon}
          </motion.div>
          
          <div>
            <motion.h3 
              className="text-2xl font-bold text-white mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {service.title}
            </motion.h3>
            
            {/* Category badge */}
            <motion.span 
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${
                serviceCategories[service.category as keyof typeof serviceCategories]?.color
              } text-white`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {serviceCategories[service.category as keyof typeof serviceCategories]?.name}
            </motion.span>
          </div>
        </motion.div>
        
        <motion.p 
          className="text-gray-300 leading-relaxed text-base mb-6"
          whileHover={{ color: '#ffffff' }}
          transition={{ duration: 0.3 }}
        >
          {service.description}
        </motion.p>
        
        {/* Service Features */}
        <motion.div 
          className="space-y-3"
          initial={{ opacity: 0, height: 0 }}
          animate={isHovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-sm font-semibold text-secondaryTheme mb-2">Key Features:</h4>
          <div className="grid grid-cols-2 gap-2">
            {service.features.map((feature: string, featureIndex: number) => (
              <motion.div
                key={featureIndex}
                className="flex items-center gap-2 text-sm text-gray-400"
                initial={{ opacity: 0, x: -10 }}
                animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.2, delay: featureIndex * 0.05 }}
              >
                <span className="w-1.5 h-1.5 bg-secondaryTheme rounded-full"></span>
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Learn More Link */}
        <motion.div
          className="pt-4"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="text-secondaryTheme font-medium text-sm flex items-center gap-2 group"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Learn More
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Interactive border pulse */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-transparent"
        whileHover={{
          borderColor: "#EFAA3A",
          boxShadow: "0 0 30px rgba(239, 170, 58, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Floating indicator */}
      <motion.div
        className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-primaryTheme to-secondaryTheme rounded-full opacity-0"
        whileHover={{ 
          opacity: 1, 
          scale: 1.5,
          boxShadow: "0 0 15px rgba(239, 170, 58, 0.6)"
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const StatsCard = ({ number, label, delay = 0 }: { number: string, label: string, delay?: number }) => {
  return (
    <motion.div
      className="text-center glass-card p-6 rounded-2xl"
      variants={staggerItem}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3, delay }}
    >
      <motion.div
        className="text-4xl font-bold text-gradient-modern mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
      >
        {number}
      </motion.div>
      <p className="text-gray-300 text-sm font-medium">{label}</p>
    </motion.div>
  );
};

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const filteredServices = activeCategory === 'all' 
    ? serviceData 
    : serviceData.filter(service => service.category === activeCategory);

  const getCategoryCount = (category: ServiceCategory) => {
    if (category === 'all') return serviceData.length;
    return serviceData.filter(service => service.category === category).length;
  };

  // Debug logging
  console.log('Active Category:', activeCategory);
  console.log('Filtered Services:', filteredServices.length);
  console.log('Service Categories:', Object.keys(serviceCategories));

  const statsData = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "4+", label: "Years Experience" },
    { number: "9", label: "Services Offered" }
  ];

  return (
    <motion.div 
      ref={containerRef}
      className='relative py-16 md:py-24 lg:py-32 p-4 overflow-hidden'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primaryTheme/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
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
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Section Header */}
      <motion.div 
        className="text-center space-y-6 mb-16"
        variants={blurReveal}
      >
        <motion.h2 
          className="text-2xl text-white md:text-4xl lg:text-5xl font-bold leading-tight"
          variants={fadeInUp}
        >
          Elevate your{" "}
          <span className="font-bold text-gradient-modern">Digital Presence</span>
        </motion.h2>
        
        <motion.p 
          className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          We create comprehensive software solutions that don't just meet expectations but exceed them - delivering innovation, satisfaction, and long-term success across all industries.
        </motion.p>
        
        {/* Decorative line */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-primaryTheme to-secondaryTheme mx-auto rounded-full"
          variants={fadeInUp}
          whileHover={{ width: 100 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
        variants={staggerContainer}
      >
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            number={stat.number}
            label={stat.label}
            delay={index * 0.1}
          />
        ))}
      </motion.div>

      {/* Category Filters */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        variants={fadeInUp}
      >
        <CategoryFilter
          category="all"
          isActive={activeCategory === 'all'}
          onClick={() => {
            console.log('Clicking All Services');
            setActiveCategory('all');
          }}
          icon="🌟"
          name="All Services"
          count={getCategoryCount('all')}
        />
        {Object.entries(serviceCategories).map(([key, category]) => (
          <CategoryFilter
            key={key}
            category={key as ServiceCategory}
            isActive={activeCategory === key}
            onClick={() => {
              console.log('Clicking category:', key);
              setActiveCategory(key as ServiceCategory);
            }}
            icon={category.icon}
            name={category.name}
            count={getCategoryCount(key as ServiceCategory)}
          />
        ))}
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        className="max-w-7xl mx-auto"
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={`${activeCategory}-${service.title}`}
                variants={staggerItem}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                layout
              >
                <ServiceCard service={service} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-20"
        variants={fadeInUp}
      >
        <motion.div
          className="space-y-6"
          variants={staggerContainer}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-white"
            variants={staggerItem}
          >
            Ready to Transform Your Business?
          </motion.h3>
          
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            variants={staggerItem}
          >
            Let's discuss how our comprehensive services can drive your digital transformation and accelerate your growth.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerItem}
          >
            <motion.button
              className="magnetic-btn px-8 py-4 rounded-full text-white font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
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
            </motion.button>
            
            <motion.button
              className="glass-card px-8 py-4 rounded-full text-white font-semibold border border-white/20 hover:border-secondaryTheme/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
