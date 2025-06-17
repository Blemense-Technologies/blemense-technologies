'use client'

import { socialHandles } from '@/constants/socials'
import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function SocialMedia() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <section className="relative md:mt-28 lg:mt-28 p-8 text-white w-full max-w-4xl mx-auto text-center space-y-8 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                {/* Heading Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                >
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                        <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                            Connect
                        </span>{" "}
                        <span className="relative">
                            with us
                            <motion.div
                                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "100%" } : { width: 0 }}
                                transition={{ duration: 1, delay: 0.8 }}
                            />
                        </span>
                    </h2>
                    <motion.p 
                        className="text-gray-300 text-base lg:text-lg md:text-lg max-w-2xl mx-auto leading-relaxed"
                        initial={{ y: 30, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Join our vibrant community to engage with our team, participate in discussions, and get exclusive content about cutting-edge technology and innovation.
                    </motion.p>
                </motion.div>

                {/* Social Media Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
                    initial={{ y: 50, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {socialHandles.map((social, index) => (
                        <SocialCard key={index} social={social} index={index} />
                    ))}
                </motion.div>

                {/* Email Section */}
                <motion.div 
                    className="relative pt-8 mt-12"
                    initial={{ y: 50, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {/* Separator */}
                    <div className="relative mb-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-black px-6 text-gray-400 text-sm font-medium">OR</span>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-500 group">
                        <motion.p 
                            className="text-gray-300 text-lg font-medium mb-4"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            💌 Drop us a line
                        </motion.p>
                        <motion.a 
                            href="mailto:hello@blemense.tech" 
                            className="relative inline-block text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent hover:from-pink-400 hover:via-purple-400 hover:to-cyan-400 transition-all duration-500"
                            whileHover={{ 
                                scale: 1.05,
                                textShadow: "0 0 20px rgba(168, 85, 247, 0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            hello@blemense.tech
                            <motion.div
                                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                        
                        {/* Floating particles around email */}
                        <div className="absolute inset-0 pointer-events-none">
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100"
                                    style={{
                                        left: `${20 + i * 15}%`,
                                        top: `${30 + (i % 2) * 40}%`,
                                    }}
                                    animate={{
                                        y: [0, -10, 0],
                                        x: [0, 5, 0],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="pt-6"
                >
                    <p className="text-gray-400 text-sm">
                        🚀 Ready to build something amazing together?
                    </p>
                </motion.div>
            </section>
        </motion.div>
    )
}

// Social Card Component with Magnetic Effect
function SocialCard({ social, index }: { social: any, index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    
    const rotateX = useSpring(useTransform(mouseY, [-100, 100], [10, -10]))
    const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-10, 10]))

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        mouseX.set(e.clientX - centerX)
        mouseY.set(e.clientY - centerY)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
    }

    // Platform-specific gradients and colors
    const getPlatformStyles = (label: string) => {
        switch (label.toLowerCase()) {
            case 'instagram':
                return {
                    gradient: 'from-pink-500 via-purple-500 to-orange-500',
                    glow: 'shadow-pink-500/25'
                }
            case 'linkedin':
                return {
                    gradient: 'from-blue-600 to-blue-400',
                    glow: 'shadow-blue-500/25'
                }
            case 'facebook':
                return {
                    gradient: 'from-blue-500 to-blue-600',
                    glow: 'shadow-blue-500/25'
                }
            case 'x / twitter':
                return {
                    gradient: 'from-gray-800 to-gray-600',
                    glow: 'shadow-gray-500/25'
                }
            default:
                return {
                    gradient: 'from-purple-500 to-pink-500',
                    glow: 'shadow-purple-500/25'
                }
        }
    }

    const styles = getPlatformStyles(social.label)

    return (
        <motion.div
            ref={cardRef}
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    relative block glass-card p-6 rounded-2xl border border-white/10 backdrop-blur-lg bg-white/5
                    hover:bg-white/10 transition-all duration-500 overflow-hidden
                    hover:shadow-2xl ${styles.glow}
                `}
                whileHover={{ 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
            >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer" />
                </div>

                <div className="relative z-10 flex items-center justify-center space-x-4">
                    {/* Icon with 3D effect */}
                    <motion.div
                        className="relative"
                        style={{ transformStyle: "preserve-3d" }}
                        animate={isHovered ? { z: 20 } : { z: 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <social.icon className="text-white text-2xl group-hover:text-white/90 transition-colors duration-300" />
                    </motion.div>

                    {/* Label */}
                    <motion.div 
                        className="text-center"
                        style={{ transformStyle: "preserve-3d" }}
                        animate={isHovered ? { z: 10 } : { z: 0 }}
                    >
                        <span className="text-white font-semibold text-lg group-hover:text-white/90 transition-colors duration-300">
                            {social.label}
                        </span>
                        <motion.div
                            className={`h-0.5 bg-gradient-to-r ${styles.gradient} rounded-full mt-1`}
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute w-1 h-1 bg-gradient-to-r ${styles.gradient} rounded-full opacity-0 group-hover:opacity-100`}
                            style={{
                                left: `${20 + i * 20}%`,
                                top: `${20 + (i % 2) * 60}%`,
                            }}
                            animate={{
                                y: [0, -15, 0],
                                x: [0, 10, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.4,
                            }}
                        />
                    ))}
                </div>

                {/* Glow effect */}
                <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                    animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.a>
        </motion.div>
    )
}
