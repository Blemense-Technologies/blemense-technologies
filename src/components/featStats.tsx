import React from 'react'

type FeatureStatProps = {
    value: string;
    label: string;
};

export default function FeatStats({ value, label }: FeatureStatProps) {
    return (
        <div className="space-y-2">
            <p className="text-3xl md:text-4xl lg:text-4xl font-bold">{" "}
                <span className="text-gradient">{value}</span></p>
            <p className="text-sm md:text-base lg:text-base text-gray-400">{label}</p>
        </div>
    )
}
