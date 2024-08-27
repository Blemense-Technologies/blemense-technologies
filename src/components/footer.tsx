import React from 'react';
import Logo from '../../public/Logo_Light.png'
import { FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';

const platformLinks = [
    {
        index: 1,
        href: '/',
        label: 'Plans & Pricing'
    },
    {
        index: 2,
        href: '/',
        label: 'Personal AI Manager'
    },
    {
        index: 3,
        href: '/',
        label: 'AI Business Writer'
    },
    {
        index: 4,
        href: '/',
        label: 'AI Data Processing'
    },
]

const companyLinks = [
    {
        index: 1,
        href: '/',
        label: 'Plans & Pricing'
    },
    {
        index: 2,
        href: '/',
        label: 'Personal AI Manager'
    },
    {
        index: 3,
        href: '/',
        label: 'AI Business Writer'
    },
    {
        index: 4,
        href: '/',
        label: 'AI Data Processing'
    },
]

const resourcesLinks = [
    {
        index: 1,
        href: '/',
        label: 'Plans & Pricing'
    },
    {
        index: 2,
        href: '/',
        label: 'Personal AI Manager'
    },
    {
        index: 3,
        href: '/',
        label: 'AI Business Writer'
    },
    {
        index: 4,
        href: '/',
        label: 'AI Data Processing'
    },
]

const legalLinks = [
    {
        index: 1,
        href: '/',
        label: 'Plans & Pricing'
    },
    {
        index: 2,
        href: '/',
        label: 'Personal AI Manager'
    },
    {
        index: 3,
        href: '/',
        label: 'AI Business Writer'
    },
    {
        index: 4,
        href: '/',
        label: 'AI Data Processing'
    },
]

export default function Footer() {
    return (
        <footer className="bg-[#f8f8f8] dark:bg-black text-white py-10 lg:py-20 mt-36">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row w-full lg:justify-between">
                    <div className="w-full lg:w-1/4 flex flex-col lg:items-end mb-6 lg:mb-0">
                        <div className="flex flex-col items-center mb-4 w-full max-w-xs">
                            <div className="mb-4">
                                <h1 className='text-xl text-black dark:text-white font-semibold'>Subscribe to our newsletter!</h1>
                                <p className="text-sm text-subtitle dark:text-subtitleDark">Get the latest updates and features directly to your inbox!</p>
                            </div>
                            <form className="w-full">
                                <div className="flex space-x-3">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full lg:min-w-[250px] px-4 rounded-full"
                                    />
                                    <Button
                                        type="submit"
                                        className="bg-primaryTheme dark:bg-secondaryTheme w-fit rounded-full text-white px-4 py-2 hover:bg-primaryDark"
                                    >
                                        Subscribe
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 lg:flex w-full lg:w-fit lg:gap-x-28'>
                        <div className="mb-8 lg:mb-0">
                            <h3 className="font-semibold mb-4 text-black dark:text-white">Platform</h3>
                            <div className='grid gap-y-3'>
                                {
                                    platformLinks.map((links) => (
                                        <div key={links.index}>
                                            <Link href={links.href}>
                                                <h1 className='text-sm text-subtitle dark:text-subtitleDark'>{links.label}</h1>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="mb-8 lg:mb-0">
                            <h3 className="font-semibold mb-4 text-black dark:text-white">Company</h3>
                            <div className='grid gap-y-3'>
                                {
                                    companyLinks.map((links) => (
                                        <div key={links.index}>
                                            <Link href={links.href}>
                                                <h1 className='text-sm text-subtitle dark:text-subtitleDark'>{links.label}</h1>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="mb-8 lg:mb-0">
                            <h3 className="font-semibold mb-4 text-black dark:text-white">Resources</h3>
                            <div className='grid gap-y-3'>
                                {
                                    resourcesLinks.map((links) => (
                                        <div key={links.index}>
                                            <Link href={links.href}>
                                                <h1 className='text-sm text-subtitle dark:text-subtitleDark'>{links.label}</h1>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="mb-8 lg:mb-0">
                            <h3 className="font-semibold mb-4 text-black dark:text-white">Legal</h3>
                            <div className='grid gap-y-3'>
                                {
                                    legalLinks.map((links) => (
                                        <div key={links.index}>
                                            <Link href={links.href}>
                                                <h1 className='text-sm text-subtitle dark:text-subtitleDark'>{links.label}</h1>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14 flex justify-between items-center border-t border-gray-700 pt-4">
                    <div className="flex items-center">
                        <Image src={Logo} alt="Logo" width={20} height={20} quality={100} className='h-9 w-9' />
                        <span className="ml-2 text-xs text-black dark:text-white">Blemense Technologies LLP | 2024</span>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Instagram">
                            <FaInstagram className="w-6 h-6 text-subtitle dark:text-white" />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <FaFacebook className="w-6 h-6 text-subtitle dark:text-white" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <FaXTwitter className="w-6 h-6 text-subtitle dark:text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
