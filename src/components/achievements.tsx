import React from 'react'
import { Separator } from './ui/separator'

const feat = [
    {
        index: 1,
        record: '36+',
        label: 'Clients served',
    },
    {
        index: 2,
        record: '17',
        label: 'Websites created'
    },
    {
        index: 3,
        record: '1000+',
        label: 'Screens designed'
    },
    {
        index: 4,
        record: '3000+',
        label: 'Gigabytes data stored'
    },
]

export default function Achievements() {
    return (
        <div className='mt-44 px-14 lg:px-0'>
            <div className='lg:flex gap-x-36 items-center w-full lg:w-fit lg:mx-auto'>
                {
                    feat.map((items) => (
                        <div key={items.index}>
                            <div className='flex flex-col justify-center items-center gap-4'>
                                <h1 className={`text-2xl lg:text-3xl font-bold ${items.index % 2 == 0 ? 'text-secondaryTheme' : 'text-primaryTheme'} dark:text-secondaryTheme`}>{items.record}</h1>
                                <p className='lg:text-lg'>{items.label}</p>
                            </div>
                            <Separator className='lg:hidden my-8 w-full bg-[#ededed]' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
