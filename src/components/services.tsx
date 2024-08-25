import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'

const serviceData = [
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
        <div className='px-44 mt-36'>
            <div className='flex w-full justify-between'>
                <div>
                    <h1 className='text-xl'>Upscale with our</h1>
                    <p className='text-5xl text-secondaryTheme'>Services</p>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    {serviceData.map((services) => (
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
    )
}
