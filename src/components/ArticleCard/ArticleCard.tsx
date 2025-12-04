'use client';

import Image from 'next/image';
import { Card, CardBody, CardFooter } from '@nextui-org/react';
import TiltOnHoverArrow from '@/svg/TiltOnHoverArrow';
import { Category } from './types';

interface Props {
  id: string;
  category: Category | string;
  title: string;
  image: string;
  isActive: boolean;
  bottomIcon?: string;
}

const activeClassArrowParent =
  'bg-azolla_blue drop-shadow-xl fill-azolla_blue rounded-full bg-opacity-20';
const activeClassArrow =
  '[&>circle]:opacity-100 [&>path]:stroke-white -rotate-45';

function ArticleCard({ id, title, category, image, isActive, bottomIcon }: Props) {
  return (
    <Card
      id={id}
      className='shrink-0 h-[380px] sm:h-[457px] w-[280px] sm:w-[330px] lg:w-[346px] rounded-bl-[32px]'
      radius='sm'
      shadow={isActive ? 'md' : 'sm'}
      isPressable
    >
      <CardBody className='relative w-full p-0 overflow-hidden h-full'>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className='w-[280px] sm:w-[330px] lg:w-[346px] h-[160px] sm:h-[210px] object-cover'
        />
        <div
          className={`absolute w-[280px] sm:w-[330px] lg:w-[346px] h-[160px] sm:h-[210px] ${isActive ? 'opacity-100' : 'z-10 bg-azolla_black opacity-20'
            }`}
        ></div>

        <div className='p-5 pb-0 sm:p-7 sm:pb-0'>
          <p
            className={`relative pb-1 sm:pb-1.5 uppercase text-base font-bold text-azolla_blue after:bg-azolla_blue after:h-[2.5px] after:w-0 after:absolute ${isActive ? 'after:w-full after:left-0' : 'after:left-1/2'
              } after:bottom-0 after:transition-all !ease-in !duration-500`}
          >
            {category}
          </p>
          <h1
            className={`w-auto h-auto sm:w-[285px] sm:h-[92px] line-clamp-3 overflow-hidden text-lg sm:text-2xl leading-[30px] mt-2 ${isActive ? 'font-medium' : 'font-normal'
              }`}
          >
            {title}
          </h1>
        </div>
      </CardBody>
      <CardFooter className='h-[80px] flex items-center justify-between'>
        <div
          className={`fill-azolla_blue rounded-full transition-all !duration-700 !ease-soft-spring ${isActive && activeClassArrowParent
            }`}
        >
          <TiltOnHoverArrow
            customClass={`transition-all !duration-700 !ease-soft-spring  ${isActive ? activeClassArrow : 'scale-105'
              }`}
          />
        </div>
        {bottomIcon && (
          <Image
            src={bottomIcon}
            alt={title + 'bottom_icon'}
            width={200}
            height={200}
            className='w-[100px] lg:w-[125px] h-[80px] object-contain'
          />
        )}
      </CardFooter>
    </Card>
  );
}

export default ArticleCard;
