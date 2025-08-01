import React, { ReactNode } from 'react';

type GradientIconProps = {
    icon: ReactNode;
};

export default function GradientIcon({ icon }: GradientIconProps) {
    return (
        <div
            className={`relative inline-flex items-center justify-center p-3.5 
      rounded-full text-white
      border-none outline-none
      before:absolute before:inset-0 before:rounded-full
      before:p-[2px] before:bg-gradient-to-r before:from-[#EFAA3A] before:to-[#2E3389]
      before:z-[-1] before:content-[''] before:block before:w-full before:h-full
      after:absolute after:inset-[2px] after:rounded-full after:bg-[#202020] hover:after:bg-[#272727] bg-opacity-0`}
        >
            <span className="z-[10] text-white">{icon}</span>
        </div>
    );
}
