import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineMegaphone } from 'react-icons/hi2'
import ThemeSwitch from '@/app/themeSwitch'

export default function Navbar() {
    return (
        <div className='h-fit w-full py-3 px-32 sticky top-0 flex items-center justify-between'>
            <div className='h-fit w-fit'>
                <Image
                    src={''}
                    height={40}
                    width={40}
                    alt={'Logo_Dark'}
                    quality={100}
                    className=''
                />
            </div>
            <div className='flex w-fit gap-x-8'>
                <Link href={"/home"}>
                    <div className='box-border w-fit px-2.5 text-sm py-3 transition-all duration-75 ease-in-out border-b-2 border-transparent hover:border-b-2 hover:border-[#EFAA3A]'>
                        <h1>Home</h1>
                    </div>
                </Link>
                <Link href={"/products"}>
                    <div className='box-border w-fit px-2.5 text-sm py-3 transition-all duration-75 ease-in-out border-b-2 border-transparent hover:border-b-2 hover:border-[#EFAA3A]'>
                        <h1>Products</h1>
                    </div>
                </Link>
                <Link href={"/blogs"}>
                    <div className='box-border w-fit px-2.5 text-sm py-3 transition-all duration-75 ease-in-out border-b-2 border-transparent hover:border-b-2 hover:border-[#EFAA3A]'>
                        <h1>Blogs</h1>
                    </div>
                </Link>
                <Link href={"/careers"}>
                    <div className='box-border w-fit px-2.5 text-sm py-3 transition-all duration-75 ease-in-out border-b-2 border-transparent hover:border-b-2 hover:border-[#EFAA3A]'>
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
                <div className='flex gap-x-3 rounded-full items-center p-2.5 w-fit border border-[#4E4E4E] cursor-pointer'>
                    <HiOutlineMegaphone className='h-4 w-4' />
                    <span className='text-sm'>Releases</span>
                </div>  
            </div>
        </div>
    )
}
