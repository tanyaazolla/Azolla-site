'use client';

import { Image } from '@nextui-org/react';
import { STRAPI_BASE_URL } from '@/utils/baseUrl';

const Quote = ({
  className,
  image,
  name,
  quote,
}: {
  className?: string;
  image: string;
  name: string;
  quote: string;
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center md:items-start gap-5 w-full md:w-[90%] xl:w-[600px] bg-white p-5 rounded-xl ${className}`}
    >
      <Image
        src={STRAPI_BASE_URL + image}
        fallbackSrc={'/images/avatar.png'}
        alt={name}
        radius='none'
        classNames={{
          img: 'w-full rounded-br-3xl rounded-tl-3xl ',
          wrapper: '!w-1/2 md:!w-1/4 bg-no-repeat bg-top',
        }}
      />
      <div className='w-full md:w-3/4 space-y-2'>
        <blockquote className='font-medium tracking-wide'>{quote}</blockquote>
        <div className='uppercase font-medium text-sm tracking-wider text-black/50'>
          {name}
        </div>
      </div>
    </div>
  );
};

export default Quote;
