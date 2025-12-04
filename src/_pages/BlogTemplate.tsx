'use client';

import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useFindVisibleElements } from '@/hooks/useFindVisibleElements';
import useBreakpoints from '@/hooks/useBreakPoints';
import { Avatar, Divider } from '@nextui-org/react';
import VerticalTextAnimation from '@/utils/VerticalTextAnimation';
import Button from '@/components/Button/Button';
import Markdown from 'react-markdown';
import { BlogInfo } from '@/types/blog';
import { STRAPI_BASE_URL } from '@/utils/baseUrl';
import { scheduleCall } from '@/utils/schedular';
import styles from '../app/blog.module.css';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  XIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

function BlogTemplate({ blogInfo }: { blogInfo: BlogInfo }) {
  const [id, setId] = useState<string | null>(null);
  const ScrollToView = (id: string) => {
    const div = document.getElementById(`${id}`);
    div?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const pathname = usePathname();
  const url = `https://azolla.sg${pathname}`;

  const { isMd, isLg, isXl } = useBreakpoints();

  let height = 2.75;
  if (isMd || isLg) height = 3.5;
  if (isXl) height = 4.25;

  let sectionRefs = useRef<Array<any>>([]);

  sectionRefs.current = blogInfo.section?.map(
    (_ref, index) => (sectionRefs.current[index] = React.createRef())
  );

  const visibleElementIds = useFindVisibleElements(sectionRefs);

  useEffect(() => {
    if (visibleElementIds.length > 0) {
      const index = visibleElementIds.length - 1;
      setId(visibleElementIds[index]);
    }
  }, [visibleElementIds]);

  return (
    <section>
      <header
        style={{
          background: blogInfo.bannerColor
            ? `linear-gradient(to bottom right, #FFFFFF 0%, ${blogInfo.bannerColor} 100%)`
            : `linear-gradient(to bottom right, #FFFFFF 0%, #D3D3D3 100%)`,
        }}
        className='flex flex-col lg:flex-row'
      >
        <div className='w-full lg:w-3/5 max-md:p-8 md:p-16 md:pb-0 lg:pb-16 xl:p-20 text-black relative'>
          {blogInfo.customerLogo?.data && (
            <Image
              width={120}
              height={100}
              src={
                STRAPI_BASE_URL +
                (blogInfo?.customerLogo?.data?.attributes?.url || '')
              }
              alt='logo'
              className='mb-8 shrink-0'
            />
          )}
          <h1 className='xl:text-responsive-2xl md:text-responsive-xl text-responsive-3xl leading-[1.2] font-bold'>
            {blogInfo.title}
          </h1>
          <div className='xl:text-responsive-sm text-responsive-xs mt-8'>
            {blogInfo.subTitle}
          </div>
          <div className='xl:text-responsive-sm text-responsive-xs mt-8'>
            {blogInfo.subTitle2}
          </div>
          {blogInfo.impacts.length > 0 && (
            <div className='xl:text-responsive-md text-responsive-xs leading-[1] mt-8'>
              <div className='inline-flex flex-wrap gap-10 justify-start md:justify-around lg:justify-start w-full'>
                {blogInfo.impacts.map((impact, index) => {
                  return (
                    <div key={index} className='w-1/4'>
                      <h1 className='text-responsive-2xl font-bold'>
                        {impact.title}
                      </h1>
                      <div className='pt-2 text-sm font-medium uppercase'>
                        {impact.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className='relative w-full lg:w-2/5 flex justify-center'>
          <Image
            width={200}
            height={200}
            priority
            sizes='100vw'
            src={
              STRAPI_BASE_URL + (blogInfo?.image?.data?.attributes?.url || '')
            }
            alt='Case study banner image'
            className='lg:absolute lg:left-0 lg:-bottom-10 w-full md:w-[80%] lg:w-full md:translate-y-10 h-auto self-center drop-shadow-xl'
          />
        </div>
      </header>
      <div className={styles['section']}>
        <div className='space-y-responsive-xl w-5/6 m-auto my-14 md:mt-20 lg:my-32'>
          <div className='flex'>
            <h2
              className={`hidden z-10 lg:block lg:sticky lg:self-start top-16 font-normal lg:w-2/6 text-lg text-start`}
            >
              <div className='w-[75%] border-1.5 py-6 flex flex-col gap-3'>
                <div className='text-responsive-md font-semibold px-5'>
                  {blogInfo.summaryHeader || 'Summary'}
                </div>
                {blogInfo.section?.map((section, index) => {
                  const sectionId = String(section.id);
                  return (
                    <div
                      key={index}
                      className={`cursor-pointer text-lg px-4 border-l-3 ${
                        id === sectionId
                          ? 'border-blue-500 text-blue-500 font-semibold'
                          : 'border-transparent font-medium'
                      }`}
                      onClick={() => ScrollToView(sectionId)}
                    >
                      {section.title}
                    </div>
                  );
                })}
              </div>
              <div className='flex pt-8 pb-2 gap-2 items-center'>
                <p className='uppercase !text-sm xl:!text-base !font-normal'>
                  Share
                </p>
                <p>-</p>
                <div className='flex gap-2 items-center'>
                  <LinkedinShareButton url={url}>
                    <LinkedinIcon size={40} round={true} />
                  </LinkedinShareButton>
                  <WhatsappShareButton url={url}>
                    <WhatsappIcon size={40} round={true} />
                  </WhatsappShareButton>
                  <TwitterShareButton url={url}>
                    <XIcon size={40} round={true} />
                  </TwitterShareButton>
                  <FacebookShareButton url={url}>
                    <FacebookIcon size={40} round={true} />
                  </FacebookShareButton>
                </div>
              </div>
            </h2>
            <div className='w-full lg:w-4/6 flex justify-end'>
              <div className='w-full overflow-x-hidden space-y-responsive-lg'>
                {blogInfo.customer && (
                  <>
                    <div>
                      <blockquote className='text-responsive-md pl-5 inline italic font-semibold'>
                        {blogInfo.customer?.feedback}
                      </blockquote>
                      <div className='pt-5 pl-2 flex gap-4 items-center text-responsive-xs'>
                        <Avatar
                          size='md'
                          showFallback
                          classNames={{ base: 'shrink-0' }}
                          isBordered={
                            blogInfo.customer.image?.data?.attributes.url
                              ? true
                              : false
                          }
                          src={
                            STRAPI_BASE_URL +
                            (blogInfo.customer.image?.data?.attributes.url ||
                              ' ')
                          }
                          alt='customer-image'
                        />
                        <div className='text-responsive-xs'>
                          <div className='font-semibold capitalize'>
                            {blogInfo.customer?.name}
                          </div>
                          <div>{blogInfo.customer?.role}</div>
                        </div>
                      </div>
                    </div>
                    <Divider />
                  </>
                )}
                {blogInfo.section?.map((section, index) => (
                  <div key={index}>
                    <h1
                      id={String(section.id)}
                      ref={sectionRefs.current[index]}
                      className={`${
                        id === String(section.id) && 'lg:text-blue-500'
                      } mb-8 break-words max-md:!text-4xl`}
                    >
                      {section.title}
                    </h1>
                    <Markdown>{section.content}</Markdown>
                  </div>
                ))}
                <div className='lg:hidden flex py-2 gap-2 min-[350px]:gap-4 items-center'>
                  <p className='uppercase !text-base !font-normal'>Share</p>
                  <p>-</p>
                  <div className='flex gap-2 min-[350px]:gap-4 items-center'>
                    <LinkedinShareButton url={url}>
                      <LinkedinIcon size={40} round={true} />
                    </LinkedinShareButton>
                    <WhatsappShareButton url={url}>
                      <WhatsappIcon size={40} round={true} />
                    </WhatsappShareButton>
                    <TwitterShareButton url={url}>
                      <XIcon size={40} round={true} />
                    </TwitterShareButton>
                    <FacebookShareButton url={url}>
                      <FacebookIcon size={40} round={true} />
                    </FacebookShareButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black p-8 md:py-20 xl:p-24 flex flex-col md:flex-row gap-5 xl:gap-10 justify-between items-start md:items-end'>
        <div className='text-white font-medium'>
          {blogInfo.footerDetails?.text &&
          blogInfo.footerDetails?.changingText.length > 0 ? (
            <h1 className='text-white font-bold xl:text-[3.25rem] xl:leading-[4.25rem] md:text-[2.75rem] md:leading-[3.5rem] text-[2rem] leading-[2.75rem]'>
              {blogInfo.footerDetails.text}{' '}
              <div className='md:inline-flex justify-center xl:h-[4.25rem] md:h-[3.5rem] h-[2.75rem] text-azolla_green overflow-hidden'>
                <VerticalTextAnimation
                  words={[
                    ...blogInfo.footerDetails.changingText,
                    blogInfo.footerDetails.changingText[0],
                  ]}
                  height={height}
                  duration={5}
                />
              </div>
            </h1>
          ) : (
            <h1 className='text-white font-bold xl:text-[3.25rem] xl:leading-[4.25rem] md:text-[2.75rem] md:leading-[3.5rem] text-[2rem] leading-[2.75rem]'>
              Contact us today to embark on a journey of{' '}
              <div className='md:inline-flex justify-center xl:h-[4.25rem] md:h-[3.5rem] h-[2.75rem] text-azolla_green overflow-hidden'>
                <VerticalTextAnimation
                  words={[
                    'discovery.',
                    'optimization.',
                    'maritime leadership.',
                    'discovery.',
                  ]}
                  height={height}
                  duration={5}
                />
              </div>
            </h1>
          )}
        </div>
        <div className='py-4'>
          <Button
            label='Schedule a call'
            variant='tertiary'
            customClass='lg:!p-8 lg:!text-3xl lg:!font-medium justify-end hover:!border-white'
            onClick={scheduleCall}
          />
        </div>
      </div>
    </section>
  );
}

export default BlogTemplate;
