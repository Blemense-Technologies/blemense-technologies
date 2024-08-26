import Image from 'next/image'
import React from 'react'
import { Separator } from './ui/separator'

const reviews = [
    {
        index: 1,
        profile: '',
        name: 'Anushka Sharma',
        designation: 'CEO, Nushh',
        review: "Blemense Technologies took our software concept from a sketch on a napkin to a full-fledged application. Their team was incredibly responsive and truly understood our vision."
    },
    {
        index: 2,
        profile: '',
        name: 'Shraddha Kapoor',
        designation: 'CEO, Palmonas',
        review: "We were struggling to keep up with the ever-changing demands of our user base. Blemense Technologies helped us develop a scalable and secure solution that can grow with our business."
    },
    {
        index: 3,
        profile: '',
        name: 'Kriti Sanon',
        designation: 'CEO, Hyphen',
        review: 'We were struggling to keep up with the ever-changing demands of our user base. Blemense Technologies helped us develop a scalable and secure solution that can grow with our business.'
    },
    {
        index: 4,
        profile: '',
        name: 'Elizabeth Olsen',
        designation: 'CEO, VisionQuest',
        review: 'Blemense Technologies completely revamped our internal systems, improving efficiency by over 30%.  We highly recommend them for any software development needs.'
    },
    {
        index: 5,
        profile: '',
        name: 'Millie Bobby Brown',
        designation: 'CEO, FlorenceByMills',
        review: "Their UI/UX design team created an intuitive and user-friendly interface that has significantly boosted our customer engagement. We're so impressed with their creativity and expertise."
    },
    {
        index: 6,
        profile: '',
        name: 'Hayley G. Atwell',
        designation: 'CEO, Rogers Inc.',
        review: "Blemense Technologies completely revamped our internal systems, improving efficiency by over 30%.  We highly recommend them for any software development needs."
    }
]

export default function Testimonials() {
    return (
        <div className='lg:w-fit mt-44 lg:mx-auto px-4 lg:px-0'>
            <div className='flex mb-20 w-fit mx-auto items-center gap-x-6'>
                <Separator className='w-24 lg:w-[480px] bg-[#ebebeb] dark:bg-[#d9d9d9]' />
                <h1 className='text-lg font-semibold'>Testimonials</h1>
                <Separator className='w-24 lg:w-[480px] bg-[#ebebeb] dark:bg-[#d9d9d9]' />
            </div>
            <div className='w-full lg:w-fit'>
                <div className='grid lg:grid-cols-3 gap-7'>
                    {
                        reviews.map((reviews) => (
                            <div className={`lg:h-[230px] lg:w-[400px] rounded-3xl p-6 dark:bg-bgDark border-[1.5px] dark:border-borderDark shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]`} key={reviews.index}>
                                <p className='text-sm dark:text-subtitleDark'>"{reviews.review}"</p>
                                <div className='flex gap-x-6 mt-9 items-center'>
                                    <Image
                                        src={reviews.profile}
                                        alt={`image ${reviews.index}`}
                                        height={100}
                                        width={100}
                                        quality={100}
                                        className='h-14 w-14'
                                    />
                                    <div>
                                        <h1 className='text-subtitle dark:text-white text-sm'>{reviews.name}</h1>
                                        <p className='text-subtitle dark:text-subtitleDark text-xs'>{reviews.designation}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
