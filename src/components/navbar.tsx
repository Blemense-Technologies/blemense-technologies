import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import Logo from '../../public/Logo.png'

const navLinkClass = `group text-white inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`

export default function Navbar() {
    return (
        <div>
            <div className='flex py-6 items-center w-full lg:justify-around'>
                <div>
                    <Image
                        src={Logo}
                        height={100}
                        width={100}
                        alt={"blemense.tech.logo"}
                        className='h-16 w-16'
                    />
                </div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navLinkClass}>
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/apps" legacyBehavior passHref>
                                <NavigationMenuLink className={navLinkClass}>
                                    Apps
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/blogs" legacyBehavior passHref>
                                <NavigationMenuLink className={navLinkClass}>
                                    Blogs
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/careers" legacyBehavior passHref>
                                <NavigationMenuLink className={navLinkClass}>
                                    Careers
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button className='border-[1.25px] rounded-full bg-[#202020]'>
                                Book a Slot
                            </Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}
