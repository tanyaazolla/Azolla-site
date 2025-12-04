'use client';

import { Image } from '@nextui-org/react';
import React from 'react';


const solutionData = [
    {
      title: 'Seamless API Integration',
      description: 'Easily integrate CASPER™ with your existing noon report software for a streamlined workflow.',
      src:'/images/performace.svg',
      alt:'performace'
    },
    {
      title: 'Data Validation and Verification',
      description: 'Ensure data accuracy and integrity with rigorous validation and verification processes with the preferred Classification Society.',
      src:'/images/scalability.svg',
      alt:'scalability'
    },
    {
      title: 'Secure Data Management Practices',
      description: 'We prioritize the security and privacy of your data, adhering to the General Data Protection Regulation (GDPR) and our information security obligations.',
      src:'/images/security.svg',
      alt:'security'
    },
  ];

function CasperSolutionCards() {
  return (
    <>
      <div className='hidden lg:grid grid-cols-3 gap-5 py-10 xl:px-5 px-10'>
        {solutionData.map((card, index) => (
            <div key={index} className="xl:p-10 w-50 h-50">
            <Image
            alt="casper_solution_card"
            src={card.src}
            className='pb-5'
            />
             <p className='py-2 md:py-2 text-black !leading-[1.4] text-responsive-lg font-[600]'>{card.title}</p>
             <p className='py-2 md:py-2 text-dark_gray !leading-[1.4] text-responsive-sm font-[400]'>{card.description}</p>
         </div>
        ))}
      </div>

       <div className='block lg:hidden p-10'>
        {solutionData.map((card, index) => (
                <div key={index} className="w-full xl:p-10 pb-8">
                    <Image
                      alt={card.alt}
                      src={card.src}
                      className='pb-2'
                      />
                    <p className='py-2 md:py-2 text-black !leading-[1.2] text-responsive-lg font-[600]'>{card.title}</p>
                    <p className='py-2 md:py-2 text-dark_gray !leading-[1.2] text-responsive-sm font-[400]'>{card.description}</p>
                </div>
        ))}
       </div>
    </>
  );
}

export default CasperSolutionCards;
