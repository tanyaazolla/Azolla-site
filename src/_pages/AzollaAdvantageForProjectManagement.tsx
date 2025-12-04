'use client';

import Carousel from '@/components/Carousel/Carousel';
import PromiseCard from '../components/PromiseCard/PromiseCard';
import StickyScroll from '@/components/StickyScroll/StickyScroll';
import { Records } from '@/components/StickyScroll/Records';
import { PromiseCardProps } from '@/types/data';
import { Divider } from '@nextui-org/react';

const projectManagementData: PromiseCardProps[] = [
  {
    id: 'unparalleled-expertise',
    title: 'Unparalleled expertise',
    subtitle: 'Been there, done that, and amassed with a wealth of experience.',
    description:
      'Having successfully executed 250+, we take pride in our comprehensive understanding of maritime engineering, project management, and the intricacies of transforming vessels into efficient and eco-friendly powerhouses.',
    imageSource: '/images/project-management-icons/Unparalled-Expertise.png',
  },
  {
    id: 'unwavering-adaptability',
    title: 'Unwavering Adaptability',
    subtitle:
      'Ensuring we thrive in the ever-evolving challenges of executing projects.',
    description:
      'We understand projects evolve. Our adaptability enables us to navigate uncertainties, ensuring execution remains the driving force toward project success.',
    imageSource: '/images/project-management-icons/Unwavering-Adaptability.png',
  },
  {
    id: 'insights-backed-execution',
    title: 'Insights-Backed Execution',
    subtitle: 'Turning data into results.',
    description: `Azolla's execution approach is underpinned by insights and data, ensuring that your vessel's transformation isn't just conceptual but manifests as tangible efficiency gains and reduced emissions.`,
    imageSource: '/images/project-management-icons/Insight-backed-execution.png',
  },
];

function AzollaAdvantageForProjectManagement() {
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
            {projectManagementData.map((item, index) => (
              <div key={index}>
                <Records
                  key={index}
                  icon={item.imageSource}
                  title={item.title}
                  description={item.description}
                />
                {projectManagementData.length > index + 1 && (
                  <Divider className='bg-black mt-10' />
                )}
              </div>
            ))}
          </div>
        </StickyScroll>
      </div>
      <div className='hidden py-14 md:py-20 xl:py-32 h-full w-full md:flex justify-center items-center bg-promise_bg'>
        <div className='w-full flex flex-col gap-5 xl:gap-10'>
          <h1 className='px-10 md:px-12 xl:px-24 pb-5 md:pb-10 font-bold leading-[1.02] md:text-[4rem] sm:text-[3rem] xxs:text-[2.25rem] text-[1.75rem] lg:text-responsive-4xl'>
            The Azolla <br />
            Advantage
          </h1>
          <Carousel arrowContainerCustomClass='!from-promise_bg !to-transparent' gap='!gap-10'>
            {projectManagementData.map((item) => {
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

export default AzollaAdvantageForProjectManagement;
