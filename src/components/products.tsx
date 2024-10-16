import Image from "next/image";
import AndroidLogo from "../../public/Android-Logo.svg";
import IOSLogo from "../../public/IOS-Logo.svg";
import ProductImage from "../../public/Product-Image.png";

export default function Products() {
    return (
        <section className="p-8 text-white max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold ">
                    We create Innovative {""}<span className="text-gradient">Software Solutions</span>
                </h2>
                <p className="text-gray-400 text-lg">
                    Explore our range of cutting-edge products designed to optimize performance, enhance efficiency, and drive business growth.
                </p>
            </div>

            {/* Product Card Section */}
            <div className="mt-12 p-8 bg-[#1B1B1B] rounded-[20px] flex flex-col md:flex-row items-start gap-8">
                {/* Left Section - Text */}
                <div className="md:w-1/2 space-y-4">
                    <p className="text-lg text-gray-400">Introducing</p>
                    <h3 className="text-3xl font-semibold">KurukSaarthi <span className="text-sm">v 1.0.0</span></h3>

                    <blockquote className="text-xl font-medium">
                        “India's <span className="font-bold text-[#F47216]">Best</span> Voting List app”
                    </blockquote>

                    <p className="text-gray-400">
                        Your brand new Voting List Management tool ensuring your campaign remains smooth and successful!
                    </p>

                    {/* App Availability Section */}
                    <div className="mt-4 space-y-2">
                        <p className="text-gray-400">Available for</p>
                        <div className="flex space-x-4">
                            <div className="flex items-center space-x-2">
                                <Image
                                    src={AndroidLogo}
                                    alt="Android"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Image
                                    src={IOSLogo}
                                    alt="iOS"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - App Image */}
                <div className="md:w-1/2 flex justify-center">
                    <Image
                        src={ProductImage}
                        alt="KurukSaarthi App Preview"
                        width={500}
                        height={900}
                        className="rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
