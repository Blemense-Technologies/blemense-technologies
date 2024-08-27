"use client"
import React, { useState } from 'react'
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from 'next/image'
import Link from 'next/link'
import { HiBars3, HiOutlineMegaphone } from 'react-icons/hi2'
import ThemeSwitch from '@/app/themeSwitch'
import Logo from '../../public/Logo_Light.png'
import { HiXMark } from 'react-icons/hi2';

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const handleOpenMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    }

    const [currentPath, setCurrentPath] = useState("");
    const handleActiveLink = (link: React.SetStateAction<string>) => {
        setCurrentPath(link);
    }

    const [activeLink, setActiveLink] = useState<string>('Home');
    const handleSetActive = (link: string) => {
        setActiveLink(link);
    };

    const menuItems = [
        {
            index: 1,
            label: 'Home',
            href: '/'
        },
        {
            index: 2,
            label: 'Products',
            href: ''
        },
        {
            index: 3,
            label: 'Blogs',
            href: '/blogs'
        },
        {
            index: 4,
            label: 'Careers',
            href: '/careers'
        },
        {
            index: 5,
            label: 'Try us',
            href: '/try-us'
        },
    ];

    return (
        <div className='sticky top-0 bg-white dark:bg-bgDark z-[50]'>
            {isMenuOpen && (
                <div className='z-[100]'>
                    <div className="fixed inset-y-0 left-0 z-50">
                        <div className="flex flex-col w-64 h-screen bg-white shadow-lg relative">
                            <button className="absolute top-4 right-4">
                                <HiXMark onClick={handleCloseMenu} className="h-6 w-6 text-gray-500" />
                            </button>
                            <div className="flex items-center justify-center mt-10 mb-4">
                                <Image height={100} width={100} src="" alt="Logo" className="h-14 w-14" />
                            </div>
                            <nav className="flex flex-col space-y-4 pl-8">
                                {menuItems.map((items) => (
                                    <Link
                                        key={items.index}
                                        href={items.href}
                                        onClick={() => {
                                            handleSetActive(items.label)
                                            handleCloseMenu()
                                        }}
                                        className={`text-gray-700 text-lg font-medium ${activeLink === items.label ? 'border-l-4 border-secondaryTheme pl-4 text-black' : ''
                                            } hover:text-black`}
                                    >
                                        {items.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            )}

            <div className='lg:hidden flex h-fit w-full justify-between items-center py-2 px-6 bg-white dark:bg-bgDark'>
                <div className='flex w-fit items-center gap-x-2.5'>
                    <HiBars3 onClick={handleOpenMenu} className='text-primaryTheme dark:text-secondaryTheme h-7 w-7' />
                    <Image
                        src={Logo}
                        height={100}
                        width={100}
                        alt={'Logo_Dark'}
                        quality={100}
                        className='h-14 w-14'
                    />
                </div>
                <div className='w-fit h-fit flex gap-x-2.5'>
                    <ThemeSwitch />
                    <div className='rounded-full h-fit p-2 items-center w-fit dark:bg-bgDark border-[1.5px] border-[#ebebeb] dark:text-secondaryTheme dark:border-borderDark cursor-pointer'>
                        <HiOutlineMegaphone className='h-4 w-4 text-primaryTheme dark:text-secondaryTheme' />
                    </div>
                </div>
            </div>
            <div className='hidden lg:block sticky top-0 dark:bg-black bg-white z-[100]'>
                <div className='hidden lg:flex xl:flex h-fit w-full z-[50] mt-2 py-3 px-32 items-center justify-between'>
                    <div className='h-fit w-fit'>
                        <Image
                            src={Logo}
                            height={100}
                            width={100}
                            alt={'Logo_Dark'}
                            quality={100}
                            className='h-16 w-16'
                        />
                    </div>
                    <div className='flex w-fit gap-x-8'>
                        <Link onClick={() => handleActiveLink("/")} href={"/"}>
                            <div className={`box-border w-fit px-2.5 text-sm py-3 transition-all duration-75 ease-in-out border-b-2 ${currentPath === '/' ? 'border-[#EFAA3A]' : 'border-transparent'
                                } hover:border-b-2 hover:border-[#EFAA3A]`}>
                                <h1>Home</h1>
                            </div>
                        </Link>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        <div className='box-border w-fit px-2.5 text-sm py-3 transition-all duration-75 ease-in-out'>
                                            <h1>Products</h1>
                                        </div>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                {components.map((component) => (
                                                    <ListItem
                                                        key={component.title}
                                                        title={component.title}
                                                        href={component.href}
                                                    >
                                                        {component.description}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuTrigger>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <Link onClick={() => handleActiveLink("/blogs")} href={"/blogs"}>
                            <div className={`box-border w-fit px-2.5 text-sm py-3 transition-all duration-75 ease-in-out border-b-2 ${currentPath === '/blogs' ? 'border-[#EFAA3A]' : 'border-transparent'
                                } hover:border-b-2 hover:border-[#EFAA3A]`}>
                                <h1>Blogs</h1>
                            </div>
                        </Link>
                        <Link onClick={() => handleActiveLink("/careers")} href={"/careers"}>
                            <div className={`box-border w-fit px-2.5 text-sm py-3 transition-all duration-75 ease-in-out border-b-2 ${currentPath === '/careers' ? 'border-[#EFAA3A]' : 'border-transparent'
                                } hover:border-b-2 hover:border-[#EFAA3A]`}>
                                <h1>Careers</h1>
                            </div>
                        </Link>
                        <Link href={"/try-us"}>
                            <div className='h-fit w-fit rounded-full px-6 py-2 bg-primaryTheme dark:bg-secondaryTheme'>
                                <h1 className='text-white'>Try us!</h1>
                            </div>
                        </Link>
                    </div>
                    <div className='w-fit flex gap-x-2.5'>
                        <ThemeSwitch />
                        <div className='flex gap-x-3 rounded-full items-center p-2.5 w-fit dark:bg-bgDark border-[1.5px] border-[#ebebeb] dark:text-secondaryTheme dark:border-borderDark cursor-pointer'>
                            <HiOutlineMegaphone className='h-5 w-5 text-primaryTheme dark:text-secondaryTheme' />
                            <span className='text-sm'>Releases</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"