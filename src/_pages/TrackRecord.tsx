'use client';

import StickyScroll from '@/components/StickyScroll/StickyScroll';
import TrackRecordForBlog from './TrackRecordForBlog';
import CounterAnimation from '@/components/CounterAnimation/CounterAnimation';

const trackRecords = [
  {
    title: '50+',
    subTitle: 'ESD Installations',
    fromValue: 0,
    value: 50,
  },
  {
    title: '100+',
    subTitle: 'Scrubber Installations',
    fromValue: 0,
    value: 100,
  },
  {
    title: '17+',
    subTitle: 'Propeller Replacements',
    fromValue: 0,
    value: 17,
  },
  {
    title: '50+',
    subTitle: 'BWTS Installations',
    fromValue: 0,
    value: 50,
  },
];

const PopulateRecords = ({ title, subTitle }: any) => {
  return (
    <div className='text-center flex flex-col items-center'>
      <h1 className='text-[6rem] lg:text-[10rem] font-extrabold text-white leading-[1.02]'>
        {title}
      </h1>
      <h2
        className='text-[1rem] lg:text-[2rem] text-white'
        style={{ wordSpacing: '9999px' }}
      >
        {subTitle}
      </h2>
    </div>
  );
};

const TrackRecord = () => {
  return (
    <>
      <StickyScroll
        title={
          <>
            Our track record
            <br /> across vessel types:
          </>
        }
        customClass='bg-black text-white px-10 py-20 xl:pl-24 xl:py-32 2xl:px-24'
        titlecustomClass='!text-[7.5vw] !text-center md:!text-start md:!text-responsive-xl xl:!text-5xl !leading-[1.3]'
      >
        <div className='pt-20 md:pt-0 flex flex-col items-center md:items-end'>
          <div className='space-y-responsive-3xl block md:hidden'>
            {trackRecords.map((item) => {
              return (
                <CounterAnimation
                  key={item.title + item.subTitle}
                  from={item.fromValue}
                  to={item.value}
                  description={item.subTitle}
                  showPlus={true}
                />
              );
            })}
          </div>
          <div className='md:space-y-responsive-3xl hidden md:block'>
            {trackRecords.map((content) => {
              return (
                <PopulateRecords
                  key={content.title + content.subTitle}
                  title={content.title}
                  subTitle={content.subTitle}
                />
              );
            })}
          </div>
        </div>
      </StickyScroll>
      <TrackRecordForBlog />
    </>
  );
};

export default TrackRecord;
