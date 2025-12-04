'use client';

import { useEffect, useRef, useState } from 'react';
import CarouselArrow from '@/svg/CarouselArrow';
import { ScrollShadow } from '@nextui-org/react';

interface Props {
  customClass?: string;
  arrowContainerCustomClass?: string;
  slideWidth?: number; // How much width we need to slide.
  gap?: string; // tailwind gap utility.
  children: React.ReactNode;
}

function Carousel({
  customClass,
  arrowContainerCustomClass,
  slideWidth = 400,
  gap,
  children,
}: Props) {
  const [isLeftActive, setIsLeftActive] = useState<boolean>();
  const [isRightActive, setIsRightActive] = useState<boolean>();

  let scrollRef = useRef<HTMLDivElement | null>(null);

  const [scrollFront, setScrollFront] = useState(0);
  const [isScrollEnd, setIsScrollEnd] = useState<boolean>();

  // To handle the right arrow of the carousel
  const handleScrollEnd = () => {
    if (
      scrollRef.current &&
      Math.floor(
        scrollRef.current.scrollWidth - scrollRef.current.scrollLeft
      ) <= scrollRef.current.offsetWidth
    ) {
      setIsScrollEnd(true);
    } else {
      setIsScrollEnd(false);
    }
  };

  useEffect(() => {
    handleScrollEnd();
  }, []);

  const slide = (shift: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += shift;
      setScrollFront(scrollFront + shift);
    }
    handleScrollEnd();
  };

  const scrollCheck = () => {
    if (scrollRef.current) {
      setScrollFront(scrollRef.current.scrollLeft);
    }
    handleScrollEnd();
  };

  return (
    <div className={`relative select-none ${customClass}`}>
      <div
        className={`absolute z-10 bg-gradient-to-r from-white to-transparent h-full flex items-center top-0 ${
          scrollFront !== 0 ? 'visible' : 'invisible'
        } ${arrowContainerCustomClass}`}
      >
        <button
          aria-label='arrow'
          className={`rotate-180 cursor-none md:cursor-pointer`}
          onMouseOver={() => setIsLeftActive(true)}
          onMouseOut={() => setIsLeftActive(false)}
          onClick={() => slide(-slideWidth)}
        >
          <CarouselArrow isActive={isLeftActive} />
        </button>
      </div>

      <ScrollShadow
        hideScrollBar={true}
        size={50}
        className={`overflow-x-auto md:overflow-hidden scroll-smooth scrollbar-hide snap-x xl:snap-none snap-mandatory flex gap-8 ${gap} w-full`}
        ref={scrollRef}
        onScroll={scrollCheck}
        orientation='horizontal'
      >
        {children}
      </ScrollShadow>
      <div
        className={`absolute top-0 right-0 bg-gradient-to-l from-white to-transparent h-full flex items-center ${
          isScrollEnd ? 'invisible' : 'visible'
        } ${arrowContainerCustomClass}`}
      >
        <button
          aria-label='arrow'
          className='cursor-none md:cursor-pointer'
          onMouseOver={() => setIsRightActive(true)}
          onMouseOut={() => setIsRightActive(false)}
          onClick={() => slide(slideWidth)}
        >
          <CarouselArrow isActive={isRightActive} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
