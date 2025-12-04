'use client'
import {Button} from "@nextui-org/react";
import ArrowUpRight from '@/svg/ArrowUpRight';
import { scheduleCallCasper } from "@/utils/schedular";
import CasperSolutionCards from "./CasperSolutionCards";
import useBreakpoints from "@/hooks/useBreakPoints";
import React from "react";


function CasperSolution() {

  const {isXl} = useBreakpoints();
  return (
    <>
    <div className="lg:w-2/3 w-full xl:px-5 px-10 py-3 lg:my-2 lg:mt-24 mt-10">
        <p className="py-2 md:py-2 xl:p-10 text-black !leading-[1] text-responsive-4xl font-[700]">
            Made for you solution
        </p>
        <p className="flex py-2 md:py-2 xl:pl-10 text-dark_gray !leading-[1.4] text-responsive-md lg:w-4/5 font-[400]">
            We&apos;ve developed CASPER&trade; based on our firsthand experience
            navigating the complexities of EU-ETS and FUEL EU Maritime
            compliance. Our solution is designed to address your specific
            needs and challenges, providing a seamless and efficient
            compliance experience.
        </p> 
     </div>

     <CasperSolutionCards/>

      <div className='md:m-10 m-6 lg:m-8 xl:m-14 bg-black text-white lg:flex items-center justify-between lg:gap-6 px-5 py-10 lg:my-2'>
        <div className='w-full'>
            <p className='text-white bg-black font-normal text-responsive-sm'>WANT TO LEARN MORE?</p>
            <p className='flex text-white font-[400] text-responsive-sm pt-6'>Interested in how CASPER&trade; can optimize your compliance process? Schedule a personalized demo today and discover how our tailored solution can meet you specific needs.</p>

        </div>
        <div className="flex xxs:mt-10 lg:mt-0">
            <Button size={'lg'} 
            style={{ paddingLeft: 0, paddingRight: 0 }} 
          className="relative text-white bg-black text-responsive-sm font-[600] hover:underline hover:underline-offset-4 hover:text-opacity-90"
          onClick={scheduleCallCasper} 
              endContent={<ArrowUpRight color={'#FFFFFF'} width={isXl? "20" : "18"} height={isXl? "20" : "18"}/>}>
              Book Demo
              </Button>
        </div>
      </div>

    </>
  );
}

export default CasperSolution;
