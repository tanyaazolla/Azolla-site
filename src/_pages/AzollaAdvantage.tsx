'use client';

import Carousel from '@/components/Carousel/Carousel';
import PromiseCard from '../components/PromiseCard/PromiseCard';
import { PromiseCardProps } from '@/types/data';
import StickyScroll from '@/components/StickyScroll/StickyScroll';
import { Records } from '@/components/StickyScroll/Records';
import { Divider } from '@nextui-org/react';

const consultancyData: PromiseCardProps[] = [
  {
    id: 'tailored-strategies',
    title: 'Tailored Strategies',
    subtitle: 'Recognizing the distinctiveness of each vessel.',
    description: `We recognize the distinctiveness of each vessel. Our consultants collaborate closely with you to devise customized strategies that align with your vessel's specifications, business aspirations, and evolving regulations.`,
    imageSource: '/images/consultancy/Tailored-Strategies.webp',
  },
  {
    id: 'data-driven-insights',
    title: 'Data-Driven Insights',
    subtitle:
      'Deriving invaluable vessel insights through goal-oriented data analysis.',
    description: `Goal-based data analysis of shipboard reports is performed to reveal the vessel’s persona. This, coupled with the commercial aspirations of the shipowner, charters, and managers, is translated to provide actionable recommendations.`,
    imageSource: '/images/insights.svg',
  },
  {
    id: 'future-ready-leverage',
    title: 'Future-Ready Leverage',
    subtitle:
      'Profound foundational understanding to anticipate forthcoming regulatory changes.',
    description: `Regulations will continue to evolve and tighten. By nurturing a profound foundational understanding of your vessel, you will be better equipped to anticipate forthcoming changes and adeptly address compliance complexities.`,
    imageSource: '/images/files.svg',
  },
];

function AzollaAdvantage() {
  return (
    <>
      <div className='block md:hidden'>
        <StickyScroll
          title={
            <div className='pb-8'>
              The Azolla <br />
              Advantage
            </div>
          }
          customClass='px-10 md:px-12 xl:px-24 py-20 xl:py-32 bg-promise_bg'
        >
          <div className='pt-10 md:pt-0 flex flex-col space-y-responsive-xl md:space-y-responsive-3xl'>
            {consultancyData.map((item, index) => (
              <div key={index}>
                <Records
                  key={index}
                  icon={item.imageSource}
                  title={item.title}
                  description={item.description}
                />
                {consultancyData.length > index + 1 && (
                  <Divider className='bg-black mt-10' />
                )}
              </div>
            ))}
          </div>
        </StickyScroll>
      </div>
      <div className='hidden md:flex py-14 md:py-20 xl:py-32 h-full w-full justify-center items-center bg-promise_bg'>
        <div className='w-full flex flex-col gap-5 xl:gap-10'>
          <h1 className='px-10 md:px-12 xl:px-24 pb-5 md:pb-10 font-bold leading-[1.02] md:text-[4rem] sm:text-[3rem] xxs:text-[2.25rem] text-[1.75rem] lg:text-responsive-4xl'>
            The Azolla <br />
            Advantage
          </h1>
          <Carousel arrowContainerCustomClass='!from-promise_bg !to-transparent' gap={'!gap-8'}>
            {consultancyData.map((item) => {
              const { id, imageSource, title, description, subtitle } = item;
              return (
                <div
                  key={id}
                  className='snap-center first-of-type:pl-10 xl:first-of-type:pl-24'
                >
                  <PromiseCard
                    id={id}
                    title={title}
                    description={description}
                    subtitle={subtitle}
                    imageSource={imageSource}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default AzollaAdvantage;
