import React from 'react'
import Image from 'next/image'
import HeroBackground from '../../public/hero-bg.png'
import CodeSnippet from './code-snippet'

export default function Hero() {
  return (
    <div className='relative h-screen w-full'>
      <CodeSnippet />
    </div>
  )
}
