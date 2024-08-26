import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'

const serviceDataFirstRow = [
    {
        index: 1,
        label: 'Software Development',
        description: 'Craft the code that builds your dreams with future-proof solutions that are built to scale.',
    },
    {
        index: 2,
        label: 'Website Development',
        description: 'Launch your brand into the digital stratosphere with websites that work as hard as you do.',
    },
]

const serviceDataLastRow = [
    {
        index: 3,
        label: 'Database Management',
        description: 'Unlock the power of your data. We keep your databases organized and optimized.',
    },
    {
        index: 4,
        label: 'UI/UX Designing',
        description: 'Design that delights, usability that converts and user journeys that feel like first class.',
    },
    {
        index: 5,
        label: 'Server Management',
        description: 'The silent heroes keeping your online world running, we manage your server, you manage your business.',
    },
]

export default function Services() {
    return (
        <div className='lg:px-44 mt-36'>
            <div className='lg:flex w-full justify-between'>
                <div className='hidden lg:block'>
                    <h1 className='text-xl'>Upscale with our</h1>
                    <p className='text-5xl text-secondaryTheme'>Services</p>
                </div>
                <div className='lg:hidden w-fit mx-auto mb-9'>
                    <h1 className='text-xl'>Upscale with our <span className='text-secondaryTheme'>Services</span></h1>
                </div>
                <div className='px-5 lg:px-0 flex flex-col items-end gap-6'>
                    <div className='grid lg:grid-cols-2 w-fit gap-y-6 lg:gap-y-0 gap-x-6'>
                        {serviceDataFirstRow.map((services) => (
                            <div className='lg:h-[325px] lg:w-[275px] grid justify-items-end bg-white p-6 rounded-xl border border-[#f5f5f5]' key={services.index}>
                                <div>
                                    <h1 className='font-bold'>{services.label}</h1>
                                    <p className='text-sm text-subtitle mt-4'>{services.description}</p>
                                </div>
                                <div className={`rounded-full h-fit p-3 ${services.index % 2 == 0 ? 'bg-[#FDE2B5]' : 'bg-[#DEE0FF]'}`}>
                                    <HiArrowUpRight className='h-4 w-4' />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='grid lg:grid-cols-3 w-fit gap-y-6 lg:gap-y-0 gap-x-6'>
                        {serviceDataLastRow.map((services) => (
                            <div className='lg:h-[325px] lg:w-[275px] grid justify-items-end bg-white p-6 rounded-xl border border-[#f5f5f5]' key={services.index}>
                                <div>
                                    <h1 className='font-bold'>{services.label}</h1>
                                    <p className='text-sm text-subtitle mt-4'>{services.description}</p>
                                </div>
                                <div className={`rounded-full h-fit p-3 ${services.index % 2 == 0 ? 'bg-[#FDE2B5]' : 'bg-[#DEE0FF]'}`}>
                                    <HiArrowUpRight className='h-4 w-4' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
