"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem, 
  cardHover,
  blurReveal
} from '@/lib/animations';


type Avatar = {
    id: number;
    src: string;
    alt: string;
};

type Testimonial = {
    id: number;
    quote: string;
    author: string;
    designation: string;
    company: string;
    rating: number;
    avatar: string;
    industry: string;
    projectType: string;
};

type TestimonialsSectionProps = {
    averageRating: number;
    totalReviews: number;
    avatars: Avatar[];
    additionalCount: number;
    testimonials: Testimonial[];
    stats: {
        projectsCompleted: number;
        clientRetention: number;
        averageProjectDuration: string;
        industriesServed: number;
    };
};

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
                <motion.svg
                    key={index}
                    className={`w-5 h-5 ${index < rating ? 'text-secondaryTheme' : 'text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
            ))}
        </div>
    );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial, index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative modern-card p-8 rounded-3xl space-y-6 group cursor-pointer overflow-hidden h-full"
            variants={cardHover}
            initial="rest"
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            layout
        >
            {/* Gradient overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primaryTheme/5 to-secondaryTheme/5 rounded-3xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />
            
            {/* Content */}
            <div className="relative z-10">
                {/* Header with avatar and rating */}
                <motion.div 
                    className="flex items-start gap-4 mb-6"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-primaryTheme to-secondaryTheme rounded-full flex items-center justify-center text-white font-bold text-xl ring-2 ring-secondaryTheme/30">
                            {testimonial.author.split(' ').map(name => name[0]).join('').toUpperCase()}
                        </div>
                        <motion.div
                            className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        />
                    </motion.div>
                    
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                            <motion.h4 
                                className="text-lg font-semibold text-white"
                                whileHover={{ color: '#EFAA3A' }}
                                transition={{ duration: 0.2 }}
                            >
                                {testimonial.author}
                            </motion.h4>
                            <StarRating rating={testimonial.rating} />
                        </div>
                        
                        <p className="text-sm text-gray-400">{testimonial.designation}</p>
                        <p className="text-xs text-secondaryTheme font-medium">{testimonial.company}</p>
                    </div>
                </motion.div>
                
                {/* Quote */}
                <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="absolute -top-2 -left-2 text-6xl text-secondaryTheme/20 font-serif"
                        animate={isHovered ? { 
                            scale: 1.2, 
                            rotate: -10,
                            opacity: 0.3 
                        } : { scale: 1, rotate: 0, opacity: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        "
                    </motion.div>
                    
                    <motion.p 
                        className="text-gray-300 leading-relaxed text-base relative z-10 pl-6"
                        whileHover={{ color: '#ffffff' }}
                        transition={{ duration: 0.3 }}
                    >
                        {testimonial.quote}
                    </motion.p>
                </motion.div>
                
                {/* Project details */}
                <motion.div 
                    className="flex items-center gap-4 pt-4 border-t border-gray-700/50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <span className="px-3 py-1 bg-primaryTheme/20 text-primaryTheme text-xs font-medium rounded-full">
                        {testimonial.industry}
                    </span>
                    <span className="px-3 py-1 bg-secondaryTheme/20 text-secondaryTheme text-xs font-medium rounded-full">
                        {testimonial.projectType}
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

const StatCard = ({ number, label, suffix = "", delay = 0 }: { number: number | string, label: string, suffix?: string, delay?: number }) => {
    const [displayValue, setDisplayValue] = useState<number | string>(typeof number === 'number' ? 0 : number);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView && typeof number === 'number') {
            let startTime: number;
            const duration = 2000;
            
            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                const currentValue = Math.floor(progress * number);
                setDisplayValue(currentValue);
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setDisplayValue(number);
                }
            };
            
            requestAnimationFrame(animate);
        } else if (isInView && typeof number === 'string') {
            setDisplayValue(number);
        }
    }, [isInView, number]);

    return (
        <motion.div
            ref={ref}
            className="text-center glass-card p-6 rounded-2xl"
            variants={staggerItem}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3, delay }}
        >
            <motion.div
                className="text-3xl md:text-4xl font-bold text-gradient-modern mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay }}
            >
                {displayValue}{suffix}
            </motion.div>
            <p className="text-gray-300 text-sm font-medium">{label}</p>
        </motion.div>
    );
};

export default function Testimonials({ averageRating, totalReviews, avatars, additionalCount, testimonials, stats }: TestimonialsSectionProps) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const [activeSlide, setActiveSlide] = useState(0);

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
                    className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondaryTheme/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div 
                    className="text-center space-y-6 mb-16"
                    variants={blurReveal}
                >
                    <motion.h2 
                        className="text-2xl text-white md:text-4xl lg:text-5xl font-bold leading-tight"
                        variants={fadeInUp}
                    >
                        What Our{" "}
                        <span className="font-bold text-gradient-modern">Clients Say</span>
                    </motion.h2>
                    
                    <motion.p 
                        className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                        variants={fadeInUp}
                    >
                        Don't just take our word for it. Here's what industry leaders and growing businesses say about working with Blemense Technologies.
                    </motion.p>
                </motion.div>

                {/* Stats and Rating Section */}
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
                    variants={staggerContainer}
                >
                    <StatCard
                        number={averageRating}
                        label="Average Rating"
                        suffix="/5"
                        delay={0}
                    />
                    <StatCard
                        number={stats.projectsCompleted}
                        label="Projects Completed"
                        suffix="+"
                        delay={0.1}
                    />
                    <StatCard
                        number={stats.clientRetention}
                        label="Client Retention"
                        suffix="%"
                        delay={0.2}
                    />
                    <StatCard
                        number={stats.industriesServed}
                        label="Industries Served"
                        suffix="+"
                        delay={0.3}
                    />
                </motion.div>

                {/* Client Avatars */}
                <motion.div 
                    className="flex items-center justify-center gap-4 mb-16"
                    variants={fadeInUp}
                >
                    <div className="flex items-center -space-x-3">
                        {avatars.map((avatar, index) => (
                            <motion.div
                                key={avatar.id}
                                className="relative"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1, zIndex: 10 }}
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white font-semibold text-sm ring-2 ring-gray-800 hover:ring-secondaryTheme transition-all duration-300">
                                    {avatar.alt.split(' ').map(name => name[0]).join('').toUpperCase()}
                                </div>
                            </motion.div>
                        ))}
                        <motion.div 
                            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primaryTheme to-secondaryTheme rounded-full text-white text-sm font-bold"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            +{additionalCount}
                        </motion.div>
                    </div>
                    <motion.p 
                        className="text-gray-400 text-sm ml-4"
                        variants={fadeInUp}
                    >
                        Join {totalReviews}+ satisfied clients
                    </motion.p>
                </motion.div>

                {/* Desktop Testimonials Grid */}
                <motion.div 
                    className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
                    variants={staggerContainer}
                >
                    {testimonials.slice(0, 6).map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            variants={staggerItem}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                        >
                            <TestimonialCard testimonial={testimonial} index={index} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile/Tablet Swiper */}
                <motion.div 
                    className="block lg:hidden mb-16"
                    variants={fadeInUp}
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        spaceBetween={20}
                        slidesPerView={1}
                        centeredSlides={true}
                        autoplay={{ 
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                        className="testimonials-swiper"
                        breakpoints={{
                            640: {
                                slidesPerView: 1.2,
                            },
                            768: {
                                slidesPerView: 1.5,
                            },
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={testimonial.id}>
                                <TestimonialCard testimonial={testimonial} index={index} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* Call to Action */}
                <motion.div 
                    className="text-center"
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
                            Ready to Join Our Success Stories?
                        </motion.h3>
                        
                        <motion.p 
                            className="text-gray-300 max-w-2xl mx-auto"
                            variants={staggerItem}
                        >
                            Let's create something amazing together. Start your journey with Blemense Technologies today.
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
                                Start Your Project
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
                                View All Reviews
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Custom Swiper Styles */}
            <style jsx global>{`
                .testimonials-swiper .swiper-pagination-bullet {
                    background: rgba(239, 170, 58, 0.3);
                    opacity: 1;
                }
                
                .testimonials-swiper .swiper-pagination-bullet-active {
                    background: #EFAA3A;
                    transform: scale(1.2);
                }
                
                .testimonials-swiper .swiper-button-next,
                .testimonials-swiper .swiper-button-prev {
                    color: #EFAA3A;
                    opacity: 0.7;
                    transition: opacity 0.3s;
                }
                
                .testimonials-swiper .swiper-button-next:hover,
                .testimonials-swiper .swiper-button-prev:hover {
                    opacity: 1;
                }
                
                .testimonials-swiper .swiper-slide {
                    height: auto;
                }
            `}</style>
        </motion.section>
    );
};
