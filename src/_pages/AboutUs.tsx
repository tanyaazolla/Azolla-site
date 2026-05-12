'use client';

import { Image } from '@nextui-org/react';
import { Divider } from '@nextui-org/react';
import AzollaValues from '@/_pages/AzollaValues';
import AzollaStory from '@/_pages/AzollaStory';
import AzollaByNumbers from '@/_pages/AzollaByNumbers';

function AboutUs() {
  return (
    <>
    
      <div className='p-10 py-20 xl:px-24 xl:py-32 h-full space-y-responsive-xl'>
        <AzollaStory />
        <Divider className='bg-black my-10' />
        <AzollaByNumbers />
        <Divider className='bg-black my-10' />
        <AzollaValues />
      </div>
      <div className='2xl:flex 2xl:justify-center'>
        <Image
          src={'/images/team-azolla.webp'}
          alt='People of Azolla'
          className='w-screen shrink-0 h-full'
          radius='none'
          loading='lazy'
        />
      </div>
    </>
  );
}

export default AboutUs;
