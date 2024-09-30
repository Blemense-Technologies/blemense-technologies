import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu'
import { Button } from './ui/button'
import Logo from '../../public/Logo.png'
import { HiBars3 } from 'react-icons/hi2'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

const navLinkClass = `group text-white inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`

export default function Navbar() {
    return (
        <div>
            {/* Mobile View */}
            <div className='md:hidden lg:hidden px-4 mt-2'>
                <div className='flex space-x-2 items-center'>
                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <div className='p-1 h-fit w-fit'>
                                <HiBars3 className='h-7 w-7 text-white' />
                            </div>
                        </SheetTrigger>
                        <SheetContent side={'left'}>
                            <SheetHeader>
                                <SheetTitle>Edit profile</SheetTitle>
                                <SheetDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-4 py-4">

                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button type="submit">Save changes</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                    <Image
                        src={Logo}
                        height={100}
                        width={100}
                        alt={"blemense.tech.logo"}
                        className='h-14 w-14'
                    />
                </div>
            </div>

            {/* Web View */}
            <div className='hidden md:flex lg:flex py-6 items-center w-2/3 mx-auto lg:justify-between'>
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
                    <NavigationMenuList className='lg:space-x-12'>
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
