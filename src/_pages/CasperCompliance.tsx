'use client';

import CasperCard from "@/components/CasperCard/CasperCard";
import ComplainceCardAnimation from "./ComplainceCardAnimation";
import { Divider } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import useBreakpoints from "@/hooks/useBreakPoints";


interface CasperType {
  id: number,
  title: string | JSX.Element,
  content: string,
  image: string,
  button: boolean,
  buttonName: string,
  buttonLink: string
}
    

function CasperCompliance() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const complianceSectionRef = useRef<HTMLDivElement>(null);
  const { isLg ,isXl } = useBreakpoints();

  const ComplianceCardData:CasperType[] = [
    {
      id:1,
      title: 'EUA and Compliance Balance Estimation',
      content: 'Track your EUA exposure and FEUM compliance balance in real-time.',
      image: '/images/casper/Feature-1(Estimation).jpg',
      button: false,
      buttonName: 'click',
      buttonLink: ''
    },
    {
        id:2,
        title: (isXl || isLg) ? (
          <>
            <span>Determine the</span>
            <br />
            <span>cost exposure</span>
          </>
        ) : 'Determine the cost exposure',
        content: 'Compute your potential EU-ETS exposure and FUEL EU penalty based on your emissions data.',
        image: '/images/casper/Feature-2(Cost-Exposure).jpg',
        button: false,
        buttonName: 'SEO settings',
        buttonLink: ''
      },
      {
        id:3,
        title: 'Pool Dive',
        content: 'Join or create pools on our global marketplace to connect with other participants. Buy or sell surplus balances and significantly reduce your compliance costs!',
        image: '/images/casper/Feature-3(Pool-Dive).jpg',
        button: false,
        buttonName: 'Create your sitemap',
        buttonLink: ''
      },
      {
        id:4,
        title: 'Mitigation Fuel Mix',
        content: "Scenario analysis of optimal biofuel blends or RFNBOs usage to offset penalty and EUA exposure exclusive to vessel's trade patterns.",
        image: '/images/casper/Feature-4(Mitigation-Fuel-Mix).jpg',
        button: false,
        buttonName: 'SEO settings',
        buttonLink: ''
      },
      {
        id:5,
        title: 'Biofuel Sourcing',
        content: 'Access our network of reliable biofuel suppliers to source sustainable fuels and meet your compliance obligations. CASPER™ provides expert guidance and support throughout the sourcing process.',
        image: '/images/casper/Feature-5(Biofuel-sourcing).jpg',
        button: false,
        buttonName: 'Settings alt attributes',
        buttonLink: ''
      }
    ];

  const handleScroll = () => {
    const windowCenter = window.innerHeight / 2;

    let closestCardId: number | null = null;
    let closestCardDistance = Infinity;

    cardRefs.current.forEach((card) => {
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        const distanceToCenter = Math.abs(windowCenter - cardCenter);

        if (distanceToCenter < closestCardDistance) {
          closestCardDistance = distanceToCenter;
          closestCardId = Number(card.getAttribute('data-id'));
        }
      }
    });

    setActiveCard(closestCardId);
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll);
          handleScroll();
        } else {
          window.removeEventListener('scroll', handleScroll);
          setActiveCard(null);
        }
      },
      {
        root: null, 
        threshold: 0.2, 
      }
    );

    if (complianceSectionRef.current) {
      observer.observe(complianceSectionRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (complianceSectionRef.current) {
        observer.unobserve(complianceSectionRef.current);
      }
    };
  }, []);

  const opacityClass = activeCard ? 'opacity-20' : 'opacity-100';

  return (
    <>
    <div id='casper-learn-more' className='lg:flex w-full justify-center items-center bg-white xl:px-5 px-10 py-10 mt-8 xxs:pt-20'>
        <div className={`lg:w-1/2 w-full ${opacityClass}`}>
            <div className='py-2 md:py-2 xl:p-10 text-black !leading-[1] text-responsive-2xl font-[600]'>
                <p>
                    All the Tools You Need <br/>
                    for Comprehensive <br/>
                    Compliance, Built-In.
                </p>
            </div>
        </div>
        <div className={`flex lg:w-1/2 w-full ${opacityClass}`}>
            <div className='py-2 md:py-2 xl:p-10 text-black !leading-[1.2] text-responsive-md font-[400] xxs:pt-8'>
                <p>
                Our integrated platform for your EU-ETS, FUEM and other future emission compliance needs.
                </p>
            </div> 
        </div>
      </div>

      <div className="mb-16"
      >
        <div ref={complianceSectionRef} className="lg:hidden flex flex-col justify-center items-center gap-16">
        {ComplianceCardData.map((card, index) => (
         <div
         key={index}
         data-id={card.id}
         ref={(el) => cardRefs.current[index] = el as HTMLDivElement}
         className={`transition-opacity duration-300 ${activeCard === card.id ? 'opacity-100' : 'opacity-20'}`}
       >
            <CasperCard
              key={index}
              id={card.id}
              title={card.title}
              content={card.content}
              image={card.image}
              button={card.button}
              buttonName={card.buttonName}
              buttonLink={card.buttonLink}
            />
            </div>
        
         ))} 
        </div>
        <div className="lg:block hidden mb-32">
        <ComplainceCardAnimation ComplianceCardData={ComplianceCardData}/>

        </div>
      </div>
      <Divider/>
    </>
  );
}

export default CasperCompliance;
