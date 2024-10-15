import { socialHandles } from '@/constants/socials'
import React from 'react'

export default function SocialMedia() {
    return (
        <div>
            <section className="md:mt-28 lg:mt-28 p-8 text-white w-full md:w-fit lg:w-fit mx-auto text-center space-y-6">
                {/* Heading */}
                <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold">
                    {""}
                    <span className="text-gradient font-semibold">Connect</span> with us
                </h2>
                <p className="text-white text-sm lg:text-base md:text-base">
                    Join our vibrant community to engage with our team, participate in discussions, and get exclusive content.
                </p>

                {/* Social Media Links */}
                <div className="grid grid-cols-2 gap-4">
                    {socialHandles.map((links, index) => (
                        <div
                            className={`border-gradient-${links.border} p-3 rounded-full flex items-center justify-center space-x-2`}
                            key={index}
                        >
                            <links.icon className="text-white" />
                            <a
                                href={links.href}
                            >
                                <span>{links.label}</span>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Email Section */}
                <div className="pt-6 border-t border-gray-700">
                    <p className="normal-gradient text-lg font-medium">Or Mail us at</p>
                    <a href="mailto:hello@blemense.tech" className="text-gradient text-3xl font-extrabold">
                        hello@blemense.tech
                    </a>
                </div>
            </section>
        </div>
    )
}
