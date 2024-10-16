import Image from "next/image";
import AndroidLogo from "../../public/Android-Logo.svg";
import IOSLogo from "../../public/IOS-Logo.svg";
import ProductImage from "../../public/Product-Image.png";

export default function Products() {
    return (
        <section className="p-8 text-white max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <h2 className="text-xl md:text-3xl lg:text-3xl font-bold ">
                    We create Innovative {""}<span className="text-gradient">Software Solutions</span>
                </h2>
                <p className="text-white">
                    Explore our range of cutting-edge products designed to optimize performance, enhance efficiency, and drive business growth.
                </p>
            </div>

            {/* Product Card Section */}
            <div className="mt-12 p-4 lg:p-16 md:p-16 bg-[#1B1B1B] rounded-[20px] flex flex-col md:flex-row items-start gap-8">
                {/* Left Section - Content */}
                <div className="md:w-1/2">
                    <p className="text-lg font-thin text-white">Introducing</p>
                    <h3 className="text-3xl font-semibold">KurukSaarthi <span className="text-sm text-[#7B7B7B]">v 1.0.0</span></h3>

                    <blockquote className="mt-7 text-xl font-medium">
                        “India's <span className="font-bold text-[#F47216]">Best</span> Voting List app”
                    </blockquote>

                    <p className="text-white mt-3">
                        Your brand new Voting List Management tool ensuring your campaign remains smooth and successful!
                    </p>

                    <div className="mt-12 space-y-2">
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

                {/* Product Images */}
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
