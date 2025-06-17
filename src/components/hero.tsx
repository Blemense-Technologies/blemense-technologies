"use client"
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useScroll, useTransform, useInView, useMotionValue, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Box, Torus, Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'
import Typed from "typed.js"
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

// 3D Floating Objects Component
function FloatingObjects() {
  const meshRef = useRef<THREE.Group>(null!)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.5
    }
  })

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 32, 32]} position={[-3, 0, 0]}>
          <MeshDistortMaterial
            color="#8B5CF6"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <Box args={[1.5, 1.5, 1.5]} position={[3, 1, 0]}>
          <MeshWobbleMaterial
            color="#F59E0B"
            attach="material"
            factor={0.6}
            speed={1.5}
            roughness={0.1}
            metalness={0.8}
          />
        </Box>
      </Float>
      
      <Float speed={3} rotationIntensity={0.5} floatIntensity={3}>
        <Torus args={[1, 0.3, 16, 100]} position={[0, -2, 1]}>
          <MeshDistortMaterial
            color="#EC4899"
            attach="material"
            distort={0.4}
            speed={3}
            roughness={0.1}
            metalness={0.9}
          />
        </Torus>
      </Float>
    </group>
  )
}

// Interactive Particle System
function InteractiveParticles({ count = 100 }) {
  const mesh = useRef<THREE.InstancedMesh>(null!)
  const [hovered, setHovered] = useState(false)
  
  const particles = React.useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ],
        scale: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 0.02 + 0.01
      })
    }
    return temp
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      particles.forEach((particle, i) => {
        const t = state.clock.elapsedTime * particle.speed
        const matrix = new THREE.Matrix4()
        matrix.setPosition(
          particle.position[0] + Math.sin(t) * 2,
          particle.position[1] + Math.cos(t) * 2,
          particle.position[2] + Math.sin(t * 0.5) * 2
        )
        matrix.scale(new THREE.Vector3(particle.scale, particle.scale, particle.scale))
        mesh.current.setMatrixAt(i, matrix)
      })
      mesh.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshStandardMaterial color="#8B5CF6" emissive="#4C1D95" emissiveIntensity={0.5} />
    </instancedMesh>
  )
}

// 3D Background Scene
function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#F59E0B" />
      <FloatingObjects />
      <InteractiveParticles />
    </>
  )
}

// Magnetic Button Component
function MagneticButton({ children, href, ...props }: { children: React.ReactNode, href?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) * 0.1)
    mouseY.set((e.clientY - centerY) * 0.1)
  }, [mouseX, mouseY])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={ref}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <motion.div
        className="relative z-10 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-full text-white font-semibold cursor-pointer overflow-hidden group"
        animate={isHovered ? { 
          boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
          background: "linear-gradient(45deg, #8B5CF6, #EC4899, #F59E0B, #8B5CF6)"
        } : {}}
        transition={{ duration: 0.3 }}
      >
        {/* Ripple Effect */}
        <motion.div
          className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20"
          initial={{ scale: 0 }}
          whileHover={{ scale: 2, opacity: [0, 0.2, 0] }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />
        </div>
        
        <span className="relative z-10">{children}</span>
      </motion.div>
    </motion.div>
  )
}

// Enhanced Floating UI Cards
function FloatingCard({ children, delay = 0, position }: { children: React.ReactNode, delay?: number, position: string }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      className={`absolute ${position} glass-card backdrop-blur-2xl bg-white/8 border border-white/15 rounded-3xl p-6 shadow-2xl`}
      initial={{ opacity: 0, y: 60, rotateX: -20, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        scale: 1,
        rotateY: isHovered ? 8 : 0,
        z: isHovered ? 60 : 0
      }}
      transition={{ 
        duration: 1, 
        delay,
        type: "spring",
        stiffness: 80,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.08,
        boxShadow: "0 30px 60px rgba(0,0,0,0.4), 0 0 40px rgba(139, 92, 246, 0.1)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        transformStyle: "preserve-3d",
        perspective: "1200px"
      }}
    >
      {/* Card glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

// Stats Counter Component
function StatsCounter({ value, label, delay = 0 }: { value: string, label: string, delay?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  useEffect(() => {
    if (isInView) {
      const target = parseInt(value.replace(/\D/g, ''))
      const duration = 2000
      const increment = target / (duration / 16)
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 16)
      
      return () => clearInterval(timer)
    }
  }, [isInView, value])
  
  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        {count}{value.includes('+') ? '+' : ''}
      </div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </motion.div>
  )
}

export default function Hero() {
  const heroTitle = useRef(null);
  const heroRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    setIsLoaded(true)
    const titleOptions = {
      strings: [
        'We Build NextGen <span class="text-gradient">Tech Solutions</span>',
        'Transforming <span class="text-gradient">Ideas</span> into Reality',
        'Innovation Meets <span class="text-gradient">Excellence</span>',
        'Crafting <span class="text-gradient">Digital Experiences</span>',
        'Building the <span class="text-gradient">Future</span> Today'
      ],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 3000,
      startDelay: 1000,
      loop: true,
      showCursor: false,
      contentType: 'html'
    }
    const typed = new Typed(heroTitle.current, titleOptions);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <motion.div 
      ref={heroRef}
      className='relative min-h-screen w-full overflow-hidden'
      style={{ y, opacity, scale }}
    >
      {/* Enhanced Background System */}
      
      {/* Base Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 z-0" />
      
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-[1]">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <Scene3D />
        </Canvas>
      </div>

      {/* Sophisticated Gradient Overlays */}
      <div className="absolute inset-0 z-[2]">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primaryTheme/10 to-black/80" />
        
        {/* Secondary accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-secondaryTheme/5 to-transparent" />
        
        {/* Radial spotlight effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60" 
             style={{
               background: `radial-gradient(circle at 50% 40%, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.8) 100%)`
             }} />
      </div>

      {/* Enhanced Animated Grid Background */}
      <div className="absolute inset-0 z-[3] opacity-15">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px),
              linear-gradient(rgba(239, 170, 58, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 170, 58, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 60px 60px, 120px 120px, 120px 120px',
            backgroundPosition: '0 0, 0 0, 30px 30px, 30px 30px',
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        
        {/* Moving dots pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 2px, transparent 2px)`,
            backgroundSize: '80px 80px',
            transform: `translate(${mousePosition.x * -8}px, ${mousePosition.y * -8}px)`,
            transition: 'transform 0.4s ease-out'
          }}
        />
      </div>

      {/* Atmospheric Noise Texture */}
      <div className="absolute inset-0 z-[4] opacity-[0.02] mix-blend-overlay">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px'
          }}
        />
      </div>

      {/* Main Content Container with Enhanced Spacing */}
      <motion.div 
        ref={containerRef}
        className='relative z-20 flex flex-col items-center justify-center min-h-screen'
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Content Wrapper with Better Spacing */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32">
          
          {/* Hero Title Section */}
          <motion.div 
            className='text-center mb-16 sm:mb-20 lg:mb-24'
            variants={staggerItem}
          >
            <motion.div
              className="relative mb-8 sm:mb-12"
              variants={blurReveal}
            >
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight'>
                <span ref={heroTitle} className="inline-block"></span>
                <motion.span
                  className="inline-block ml-2 text-purple-400"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </h1>
              
              {/* Enhanced Animated Underline */}
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full shadow-lg shadow-purple-500/30"
                initial={{ width: 0 }}
                animate={isInView ? { width: "min(60%, 400px)" } : { width: 0 }}
                transition={{ duration: 1.5, delay: 2 }}
              />
            </motion.div>
            
            <motion.p 
              className='text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 font-light max-w-5xl mx-auto leading-relaxed'
              variants={fadeInUp}
            >
              Empowering businesses with cutting-edge software solutions that drive innovation, 
              enhance efficiency, and unlock unprecedented growth potential in the digital era.
            </motion.p>
          </motion.div>

          {/* CTA Buttons with Enhanced Spacing */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mb-20 sm:mb-24 lg:mb-28"
            variants={staggerItem}
          >
            <MagneticButton>
              🚀 Start Your Project
            </MagneticButton>
            <MagneticButton>
              📅 Book Consultation
            </MagneticButton>
          </motion.div>

          {/* Stats Section with Better Layout */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 max-w-4xl mx-auto"
            variants={staggerItem}
          >
            <StatsCounter value="50+" label="Projects Delivered" delay={0.2} />
            <StatsCounter value="30+" label="Happy Clients" delay={0.4} />
            <StatsCounter value="3+" label="Countries Served" delay={0.6} />
            <StatsCounter value="96%" label="Client Satisfaction" delay={0.8} />
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Floating UI Cards with Better Positioning */}
      <AnimatePresence>
        {isLoaded && (
          <>
            <FloatingCard position="top-24 left-8 xl:left-20 hidden lg:block" delay={1}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">💻</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Web Development</h3>
                  <p className="text-gray-400 text-sm">Modern & Responsive</p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard position="top-24 right-8 xl:right-20 hidden lg:block" delay={1.2}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Mobile Apps</h3>
                  <p className="text-gray-400 text-sm">iOS & Android</p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard position="bottom-32 left-8 xl:left-20 hidden lg:block" delay={1.4}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">☁️</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Cloud Solutions</h3>
                  <p className="text-gray-400 text-sm">Scalable & Secure</p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard position="bottom-32 right-8 xl:right-20 hidden lg:block" delay={1.6}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">AI Integration</h3>
                  <p className="text-gray-400 text-sm">Smart Automation</p>
                </div>
              </div>
            </FloatingCard>
          </>
        )}
      </AnimatePresence>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <motion.div
          className="w-7 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5"
          whileHover={{ scale: 1.1, borderColor: 'rgba(255,255,255,0.6)' }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="w-1.5 h-4 bg-gradient-to-b from-white to-purple-400 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <p className="text-white/70 text-sm mt-3 font-medium">Scroll to explore</p>
      </motion.div>

      {/* Enhanced Floating Particles System */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: `linear-gradient(135deg, ${
                Math.random() > 0.5 
                  ? 'rgba(139, 92, 246, 0.8)' 
                  : 'rgba(239, 170, 58, 0.8)'
              }, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(0.5px)',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute inset-0 pointer-events-none z-[6]">
        {/* Top light beam */}
        <div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 opacity-10"
          style={{
            background: `radial-gradient(ellipse at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
        />
        
        {/* Bottom ambient glow */}
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-64 opacity-5"
          style={{
            background: `linear-gradient(to top, rgba(239, 170, 58, 0.2) 0%, transparent 100%)`,
            filter: 'blur(60px)',
          }}
        />
      </div>
    </motion.div>
  )
}
