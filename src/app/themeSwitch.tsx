"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

export default function ThemeSwitch() {
    const { setTheme, resolvedTheme } = useTheme();

    if (resolvedTheme == 'dark') return (
        <div onClick={() => setTheme('light')} className='flex items-center h-fit w-fit rounded-full p-3 border border-[#4E4E4E] cursor-pointer'>
            <HiOutlineSun className='h-5 w-5' />   
        </div>
    )
    if (resolvedTheme == 'light') return (
        <div onClick={() => setTheme('dark')} className='flex items-center h-fit w-fit rounded-full p-3 border border-[#4E4E4E] cursor-pointer'>
            <HiOutlineMoon className='h-5 w-5' />   
        </div>
    )
}
