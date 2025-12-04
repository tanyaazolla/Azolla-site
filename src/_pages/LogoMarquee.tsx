'use client'

import useBreakpoints from "@/hooks/useBreakPoints";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
    { src: '/images/azolla_logo.svg', alt: 'Logo 1' },
    { src: '/images/azolla_logo.svg', alt: 'Logo 2' },
    { src: '/images/azolla_logo.svg', alt: 'Logo 3' },
    { src: '/images/azolla_logo.svg', alt: 'Logo 4' },
    { src: '/images/azolla_logo.svg', alt: 'Logo 5' },
    {src: '/images/azolla_logo.svg', alt: 'Logo 6' },
    { src: '/images/azolla_logo.svg', alt: 'Logo 7' },
    { src: '/images/azolla_logo.svg', alt: 'Logo 8' },
    { src: '/images/azolla_logo.svg', alt: 'Logo 9' },
    { src: '/images/azolla_logo.svg', alt: 'Logo 10' },
];

const LogoMarquee = () => {
    const {isXs} = useBreakpoints();
    const extendedLogos = [...logos, ...logos];

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex whitespace-nowrap">
                <Marquee speed={30} >
                {extendedLogos.map((logo, index) => (
                    <Image key={index} width={!isXs ? 90: 70} height={!isXs? 32: 24} src={logo.src} alt={logo.alt} className="mr-16" />
                ))}
                </Marquee>
            </div>
        </div>
    );
};

export default LogoMarquee;
