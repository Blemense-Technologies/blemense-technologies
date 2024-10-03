import Image from "next/image";
import ReactLogo from "../../public/logo-react.svg";
import JSLogo from "../../public/logo-js.svg";
import { PrimaryShadow } from "@/constants/shadows";

export default function CodeSnippet(props: {classes : string}) {
    return (
        <div className={props.classes + ` h-fit w-fit px-3 py-4 rounded-xl bg-[#202020] border border-[#333333] lg:${PrimaryShadow} md:${PrimaryShadow}`}>
            <div className="flex w-fit space-x-3 items-center">
                <div className="bg-[#2A2A2A] px-3 flex items-center w-fit h-fit p-2 space-x-3 rounded-[12px]">
                    <Image
                        src={ReactLogo}
                        height={50}
                        width={50}
                        alt="react_js"
                        className="h-4 w-4 text-[#04D0F7]"
                    />
                    <h1 className="text-white text-sm">app.tsx</h1>
                </div>
                <div className="bg-[#2A2A2A] px-3 flex items-center w-fit h-fit p-2 space-x-3 rounded-[12px]">
                    <Image
                        src={JSLogo}
                        height={50}
                        width={50}
                        alt="js_logo"
                        className="h-4 w-4 text-[#F7DF1E]"
                    />
                    <h1 className="text-white text-sm">index.js</h1>
                </div>
                <div className="flex items-center space-x-3 w-fit">
                    <div className="rounded-full h-2.5 w-2.5 bg-[#F45550]"></div>
                    <div className="rounded-full h-2.5 w-2.5 bg-[#F4B63D]"></div>
                    <div className="rounded-full h-2.5 w-2.5 bg-[#30C044]"></div>
                </div>
            </div>
            <div className="flex space-x-4 mt-4">
                <div className="grid items-center space-y-2 bg-[#2a2a2a] h-fit w-fit p-2 rounded-lg">
                    {
                        Array.from({ length: 4 }).map((_, index) => (
                            <div className="px-2 rounded-[12px]" key={index}>
                                <span className="text-[#FFB041] font-medium">{index + 1}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full bg-[#2a2a2a] rounded-[12px]">
                    <div className="grid items-center space-y-2 px-4 py-2 w-fit">
                        <p><span className="text-[#7E6DFF]">const</span> <span className="text-[#04D0F7]">dev</span> <span className="text-[#FF9704]">=</span> <span className="text-[#7E6DFF]">{`() => {`}</span></p>
                        <p className="text-white">{`<`}<span className="text-[#FF4F04]">h1</span>{`>`} Say hi ! {`</`}<span className="text-[#FF4F04]">h1</span>{`>`}</p>
                        <p className="text-[#7E6DFF]">{`}`}</p>
                        <p className="text-white"><span className="text-[#7E6DFF]">export</span> <span className="text-[#04D0F7]">dev</span>;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
