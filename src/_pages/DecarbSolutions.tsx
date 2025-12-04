'use client';
import { useState } from 'react';
import EfficientSolutionArrow from '@/svg/EfficientSolutionArrow';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const cardContent = [
  {
    title: 'Tools',
    description:
      'Self-evaluate and understand possibilities for the vessel in less than 10 mins',
    to: 'https://eet.azolla.sg/',
    newTab: true,
    image: '/images/tools.png',
    video:
      'https://s3.ap-southeast-1.amazonaws.com/common.attachments.prod/media/tools.webm',
  },
  {
    title: 'Decarb Consulting',
    description:
      'Identify and evaluate opportunities for optimization, cost reduction, and emissions control.',
    to: '/consultancy',
    newTab: false,
    image: '/images/consulting.webp',
    video:
      'https://s3.ap-southeast-1.amazonaws.com/common.attachments.prod/media/reports.webm',
  },
  {
    title: 'Projects and beyond',
    description:
      'Executing transformative decarbonization measures with precision and excellence.',
    to: '/project-management',
    newTab: false,
    image: '/images/project-management.webp',
    video:
      'https://s3.ap-southeast-1.amazonaws.com/common.attachments.prod/media/project-management.webm',
  },
];

const activeClassCard =
  'opacity-100 shadow-[0px_30px_40px_0px_rgba(0,0,0,0.2)] group transition-all !duration-700 !ease-soft-spring';
const activeClassArrowParent =
  'bg-azolla_blue drop-shadow-xl fill-azolla_blue rounded-full bg-opacity-20';
const activeClassArrow =
  '[&>circle]:opacity-100 [&>path]:stroke-white -rotate-45 w-[3.5vw] h-[3.5vw]';

const DecarbSolutions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id='checkSrcoll'
      className='h-full px-10 pr-0 pt-20 xl:pl-24 xl:pt-32 relative'
    >
      <h1 className='font-medium leading-[1.02] md:text-[4rem] sm:text-[3rem] xxs:text-[9vw] text-[1.75rem] xl:text-responsive-4xl'>
        Decarbonization <br /> solutions framework
      </h1>
      <div className='pr-10 block mt-8 md:hidden cursor-none'>
        {cardContent.map((content, index) => {
          return (
            <Link
              key={index}
              href={content.to}
              rel={content.newTab ? 'noopener noreferrer' : ''}
              target={content.newTab ? '_blank' : ''}
              className={`bg-white opacity-100 w-full flex flex-1 py-6 gap-8 space-y-1 group transition-all !duration-700 !ease-soft-spring ${
                index !== cardContent.length - 1 && 'border-b'
              }`}
            >
              <Image
                unoptimized
                src={content.image}
                alt={content.title}
                width={32}
                height={32}
                className='mt-1.5 !w-8 !h-8'
              />
              <div className='w-full'>
                <h2 className={`text-lg font-bold mb-2 text-azolla_blue`}>
                  {content.title}
                </h2>
                <div className='flex items-end flex-1'>
                  <div className='self-baseline flex-1'>
                    <p className={`text-sm`}>{content.description}</p>
                  </div>
                  <EfficientSolutionArrow
                    customClass={`transition-all !duration-700 !ease-soft-spring`}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className='hidden md:flex justify-start'>
        <div className='w-full flex items-stretch gap-10 xl:gap-20 2xl:gap-40 mt-20 top rounded-lg'>
          <div className='shrink-0 w-[45%] md:min-h-[360px] lg:min-h-[500px] xl:max-xl:min-h-[550px] h-full flex flex-col justify-start'>
            {cardContent.map((content, index) => {
              return (
                <div
                  key={index}
                  className='min-h-fit h-1/3 transition-all !duration-700 !ease-soft-spring cursor-pointer'
                >
                  {index === activeIndex ? (
                    <Link
                      key={content.title}
                      href={content.to}
                      rel={content.newTab ? 'noopener noreferrer' : ''}
                      target={content.newTab ? '_blank' : ''}
                      className={`h-full bg-white flex flex-col flex-1 p-[2vw] space-y-1 group transition-all !duration-700 !ease-soft-spring opacity-100 ${activeClassCard}`}
                    >
                      <div className='flex gap-responsive-sm xl:gap-responsive-lg'>
                        <Image
                          unoptimized
                          width={32}
                          height={32}
                          src={content.image}
                          alt={content.title}
                          className='!w-[3vw] !h-[3vw] justify-items-start'
                        />
                        <div className='w-full'>
                          <h2 className='!text-[2vw] !leading-[1] font-bold text-azolla_blue'>
                            {content.title}
                          </h2>
                          <div className='pt-[1.25vw] flex gap-4 2xl:gap-8 items-end flex-1'>
                            <div className='self-baseline flex-1'>
                              <p className='!text-[1.5vw] !leading-[1.4]'>
                                {content.description}
                              </p>
                            </div>
                            <div
                              className={`fill-azolla_blue rounded-full transition-all !duration-700 !ease-soft-spring ${activeClassArrowParent}`}
                            >
                              <EfficientSolutionArrow
                                customClass={`transition-all !duration-700 !ease-soft-spring ${activeClassArrow}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div
                      className={`h-full flex flex-col flex-1 p-[2vw] space-y-1 group transition-all !duration-700 !ease-soft-spring opacity-50 border-b`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <div className='flex gap-responsive-sm xl:gap-responsive-lg'>
                        <Image
                          unoptimized
                          width={32}
                          height={32}
                          src={content.image}
                          alt={content.title}
                          className='shrink-0 !w-[3vw] !h-[3vw] justify-items-start'
                        />
                        <div className='w-full flex justify-between'>
                          <h3 className='!text-[2vw] !leading-[1] font-bold text-black'>
                            {content.title}
                          </h3>
                          <div className='flex justify-end flex-1'>
                            <EfficientSolutionArrow customClass='w-[4vw] h-[4vw]' />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <AnimatePresence mode='wait'>
            <div className='w-[55%]'>
              {cardContent.map((item, index) => {
                if (activeIndex === index) {
                  return (
                    <motion.video
                      transition={{ type: 'tween', duration: 1, delay: 0.2 }}
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      key={item.title}
                      loop
                      autoPlay
                      preload='auto'
                      muted
                      className='w-full'
                    >
                      <source src={item.video} type='video/webm' />
                    </motion.video>
                  );
                }
              })}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DecarbSolutions;
