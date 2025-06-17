'use client'

import Image from "next/image";
import Link from "next/link";
import { Label } from "./ui/label";
import Logo from "../../public/Logo.png";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const footerData = {
    company: {
        name: "BLEMENSE TECHNOLOGIES",
        tagline: "Empowering businesses through innovative software solutions. From concept to deployment, we build the future, one line of code at a time.",
        address: {
            country: "India",
            location: "4th Floor, Ganga Residency, Shahu Nagar, Manewada, Nagpur, Maharashtra",
        },
        email: "hello@blemense.tech",
        phone: "+91 9730031956",
        founded: "2023",
        stats: {
            projects: "50+",
            clients: "30+",
            countries: "3+",
            satisfaction: "96%"
        }
    },
    links: [
        {
            title: "Quick links",
            icon: "🚀",
            items: [
                { name: "Book a slot", href: "/book", icon: "📅" },
                { name: "About us", href: "/about", icon: "👥" },
                { name: "Contact us", href: "/contact", icon: "📞" },
                { name: "Blogs", href: "/blogs", icon: "📝" },
                { name: "Careers", href: "/careers", icon: "💼" },
                { name: "FAQs", href: "/faqs", icon: "❓" },
            ],
        },
        {
            title: "Products",
            icon: "🛠️",
            items: [
                { name: "KurukSaarthi", href: "/products/kuruksaarthi", icon: "🗳️" },
                { name: "Calcora", href: "https://calcora.in", icon: "🧮" },
                { name: "KalaKruti", href: "/products/kalakruti", icon: "🎨" },
                { name: "Linki.fy", href: "/products/linkify", icon: "🔗" },
            ],
        },
        {
            title: "Apps",
            icon: "📱",
            items: [
                { name: "SalesTracker", href: "/apps/salestracker", icon: "📊" },
                { name: "InvoiceGenie", href: "/apps/invoicegenie", icon: "🧾" },
                { name: "EMI Calculator", href: "/apps/emic", icon: "💰" },
                { name: "QuickNote", href: "/apps/quicknote", icon: "📋" },
                { name: "Hike Calculator", href: "/apps/hike-calculator", icon: "📈" },
            ],
        },
        {
            title: "Legal",
            icon: "⚖️",
            items: [
                { name: "Terms of service", href: "/legal/terms", icon: "📄" },
                { name: "Privacy Policy", href: "/legal/privacy", icon: "🔒" },
                { name: "Cookie Policy", href: "/legal/cookies", icon: "🍪" },
                { name: "Licensing", href: "/legal/licensing", icon: "📜" },
                { name: "GDPR compliance", href: "/legal/gdpr", icon: "🛡️" },
            ],
        },
    ],
    socialLinks: [
        { name: "Instagram", href: "https://www.instagram.com/blemense.tech/", icon: "📸" },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/blemense-tech/", icon: "💼" },
        { name: "Twitter", href: "https://x.com/BlemenseTech", icon: "🐦" },
        { name: "GitHub", href: "https://github.com/blemense", icon: "💻" },
    ]
};

const Building06Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"currentColor"} fill={"none"} {...props}>
        <path d="M12 2H6C3.518 2 3 2.518 3 5V22H15V5C15 2.518 14.482 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 8H15V22H21V11C21 8.518 20.482 8 18 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 6L10 6M8 9L10 9M8 12L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.5 22V18C11.5 17.0572 11.5 16.5858 11.2071 16.2929C10.9142 16 10.4428 16 9.5 16H8.5C7.55719 16 7.08579 16 6.79289 16.2929C6.5 16.5858 6.5 17.0572 6.5 18V22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);

const Mail02Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"currentColor"} fill={"none"} {...props}>
        <path d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.01576 13.4756C2.08114 16.5411 2.11382 18.0739 3.24495 19.2093C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.755 19.2093C21.8862 18.0739 21.9189 16.5411 21.9842 13.4756C22.0053 12.4899 22.0053 11.51 21.9842 10.5244C21.9189 7.45883 21.8862 5.92606 20.755 4.79063C19.6239 3.6552 18.0497 3.61565 14.9012 3.53654C12.9607 3.48778 11.0393 3.48778 9.09882 3.53653C5.95033 3.61563 4.37608 3.65518 3.24495 4.79062C2.11382 5.92605 2.08113 7.45882 2.01576 10.5243C1.99474 11.51 1.99474 12.4899 2.01576 13.4756Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"currentColor"} fill={"none"} {...props}>
        <path d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);

export default function Footer() {
    const { company, links, socialLinks } = footerData;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div 
            ref={ref}
            className="relative px-4 sm:px-6 lg:px-8 xl:px-16 mt-32 mb-16 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <motion.footer 
                className="relative glass-card backdrop-blur-xl bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-white/10 text-gray-300 rounded-3xl overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {/* Animated Grid Background */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="relative z-10 px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
                    {/* Top Section */}
                    <div className="flex flex-wrap justify-between items-start mb-20 lg:mb-24">
                        {/* Company Information */}
                        <motion.div 
                            className="w-full lg:w-1/3 mb-16 lg:mb-0 pr-0 lg:pr-8 xl:pr-12"
                            initial={{ x: -50, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <motion.div 
                                className="flex items-center mb-8"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image src={Logo} alt="Blemense Logo" className="h-14 w-14 mr-5" />
                                <div>
                                    <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        {company.name}
                                    </h3>
                                    <p className="text-xs text-gray-400 mt-1">Est. {company.founded}</p>
                                </div>
                            </motion.div>
                            
                            <motion.p 
                                className="text-sm lg:text-base leading-relaxed mb-10 text-gray-300"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                {company.tagline}
                            </motion.p>

                            {/* Stats Grid */}
                            <motion.div 
                                className="grid grid-cols-2 gap-4 lg:gap-6 mb-12"
                                initial={{ y: 30, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                {Object.entries(company.stats).map(([key, value], index) => (
                                    <motion.div 
                                        key={key}
                                        className="glass-card p-4 lg:p-5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                    >
                                        <div className="text-lg lg:text-xl font-bold text-white mb-1">{value}</div>
                                        <div className="text-xs lg:text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div 
                                className="space-y-5 lg:space-y-6"
                                initial={{ y: 30, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                <ContactItem 
                                    icon={<Building06Icon className="h-4 w-4" />}
                                    title={`Headquarters, ${company.address.country}`}
                                    content={company.address.location}
                                />
                                <ContactItem 
                                    icon={<Mail02Icon className="h-4 w-4" />}
                                    title="Email us"
                                    content={company.email}
                                    href={`mailto:${company.email}`}
                                />
                                <ContactItem 
                                    icon={<PhoneIcon className="h-4 w-4" />}
                                    title="Call us"
                                    content={company.phone}
                                    href={`tel:${company.phone}`}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Links Sections */}
                        <motion.div 
                            className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 xl:gap-12 pl-0 lg:pl-8"
                            initial={{ x: 50, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {links.map((section, index) => (
                                <motion.div 
                                    key={index} 
                                    className="space-y-6"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                >
                                    <motion.h4 
                                        className="font-bold text-white flex items-center gap-3 mb-6 text-base lg:text-lg"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <span className="text-base">{section.icon}</span>
                                        {section.title}
                                    </motion.h4>
                                    <ul className="space-y-4">
                                        {section.items.map((item, idx) => (
                                            <motion.li 
                                                key={idx}
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                                                transition={{ duration: 0.4, delay: 0.8 + idx * 0.05 }}
                                            >
                                                <Link href={item.href} passHref>
                                                    <motion.div
                                                        className="flex items-center gap-3 text-sm lg:text-base text-gray-400 hover:text-white transition-all duration-300 cursor-pointer group py-1"
                                                        whileHover={{ x: 5, scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                    >
                                                        <span className="text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                                                            {item.icon}
                                                        </span>
                                                        <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                                                            {item.name}
                                                        </span>
                                                    </motion.div>
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Separator */}
                    <motion.div 
                        className="relative my-16 lg:my-20"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                        <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm"></div>
                    </motion.div>

                    {/* Bottom Section */}
                    <motion.div 
                        className="flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-12"
                        initial={{ y: 30, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                    >
                        {/* Copyright */}
                        <div className="text-sm lg:text-base text-gray-400 text-center md:text-left">
                            <p className="mb-2">© {new Date().getFullYear()} Blemense Technologies LLP. All rights reserved.</p>
                            <p className="text-xs lg:text-sm">Crafted with ❤️ in India</p>
                        </div>

                        {/* Social Links */}
                        <motion.div 
                            className="flex gap-4 lg:gap-6"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-card w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 group"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                                >
                                    <span className="text-base lg:text-lg group-hover:scale-110 transition-transform">
                                        {social.icon}
                                    </span>
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Back to Top */}
                        <motion.button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="glass-card px-6 py-3 lg:px-8 lg:py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm lg:text-base text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3 group"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                        >
                            <span>Back to top</span>
                            <motion.span 
                                className="group-hover:-translate-y-1 transition-transform text-base lg:text-lg"
                                animate={{ y: [0, -2, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                ↑
                            </motion.span>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30"
                            style={{
                                left: `${10 + i * 12}%`,
                                top: `${20 + (i % 3) * 30}%`,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                x: [0, 10, 0],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.4,
                            }}
                        />
                    ))}
                </div>
            </motion.footer>
        </motion.div>
    );
}

// Contact Item Component
function ContactItem({ icon, title, content, href }: { 
    icon: React.ReactNode; 
    title: string; 
    content: string; 
    href?: string; 
}) {
    const [isHovered, setIsHovered] = useState(false);

    const ContentWrapper = href ? motion.a : motion.div;
    const wrapperProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

    return (
        <ContentWrapper
            {...wrapperProps}
            className="flex items-start gap-4 p-4 lg:p-5 rounded-xl glass-card border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.div 
                className="text-purple-400 mt-1 group-hover:text-pink-400 transition-colors duration-300"
                animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.5 }}
            >
                {icon}
            </motion.div>
            <div className="flex-1">
                <h5 className="font-medium text-white text-sm lg:text-base mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {title}
                </h5>
                <p className="text-xs lg:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {content}
                </p>
            </div>
        </ContentWrapper>
    );
}