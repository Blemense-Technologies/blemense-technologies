"use client"
import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Typed from "typed.js"
import CodeSnippet from './code-snippet'
import Image from 'next/image';
import GridPrimary from '../../public/Grid - 1.svg'
import GridSecondary from '../../public/Grid - 2.svg'
import GradientIcon from './gradientIcon';
import { SecondaryShadow } from '@/constants/shadows';
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer, 
  staggerItem, 
  floatingAnimation,
  blurReveal,
  slideInFromTop
} from '@/lib/animations';

const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"} {...props}>
    <path d="M7.99994 12H8.00891M11.9955 12H12.0044M15.991 12H15.9999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 21C19.2322 21 20.231 19.8487 20.231 18.4286C20.231 16.1808 20.1312 14.6864 21.6733 12.9091C22.1089 12.407 22.1089 11.5929 21.6733 11.0908C20.1312 9.31353 20.231 7.81914 20.231 5.57141C20.231 4.15125 19.2322 2.99998 18 2.99998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 21C4.76784 21 3.76897 19.8487 3.76897 18.4286C3.76897 16.1808 3.86877 14.6864 2.32673 12.9091C1.89109 12.407 1.89109 11.5929 2.32673 11.0908C3.83496 9.35249 3.76897 7.8399 3.76897 5.57141C3.76897 4.15125 4.76784 2.99998 6 2.99998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloudIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"} {...props}>
    <path d="M17.4776 10.0001C17.485 10 17.4925 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227M17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227M17.4776 10.0001C17.3753 11.1345 16.9286 12.1696 16.2428 13M6.52042 9.0227C6.67826 9.00768 6.83823 9 7 9C8.12582 9 9.16474 9.37209 10.0005 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WebDesign02Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"} {...props}>
    <path d="M20 10.128C20 6.29644 20 4.38064 18.8284 3.19032C17.6569 2 15.7712 2 12 2H10C6.22876 2 4.34315 2 3.17157 3.19032C2 4.38064 2 6.29644 2 10.128C2 13.9596 2 15.8754 3.17157 17.0657C3.64118 17.5428 4.2255 17.8287 5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M22 17.5C22 15.6251 22 14.6877 21.5225 14.0305C21.3683 13.8183 21.1817 13.6317 20.9695 13.4775C20.3123 13 19.3749 13 17.5 13H12.5C10.6251 13 9.6877 13 9.03054 13.4775C8.8183 13.6317 8.63166 13.8183 8.47746 14.0305C8 14.6877 8 15.6251 8 17.5C8 19.3749 8 20.3123 8.47746 20.9695C8.63166 21.1817 8.8183 21.3683 9.03054 21.5225C9.6877 22 10.6251 22 12.5 22H17.5C19.3749 22 20.3123 22 20.9695 21.5225C21.1817 21.3683 21.3683 21.1817 21.5225 20.9695C22 20.3123 22 19.3749 22 17.5Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16.5 16L17.4199 16.7929C17.8066 17.1262 18 17.2929 18 17.5C18 17.7071 17.8066 17.8738 17.4199 18.2071L16.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.5 16L12.5801 16.7929C12.1934 17.1262 12 17.2929 12 17.5C12 17.7071 12.1934 17.8738 12.5801 18.2071L13.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.5 6H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FavouriteSquareIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"} {...props}>
    <path d="M7.76872 7.99708C9.10954 7.17461 10.2798 7.50606 10.9828 8.03401C11.2711 8.25048 11.4152 8.35871 11.5 8.35871C11.5848 8.35871 11.7289 8.25048 12.0172 8.03401C12.7202 7.50606 13.8905 7.17461 15.2313 7.99708C16.991 9.07647 17.3891 12.6374 13.3302 15.6417C12.5571 16.2139 12.1706 16.5 11.5 16.5C10.8294 16.5 10.4429 16.2139 9.66976 15.6417C5.61086 12.6374 6.00903 9.07647 7.76872 7.99708Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M2 12C2 7.52166 2 5.28249 3.39124 3.89124C4.78249 2.5 7.02166 2.5 11.5 2.5C15.9783 2.5 18.2175 2.5 19.6088 3.89124C21 5.28249 21 7.52166 21 12C21 16.4783 21 18.7175 19.6088 20.1088C18.2175 21.5 15.9783 21.5 11.5 21.5C7.02166 21.5 4.78249 21.5 3.39124 20.1088C2 18.7175 2 16.4783 2 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

// Particle Component for Background Animation
const Particle = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute h-1 w-1 bg-gradient-to-r from-primaryTheme to-secondaryTheme rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: [0, Math.random() * 100 - 50],
        y: [0, Math.random() * 100 - 50],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
      }}
    />
  );
};

export default function Hero() {
  const heroTitle = useRef(null);
  const heroRef = useRef(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const titleOptions = {
      strings: ['We build NextGen Tech Solutions', 'Transforming Ideas into Reality', 'Innovation Meets Excellence'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      startDelay: 1000,
      loop: true,
      showCursor: false,
    }
    const typed = new Typed(heroTitle.current, titleOptions);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <motion.div 
      ref={heroRef}
      className='relative h-screen w-full overflow-hidden my-6 lg:my-14'
      style={{ y, opacity }}
    >
      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <Particle key={i} delay={i * 0.1} />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        ref={containerRef}
        className='w-full lg:w-fit absolute top-[16rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className='w-fit lg:w-2/3 text-center mx-auto'
          variants={staggerItem}
        >
          <div className='px-14 md:px-0 lg:px-0'>
            <motion.div
              className="relative"
              variants={blurReveal}
            >
              <span className='animated-gradient-text text-3xl md:text-4xl lg:text-5xl font-bold' ref={heroTitle}></span>
              <motion.span
                className="inline-block ml-1 h-full align-baseline text-secondaryTheme leading-none text-3xl md:text-4xl lg:text-5xl"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.div>
          </div>
          
          <motion.p 
            className='text-sm px-12 lg:text-base text-white font-light mt-8 leading-relaxed'
            variants={fadeInUp}
          >
            Our cutting-edge software solutions are designed to streamline your operations, enhance efficiency, and drive innovation. Partner with us to unlock your full potential and achieve lasting success and elevate your business.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Code Snippets with Enhanced Animations */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className={`absolute z-[10] scale-95 md:scale-100 lg:scale-100 bottom-0 left-1/2 -translate-x-1/2 md:-translate-x-0 lg:-translate-x-0 2xl:-translate-x-0 w-fit mx-auto lg:mx-0 lg:bottom-64 lg:left-12 md:left-16 2xl:bottom-64 2xl:left-36 ${SecondaryShadow} glass-card`}>
          <CodeSnippet classes="" />
        </div>
        
        <motion.div
          className="absolute scale-[2] lg:scale-[1] -right-48 bottom-0 md:-left-36 lg:-left-36 md:bottom-36 lg:bottom-36 -z-[10] h-fit w-fit"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src={GridPrimary}
            height={500}
            width={500}
            alt='grid_primary'
          />
        </motion.div>
      </motion.div>

      {/* Hidden for Mobile view - Enhanced */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className='hidden lg:block absolute z-[10] bottom-96 lg:right-12 2xl:right-36 md:right-16 glass-card'>
          <CodeSnippet classes="" />
        </div>
        
        <motion.div
          className='absolute md:hidden lg:hidden scale-[2] lg:scale-[1] -left-48 bottom-96 lg:-right-36 md:-right-36 md:bottom-64 lg:bottom-64 -z-[10] h-fit w-fit'
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src={GridSecondary}
            height={500}
            width={500}
            alt='grid_secondary'
          />
        </motion.div>
        
        <motion.div
          className='hidden md:block lg:block absolute scale-[2] lg:scale-[1] bottom-96 lg:-right-36 md:-right-36 md:bottom-64 lg:bottom-64 -z-[10] h-fit w-fit'
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src={GridSecondary}
            height={500}
            width={500}
            alt='grid_secondary'
          />
        </motion.div>
      </motion.div>

      {/* Floating Icons with Enhanced Animations */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Web View only */}
        <div className='hidden 2xl:block md:block lg:block'>
          <motion.div 
            className='absolute transform -rotate-45 scale-[0.85] lg:scale-[1] lg:top-[6rem] lg:left-[8rem] 2xl:top-[12rem] 2xl:left-[16rem]'
            variants={floatingAnimation}
            animate="animate"
            whileHover={{ scale: 1.2, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pulse-glow">
              <GradientIcon icon={<CloudIcon />} />
            </div>
          </motion.div>
          
          <motion.div 
            className='absolute transform -rotate-45 lg:top-[1px] lg:right-1/2 2xl:top-[1rem] 2xl:right-1/2'
            variants={floatingAnimation}
            animate="animate"
            whileHover={{ scale: 1.2, rotate: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <div className="pulse-glow">
              <GradientIcon icon={<CodeIcon />} />
            </div>
          </motion.div>
          
          <motion.div 
            className='absolute transform rotate-45 lg:bottom-[16rem] lg:right-1/2 2xl:bottom-[16rem] 2xl:right-[48rem]'
            variants={floatingAnimation}
            animate="animate"
            whileHover={{ scale: 1.2, rotate: 0 }}
            transition={{ duration: 0.3, delay: 1 }}
          >
            <div className="pulse-glow">
              <GradientIcon icon={<WebDesign02Icon />} />
            </div>
          </motion.div>
          
          <motion.div 
            className='absolute transform rotate-45 lg:top-[2rem] lg:right-[12rem] 2xl:top-[8rem] 2xl:right-[24rem]'
            variants={floatingAnimation}
            animate="animate"
            whileHover={{ scale: 1.2, rotate: 0 }}
            transition={{ duration: 0.3, delay: 1.5 }}
          >
            <div className="pulse-glow">
              <GradientIcon icon={<FavouriteSquareIcon />} />
            </div>
          </motion.div>
        </div>

        {/* Mobile View only */}
        <div className='block md:hidden lg:hidden 2xl:hidden'>
          <motion.div 
            className='absolute transform -rotate-45 scale-[0.85] top-[4rem] left-[3rem]'
            variants={floatingAnimation}
            animate="animate"
            whileHover={{ scale: 1.2, rotate: 0 }}
          >
            <div className="pulse-glow">
              <GradientIcon icon={<CloudIcon />} />
            </div>
          </motion.div>
          
          <motion.div 
            className='absolute transform -rotate-45 left-[2rem] bottom-[12rem]'
            variants={floatingAnimation}
            animate="animate"
            whileHover={{ scale: 1.2, rotate: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="pulse-glow">
              <GradientIcon icon={<CodeIcon />} />
            </div>
          </motion.div>
          
          <motion.div 
            className='absolute transform rotate-45 top-[1rem] right-[4rem]'
            variants={floatingAnimation}
            animate="animate"
            whileHover={{ scale: 1.2, rotate: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="pulse-glow">
              <GradientIcon icon={<WebDesign02Icon />} />
            </div>
          </motion.div>
          
          <motion.div 
            className='absolute transform rotate-45 right-[3rem] bottom-[16rem]'
            variants={floatingAnimation}
            animate="animate"
            whileHover={{ scale: 1.2, rotate: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="pulse-glow">
              <GradientIcon icon={<FavouriteSquareIcon />} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
