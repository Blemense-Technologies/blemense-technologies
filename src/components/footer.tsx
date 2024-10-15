import Image from "next/image";
import Link from "next/link";
import { Label } from "./ui/label";
import Logo from "../../public/Logo.png";

const footerData = {
    company: {
        name: "BLEMENSE TECHNOLOGIES",
        tagline: "Empowering businesses through innovative software solutions. From concept to deployment, we build the future, one line of code at a time.",
        address: {
            country: "India",
            location: "4th Floor, Ganga Residency, Shahu Nagar, Manewada, Nagpur, Maharashtra",
        },
        email: "hello@blemense.tech",
    },
    links: [
        {
            title: "Quick links",
            items: [
                { name: "Book a slot", href: "/book" },
                { name: "About us", href: "/about" },
                { name: "Contact us", href: "/contact" },
                { name: "Blogs", href: "/blogs" },
                { name: "Careers", href: "/careers" },
                { name: "FAQs", href: "/faqs" },
            ],
        },
        {
            title: "Products",
            items: [
                { name: "KurukSaarthi", href: "/products/kuruksaarthi" },
                { name: "KalaKruti", href: "/products/kalakruti" },
                { name: "Linki.fy", href: "/products/linkify" },
            ],
        },
        {
            title: "Apps",
            items: [
                { name: "SalesTracker", href: "/apps/salestracker" },
                { name: "InvoiceGenie", href: "/apps/invoicegenie" },
                { name: "EMI Calculator", href: "/apps/emic" },
                { name: "QuickNote", href: "/apps/quicknote" },
                { name: "Hike Calculator", href: "/apps/hike-calculator" },
            ],
        },
        {
            title: "Legal",
            items: [
                { name: "Terms of service", href: "/legal/terms" },
                { name: "Privacy Policy", href: "/legal/privacy" },
                { name: "Cookie Policy", href: "/legal/cookies" },
                { name: "Licensing", href: "/legal/licensing" },
                { name: "GDPR compliance", href: "/legal/gdpr" },
            ],
        },
    ],
};

const Building06Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
        <path d="M12 2H6C3.518 2 3 2.518 3 5V22H15V5C15 2.518 14.482 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 8H15V22H21V11C21 8.518 20.482 8 18 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 6L10 6M8 9L10 9M8 12L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.5 22V18C11.5 17.0572 11.5 16.5858 11.2071 16.2929C10.9142 16 10.4428 16 9.5 16H8.5C7.55719 16 7.08579 16 6.79289 16.2929C6.5 16.5858 6.5 17.0572 6.5 18V22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);

const Mail02Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
        <path d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.01576 13.4756C2.08114 16.5411 2.11382 18.0739 3.24495 19.2093C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.755 19.2093C21.8862 18.0739 21.9189 16.5411 21.9842 13.4756C22.0053 12.4899 22.0053 11.51 21.9842 10.5244C21.9189 7.45883 21.8862 5.92606 20.755 4.79063C19.6239 3.6552 18.0497 3.61565 14.9012 3.53654C12.9607 3.48778 11.0393 3.48778 9.09882 3.53653C5.95033 3.61563 4.37608 3.65518 3.24495 4.79062C2.11382 5.92605 2.08113 7.45882 2.01576 10.5243C1.99474 11.51 1.99474 12.4899 2.01576 13.4756Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);

export default function Footer() {
    const { company, links } = footerData;

    return (
        <div className="lg:px-16 mb-24">
            <footer className="bg-[#1C1C1C] text-gray-300 py-16 rounded-[35px]">
                <div className="container mx-auto px-4 flex flex-wrap justify-between">
                    {/* Company Information */}
                    <div className="w-full md:w-1/4 mb-8">
                        <Image src={Logo} alt="Blemense Logo" className="mb-4 h-16 w-16" />
                        <p className="text-sm">{company.tagline}</p>
                        <div className="hidden lg:block md:block">
                            <div className="mt-6">
                                <div className="flex space-x-3 items-center mb-3">
                                    <Building06Icon className="h-4 w-4 text-white" />
                                    <h4 className="font-bold">Headquarters, {company.address.country}</h4>
                                </div>
                                <p className="text-sm text-[#A2A2A2]">{company.address.location}</p>
                            </div>
                            <div className="mt-6">
                                <div className="flex space-x-3 items-center mb-3">
                                    <Mail02Icon className="h-4 w-4 text-white" />
                                    <h4 className="font-bold">Mail us at</h4>
                                </div>
                                <p className="text-sm text-[#A2A2A2]">{company.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="w-full grid grid-cols-2 md:w-2/3 md:flex lg:w-2/3 lg:flex justify-around">
                        {links.map((section, index) => (
                            <div key={index} className="w-fit mb-8">
                                <h4 className="font-bold mb-4">{section.title}</h4>
                                <ul className="space-y-2 text-sm">
                                    {section.items.map((item, idx) => (
                                        <li key={idx}>
                                            <Link href={item.href} passHref>
                                                <Label className="hover:underline text-[#7B7B7B] hover:text-secondaryTheme cursor-pointer">{item.name}</Label>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Mobile View Only */}
                    <div className="md:hidden lg:hidden w-full md:w-1/4 mb-8">
                        <div className="mt-6">
                            <div className="flex space-x-3 items-center mb-3">
                                <Building06Icon className="h-4 w-4 text-white" />
                                <h4 className="font-bold">Headquarters, {company.address.country}</h4>
                            </div>
                            <p className="text-sm text-[#A2A2A2]">{company.address.location}</p>
                        </div>
                        <div className="mt-6">
                            <div className="flex space-x-3 items-center mb-3">
                                <Mail02Icon className="h-4 w-4 text-white" />
                                <h4 className="font-bold">Mail us at</h4>
                            </div>
                            <p className="text-sm text-[#A2A2A2]">{company.email}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};