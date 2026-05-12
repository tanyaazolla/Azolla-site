'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import useFetch from '@/hooks/useFetch';
import Button from '@/components/Button/Button';
import useBreakpoints from '@/hooks/useBreakPoints';
import VerticalTextAnimation from '@/utils/VerticalTextAnimation';
import { Divider, Input, useDisclosure } from '@nextui-org/react';
import { Page } from '@/types/page';
import { scheduleCall, scheduleCallConsultancy } from '@/utils/schedular';
import LetsTalk from './LetsTalk';
import { LetsTalkType } from '@/types/letsTalk';
import { BACKEND_BASE_URL } from '@/utils/baseUrl';
import ConfettiLottie from './ConfettiLottie';
import { scrollToSection } from '@/utils/scrollToSection';

const socialMediaLinks = [
  {
    id: 'linked-in',
    title: 'Linked In',
    link: 'https://www.linkedin.com/company/azolla/',
    image: 'linkedin.svg',
  },
  // {
  //   id: 'whatsapp',
  //   title: 'WhatsApp',
  //   link: 'https://wa.me/919876543210/?text=Hi, Warm welcome by Azolla',
  //   image: 'whatsapp-logo.svg',
  // },
  {
    id: 'youtube',
    title: 'Youtube',
    link: 'https://www.youtube.com/channel/UC03d-_26Qxuuuc2BeUTN1Gw',
    image: 'youtube-logo.svg',
  },
];

const footerDetails = [
  {
    id: 'casper',
    title: 'CASPER™',
    link: '/casper',
    newTab: true,
  },
  {
    id: 'Vessel EQ',
    title: 'Vessel EQ',
    link: 'https://eet.azolla.sg/',
    newTab: true,
  },
  {
    id: 'decarb-consulting',
    title: 'Decarb Consulting',
    link: '/consultancy',
  },
  {
    id: 'projects',
    title: 'Retrofit project solutions',
    link: '/project-management',
  },
  {
    id: 'about-us',
    title: 'About Us',
    link: '/about-us',
  },
  {
    id: 'careers',
    title: 'Careers',
    link: '/careers',
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    link: '/privacy-policy',
  },
  {
    id: 'insights',
    title: 'Insights',
    link: '/insights',
  },
  {
    id: 'buy-EUA',
    title: 'Buy EUA',
    link: 'https://ets.azolla.sg/Buy_EUA',
    newTab: true,
  },
  {
    id: 'FEUM-surplus',
    title: 'FEUM Surplus',
    link: 'https://ets.azolla.sg/Buy_EUA',
    newTab: true,
  },
];

const casperFooterDetails = [
  {
    id: 'Vessel EQ',
    title: 'Vessel EQ',
    link: 'https://eet.azolla.sg/',
    newTab: true,
  },
  {
    id: 'decarb-consulting',
    title: 'Decarb Consulting',
    link: '/consultancy',
  },
  {
    id: 'projects',
    title: 'Retrofit project solutions',
    link: '/project-management',
  },
  {
    id: 'login',
    title: 'Login',
    link: 'https://casper.azolla.sg/',
    newTab: true,
  },
  {
    id: 'insights',
    title: 'Insights',
    link: '/insights',
  },
];

function NewFooter({ type = 'Home' }: Page) {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  const {
    isOpen: isLottieOpen,
    onOpenChange: onLottieOpenChange,
    onOpen: onLottieOpen,
  } = useDisclosure();

  const words = ['Efficient', 'Compliant', 'Efficient'];
  const consultancyWords = [
    'discovery.',
    'optimization.',
    'maritime leadership.',
    'discovery.',
  ];
  const projectManagementWords = [
    'excellence.',
    'projects.',
    'decarbonization.',
    'excellence.',
  ];
  const year = new Date().getFullYear();
  const [email, setEmail] = useState<string>('');
  const [description, setDescription] = useState<string>(' ');
  const { isXs, isSm, isMd, isLg, isXl } = useBreakpoints();
  const { request, response } = useFetch();

  let height = 2.75;
  if (isXl) height = 5.25;
  if (isSm || isMd || isLg) height = 4.25;
  if (isXs) height = 3.25;

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isEmailValid = React.useMemo(() => {
    return validateEmail(email) ? true : false;
  }, [email]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setEmail(email);
    setDescription(' ');
  };

  const handleOnclick = () => {
    if (isEmailValid) {
      const newsletterSubscriptionURL = `${BACKEND_BASE_URL}/api/v1/api/subscribe?email=${email}&tag=`;
      request({ url: newsletterSubscriptionURL, method: 'POST' });
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

  const renderFooterTitle = () => {
    switch (type) {
      case 'Home':
        return (
          <>
            <div className='p-10 py-14 md:py-20 xl:px-24 flex flex-col md:flex-row justify-between items-start md:items-center'>
              <div className='text-white font-medium'>
                <h1 className='text-white font-bold xl:text-[4.25rem] xl:leading-[5.25rem] sm:text-[3.25rem] sm:leading-[4.25rem] xxs:text-[2.25rem] xxs:leading-[3.25rem] text-[1.75rem] leading-[2.75rem]'>
                  <div className='flex justify-start overflow-hidden'>
                    Get
                    <div className='ml-3 md:ml-5 sm:h-[4.25rem] xl:h-[5.25rem] xxs:h-[3.25rem] h-[2.75rem] text-azolla_green'>
                      <VerticalTextAnimation
                        words={words}
                        height={height}
                        duration={5}
                      />
                    </div>
                  </div>
                  <div>With Azolla.</div>
                </h1>
                <div className='pt-5 text-responsive-lg'>
                  Because all we have is now!
                </div>
              </div>
              <div className='pt-8'>
                <Button
                  label='Get Started for free'
                  variant='tertiary'
                  onClick={onOpen}
                  customClass='lg:!px-10 lg:!py-8 lg:!text-responsive-md font-medium hover:!border-white'
                />
              </div>
            </div>
          </>
        );
      case 'Consultancy':
        let consultancyHeight = 2.75;
        if (isLg) consultancyHeight = 3;
        if (isXl) consultancyHeight = 4;

        return (
          <>
            <div className='px-9 py-14 md:px-12 md:py-20 xl:px-24 flex flex-col md:flex-row justify-between gap-10 items-start md:items-end'>
              <h1 className='text-white font-bold  xl:text-[3rem] xl:leading-[4rem] lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] text-[2rem] leading-[2.75rem]'>
                Contact us today to embark on a journey of{' '}
                <div className='md:inline-flex justify-center xl:h-[4rem] lg:h-[3rem] h-[2.75rem] text-azolla_green overflow-hidden'>
                  <VerticalTextAnimation
                    words={consultancyWords}
                    height={consultancyHeight}
                    duration={5}
                  />
                </div>
              </h1>
              <div className='pb-4'>
                <Button
                  label='Schedule a call'
                  variant='tertiary'
                  customClass='lg:!px-10 lg:!py-8 lg:!text-responsive-md lg:!font-medium hover:!border-white'
                  onClick={scheduleCallConsultancy}
                />
              </div>
            </div>
          </>
        );
      case 'Project Management':
        let projectHeight = 2.75;
        if (isLg) projectHeight = 3;
        if (isXl) projectHeight = 4;

        return (
          <>
            <div className='px-9 py-14 md:px-12 md:py-20 xl:px-24 flex flex-col md:flex-row justify-between gap-5 xl:gap-10 items-start md:items-end'>
              <h1 className='text-white font-bold xl:text-[3rem] xl:leading-[4rem] lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] text-[2rem] leading-[2.75rem]'>
                Contact us today to embark on a journey of transformative{' '}
                <div className='md:inline-flex justify-center xl:h-[4rem] lg:h-[3rem] h-[2.75rem] text-azolla_green overflow-hidden'>
                  <VerticalTextAnimation
                    words={projectManagementWords}
                    height={projectHeight}
                    duration={5}
                  />
                </div>
              </h1>
              <div className='pb-4'>
                <Button
                  label='Schedule a call'
                  variant='tertiary'
                  customClass='lg:!px-10 lg:!py-8 lg:!text-responsive-md lg:!font-medium hover:!border-white'
                  onClick={scheduleCall}
                />
              </div>
            </div>
          </>
        );
      case 'About us':
        return (
          <>
            <div className='p-8 xl:p-20 flex flex-col md:flex-row justify-between gap-5 items-start md:items-end'>
              <div className='text-white font-medium'>
                <h1 className='text-white font-bold md:leading-[3.75rem] md:text-[2.75rem] xl:leading-[4.5rem] xl:text-[3.5rem] text-[2rem] leading-[2.75rem]'>
                  Let&apos;s unlock value and{' '}
                  <span className='md:inline-block'>
                    future-proof your business.
                  </span>
                </h1>
              </div>
              <div className='pb-4'>
                <Button
                  label='Schedule a call'
                  variant='tertiary'
                  customClass='lg:!px-10 lg:!py-8 lg:!text-2xl lg:!font-medium hover:!border-white'
                  onClick={scheduleCall}
                />
              </div>
            </div>
          </>
        );
      case 'Privacy Policy':
        return (
          <div className='p-8 xl:p-20 flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-start md:items-end'>
            <div className='w-full lg:w-1/2 2xl:w-full text-white font-medium'>
              <h1 className='text-white font-bold xl:text-[4rem] xl:leading-[5rem] md:text-[3.25rem] md:leading-[4.25rem] xxs:text-[2.25rem] xxs:leading-[3.25rem] text-[1.75rem] leading-[2.75rem]'>
                Thank you for choosing Azolla.
              </h1>
            </div>
            <div className='pb-4'>
              <Button
                label='Get in touch'
                variant='tertiary'
                customClass='max-w-[200px] lg:max-w-[250px] lg:!px-10 lg:!py-8 lg:!text-2xl lg:!font-medium hover:!border-white'
                onClick={onOpen}
              />
            </div>
          </div>
        );
      case 'Careers':
        return (
          <div className='p-8 xl:p-20 flex flex-col gap-5 md:flex-row justify-between items-start md:items-end'>
            <div className='text-white font-medium'>
              <h1 className='text-white font-bold md:leading-[3.75rem] md:text-[2.75rem] xl:leading-[4.5rem] xl:text-[3.5rem] text-[2rem] leading-[2.75rem]'>
                Together, let&apos;s pave the way to{' '}
                <span className='lg:inline-block'>a better tomorrow!</span>
              </h1>
            </div>
            <div className='pb-4'>
              <Button
                label='View Openings'
                variant='tertiary'
                customClass='lg:!px-10 lg:!py-8 lg:!text-2xl lg:!font-medium hover:!border-white'
                onClick={() => scrollToSection('openings')}
              />
            </div>
          </div>
        );
      case 'Blog':
        return null;
    }
  };

  return (
    <div className='relative h-full w-full'>
      <ConfettiLottie
        isOpen={isLottieOpen}
        onOpenChange={onLottieOpenChange}
        message={`Valued subscriber, you’re now part of the solution!`}
      />
      <div className='bg-azolla_black'>{renderFooterTitle()}</div>
      <LetsTalk
        type={type === 'Home' ? LetsTalkType.GET_STARTED : LetsTalkType.HOME}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      <Divider className='bg-dark_gray' />
      <div className='h-auto bg-azolla_black px-10 py-14 md:pl-12 md:pt-20 xl:px-24'>
        <div className='flex justify-start md:justify-center'>
          <div className='h-full w-full'>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
              <div className='w-full md:w-auto flex flex-col justify-start items-start'>
                <div className='rounded-md sm:h-[176px] w-full sm:w-[500px] bg-footer_newsletter_bg_black p-3 sm:p-8 flex flex-col justify-center gap-6'>
                  <div className='text-white font-black'>
                    Subscribe to Newsletter
                  </div>
                  <Input
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleOnChange}
                    isRequired={true}
                    radius='sm'
                    classNames={{
                      input:
                        'text-lg !bg-black font-medium data-[focused=true]:!bg-black',
                      description:
                        'pt-1 h-[20px] text-white text-[14px] font-medium',
                      inputWrapper:
                        'h-[50px] !bg-black text-[20px] flex justify-center items-center data-[hover=true]:!bg-black group-data-[focused=true]:!bg-black text-white',
                    }}
                    placeholder='Email address'
                    startContent={
                      <Image
                        src='/images/mail-icon.svg'
                        alt='Mail Icon'
                        width={32}
                        height={32}
                        className='shrink-0 m-1 sm:m-2 w-auto h-auto'
                      />
                    }
                    endContent={
                      <Button
                        type='submit'
                        label='Submit'
                        onClick={handleOnclick}
                        customClass='disabled:!opacity-100 text-white font-medium hover:text-black text-center h-[36px] !leading-2 px-4 !py-1 bg-footer_newsletter_bg_black rounded-md'
                      />
                    }
                    description={description}
                  />
                </div>
                <div className='w-full pt-8 flex justify-center md:justify-start gap-5'>
                  {socialMediaLinks.map((item) => {
                    const { id, title, image, link } = item;
                    return (
                      <Link
                        key={id}
                        href={link}
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        <div className='w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center bg-social_media_logo_bg hover:bg-white'>
                          <Image
                            src={`/images/media/${image}`}
                            alt={title}
                            width={30}
                            height={30}
                            className='cursor-pointer'
                          />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
              {type !== "Casper" ?  (
              <div className='grid grid-rows-4 max-[410px]:grid-flow-row grid-flow-col gap-4 md:gap-x-responsive-lg xl:gap-x-responsive-2xl w-full md:w-auto items-center text-base xl:text-xl text-white'>
                {footerDetails.map((item) => {
                  const { id, title, link } = item;
                  return (
                    <Link
                      key={id}
                      href={link}
                      rel={item?.newTab ? 'noopener noreferrer' : ''}
                      target={item?.newTab ? '_blank' : ''}
                      className='w-auto hover:text-azolla_blue text-wrap'
                    >
                      {title}
                    </Link>
                  );
                })}
              </div>
              ) : (
                <div className='grid grid-rows-3 max-[410px]:grid-flow-row grid-flow-col gap-4 md:gap-x-responsive-lg xl:gap-x-responsive-2xl w-full md:w-auto items-center text-base xl:text-xl text-white'>
                {casperFooterDetails.map((item) => {
                  const { id, title, link } = item;
                  return (
                    <Link
                      key={id}
                      href={link}
                      rel={item?.newTab ? 'noopener noreferrer' : ''}
                      target={item?.newTab ? '_blank' : ''}
                      className='w-auto hover:text-azolla_blue text-wrap'
                    >
                      {title}
                    </Link>
                  );
                })}
              </div>
              )}
            </div>
            <div className='relative pt-10'>
              <Divider className='w-full absolute left-0 bg-dark_gray' />
              <div className='pt-10 w-full flex justify-center text-center text-white text-nowrap'>
                &copy;{year} Azolla. All Rights Reserved
              </div>
            </div>
            <div className='translate-y-6 flex flex-col md:flex-row justify-center items-center gap-10'>
              <Image
                width={200}
                height={100}
                src={'/images/iso/logo-1.webp'}
                alt='iso logo'
                className='md:w-1/4 lg:w-[200px] h-auto'
              />
              <Image
                width={200}
                height={100}
                src={'/images/iso/logo-2.webp'}
                alt='iso logo'
                className='md:w-1/4 lg:w-[200px] h-auto'
              />
              <Image
                width={200}
                height={100}
                src={'/images/iso/logo-3.webp'}
                alt='iso logo'
                className='md:w-1/4 lg:w-[200px] h-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewFooter;
