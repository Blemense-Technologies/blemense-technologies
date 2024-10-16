"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { LineIcon, QuoteIconOpen } from "@/constants/icons";

type Avatar = {
    id: number;
    src: string;
    alt: string;
};

type Testimonial = {
    quote: string;
    author: string;
    designation: string;
};

type TestimonialsSectionProps = {
    averageRating: number;
    avatars: Avatar[];
    additionalCount: number;
    testimonials: Testimonial[];
};

export default function Testimonials({ averageRating, avatars, additionalCount, testimonials }: TestimonialsSectionProps) {
    return (
        <section className="p-8 text-white max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Section - Average Rating */}
                <div className="md:w-1/3 space-y-4">
                    <div>
                        {""}
                        <span className="text-5xl font-bold text-gradient">{averageRating.toFixed(1)}</span>
                    </div>
                    <p className="text-lg text-gray-400">Average Client Rating</p>

                    <div className="flex items-center space-x-2 mt-4">
                        {avatars.map((avatar) => (
                            <Image
                                key={avatar.id}
                                src={avatar.src}
                                alt={avatar.alt}
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                        ))}
                        <div className="h-fit w-fit p-4 flex items-center justify-center border border-[#646464] bg-[#373737] rounded-full">
                            +{additionalCount}
                        </div>
                    </div>
                </div>

                {/* Web View - Testimonials */}
                <div className="hidden md:w-2/3 md:grid lg:grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-6 bg-[#1B1B1B] rounded-[20px] space-y-4"
                        >
                            <div className="text-lg flex justify-start space-x-4 text-[#A9A9A9]">
                                <span><QuoteIconOpen className="text-secondaryTheme " /></span>
                                <p className="text-sm">{testimonial.quote}</p>
                            </div>
                            <div className="flex space-x-3">
                                <LineIcon className="text-white" />
                                <div className="text-sm text-gray-400">
                                    <p className="text-white">{testimonial.author}</p>
                                    <p className="text-[#7B7B7B]">{testimonial.designation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Mobile View - Swiper Carousel */}
                <div className="block md:hidden lg:hidden w-full">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }}
                        pagination={{
                            clickable: true,
                            el: ".custom-pagination",
                        }}
                        className="p-4"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-6 bg-[#1B1B1B] rounded-[20px] space-y-4">
                                    <div className="text-lg flex justify-start space-x-4 text-[#A9A9A9]">
                                        <span>
                                            <QuoteIconOpen className="text-secondaryTheme" />
                                        </span>
                                        <p className="text-sm">{testimonial.quote}</p>
                                    </div>
                                    <div className="flex space-x-3">
                                        <LineIcon className="text-white" />
                                        <div className="text-sm text-gray-400">
                                            <p className="text-white">{testimonial.author}</p>
                                            <p className="text-[#7B7B7B]">{testimonial.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination */}
                    <div className="custom-pagination mt-4 flex items-center justify-center"></div>
                </div>
            </div>
        </section>
    );
};
