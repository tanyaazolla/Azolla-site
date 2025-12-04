'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FlipLogos from '../components/Flip/Flip';

interface logo {
  id: string;
  title: string;
  image: string;
}

const services = [
  { id: 'maersk', title: 'Maersk', image: 'maersk.webp' },
  {
    id: 'maersk-tankers',
    title: 'Maersk Tankers',
    image: 'maersk-tankers.png',
  },
  { id: 'genco', title: 'Genco', image: 'genco.png' },
  {
    id: 'arcelor-mittal',
    title: 'Arcelor Mittal',
    image: 'arcelor-mittal.png',
  },
  { id: 'nissen-kaiun', title: 'Nissen Kaiun', image: 'nissen-kaiun.png' },
  {
    id: 'maryam-shipping',
    title: 'Maryam Shipping',
    image: 'maryam-shipping.png',
  },
  { id: 'seanergy', title: 'Seanergy', image: 'seanergy.png' },
  { id: 'sanmar', title: 'Sanmar', image: 'sanmar.png' },
  { id: 'borealis', title: 'Borealis', image: 'borealis.png' },
  { id: 'gesco', title: 'gesco', image: 'gesco.png' },
  { id: 'montec', title: 'Montec', image: 'montec.png' },
  { id: 'maersk-1', title: 'Maersk', image: 'maersk.webp' },
];

function Services() {
  let dividend: number = 2;
  let limit = Math.floor(services.length / dividend);
  let logoSets: logo[][] = [];
  for (let i = 0; i < services.length; i += limit) {
    const slice = services.slice(i, i + limit);
    logoSets.push(slice);
  }
  const [currentLogoindexes, setCurrentLogoindexes] = useState(
    Array(dividend).fill(0)
  );

  useEffect(() => {
    const timeouts = logoSets.map((logoSet, index) => {
      return setTimeout(() => {
        setCurrentLogoindexes((previndexes) => {
          const newindexes = [...previndexes];
          newindexes[index] = (newindexes[index] + 1) % logoSets[index].length;
          return newindexes;
        });
      }, 3000);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [currentLogoindexes]);

  return (
    <div className='pb-10 lg:px-5 xl:px-24 xl:pb-24 w-full flex justify-center bg-white'>
      <div className='xl:w-[1400px]'>
        <div className='flex flex-col md:flex-row items-center text-center md:text-start lg:text-center'>
          <div className='w-full md:w-[30%] text-xl xl:text-2xl font-medium'>
            Trusted by tough teams at
          </div>
          <div className='h-0 m-2 w-full md:w-[70%] xl:w-[80%] border'></div>
        </div>
        <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-6 justify-items-center gap-y-2 gap-x-10'>
          {services.map((service, index) => {
            if (index % 2 === 0) {
              let frontLogo = service;
              let backLogo = services[index + 1];
              return (
                <FlipLogos
                  key={index}
                  id={index}
                  frontLogo={frontLogo}
                  backLogo={backLogo ? backLogo : services[0]}
                />
              );
            }
          })}
        </div>
        <div className='md:hidden pt-5 flex gap-10 justify-center items-center'>
          {logoSets.map((logoSet, logoSetIndex) => {
            return (
              <div
                key={logoSetIndex}
                className='w-[120px] h-[100px] flex justify-end items-center'
              >
                <AnimatePresence mode='wait'>
                  <motion.img
                    key={currentLogoindexes[logoSetIndex]}
                    className='grayscale hover:grayscale-0'
                    initial={{ opacity: 1, rotateX: 0 }}
                    animate={{
                      opacity: 1,
                      rotateX: [90, 0],
                      transitionProperty: 'all',
                    }}
                    transition={{ duration: 0.75, delay: logoSetIndex * 0.1 }}
                    exit={{ opacity: 1, rotateX: 0 }}
                    src={`/images/services/${
                      logoSet[currentLogoindexes[logoSetIndex]].image
                    }`}
                    alt={logoSet[currentLogoindexes[logoSetIndex]].title}
                  />
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
