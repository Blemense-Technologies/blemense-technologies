import React from 'react'
import Actmit from '../../public/solar-company.png'
import Image from 'next/image'
import { HiChevronRight } from 'react-icons/hi2'
import Link from 'next/link'

const projects = [
    {
        index: 1,
        image: Actmit,
        title: 'ACTMIT Solar',
        location: 'Lübbecke, Germany',
        services: ['Website Development', 'Backend with Admin Panel', 'UI/UX Designing', '1-Year Consultation'],
        href: 'actmitsolar.de'
    },
    {
        index: 2,
        image: Actmit,
        title: 'ACTMIT Solar',
        location: 'Lübbecke, Germany',
        services: ['Website Development', 'Backend with Admin Panel', 'UI/UX Designing', '1-Year Consultation'],
        href: 'actmitsolar.de'
    },
    {
        index: 3,
        image: Actmit,
        title: 'ACTMIT Solar',
        location: 'Lübbecke, Germany',
        services: ['Website Development', 'Backend with Admin Panel', 'UI/UX Designing', '1-Year Consultation'],
        href: 'actmitsolar.de'
    },
    {
        index: 4,
        image: Actmit,
        title: 'ACTMIT Solar',
        location: 'Lübbecke, Germany',
        services: ['Website Development', 'Backend with Admin Panel', 'UI/UX Designing', '1-Year Consultation'],
        href: 'actmitsolar.de'
    },
]

export default function Projects() {
    return (
        <div className='lg:w-fit lg:mx-auto mt-44 px-4'>
            <h1 className='text-center text-lg font-semibold mb-14'>Our recent <span className='text-primaryTheme'>Work</span></h1>
            <div className='grid lg:grid-cols-2 gap-9 w-full lg:w-fit mx-auto lg:mx-0'>
                {
                    projects.map((items) => (
                        <Link href={items.href} target='_blank' key={items.index}>
                            <div className='flex gap-x-4 lg:gap-x-7 p-3 lg:p-6 lg:h-[275px] rounded-3xl lg:w-[500px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
                                <div>
                                    <Image
                                        src={items.image}
                                        alt={`image ${items.index}`}
                                        height={300}
                                        width={300}
                                        quality={100}
                                        className='relative rounded-xl h-full w-[160px] lg:h-[225px] lg:w-[225px]'
                                    />
                                    <div className='inset-0 z-[10] object-cover bg-gradient-to-b bg-black opacity-50'></div>
                                </div>
                                <div className=''>
                                    <div>
                                        <h1 className='text-lg font-bold'>{items.title}</h1>
                                        <p className='text-sm text-subtitle'>{items.location}</p>
                                    </div>
                                    <div className='grid gap-2.5 my-4'>
                                        {items.services.map((services, index) => (
                                            <p className='text-sm text-subtitle font-semibold' key={index}>
                                                {services}
                                            </p>
                                        ))}
                                    </div>
                                    <div className='hidden lg:flex items-center gap-x-3'>
                                        <p>View</p>
                                        <div className='rounded-full h-fit w-fit p-1 bg-[#f5f5f5]'>
                                            <span><HiChevronRight className='h-3 w-3' /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
