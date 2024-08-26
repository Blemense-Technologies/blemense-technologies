import React from 'react'

const perks = [
    {
        index: 1,
        label: 'Innovation',
        description: "We're passionate about pushing boundaries and developing cutting-edge software solutions. We believe the best way to achieve this is by fostering a culture of innovation. You'll be encouraged to experiment, take risks, and come up with creative solutions to complex problems."
    },
    {
        index: 2,
        label: 'Growth',
        description: "We offer a comprehensive learning and development program that includes mentorship opportunities with senior developers, access to online courses and training platforms, and tuition reimbursement for relevant certifications and degrees."
    },
    {
        index: 3,
        label: 'Work Environment',
        description: "We believe in creating a positive and collaborative work environment where you feel valued, respected, and supported. We foster a culture of teamwork and open communication, where everyone has a voice and feels comfortable sharing ideas."
    },
    {
        index: 4,
        label: 'Global Clients',
        description: "Our software solutions have a global impact, reaching a diverse range of international clients. Working on projects for a variety of clients across the world exposes you to different cultures, perspectives, and industry best practices."
    },
]

export default function Careers() {
    return (
        <div className='mt-7 px-5 lg:px-0'>
            <div className="w-fit mx-auto">
                <div className='w-fit mx-auto'>
                    <h2 className="text-2xl text-center font-bold mb-3">
                        Be a <span className="text-primaryTheme">Part</span> of Our <span className="text-secondaryTheme">Team</span>
                    </h2>
                    <p className="text-sm text-center text-subtitle dark:text-subtitleDark mb-12">
                        Be the difference. We value passionate, responsible minds who build solutions together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {
                        perks.map((perks) => (
                            <div key={perks.index} className="p-6 h-fit rounded-3xl w-full lg:w-[400px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:bg-bgDark dark:border-[1.5px] dark:border-borderDark bg-white">
                                <h3 className="lg:text-lg font-semibold mb-2">{perks.label}</h3>
                                <p className="text-subtitle dark:text-subtitleDark text-xs lg:text-sm">
                                    {perks.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
