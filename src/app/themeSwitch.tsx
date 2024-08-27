"use client"
import { useTheme } from 'next-themes'
import React from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

export default function ThemeSwitch() {
    const { setTheme, resolvedTheme } = useTheme();

    if (resolvedTheme == 'dark') return (
        <div onClick={() => setTheme('light')} className='h-fit w-fit p-2 rounded-full lg:p-3 border-[1.5px] dark:bg-[#1F1F1E] dark:border-[#4E4E4E] border-[#ebebeb] cursor-pointer'>
            <HiOutlineSun className='h-4 w-4 text-secondaryTheme' />   
        </div>
    )
    if (resolvedTheme == 'light') return (
        <div onClick={() => setTheme('dark')} className='h-fit w-fit p-2 rounded-full lg:p-3 border-[1.5px] dark:bg-[#1F1F1E] dark:border-[#4E4E4E] border-[#ebebeb] cursor-pointer'>
            <HiOutlineMoon className='h-4 w-4 text-primaryTheme' />   
        </div>
    )
}
