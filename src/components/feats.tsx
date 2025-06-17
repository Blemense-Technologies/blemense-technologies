"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem, 
  cardHover,
  blurReveal
} from '@/lib/animations';

type StatItem = {
  value: string;
  label: string;
  description: string;
  icon: string;
  color: string;
  animatedValue?: number;
  suffix?: string;
};

type CaseStudy = {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  icon: string;
  color: string;
};

const statsData: StatItem[] = [
  {
    value: "300%",
    label: "Average ROI Increase",
    description: "Our clients see remarkable returns on their technology investments",
    icon: "📈",
    color: "from-green-500 to-emerald-500",
    animatedValue: 300,
    suffix: "%"
  },
  {
    value: "40%",
    label: "Faster Time to Market",
    description: "Accelerated development cycles with our agile methodologies",
    icon: "⚡",
    color: "from-blue-500 to-cyan-500",
    animatedValue: 40,
    suffix: "%"
  },
  {
    value: "95%",
    label: "Client Satisfaction Rate",
    description: "Consistently exceeding expectations across all projects",
    icon: "⭐",
    color: "from-yellow-500 to-orange-500",
    animatedValue: 95,
    suffix: "%"
  },
  {
    value: "24/7",
    label: "Support & Monitoring",
    description: "Round-the-clock technical support and system monitoring",
    icon: "🛡️",
    color: "from-purple-500 to-pink-500"
  }
];

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "E-commerce Platform Transformation",
    client: "RetailMax",
    industry: "E-commerce",
    challenge: "Legacy system causing 60% cart abandonment rate",
    solution: "Complete platform redesign with AI-powered recommendations",
    results: ["85% reduction in cart abandonment", "250% increase in sales", "40% faster page load times"],
    icon: "🛒",
    color: "from-primaryTheme to-blue-500"
  },
  {
    id: 2,
    title: "Healthcare Management System",
    client: "MediCare Plus",
    industry: "Healthcare",
    challenge: "Manual processes causing delays in patient care",
    solution: "Custom EHR system with automated workflows",
    results: ["70% faster patient processing", "90% reduction in errors", "50% cost savings"],
    icon: "🏥",
    color: "from-secondaryTheme to-red-500"
  },
  {
    id: 3,
    title: "Financial Analytics Dashboard",
    client: "InvestPro",
    industry: "Fintech",
    challenge: "Complex data visualization and real-time analytics needs",
    solution: "AI-powered dashboard with predictive analytics",
    results: ["Real-time data processing", "60% better decision making", "300% user engagement"],
    icon: "💹",
    color: "from-green-500 to-teal-500"
  }
];

const AnimatedStat = ({ stat, index }: { stat: StatItem, index: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !isVisible && stat.animatedValue !== undefined) {
      setIsVisible(true);
      let startTime: number;
      const duration = 2000;
      const targetValue = stat.animatedValue;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentValue = Math.floor(progress * targetValue);
        setDisplayValue(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(targetValue);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, stat.animatedValue, isVisible]);

  return (
    <motion.div
      ref={ref}
      className="relative modern-card p-8 rounded-3xl text-center group cursor-pointer overflow-hidden"
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
    >
      {/* Gradient overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${stat.color}/10 rounded-3xl opacity-0`}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10 space-y-4">
        {/* Icon */}
        <motion.div
          className="text-6xl mb-4"
          whileHover={{ 
            scale: 1.2,
            rotate: [0, -10, 10, 0]
          }}
          transition={{ duration: 0.6 }}
        >
          {stat.icon}
        </motion.div>
        
        {/* Value */}
        <motion.div
          className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {stat.animatedValue ? `${displayValue}${stat.suffix || ''}` : stat.value}
        </motion.div>
        
        {/* Label */}
        <motion.h3 
          className="text-xl font-semibold text-white mb-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {stat.label}
        </motion.h3>
        
        {/* Description */}
        <motion.p 
          className="text-gray-400 text-sm leading-relaxed"
          whileHover={{ color: '#ffffff' }}
          transition={{ duration: 0.3 }}
        >
          {stat.description}
        </motion.p>
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
    </motion.div>
  );
};

const CaseStudyCard = ({ caseStudy, index }: { caseStudy: CaseStudy, index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative modern-card p-8 rounded-3xl space-y-6 group cursor-pointer overflow-hidden"
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      onClick={() => setIsExpanded(!isExpanded)}
      layout
    >
      {/* Gradient overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color}/10 rounded-3xl opacity-0`}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div 
          className="flex items-start gap-4 mb-6"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-4xl"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            {caseStudy.icon}
          </motion.div>
          
          <div className="flex-1">
            <motion.h3 
              className="text-xl font-bold text-white mb-2"
              whileHover={{ color: '#EFAA3A' }}
              transition={{ duration: 0.2 }}
            >
              {caseStudy.title}
            </motion.h3>
            
            <div className="flex items-center gap-4 mb-2">
              <span className="text-secondaryTheme font-medium text-sm">{caseStudy.client}</span>
              <span className="px-3 py-1 bg-primaryTheme/20 text-primaryTheme text-xs font-medium rounded-full">
                {caseStudy.industry}
              </span>
            </div>
          </div>
          
          <motion.div
            className="text-gray-400"
            animate={isExpanded ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
        
        {/* Challenge */}
        <motion.div className="mb-4">
          <h4 className="text-sm font-semibold text-red-400 mb-2">Challenge:</h4>
          <p className="text-gray-300 text-sm">{caseStudy.challenge}</p>
        </motion.div>
        
        {/* Solution */}
        <motion.div className="mb-4">
          <h4 className="text-sm font-semibold text-blue-400 mb-2">Solution:</h4>
          <p className="text-gray-300 text-sm">{caseStudy.solution}</p>
        </motion.div>
        
        {/* Results - Expandable */}
        <motion.div
          initial={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <h4 className="text-sm font-semibold text-green-400 mb-3">Results:</h4>
          <div className="space-y-2">
            {caseStudy.results.map((result, resultIndex) => (
              <motion.div
                key={resultIndex}
                className="flex items-center gap-2 text-sm text-gray-300"
                initial={{ opacity: 0, x: -10 }}
                animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.2, delay: resultIndex * 0.1 }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                {result}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Click indicator */}
        <motion.div 
          className="text-center pt-4 border-t border-gray-700/50 mt-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-xs text-gray-500">
            {isExpanded ? 'Click to collapse' : 'Click to view results'}
          </span>
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
    </motion.div>
  );
};

export default function Feats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <motion.section 
      ref={containerRef}
      className="relative py-16 md:py-24 lg:py-32 p-4 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 150, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center space-y-6 mb-20"
          variants={blurReveal}
        >
          <motion.h2 
            className="text-2xl text-white md:text-4xl lg:text-5xl font-bold leading-tight"
            variants={fadeInUp}
          >
            Driving Success for{" "}
            <span className="font-bold text-gradient-modern">Our Clients</span>
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Here's how our innovative solutions have empowered businesses to boost performance, increase conversions, and scale new heights across diverse industries.
          </motion.p>
          
          {/* Decorative line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"
            variants={fadeInUp}
            whileHover={{ width: 100 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20"
          variants={staggerContainer}
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <AnimatedStat stat={stat} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Case Studies Section */}
        <motion.div 
          className="space-y-12"
          variants={staggerContainer}
        >
          <motion.div 
            className="text-center space-y-4"
            variants={fadeInUp}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-white"
              variants={fadeInUp}
            >
              Success Stories in{" "}
              <span className="text-gradient-modern">Action</span>
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Real projects, real results. Discover how we've transformed businesses across different industries.
            </motion.p>
          </motion.div>

          {/* Case Studies Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                variants={staggerItem}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <CaseStudyCard caseStudy={caseStudy} index={index} />
              </motion.div>
            ))}
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
              Ready to Achieve Similar Results?
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 max-w-2xl mx-auto"
              variants={staggerItem}
            >
              Let's discuss how we can help you overcome challenges and achieve remarkable growth with our proven solutions.
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
                Start Your Success Story
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
                View All Case Studies
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
