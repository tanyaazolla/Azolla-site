'use client';

import Button from '@/components/Button/Button';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import YouTube from 'react-youtube';
import useBreakpoints from '@/hooks/useBreakPoints';

function Brightside() {
  const ref = useRef<HTMLDivElement | null>(null);
  const video = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 'some' });
  const { isXs } = useBreakpoints();
  const [play, setPlay] = useState<boolean>(false);

  const [isVideoInView, setVideoInView] = useState<boolean>();

  useEffect(() => {
    if (!isVideoInView) setPlay(false);
  }, [isVideoInView]);

  useEffect(() => {
    function getDetail() {
      if (video && video.current) {
        const rect = video.current.getBoundingClientRect();
        if (rect.top < 150) {
          setVideoInView(true);
        } else {
          setVideoInView(false);
        }
      }
    }
    window.addEventListener('scroll', getDetail);
    return () => removeEventListener('scroll', getDetail);
  }, []);

  return (
    <div className='bg-white p-10 py-20 xl:px-24'>
      <div>
        <div
          ref={ref}
          className='text-responsive-6xl pb-6 lg:pb-0 lg:pt-[6vh] lg:text-[9.5vw] font-normal text-black overflow-hidden'
        >
          <AnimatePresence initial={false}>
            <motion.p
              className='leading-[1]'
              initial={{
                opacity: 0,
                translateX: 0,
                translateY: isXs ? 18 : 40,
              }}
              animate={
                isInView
                  ? {
                      opacity: [0, 0, 0.5, 1],
                      translateX: isXs ? [0] : [0, 0, 0, 0, 0, 180],
                      translateY: isXs ? [18, 0] : [40, 0],
                    }
                  : { opacity: 1 }
              }
              transition={{ duration: 1 }}
            >
              But there is a
            </motion.p>
          </AnimatePresence>
          <AnimatePresence initial={false}>
            <motion.p
              className='leading-[1.15]'
              initial={{ opacity: 0, translateY: isXs ? -18 : -40 }}
              animate={
                isInView
                  ? {
                      opacity: [0, 0, 0.5, 1],
                      translateY: isXs ? [-18, 0] : [-40, 0],
                    }
                  : { opacity: 1 }
              }
              transition={{ duration: 1 }}
            >
              Bright Side!
            </motion.p>
          </AnimatePresence>
        </div>
        <div className='flex lg:justify-end'>
          <div className='lg:pl-10 lg:pt-10 w-full lg:w-1/2 flex flex-col gap-responsive-md'>
            <h2 className='[font-size:_clamp(1rem,1.5vw,3rem)]'>
              Embracing this new challenge, understanding possibilities, and
              unlocking the true potential of your vessel creates value and
              future-proofs your business.
            </h2>
            <div>
              <Button
                variant='tertiary'
                label={
                  <div className='font-bold'>
                    Learn How -{' '}
                    <span className='font-normal'>It&apos;s free</span>
                  </div>
                }
                href='/consultancy'
                customClass='!text-white !text-responsive-xs border-1 border-azolla_blue w-fit'
              />
            </div>
          </div>
        </div>
        <div className='mt-14 relative pb-[56.25%]'>
          <YouTube
            videoId='ANZ2h-oDJfc'
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                rel: 0,
                listType: 'user_uploads',
              },
            }}
          />
        </div>
        {/* <video
          loop
          autoPlay={false}
          controls
          poster='/images/thumbnail.png'
          className='w-full'
        >
          <source
            src='https://s3.ap-southeast-1.amazonaws.com/common.attachments.prod/media/azolla_video.mp4'
            type='video/mp4'
          />
        </video> */}
        {/* <motion.div
          ref={video}
          initial={{ width: '50%' }}
          animate={isVideoInView ? { width: '100%' } : ''}
          transition={{ duration: 1 }}
          className={`w-full lg:pt-10`}
        >
          <div className='relative !w-full h-full'>
            {!play ? (
              <div
                className='group cursor-pointer'
                onClick={() => {
                  isVideoInView ? setPlay(true) : setPlay(false);
                }}
              >
                <Image
                  width={500}
                  height={500}
                  src='/images/ship-project.png'
                  className='!w-full !h-full border-b rounded-3xl'
                  alt='video thumbnail'
                />
                <div
                  className={`absolute left-0 top-0 w-full h-full ${
                    isVideoInView ? 'visible' : 'invisible'
                  }`}
                >
                  <div className='h-full flex justify-center items-center'>
                    <Image
                      width={400}
                      height={400}
                      src='/images/play-icon.svg'
                      className='w-20 h-20 cursor-pointer'
                      alt='video thumbnail'
                    />
                  </div>
                </div>
              </div>
            ) : (
              <video loop autoPlay={true} controls className='w-full h-[80vh]'>
                <source
                  src='https://s3.ap-southeast-1.amazonaws.com/common.attachments.prod/media/azolla_video.mp4'
                  type='video/mp4'
                />
              </video>
            )}
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}

export default Brightside;
