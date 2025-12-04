'use client';

import { Image } from '@nextui-org/react';

export interface RecordProps {
  icon: string;
  title: string;
  description: string;
}

export const Records = ({ icon, title, description }: RecordProps) => {
  return (
    <div className='w-full'>
      <Image
        src={icon}
        alt={title + '_icon'}
        className='w-20 h-20 rounded-none mb-4'
        loading='lazy'
      />
      <h1 className='text-responsive-xl font-extrabold leading-[1.02] mb-4 md:mb-8 uppercase'>
        {title}
      </h1>
      <h2 className='text-responsive-md font-normal'>{description}</h2>
    </div>
  );
};
