import React from 'react'
import FeatStats from './featStats'

export default function Feats() {
    return (
        <div className='md:mb-20 lg:mb-20'>
            <section className="p-8 text-white">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-xl md:text-3xl lg:text-3xl font-bold">
                        Driving Success for{" "}
                        <span className="font-bold text-gradient">Our Clients</span>
                    </h2>
                    <p className="text-sm md:text-base lg:text-base text-gray-400 max-w-2xl mx-auto">
                        Here’s how our solutions have empowered businesses to boost
                        performance, increase conversions, and scale new heights.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <FeatStats value="15%" label="Jump in SEO Score" />
                    <FeatStats value="3X" label="Increase in Website Traffic" />
                    <FeatStats value="55%" label="Increase in Conversion Rate" />
                    <FeatStats value="25%" label="Increase in Website Traffic" />
                </div>
            </section>
        </div>
    )
}
