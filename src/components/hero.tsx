import React from 'react'
import Image from 'next/image'
import HeroBackground from '../../public/hero-bg.png'
import CodeSnippet from './code-snippet'

export default function Hero() {
  return (
    <div className='relative h-screen w-full'>
      <CodeSnippet classes='absolute bottom-64 left-36' />
      <CodeSnippet classes='absolute bottom-96 right-36' />
    </div>
  )
}
