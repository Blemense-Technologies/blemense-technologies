import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='h-fit w-full py-3 px-6 sticky top-0 flex items-center justify-between'>
            <div className='h-fit w-fit'>
                <Image
                    src={'/Logo_Dark.png'}
                    height={40}
                    width={40}
                    alt={'Logo_Dark'}
                    quality={100}
                    className=''
                />
            </div>
            <div className='flex w-fit gap-x-12'>
                <Link href={"/home"}>
                    <div className=' text-sm'>
                        <h1>Home</h1>
                    </div>
                </Link>
                <Link href={"/products"}>
                    <div className=' text-sm'>
                        <h1>Products</h1>
                    </div>
                </Link>
                <Link href={"/blogs"}>
                    <div className=' text-sm'>
                        <h1>Blogs</h1>
                    </div>
                </Link>
                <Link href={"/careers"}>
                    <div className=' text-sm'>
                        <h1>Careers</h1>
                    </div>
                </Link>
                <Link href={"/try-us"}>
                    <div className=' text-sm'>
                        <h1>Try us!</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}
