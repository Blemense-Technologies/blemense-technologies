"use client";
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { magneticButton } from '@/lib/animations';

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function GradientButton({ 
  text, 
  onClick, 
  className = "",
  disabled = false 
}: GradientButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  
  // Magnetic effect values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { damping: 20, stiffness: 300 });
  const springY = useSpring(y, { damping: 20, stiffness: 300 });
  
  const rotateX = useTransform(springY, [-50, 50], [5, -5]);
  const rotateY = useTransform(springX, [-50, 50], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current || disabled) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) * 0.1);
    y.set((e.clientY - centerY) * 0.1);
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      className={`
        relative group px-8 py-3 rounded-full font-medium text-white text-sm
        bg-gradient-to-r from-primaryTheme via-purple-500 to-secondaryTheme
        overflow-hidden transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-secondaryTheme/50 focus:ring-offset-2 focus:ring-offset-transparent
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
      }}
      variants={magneticButton}
      initial="rest"
      whileHover={disabled ? "rest" : "hover"}
      whileTap={disabled ? "rest" : "tap"}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-secondaryTheme via-purple-500 to-primaryTheme opacity-0"
        whileHover={disabled ? {} : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        whileHover={disabled ? {} : { translateX: "200%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-lg bg-gradient-to-r from-primaryTheme to-secondaryTheme opacity-0"
        whileHover={disabled ? {} : { 
          opacity: 0.3, 
          scale: 1.1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Text content */}
      <motion.span 
        className="relative z-10 flex items-center justify-center gap-2"
        whileHover={disabled ? {} : { scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {text}
        
        {/* Arrow icon that appears on hover */}
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="opacity-0"
          whileHover={disabled ? {} : { opacity: 1, x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <path
            d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
            fill="currentColor"
          />
        </motion.svg>
      </motion.span>
      
      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={disabled ? {} : { 
          scale: 2, 
          opacity: [0, 0.3, 0],
        }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent"
        whileHover={disabled ? {} : {
          borderColor: "rgba(239, 170, 58, 0.5)",
          boxShadow: "0 0 20px rgba(239, 170, 58, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
