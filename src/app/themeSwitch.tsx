"use client"
import { useTheme } from 'next-themes'
import React from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

export default function ThemeSwitch() {
    const { setTheme, resolvedTheme } = useTheme();

    if (resolvedTheme == 'dark') return (
        <div onClick={() => setTheme('light')} className='flex items-center h-fit w-fit rounded-full lg:p-3 border-[1.5px] dark:bg-[#1F1F1E] dark:border-[#4E4E4E] border-[#ebebeb] cursor-pointer'>
            <HiOutlineSun className='h-5 w-5 text-secondaryTheme' />   
        </div>
    )
    if (resolvedTheme == 'light') return (
        <div onClick={() => setTheme('dark')} className='flex items-center h-fit w-fit rounded-full lg:p-3 border-[1.5px] dark:bg-[#1F1F1E] dark:border-[#4E4E4E] border-[#ebebeb] cursor-pointer'>
            <HiOutlineMoon className='h-5 w-5 text-primaryTheme' />   
        </div>
    )
}
