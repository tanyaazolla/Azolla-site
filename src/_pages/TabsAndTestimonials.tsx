'use client';

import { Progress, Image, Tab, Tabs } from '@nextui-org/react';
import { Key, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Page } from '@/types/page';
import PromiseArrow from '@/svg/PromiseArrow';
import Testimonial from './Testimonials';
import BlogForProjectManagement from './BlogForProjectManagement';

function TabsAndTestimonials({ type }: Page) {
  let description;
  let tabsInfo: any;

  const [activeTab, setActiveTab] = useState<Key>();
  const [activeImage, setActiveImage] = useState<number>(1);
  const [totalImages, setTotalImages] = useState<number>();

  switch (type) {
    default:
    case 'Consultancy':
      description = `With our detailed study of the vessel's fuel and energy
          consumption patterns, operational practices, intricacies of design,
          and assessment of market-based measures, we identify opportunities for
          optimization, cost reduction, and emissions control.`;
      tabsInfo = [
        {
          id: 'essential-carbon-abatement',
          title: 'Essential Report',
          info: [
            'Ship specific strategy to attain CII complaince',
            'Meticulous analysis of technologies, and exploration of permutations to deliver maximum ROI within the investment parameters',
            'Compliance plan for the next 5 and 10 years',
          ],
          totalImages: 8,
          baseURL:
            'https://s3.ap-southeast-1.amazonaws.com/common.attachments.prod/sample-report/essential-carbon-abatement',
        },
        {
          id: 'advanced-carbon-abatement',
          title: 'Advanced Report',
          info: [
            'Evaluation of the as-built hydrodynamic potential to ensure the fullest vessel performance optimization.',
            'Individual ESD analysis and evaluation of engine operational control with noon reports',
            'Meticulous selection of vessel-specific ESDs, obtaining quotes from OEMs, analyzing lead times and ROI durations',
          ],
          totalImages: 24,
          baseURL:
            'https://s3.ap-southeast-1.amazonaws.com/common.attachments.prod/sample-report/advanced-carbon-abatement',
        },
      ];
      break;
    case 'Project Management':
      description = `We understand the complexities of maritime projects to the fullest. 
          At Azolla, our unparalleled expertise and unwavering adaptability ensure that your 
          projects are managed and transformed with precision and excellence.`;
      tabsInfo = [
        {
          id: 'for-each-projects',
          title: 'For each projects',
          info: [
            'Comprehensive engineering solutions tailored to your vessel’s specific needs.',
            'End-to-end project management, encompassing procurement, logistics, deployment, and commissioning.',
            'Expert onsite and remote support delivered by our seasoned engineering team.',
            'Competitive pricing, powered by Azolla’s strategic partnerships with industry-leading OEMs and suppliers.',
          ],
        },
        {
          id: 'beyond-individual-projects',
          title: 'Beyond individual projects',
          info: [
            'Continuous monitoring ensuring ongoing efficiency and compliance',
            'Proactive maintenance plans to maximize vessel performance and longevity, ensuring that your assets remain efficient and profitable.',
            'Long-term partnership for a sustainable maritime success',
          ],
        },
      ];
  }

  useEffect(() => {
    setActiveImage(1);
  }, [activeTab]);

  useEffect(() => {
    if (activeTab && tabsInfo) {
      const tab = tabsInfo.find((tab: any) => tab.id === activeTab);
      if (tab.totalImages) {
        setTotalImages(tab.totalImages);
      }
    }
  }, [activeTab]);

  const renderRightSide = () => {
    switch (type) {
      case 'Consultancy':
        return (
          <div className='pt-10 md:py-10 lg:py-20 xl:py-14 w-full h-full border-0 md:border-2 rounded-md flex flex-col'>
            <div className='shrink-0 h-[500px] md:h-[750px] lg:h-[850px] xl:h-[90%] 2xl:h-[850px] flex gap-2 justify-center md:justify-between items-center relative'>
              <div className='w-1/2 px-3 z-10 absolute flex left-0 bottom-2 justify-end md:static md:w-fit'>
                <button
                  onClick={() => setActiveImage((prev) => prev - 1)}
                  disabled={activeImage === 1}
                >
                  <PromiseArrow
                    customClass={`w-10 h-auto border-3 rounded-full p-1.5 ${
                      activeImage !== 1 &&
                      '[&>path]:stroke-[6px] [&>path]:stroke-azolla_blue border-3 border-azolla_blue'
                    }`}
                  />
                </button>
              </div>
              {tabsInfo.map((tab: any) => {
                const { id, totalImages, baseURL } = tab;
                if (activeTab === id) {
                  return (
                    <Image
                      radius='none'
                      key={activeImage}
                      src={baseURL + `/${activeImage}.jpg`}
                      alt={'Report'}
                      className='-z-10 max-h-[500px] md:max-h-[750px] lg:max-h-[850px] xl:h-[90%] 2xl:max-h-[850px]'
                    />
                  );
                }
              })}
              <div className='w-1/2 px-3 absolute bottom-0 right-0 md:static md:w-fit'>
                <button
                  onClick={() => setActiveImage((prev) => prev + 1)}
                  disabled={
                    totalImages && activeImage === totalImages ? true : false
                  }
                >
                  <PromiseArrow
                    customClass={`rotate-180 w-10 h-auto border-3 rounded-full p-1.5 ${
                      totalImages && activeImage === totalImages
                        ? ''
                        : '[&>path]:stroke-[6px] [&>path]:stroke-azolla_blue border-3 border-azolla_blue'
                    }`}
                  />
                </button>
              </div>
            </div>
            <div className='shrink-0 w-full flex items-center justify-center py-5 md:px-32 xl:px-20'>
              <div className='w-[80%]'>
                <Progress
                  aria-label='Completed'
                  value={totalImages && (activeImage / totalImages) * 100}
                />
              </div>
            </div>
          </div>
        );
      case 'Project Management':
        return (
          <div className='hidden md:block'>
            <BlogForProjectManagement />
          </div>
        );
    }
  };

  return (
    <div
      className={`p-10 md:px-12 py-20 lg:px-20 xl:py-32 w-full h-full flex flex-col xl:flex-row ${
        type === 'Consultancy' && 'xl:items-stretch'
      } items-start justify-center gap-5 xl:gap-10`}
    >
      <div className='w-full flex flex-col 2xl:gap-10 xl:w-[50vw] 2xl:pr-14'>
        <div className='text-responsive-md leading-[1.35] font-normal'>
          {description}
        </div>
        <div className='w-full pt-5'>
          <Tabs
            variant='underlined'
            size='lg'
            fullWidth={true}
            selectedKey={activeTab}
            onSelectionChange={setActiveTab}
            classNames={{
              tabList: 'w-full border-b p-0',
              tab: 'h-14 w-full justify-center',
              tabContent:
                'group-data-[selected=true]:text-azolla_blue text-base !inline lg:text-xl font-bold',
              cursor: 'w-full bg-azolla_blue',
            }}
          >
            {tabsInfo.map((tab: any) => {
              const { id, title, info } = tab;
              return (
                <Tab key={id} title={title}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1] }}
                    transition={{ delay: 0.3, staggerChildren: 0.1 }}
                  >
                    <ul className='text-lg md:text-xl 2xl:text-2xl font-bold list-image-[url(/images/check.svg)] pl-5 py-4 [&>li]:p-2'>
                      {info.map((item: any, index: any) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    {type === 'Consultancy' && (
                      <div className='block xl:hidden py-2 text-center'>
                        (Scroll below to see a sample report.)
                      </div>
                    )}
                    <div className='2xl:pt-10'>
                      <Testimonial type={id} />
                    </div>
                  </motion.div>
                </Tab>
              );
            })}
          </Tabs>
        </div>
      </div>
      <div className='w-full xl:w-[45vw] 2xl:w-[50vw] flex justify-center'>
        {renderRightSide()}
      </div>
    </div>
  );
}

export default TabsAndTestimonials;
