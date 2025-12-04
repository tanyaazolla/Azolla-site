'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Announcement } from '@/types/announcement';
import ExternalLink from '@/svg/ExternalLink';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Props {
  array: any;
}

function AnnouncementAni({ array }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => {
        if (prev === array.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const variants: any = {
    slideUp: {
      opacity: 1,
      translateY: [100, 0],
    },
    slideTo: { translateY: [0, -100] },
  };

  return (
    <div className='bg-azolla_blue'>
      {array.map((announcement: Announcement, index: any) => {
        const { text, link, linkText } = announcement.attributes;
        if (index === currentIndex) {
          return (
            <AnimatePresence mode='wait' key={index}>
              <motion.div
                key={index}
                initial={'slideUp'}
                animate={'slideTo'}
                variants={array.length > 1 && variants}
                transition={{
                  delay: 4.25,
                  duration: 1,
                }}
              >
                <div className='text-base px-6 py-3 flex flex-col md:flex-row gap-y-2 gap-x-10 md:items-center justify-between text-white font-medium'>
                  <div>{text}</div>
                  <Link
                    target='_blank'
                    href={link || ''}
                    className='group flex gap-2 items-center hover:underline hover:underline-offset-4 font-bold'
                  >
                    <div>{linkText}</div>
                    <ExternalLink customClass='[&>path]:stroke-white w-6 h-6' />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          );
        }
      })}
    </div>
  );
}

export default AnnouncementAni;
