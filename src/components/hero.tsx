import React from 'react'
import Image from 'next/image'
import HeroBackground from '../../public/hero-bg.png'

export default function Hero() {
  return (
    <div className=''>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-2xl text-center'>Building <span className='text-primaryTheme'>NextGen</span> Tech <span className='text-secondaryTheme'>Solutions</span></h1>
            <p className='text-subtitle'>We bring together creative minds and technical expertise to craft innovative solutions that empower your business.</p>
        </div>
        <div className='absolute inset-0'>
            <Image 
                src={HeroBackground}
                height={500}
                width={500}
                quality={100}
                alt='HeroBackground'
                className='h-full w-full'
            />
        </div>
    </div>
  )
}
