'use client';

import Button from '@/components/Button/Button';
import YouTube from 'react-youtube';

function HomePageVideo() {
  return (
    <div className='p-10 py-14 md:py-20 xl:px-24 xl:py-32'>
      <div className='pb-10 xl:pb-20 font-semibold flex flex-col xl:flex-row gap-10 items-start xl:items-end'>
        <div className='text-responsive-3xl leading-[1.1]'>
          Embracing this new challenge, understanding possibilities, and
          unlocking the true potential of your vessel creates value and
          future-proofs your business.
        </div>
        <div>
          <Button
            variant='tertiary'
            label={
              <div className='text-2xl font-bold'>
                Learn How - <span className='font-normal'>It&apos;s free</span>
              </div>
            }
            href='/consultancy'
            customClass='md:px-12 py-8 border-2 border-azolla_blue'
          />
        </div>
      </div>
      <div className='relative pb-[56.25%]'>
        <YouTube
          videoId='ANZ2h-oDJfc?rel=0&listType=user_uploads'
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
          opts={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
}

export default HomePageVideo;
