'use client';
import { useEffect, useState } from 'react';
import useBreakpoints from '@/hooks/useBreakPoints';
import VerticalTextAnimation from '@/utils/VerticalTextAnimation';;
import styles from './textShimmer.module.css'
import { Page } from '@/types/page'
import TextColorRevealOnScroll from '@/utils/TextColorRevealOnScroll';
import {motion} from "framer-motion";

const floatText = [
  {
    text: 'EU-Emission trading scheme',
    top: '25vh',
    left: '5vw'
  },
  {
    text: 'Rightship rating',
    top: '2vh',
    left: '15vw',
  },
  {
    text: 'EEXI Compliance',
    top: '45vh',
    left: '5vw'
  },
  {
    text: 'Ship energy efficiency management plan',
    top: '74vh',
    left: '5vw'
  },
  {
    text: 'Region-specific Sulfur cap',
    top: '74vh',
    right: '45vw'
  },
  {
    text: 'Fuel EU maritime',
    top: '2vh',
    right: '15vw'
  },
  {
    text: 'MARPOL Annex VI',
    top: '45vh',
    right: '5vw'
  },
  {
    text: 'Carbon intensity index - rating',
    top: '25vh',
    right: '5vw'
  },
  {
    text: 'IMO DCS and EU Monitoring Reporting & Verification',
    top: '74vh',
    right: '5vw'
  },
]

const colorChangeText = ['But there', 'is a', 'bright side!']

const HeroBanner = ({ type = 'Home' }: Page) => {

  const words = ["Manager", "Owner", "Charterer", "Manager"];

  const { isXs, isSm, isMd, isLg, isXl } = useBreakpoints();

  let height = 2.75;
  if (isMd) height = 6;
  if (isXs || isSm || isLg) height = 5;
  if (isXl) height = 7.5

  const [removeShimmer, setRemoveShimmer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRemoveShimmer(true);
    }, 4000)
  }, [])


  const renderHeroTitle = () => {
    switch (type) {
      case 'Home':
        return <h1  className='text-white p-3 font-bold md:text-[5rem] lg:text-[4rem] lg:leading-[5rem] xl:text-[6rem] xl:leading-[7.5rem] md:leading-[6rem] xxs:text-[4rem] xxs:leading-[5rem] text-[1.75rem] leading-[2.75rem] overflow-hidden'>It&apos;s tough <br /> being a
          <div className='flex flex-col md:flex-row justify-center overflow-hidden md:translate-x-10 lg:translate-x-20'>
            Ship
            <div className='text-center md:text-left ml-2 md:ml-5 md:h-[6rem] lg:h-[5rem] xl:h-[7.5rem] xxs:h-[5rem] h-[2.75rem] text-azolla_green overflow-y-hidden'>
              <VerticalTextAnimation words={words} height={height} duration={5} />
            </div>
          </div>
        </h1>
    }
  }

  const renderHeroSubTitle = () => {
    switch (type) {
      case 'Home':
        return <p className='text-white text-responsive-md lg:text-responsive-sm xl:text-responsive-md p-10 md:p-4'>Amidst a slew of emission regulations and their commercial implications coming into force!</p>
    }
  }


  return (
    <div className='bg-black'>
      <div className={`min-h-[calc(100vh-80px)] flex flex-col relative`}>
        <div className={`text-center bg-black my-auto py-16 lg:pt-0`}>
          {renderHeroTitle()}
          {renderHeroSubTitle()}
          {
            type === 'Home' && floatText.map((float, index) => {
              return <p key={float.text}
                // className={`hidden lg:block absolute ${removeShimmer ? 'opacity-30' : styles.shimmer} text-white transition-all hover:!scale-110 hover:!translate-x-0 hover:!translate-y-0 hover:opacity-100  cursor-none after:absolute after:bg-gradient-to-r after:from-slate-500/10 after:to-slate-100/40 inline-block after:content-[''] after:h-full after:bottom-0 after:left-0 after:right-0 after:scale-x-75 after:origin-top-left after:-z-10 after:transition after:!duration-1000 after:!ease-in-out hover:after:h-full hover:after:scale-x-0 hover:after:origin-top-right px-4 py-3 after:rounded-tr-md after:rounded-br-full after:opacity-100 rounded-tr-md rounded-br-full overflow-hidden`}
                className={`hidden lg:block absolute opacity-30 text-white transition-all hover:!scale-110 hover:!translate-x-0 hover:!translate-y-0 hover:opacity-100  cursor-none after:absolute after:bg-gradient-to-r after:from-slate-500/10 after:to-slate-100/40 after:content-[''] after:h-full after:bottom-0 after:left-0 after:right-0 after:scale-x-75 after:origin-top-left after:-z-10 after:transition after:!duration-1000 after:!ease-in-out hover:after:h-full hover:after:scale-x-0 hover:after:origin-top-right px-4 py-3 after:rounded-tr-md after:rounded-br-full after:opacity-100 rounded-tr-md rounded-br-full overflow-hidden`}
                // className={`hidden lg:block absolute ${removeShimmer ? 'opacity-30' : styles.shimmer} text-white transition-all hover:!scale-110 hover:!translate-x-0 hover:!translate-y-0 hover:opacity-100  cursor-none after:absolute after:bg-gradient-to-r after:from-slate-500/10 after:to-slate-100/40 inline-block after:content-[''] after:h-full after:bottom-0 after:left-0 after:right-0 after:scale-x-75 after:origin-top-left after:-z-10 after:transition after:!duration-1000 after:!ease-in-out hover:after:h-full hover:after:scale-x-0 hover:after:origin-top-right px-4 py-3 after:rounded-tr-md after:rounded-br-full after:opacity-100 rounded-tr-md rounded-br-full overflow-hidden`}
                // className="absolute z-40 opacity-50 hover:opacity-100 transition-all hover:!scale-110 hover:!translate-x-0 hover:!translate-y-0 bg-gradient-to-r from-slate-50 to-slate-500 bg-clip-text text-transparent cursor-none after:absolute after:bg-gradient-to-r after:from-slate-500/10 after:to-slate-100/20 inline-block after:content-[''] after:h-full after:bottom-0 after:left-0 after:right-0 after:scale-x-0 after:origin-top-right after:-z-10 after:transition duration-1000 after:ease-in-out hover:after:h-full hover:after:scale-x-75 hover:after:origin-bottom-left px-4 py-3 after:rounded-tr-md after:rounded-br-full rounded-tr-md rounded-br-full overflow-hidden"
                style={{ top: float.top, right: float?.right, left: float?.left, animationDelay: index <= 4 ? '1s' : '2.1s' }}>
                {float.text}
              </p>
            })
          }
          <div className='md:hidden w-full flex justify-center'>
            <motion.img 
              initial={{ translateY: 0 }}
              animate={{ translateY: [0, 10, 0] }}
              transition={{ duration: 1, repeat: Infinity }} 
              width={20} 
              height={20} 
              src="/images/scroll-indicator.svg" 
              alt="scroll down" 
            />
          </div>
        </div>
      </div>
      {/* {type === 'Home' && <div className='p-10 py-14 md:py-20 xl:px-24 xl:py-32 text-white text-responsive-5xl font-[500] leading-[1.2]'>
        <TextColorRevealOnScroll text={colorChangeText} />
      </div>} */}
    </div>
  )
}

export default HeroBanner;