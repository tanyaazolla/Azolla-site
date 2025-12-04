'use client';

import Button from '@/components/Button/Button';
import ImageSet from '@/components/ImageSet';
import { Page } from '@/types/page';
import Image from 'next/image';
import { useDisclosure } from '@nextui-org/react';
import LetsTalk from './LetsTalk';
import { LetsTalkType } from '@/types/letsTalk';
import { scrollToSection } from '@/utils/scrollToSection';

function HomePage({ type }: Page) {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  const renderHomePageContent = () => {
    switch (type) {
      default:
      case 'Consultancy':
        return (
          <div className='min-h-[calc(100vh-80px)] flex flex-col lg:items-center justify-center text-left md:text-center overflow-hidden py-10'>
            <h1 className='bg-white text-black px-10 font-bold 2xl:text-[4.5vw] lg:text-[6vw] lg:leading-[1.2] md:text-[4rem] md:leading-[4.5rem] sm:text-[3.5rem] sm:leading-[4.5rem] xxs:text-[3rem] xxs:leading-[3.5rem] text-[1.75rem] leading-[2.75rem]'>
              Do you really
              <br /> understand your vessel?
            </h1>
            <div>
              <p className='bg-white text-black 2xl:text-[1.4vw] lg:text-[2vw] md:text-responsive-md xxs:text-responsive-md py-10 md:py-0 px-10 xl:px-28 lg:py-5 2xl:w-[1400px]'>
                In today&apos;s ever-evolving regulatory landscape, having
                intimate knowledge of your vessel&apos;s technical
                specifications, operational profile, design, and emissions
                profile is the{' '}
                <span className='font-bold'>
                  strategic first step to navigating complex emission
                  regulations.
                </span>
              </p>
              <div className='px-10 md:py-5 w-full flex justify-start md:justify-center'>
                <Button
                  label='Get Started'
                  variant='tertiary'
                  customClass='md:!text-responsive-lg font-medium text-white md:!px-10 md:!py-8 border border-azolla_blue'
                  onClick={onOpen}
                />
              </div>
              <LetsTalk
                type={LetsTalkType.GET_STARTED}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
              />
            </div>
          </div>
        );
      case 'Project Management':
        const imageSet = [
          '/images/project-management/hero-1.webp',
          '/images/project-management/hero-2.webp',
          '/images/project-management/hero-3.webp',
          '/images/project-management/hero-4.webp',
        ];
        return (
          <div className='min-h-[calc(100vh-80px)] flex flex-col justify-center lg:flex-row lg:h-screen'>
            <div className='w-full h-full flex flex-col justify-center content-start md:content-center lg:w-[65%]'>
              <h1 className='px-10 lg:p-10 lg:pb-0 xl:px-20 bg-white text-black'>
                <div className='hidden md:block w-full text-center lg:text-start font-bold lg:text-[4.25vw] lg:leading-[1.15] md:text-[3.75rem] md:leading-[1.15] text-[1.75rem] leading-[2.75rem]'>
                  Execution is the <br /> key to transformative decarbonization
                </div>
                <div className='block md:hidden w-full text-start font-bold text-[10vw] leading-[1.2]'>
                  Execution
                  <br /> is the key to
                  <br /> transformative decarbonization
                </div>
              </h1>
              <div className='p-10 xl:px-20 text-start md:text-center lg:text-start bg-white text-black'>
                <p className='w-full lg:text-[1.8vw] md:text-responsive-md xxs:text-responsive-md pb-2 leading-[1]'>
                  Orchestrating with suppliers, procuring items, managing
                  logistics,{' '}
                  <span className='inline xl:inline-block'>
                    deployment complications, commissioning, phew!
                  </span>
                  <br />
                  We’ve all been there.
                </p>
              </div>
            </div>
            <div className='w-full lg:w-[35%] h-screen max-lg:hidden'>
              <ImageSet images={imageSet} customClass='h-screen' />
            </div>
          </div>
        );
      case 'About us':
        return (
          <div className='relative h-full'>
            <h1 className='absolute px-3 py-3 md:px-10 xl:py-10 xl:px-32 bg-gradient-to-b from-white from-70% to-transparent to-100% w-full text-center font-bold lg:text-[5.25vw] text-[6.25vw] leading-[1.2]'>
              We believe that together,
              <br /> we can make a difference.
            </h1>
            <Image
              unoptimized
              src={'/images/team-azolla-about-us-hero.webp'}
              alt='Team Photo'
              width={1000}
              height={500}
              loading='eager'
              className='h-full w-full pt-[12vh]'
              fetchPriority='high'
            />
          </div>
        );
      case 'Privacy Policy':
        return (
          <div className='relative bg-black min-h-[50vh] flex flex-col lg:items-center justify-center text-center overflow-hidden py-10'>
            <h1 className=' text-white p-2 font-bold 2xl:text-[4vw] lg:text-[5.25vw] md:text-[5rem] md:leading-[6rem] xxs:text-[3.25rem] xxs:leading-[4rem] text-[1.75rem] leading-[2.75rem]'>
              Our Privacy Policy
            </h1>
            <div className='p-10 pt-2 md:px-20 text-white text-responsive-sm font-medium'>
              We are here to protect your privacy and ensure your online
              experience{' '}
              <div className='inline md:block'>
                is safe, secure, and respectful of your personal information.
              </div>
            </div>
            <div className='absolute bottom-2 left-3 text-white text-sm lg:text-base font-medium'>
              Effective Date: 30/09/2023
            </div>
          </div>
        );
      case 'Careers':
        return (
          <div className='min-h-[calc(100vh-80px)] flex flex-col lg:items-center justify-center text-center overflow-hidden py-10'>
            <h1 className='bg-white text-black p-5 md:p-10 lg:px-20 lg:pb-5 2xl:px-40 font-medium 2xl:text-[4vw] lg:text-[4.8vw] lg:leading-[1.2] md:text-[3rem] md:leading-[3.5rem] xxs:text-[2.5rem] xxs:leading-[3rem] text-[1.75rem] leading-[2.75rem]'>
              If you believe{' '}
              <Image
                unoptimized
                src={'/images/careers/person1.png'}
                alt='Image'
                width={100}
                height={100}
                fetchPriority='high'
                className='2xl:h-[6rem] xl:h-[4.5rem] md:h-[3.5rem] xxs:h-[3rem] h-[2.75rem] w-auto inline rounded-full'
              />{' '}
              you can change the world and are motivated to help the{' '}
              <Image
                unoptimized
                src={'/images/careers/person2.png'}
                alt='Image'
                width={100}
                height={100}
                fetchPriority='high'
                className='2xl:h-[6rem] xl:h-[4.5rem] md:h-[3.5rem] xxs:h-[3rem] h-[2.75rem] w-auto inline rounded-br-3xl rounded-tl-3xl'
              />{' '}
              maritime community achieve net zero, then you&apos;re{' '}
              <Image
                unoptimized
                src={'/images/careers/person3.webp'}
                alt='Image'
                width={100}
                height={100}
                fetchPriority='high'
                className='2xl:h-[6rem] xl:h-[4.5rem] md:h-[3.5rem] xxs:h-[3rem] h-[2.75rem] w-auto inline rounded-tr-[50px] rounded-bl-3xl'
              />{' '}
              in the right place.
            </h1>
            <div>
              <div className='py-5 w-full flex justify-center'>
                <Button
                  label='View Openings'
                  variant='tertiary'
                  customClass='xl:!text-2xl font-bold xl:!px-10 xl:!py-8 border border-azolla_blue'
                  onClick={() => scrollToSection('openings')}
                />
              </div>
            </div>
          </div>
        );
    }
  };

  return <div className='h-full w-full'>{renderHomePageContent()}</div>;
}

export default HomePage;
