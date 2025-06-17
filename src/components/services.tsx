"use client";
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GridNormal from '../../public/Grid - Normal.svg'
import { serviceData } from '@/constants/service-data'
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem, 
  cardHover,
  blurReveal 
} from '@/lib/animations'

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const isEven = index % 2 === 0;
  const isFirst = index === 0;
  
  return (
    <motion.div
      className={`
        relative modern-card p-8 overflow-hidden rounded-3xl space-y-6 group cursor-pointer
        ${isFirst ? 'row-span-2' : ''}
        ${isEven ? 'border-primaryTheme/20' : 'border-secondaryTheme/20'}
      `}
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated Background Grid */}
      <motion.div
        className="absolute right-0 bottom-6 scale-[2] opacity-20"
        whileHover={{ 
          scale: 2.2, 
          rotate: 10,
          opacity: 0.3 
        }}
        transition={{ duration: 0.3 }}
      >
        <Image 
          src={GridNormal}
          alt={"grid_bg"}
          height={200}
          width={200}
        />
      </motion.div>
      
      {/* Gradient Overlay on Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primaryTheme/10 to-secondaryTheme/10 rounded-3xl opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <motion.h3 
          className="text-2xl font-bold text-white mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {service.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-300 leading-relaxed text-base"
          whileHover={{ color: '#ffffff' }}
          transition={{ duration: 0.3 }}
        >
          {service.description}
        </motion.p>
        
        {/* Hover indicator */}
        <motion.div
          className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-primaryTheme to-secondaryTheme rounded-full opacity-0"
          whileHover={{ 
            opacity: 1, 
            scale: 1.2,
            boxShadow: "0 0 20px rgba(239, 170, 58, 0.5)"
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      {/* Interactive pulse on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-transparent"
        whileHover={{
          borderColor: index % 2 === 0 ? "#2E3389" : "#EFAA3A",
          boxShadow: `0 0 30px ${index % 2 === 0 ? "rgba(46, 51, 137, 0.3)" : "rgba(239, 170, 58, 0.3)"}`,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={containerRef}
      className='mt-24 md:my-32 lg:my-32 p-4'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* Section Header */}
      <motion.div 
        className="text-center space-y-6 mb-20"
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
          className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          We create software solutions that don't just meet expectations but exceed them - delivering impact, satisfaction, and long-term success.
        </motion.p>
        
        {/* Decorative line */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-primaryTheme to-secondaryTheme mx-auto rounded-full"
          variants={fadeInUp}
          whileHover={{ width: 100 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        className="w-full md:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
      >
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <ServiceCard service={service} index={index} />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primaryTheme/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondaryTheme/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  )
}
