'use client';

import {Button, Input, useDisclosure} from "@nextui-org/react";
import { scheduleCall } from '@/utils/schedular';
import React, { useEffect, useState } from 'react';
import useBreakpoints from '@/hooks/useBreakPoints';
import ArrowUpRight from '@/svg/ArrowUpRight';
import Image from 'next/image';
import useFetch from "@/hooks/useFetch";
import { BACKEND_BASE_URL } from "@/utils/baseUrl";
import Button1 from '@/components/Button/Button';
import ConfettiLottie from "./ConfettiLottie";

interface InsightsContactusProps {
  tag: string;
}

const InsightsContactus: React.FC<InsightsContactusProps> = ({ tag }) => {
  const {isXl} = useBreakpoints();
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  const {
    isOpen: isLottieOpen,
    onOpenChange: onLottieOpenChange,
    onOpen: onLottieOpen,
  } = useDisclosure();
  const [email, setEmail] = useState<string>('');
  const [description, setDescription] = useState<string>(' ');
  const { request, response } = useFetch();


  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setEmail(email);
    setDescription(' ');
  };

  const isEmailValid = React.useMemo(() => {
    return validateEmail(email) ? true : false;
  }, [email]);

  const handleOnclick = () => {
    if (isEmailValid) {
      const newsletterSubscriptionURL = `${BACKEND_BASE_URL}/api/v1/api/subscribe?email=${email}&tag=${tag}`;
      request({ url: newsletterSubscriptionURL, method: 'POST'});
    } else {
      setDescription('Invalid email');
    }
  };

  useEffect(() => {
    if (response) {
      const { responseJSON } = response;
      if (responseJSON && responseJSON.message) {
        if (responseJSON.message === 'Email subscribed successfully') {
          onLottieOpen();
        }
        setDescription(responseJSON.message);
      }
    }
  }, [response]);

  return (
    <>
    <ConfettiLottie
        isOpen={isLottieOpen}
        onOpenChange={onLottieOpenChange}
        message={`Valued subscriber, you’re now part of the solution!`}
      />
     <div className='m-5 mx-12 my-10 bg-black text-white p-6'>
        <div className='w-full md:flex items-center justify-between lg:my-2'>
            <div className="md:w-3/5 w-full">
                <p className='text-white bg-black font-normal text-responsive-xs'>STAY AHEAD.</p>
                <p className='flex text-white font-[400] text-responsive-md pt-6'>Subscribe with your email to receive the latest insights, innovations, and industry updates directly in your inbox.</p>
            </div>
            <div className="flex xxs:mt-10 lg:mt-1 md:justify-end">
                <Button size={'lg'} 
                    className="relative text-white bg-black text-responsive-sm font-[600] hover:underline hover:underline-offset-4 hover:text-opacity-90"
                    onClick={scheduleCall} 
                    style={{paddingLeft:0, paddingRight:0}}
                    endContent={<ArrowUpRight color={'#FFFFFF'} width={isXl? "20" : "18"} height={isXl? "20" : "18"}/>}>
                    Contact Us
                </Button>
            </div>
        </div>
        
        <div className="lg:w-1/3 md:w-1/2 xxs:w-full pt-10">
            <Input
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleOnChange}
                    isRequired={true}
                    radius="none"
                    classNames={{
                      input:
                        'lg:text-[20px] text-[16px] bg-white font-medium text-black',
                      description:
                        'pt-1 h-[20px] text-white text-[14px] font-medium',
                      inputWrapper:
                        'h-[50px] text-[40px] flex bg-white justify-center text-black items-center text-white !pr-0 !py-0 !my-0',
                    }}
                    placeholder='Email address'
                    endContent={
                      <Button1
                        type='submit'
                        label='Submit'
                        onClick={handleOnclick}
                        customClass='disabled:!opacity-100 h-[50px] text-white font-medium hover:text-black bg-footer_newsletter_bg_black text-center !leading-2 px-4 rounded-none'
                      />
                    }
                    description={description}
                  />
            </div>
      </div>
    </>
  );
}

export default InsightsContactus;
