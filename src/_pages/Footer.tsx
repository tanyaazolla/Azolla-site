'use client';
import Button from '@/components/Button/Button';
import useBreakpoints from '@/hooks/useBreakPoints';
import VerticalTextAnimation from "@/utils/VerticalTextAnimation";

const Footer = () => {
  const words = ["Efficient", "Compliant", "Efficient"];

  const { isXs, isSm, isMd, isLg, isXl } = useBreakpoints();

  let height = 2.75;
  if (isMd || isLg || isXl) height = 7;
  if (isSm) height = 4.5;
  if (isXs) height = 3.25;

  const footerItems = ["Product", "Solution", "Insights", "Company", "Socials"];

  return (
    <footer className="h-screen snap-start p-36 bg-azolla_green">
      <div className='flex justify-between items-center'>
        <h1 className='font-bold md:text-[6rem] md:leading-[7rem] sm:text-[3.5rem] sm:leading-[4.5rem] xxs:text-[2.25rem] xxs:leading-[3.25rem] text-[1.75rem] leading-[2.75rem]'>
          <div className='flex justify-center overflow-hidden'>
            Get
            <div className='text-left ml-5 md:h-[7rem] sm:h-[4.5rem] px text-azolla_blue xxs:h-[3.5rem] h-[2.75rem] drop-shadow-xl'>
              <VerticalTextAnimation words={words} height={height} duration={4} />
            </div>
          </div>
          With Azolla
        </h1>
        <Button label={"Get Started"} variant='tertiary' customClass='!h-full !text-2xl !px-16 !py-6 !font-bold drop-shadow-xl !rounded-l-[3rem] !rounded-r-[7rem]' />
      </div>
      <div className='flex mt-36 justify-between font-bold text-responsive-lg'>
        {
          footerItems.map((item) => <div key={item} className='relative'>
            <div className='cursor-pointer after:bg-azolla_blue after:absolute after:h-[0.4rem] after:w-0 after:-bottom-3 after:left-1/2 hover:after:w-full hover:after:left-0 after:transition-all '>{item}</div>
          </div>)
        }
      </div>
    </footer>
  )
}

export default Footer