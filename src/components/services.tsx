import Image from 'next/image'
import React from 'react'
import GridNormal from '../../public/Grid - Normal.svg'
import { serviceData } from '@/constants/service-data'

export default function Services() {
    return (
        <div className='mt-12 md:my-16 lg:my-16 p-4'>
            <div className="text-center space-y-4">
                <h2 className="text-xl text-white md:text-3xl lg:text-3xl font-bold">
                    Elevate your{" "}
                    <span className="font-bold text-gradient">Digital Presence</span>
                </h2>
                <p className="text-sm md:text-base lg:text-base text-white max-w-2xl mx-auto">
                    We create software solutions that don’t just meet expectations but exceed them - delivering impact, satisfaction, and long-term success.
                </p>
                
            </div>
            <div className="mt-16 w-full md:w-2/3 lg:w-2/3 md:mx-auto lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className={`relative bg-[#202020] p-6 overflow-hidden rounded-[20px] row-span-2 space-y-4`}>
                    <h3 className="text-xl font-semibold text-white">{serviceData[0].title}</h3>
                    <p className="text-gray-400">{serviceData[0].description}</p>
                    <Image 
                        src={GridNormal}
                        alt={"grid_bg"}
                        height={200}
                        width={200}
                        className='absolute right-0 bottom-6 scale-[2]'
                    />
                </div>
                <div className={`relative bg-[#202020] overflow-hidden rounded-[20px] p-6 space-y-4`}>
                    <h3 className="text-xl font-semibold text-white">{serviceData[1].title}</h3>
                    <p className="text-gray-400">{serviceData[1].description}</p>
                    <Image 
                        src={GridNormal}
                        alt={"grid_bg"}
                        height={200}
                        width={200}
                        className='absolute right-0 bottom-6 scale-[2]'
                    />
                </div>
                <div className={`relative bg-[#202020] overflow-hidden rounded-[20px] p-6 space-y-4`}>
                    <h3 className="text-xl font-semibold text-white">{serviceData[2].title}</h3>
                    <p className="text-gray-400">{serviceData[2].description}</p>
                    <Image 
                        src={GridNormal}
                        alt={"grid_bg"}
                        height={200}
                        width={200}
                        className='absolute right-0 bottom-6 scale-[2]'
                    />
                </div>
                <div className={`relative bg-[#202020] overflow-hidden rounded-[20px] p-6 space-y-4`}>
                    <h3 className="text-xl font-semibold text-white">{serviceData[3].title}</h3>
                    <p className="text-gray-400">{serviceData[3].description}</p>
                    <Image 
                        src={GridNormal}
                        alt={"grid_bg"}
                        height={200}
                        width={200}
                        className='absolute right-0 bottom-6 scale-[2]'
                    />
                </div>
                <div className={`relative bg-[#202020] overflow-hidden rounded-[20px] p-6 space-y-4`}>
                    <h3 className="text-xl font-semibold text-white">{serviceData[4].title}</h3>
                    <p className="text-gray-400">{serviceData[4].description}</p>
                    <Image 
                        src={GridNormal}
                        alt={"grid_bg"}
                        height={200}
                        width={200}
                        className='absolute right-0 bottom-6 scale-[2]'
                    />
                </div>
            </div>
        </div>
    )
}
