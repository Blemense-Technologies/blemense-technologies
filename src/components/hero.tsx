"use client"
import React from 'react'
import Typed from "typed.js"
import CodeSnippet from './code-snippet'

export default function Hero() {
  const heroTitle = React.useRef(null);

  React.useEffect(() => {
    const titleOptions = {
      strings: ['We build NextGen Tech Solutions'],
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    }
    const typed = new Typed(heroTitle.current, titleOptions);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='relative h-screen w-full'>
      <div className='w-full lg:w-fit absolute top-[16rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='w-fit lg:w-2/3 text-center mx-auto'>
          <span className='text-white text-xl lg:text-4xl font-bold' ref={heroTitle}></span>
          <span
            className="inline-block ml-1 h-full align-baseline animate-blink text-white leading-none"
          >
            |
          </span>
          <p className='text-xs px-12 lg:text-base text-white font-light mt-6'>Our cutting-edge software solutions are designed to streamline your operations, enhance efficiency, and drive innovation. Partner with us to unlock your full potential and achieve lasting success and elevate your business.</p>
        </div>
      </div>
      <CodeSnippet classes='absolute bottom-0 lg:bottom-64 lg:left-36 md:left-16' />
      <CodeSnippet classes='hidden lg:block absolute bottom-96 lg:right-36 md:right-16' />
    </div>
  )
}
