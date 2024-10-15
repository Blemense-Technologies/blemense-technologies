"use client"
import React, { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { timeSlotOptions, concernOptions } from '@/constants/slot-options';

export default function SlotBook() {
    const [date, setDate] = useState<string | null>(null);

    return (
        <div className='md:mt-40 lg:mt-40 flex flex-col lg:flex-row gap-8 p-6 text-white w-full lg:max-w-4xl lg:mx-auto rounded-md'>
            {/* Text Section */}
            <div className="lg:w-1/2 space-y-4">
                <h2 className="text-xl lg:text-3xl text-center md:text-left lg:text-left font-bold">
                {" "}
                <span className="text-gradient font-bold">Book your Slot</span> Today !
                </h2>
                <p className="hidden lg:block md:block text-white">
                    Book a time with our experts to discuss your unique needs, explore
                    tailored solutions, and take the first step toward achieving your
                    business goals.
                </p>
                <p className="lg:hidden md:hidden text-center md:text-left lg:text-left text-sm text-white">
                    Book a time with our experts to discuss your unique needs, explore
                    tailored solutions.
                </p>
                <p className="hidden lg:block md:block text-sm text-[#7B7B7B]">
                    <em>Note :</em> Response time may vary, subjected to slot demands.
                </p>
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="lg:col-span-1 space-y-2">
                    <Label className="block text-sm font-medium">Date</Label>
                    <Input
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                        className="rounded-[20px] px-7 w-full lg:w-[200px] h-[60px] bg-[#1B1B1B] text-white border-none"
                    />
                </div>

                <div className="lg:col-span-1 space-y-2">
                    <Label className="block text-sm font-medium">Select time slot</Label>
                    <Select>
                        <SelectTrigger className="rounded-[20px] px-7 w-full lg:w-[200px] h-[60px] bg-[#1B1B1B] border-none outline-none focus:ring-0 focus:ring-offset-0">
                            <SelectValue placeholder="Select a slot" />
                        </SelectTrigger>
                        <SelectContent className='bg-[#1B1B1B] border-none outline-none focus:ring-0 focus:ring-offset-0'>
                            <SelectGroup className='text-white'>
                                <SelectLabel>Choose your slot</SelectLabel>
                                {timeSlotOptions.map((options, index) => (
                                    <SelectItem key={index} value={options.value}>{options.label}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2 lg:col-span-2">
                    <Label className="block text-sm font-medium">
                        What’s your concern?
                    </Label>
                    <Select>
                        <SelectTrigger className="rounded-[20px] px-7 h-[60px] bg-[#1B1B1B] border-none outline-none focus:ring-0 focus:ring-offset-0">
                            <SelectValue placeholder="Select your area of concern" />
                        </SelectTrigger>
                        <SelectContent className='rounded-[20px] border-none bg-[#1B1B1B] outline-none focus:ring-0 focus:ring-offset-0'>
                            <SelectGroup className='text-white'>
                                <SelectLabel>Select your concern</SelectLabel>
                                {concernOptions.map((options, index) => (
                                    <SelectItem key={index} value={options.value}>{options.label}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <p className="lg:hidden md:hidden text-sm text-gray-500">
                <em>Note :</em> Response time may vary, subjected to slot demands.
            </p>
        </div>
    )
}
