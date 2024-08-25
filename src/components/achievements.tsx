import React from 'react'

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
        <div className='mt-44'>
            <div className='flex gap-x-36 items-center w-fit mx-auto'>
                {
                    feat.map((items) => (
                        <div className='flex flex-col justify-center items-center gap-4' key={items.index}>
                            <h1 className={`text-3xl font-bold ${items.index % 2 == 0 ? 'text-secondaryTheme' : 'text-primaryTheme'}`}>{items.record}</h1>
                            <p className='text-lg'>{items.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
