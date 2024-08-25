import React from 'react'
import IndiaMap from '../../public/india-svg.svg'
import Image from 'next/image'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function Contactform() {
    return (
        <div className='w-fit mt-44 mx-auto'>
            <div className='flex gap-x-64 w-fit'>
                <Image
                    src={IndiaMap}
                    alt='IndiaMap'
                    height={500}
                    width={500}
                    quality={100}
                    className='h-fit w-fit'
                />
                <div className='lg:w-[400px] lg:h-fit shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-7 rounded-3xl'>
                    <h1 className='text-xl mb-6 font-semibold'>Get in touch with us!</h1>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='col-span-1'>
                            <Label htmlFor='firstName'>First Name</Label>
                            <Input className='h-fit py-3.5 px-3.5 rounded-xl mt-3' id='firstName' type='text' placeholder='e.g. John' />
                        </div>
                        <div className='col-span-1'>
                            <Label htmlFor='lastName'>Last Name</Label>
                            <Input className='h-fit py-3.5 px-3.5 rounded-xl mt-3' id='lastName' type='text' placeholder='e.g. Doe' />
                        </div>
                        <div className='col-span-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input className='h-fit py-3.5 px-3.5 rounded-xl mt-3' id='email' type='email' placeholder='e.g. doejohn@blemense.com' />
                        </div>
                        <div className='col-span-2'>
                            <Label htmlFor='contactNumber'>Contact Number</Label>
                            <Input className='h-fit py-3.5 px-3.5 rounded-xl mt-3' id='contactNumber' type='tel' placeholder='With country code e.g. +91' />
                        </div>
                        <Button className='h-fit mt-4 rounded-xl bg-primaryTheme col-span-2 py-3.5 text-white'>Submit</Button>
                        <p className='text-sm col-span-2'>By submitting you agree to our <span className='text-primaryTheme underline'>Terms</span> and <span className='text-primaryTheme underline'>Conditions</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
