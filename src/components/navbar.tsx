"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu'
import { Button } from './ui/button'
import Logo from '../../public/Logo.png'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import GradientButton from './gradientButton'
import { slideInFromTop, staggerContainer, staggerItem, magneticButton } from '@/lib/animations'

const navLinkClass = `group text-white inline-flex h-10 w-max items-center justify-center rounded-md px-6 py-2 text-sm font-medium transition-all duration-300 ease-out hover:bg-white/10 hover:backdrop-blur-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden`

const MagneticNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <motion.div
      variants={magneticButton}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
    >
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={navLinkClass}>
          <span className="relative z-10">{children}</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primaryTheme/20 to-secondaryTheme/20 rounded-md"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </NavigationMenuLink>
      </Link>
    </motion.div>
  );
};

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    
    const navbarOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
    const navbarBlur = useTransform(scrollY, [0, 100], [0, 20]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Mobile View */}
            <motion.div 
                className='md:hidden lg:hidden fixed top-0 left-0 right-0 z-50 px-4 py-2'
                variants={slideInFromTop}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className={`glass-nav rounded-2xl p-4 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}
                    style={{ 
                        opacity: navbarOpacity,
                        backdropFilter: `blur(${navbarBlur}px)` 
                    }}
                >
                    <div className='flex justify-between items-center'>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image
                                src={Logo}
                                height={100}
                                width={100}
                                alt={"blemense.tech.logo"}
                                className='h-12 w-12'
                            />
                        </motion.div>
                        
                        {/* Mobile Menu Button */}
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <motion.div 
                                    className='p-2 rounded-lg glass-card cursor-pointer'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.div
                                        animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {isMobileMenuOpen ? (
                                            <HiXMark className='h-6 w-6 text-white' />
                                        ) : (
                                            <HiBars3 className='h-6 w-6 text-white' />
                                        )}
                                    </motion.div>
                                </motion.div>
                            </SheetTrigger>
                            
                            <SheetContent side={'left'} className="glass-card border-r border-white/10">
                                <SheetHeader>
                                    <SheetTitle className="text-white text-xl font-bold">
                                        Navigation
                                    </SheetTitle>
                                    <SheetDescription className="text-gray-300">
                                        Explore our services and solutions
                                    </SheetDescription>
                                </SheetHeader>
                                
                                <motion.div 
                                    className="flex flex-col gap-4 py-8"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {['Home', 'Apps', 'Blogs', 'Careers', 'Contact'].map((item, index) => (
                                        <motion.div key={item} variants={staggerItem}>
                                            <SheetClose asChild>
                                                <Link 
                                                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                                    className="text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 block"
                                                >
                                                    {item}
                                                </Link>
                                            </SheetClose>
                                        </motion.div>
                                    ))}
                                    
                                    <motion.div variants={staggerItem} className="mt-4">
                                        <SheetClose asChild>
                                            <div className="w-full">
                                                <GradientButton text='Book a Slot' />
                                            </div>
                                        </SheetClose>
                                    </motion.div>
                                </motion.div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </motion.div>
            </motion.div>

            {/* Desktop View */}
            <motion.div 
                className='hidden md:flex lg:flex fixed top-0 left-0 right-0 z-50 py-4'
                variants={slideInFromTop}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className={`glass-nav mx-auto rounded-2xl px-8 py-4 transition-all duration-300 ${isScrolled ? 'shadow-2xl' : 'shadow-lg'}`}
                    style={{ 
                        opacity: navbarOpacity,
                        backdropFilter: `blur(${navbarBlur}px)` 
                    }}
                >
                    <div className='flex items-center justify-between lg:gap-16 md:gap-8'>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer"
                        >
                            <Link href="/">
                                <Image
                                    src={Logo}
                                    height={100}
                                    width={100}
                                    alt={"blemense.tech.logo"}
                                    className='h-14 w-14'
                                />
                            </Link>
                        </motion.div>
                        
                        <NavigationMenu>
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                <NavigationMenuList className='flex lg:gap-2 md:gap-1'>
                                    <motion.div variants={staggerItem}>
                                        <NavigationMenuItem>
                                            <MagneticNavLink href="/">
                                                Home
                                            </MagneticNavLink>
                                        </NavigationMenuItem>
                                    </motion.div>
                                    
                                    <motion.div variants={staggerItem}>
                                        <NavigationMenuItem>
                                            <MagneticNavLink href="/apps">
                                                Apps
                                            </MagneticNavLink>
                                        </NavigationMenuItem>
                                    </motion.div>
                                    
                                    {/* <motion.div variants={staggerItem}>
                                        <NavigationMenuItem>
                                            <MagneticNavLink href="/blogs">
                                                Blogs
                                            </MagneticNavLink>
                                        </NavigationMenuItem>
                                    </motion.div> */}
                                    
                                    <motion.div variants={staggerItem}>
                                        <NavigationMenuItem>
                                            <MagneticNavLink href="/careers">
                                                Careers
                                            </MagneticNavLink>
                                        </NavigationMenuItem>
                                    </motion.div>
                                    
                                    <motion.div variants={staggerItem}>
                                        <NavigationMenuItem>
                                            <MagneticNavLink href="/contact">
                                                Contact
                                            </MagneticNavLink>
                                        </NavigationMenuItem>
                                    </motion.div>
                                    
                                    <motion.div 
                                        variants={staggerItem}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <NavigationMenuItem>
                                            <div className="ml-4">
                                                <GradientButton text='Book a Slot' />
                                            </div>
                                        </NavigationMenuItem>
                                    </motion.div>
                                </NavigationMenuList>
                            </motion.div>
                        </NavigationMenu>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}
