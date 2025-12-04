'use client';

import { Image } from '@nextui-org/react';
import Button1 from '@/components/Button/Button';
import {Button} from "@nextui-org/react";
import ArrowDown from '@/svg/ArrowDown';
import { scrollToSection } from '@/utils/scrollToSection';
import { scheduleCallCasper } from '@/utils/schedular';
import React from 'react';
import useBreakpoints from '@/hooks/useBreakPoints';


function CasperContent() {
  const {isXs} = useBreakpoints();

  return (
    <div className='bg-black'>
     <div className='flex w-full md:pt-16 xl:pt-20'>
        <div className='md:w-[50%] xxs:w-full w-1/2 pl-5 pt-10 xxs:p-10'>
            <div className='mt-12 py-6 md:py-2 xl:pl-5 text-white !leading-[1] lg:text-responsive-xl xl:text-responsive-2xl md:text-responsive-xl xxs:text-responsive-2xl font-[700]'>
                {/* <p className='xxs:hidden flex'>
                    Seamless FEUM <br/>
                    and EU-ETS compliance.  
                </p> */}
                <p className='flex'>
                    Seamless FEUM and<br/>
                    EU-ETS compliance.
                </p>
            </div>
            <div className='flex py-2 lg:w-full md:py-3 xl:pl-5 text-[#FFFFFFF2] !leading-[1.2] lg:text-responsive-sm xl:text-responsive-md md:text-responsive-sm xxs:text-reponsive-sm font-[400]'>
                <p>
                CASPER&trade; automates compliance calculations, providing real-time data-driven insights on FUEL EU penalties, compliance balance, and EUA exposure.
                </p>
            </div> 
            <div className='xl:pl-5 pt-12 xl:pt-20 w-2/5 md:w-1/2 lg:w-2/5'>
                <Button1
                  label='Get Started'
                  variant='tertiary'
                  customClass='!text-responsive-sm !py-2 !px-8 !font-semibold hover:!border-white'
                  onClick={scheduleCallCasper}
                  size={!isXs ? "lg" : "sm"}
                />
            </div>
            
            <div className='pt-8 xl:pt-20 xl:p-5 xxs:-translate-x-2'>
                <Button onClick={()=>scrollToSection('casper-learn-more')} className ="!text-slate-400 bg-black font-medium text-responsive-sm" style={{ paddingLeft: 0, paddingRight: 0 }} size={!isXs? 'lg': 'sm'} startContent={<ArrowDown color={'#94A3B8'} width={!isXs? "35px" : "22px"} height={!isXs? "33px" : "20px"}/>}>
                    LEARN MORE ABOUT CASPER&trade;
                </Button>
            </div>
        </div>
        <div className='md:flex gap-3 self-end hidden w-[50%] h-full'>
            <div className='flex flex-col self-center gap-3 w-[45%] h-full'>
                <Image
                    radius={'none'}
                    alt='screen1' 
                    src={'/images/casper/Screen1.jpg'}

                />
                <Image
                    radius={'none'}
                    alt='screen2' 
                    src={'/images/casper/Screen2.jpg'}

                />
                <Image
                    radius={'none'}
                    alt='screen3' 
                    src={'/images/casper/Screen3.jpg'}

                />
            </div>
            <div className='flex flex-col self-center gap-3 w-[55%] h-full'>
                <Image
                    radius={'none'}
                    alt='screen4' 
                    src={'/images/casper/Screen4.jpg'}

                />
                <Image
                    radius={'none'}
                    alt='screen5' 
                    src={'/images/casper/Screen5.jpg'}

                />
              
            </div>
        </div>
           
        </div>
        
       <div className='md:hidden flex w-full pl-10 xxs:pt-0 gap-3'>
            <div className='flex flex-col items-center justify-center gap-3'>
                <Image
                    radius={'none'}
                    alt='screen1' 
                    src={'/images/casper/Screen1.jpg'}
                />
                <Image
                    radius={'none'}
                    alt='screen2' 
                    src={'/images/casper/Screen2.jpg'}
                />
                <Image
                    radius={'none'}
                    alt='screen3' 
                    src={'/images/casper/Screen3.jpg'}
                />
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
                <Image
                    radius={'none'}
                    alt='screen4' 
                    src={'/images/casper/Screen4.jpg'}
                />
                <Image
                    radius={'none'}
                    alt='screen5' 
                    src={'/images/casper/Screen5.jpg'}
                />
              
            </div>
        </div>
    </div>
  );
}

export default CasperContent;
