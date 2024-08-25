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
import { HiOutlineMegaphone } from 'react-icons/hi2'
import ThemeSwitch from '@/app/themeSwitch'
import Logo from '../../public/Logo_Light.png'

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMobileMenu = () => {
        setIsMenuOpen(true);
    }

    const [currentPath, setCurrentPath] = useState("");
    const handleActiveLink = (link: React.SetStateAction<string>) => {
        setCurrentPath(link);
    }
    return (
        <div className='sticky top-0 dark:bg-black bg-white z-[100]'>
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
                        <div className='box-border w-fit px-2.5 text-sm py-3 transition-all duration-75 ease-in-out border-b-2 border-transparent hover:border-b-2 hover:border-[#EFAA3A]'>
                            <h1>Try us!</h1>
                        </div>
                    </Link>
                </div>
                <div className='w-fit flex gap-x-2.5'>
                    <ThemeSwitch />
                    <div className='flex gap-x-3 rounded-full items-center p-2.5 w-fit border border-[#ebebeb] cursor-pointer'>
                        <HiOutlineMegaphone className='h-5 w-5 text-primaryTheme' />
                        <span className='text-sm'>Releases</span>
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