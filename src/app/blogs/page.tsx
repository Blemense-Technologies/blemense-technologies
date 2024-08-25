import React from 'react'
import Image from 'next/image'
import { HiChevronRight } from 'react-icons/hi2'
import Microsoft from '../../../public/microsoft.jpg'
import ReactNative from '../../../public/react-native-sdk.png'
import Xd from '../../../public/xd.png'

const sotw = {
    coverImg: '/sotw.jpeg',
    authorImg: '',
    authorName: 'Muskan Jaiswal',
    title: 'How AI would change the world',
}

const blogs = [
    {
        index: 1,
        coverImg: Microsoft,
        title: 'Microsoft to lay off in Q3',
        author: 'Ojal Sharnagat',
        description: 'In a move to optimize resources, tech titan Microsoft announced a restructuring effort. The plan involves letting go of approximately 1,000 employees across various departments.',
    },
    {
        index: 1,
        coverImg: ReactNative,
        title: 'React Native 22.2.1 offers Offline integration',
        author: 'Ritesh Jangir',
        description: 'In a surprise keynote address, the React Native team unveiled a revolutionary update: built-in, first-class native offline integration. This long-awaited feature eliminates the need for third-party.',
    },
    {
        index: 1,
        coverImg: Xd,
        title: 'Adobe XD to overtake Figma in 2025',
        author: 'Prathmesh Gaidhane',
        description: 'In a move that will reshape the design software landscape, Adobe today announced a definitive agreement to acquire Figma, the leading web-based design platform.',
    },
]

export default function Blogs() {
    return (
        <div className='mt-8'>
            <div className="flex flex-col lg:flex-row gap-24 w-fit mx-auto">
                <div className="lg:w-[650px] rounded-3xl bg-gradient-to-r from-gray-800 via-gray-900 to-black overflow-hidden relative">
                    <Image
                        src={sotw.coverImg}
                        height={900}
                        width={900}
                        quality={100}
                        alt="Story of the Week"
                        className="w-[650px] h-[650px] rounded-3xl object-cover opacity-70"
                    />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <div className='absolute top-4'>
                            <h2 className="text-white text-3xl font-semibold">Story of the Week</h2>
                        </div>
                        <div>
                            <h3 className="text-white text-2xl font-bold mb-4">
                                {sotw.title}
                            </h3>
                            <div className="flex items-center w-fit gap-x-48 justify-between text-white">
                                <span className="mr-2">{sotw.authorName}</span>
                                <div className="flex items-center gap-x-3 cursor-pointer">
                                    <span className='text-white'>Read blog</span>
                                    <div className='rounded-full bg-white p-1 text-black'>
                                        <HiChevronRight className='h-3 w-3' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-fit grid gap-y-6">
                    {
                        blogs.map((blogs, index) => (
                            <div key={blogs.index} className="flex min-h-[180px] max-w-[570px] rounded-3xl gap-x-3 p-6 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                                <Image
                                    src={blogs.coverImg}
                                    alt={`coverImg-${index}`}
                                    height={150}
                                    width={150}
                                    quality={100}
                                    className="w-[150px] h-[150px] rounded-xl mr-4"
                                />
                                <div>
                                    <div className='mb-4'>
                                        <h1 className="text-lg font-semibold">
                                            {blogs.title}
                                        </h1>
                                        <p className="text-sm text-gray-600 mt-2">
                                            {blogs.description}
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-x-3 font-semibold'>
                                        <h1 className='text-sm text-subtitle'>by {blogs.author}</h1>
                                        <div className='rounded-full h-1 w-1 bg-subtitle'></div>
                                        <p className="text-sm text-subtitle">3 days ago</p>
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
