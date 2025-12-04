'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button, Image } from '@nextui-org/react';
import { useInView } from 'framer-motion';

interface CasperType {
  id: number,
  title: string | JSX.Element,
  content: string,
  image: string,
  button: boolean,
  buttonName: string,
  buttonLink: string
}


interface ComplianceCardAnimationProps {
  ComplianceCardData: CasperType[];
}

const ComplainceCardAnimation: React.FC<ComplianceCardAnimationProps> = ({ ComplianceCardData }) => {
const [activeCard, setActiveCard] = useState<number|null>(null);
const cardRefs = useRef<(HTMLDivElement | null)[]>([])
const sectionRefs = useRef<(HTMLDivElement | null)>(null)
const sectionRef = useRef<HTMLDivElement | null>(null);

  const [cardStyle, setCardStyle] = useState({
    filter: 'blur(30px)',
    opacity: 0,
    transition: 'filter .6s ease, opacity .6s ease, background-position 0.8s ease'
  })

  useEffect(() => {
    const observerOptions = {
      root: null, 
      rootMargin: '0px',
      threshold: 1.0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const cardId = parseInt((entry.target as HTMLElement).dataset.cardid!, 10);
        if (entry.isIntersecting) {
          setActiveCard(cardId);
        }
      });
    }, observerOptions);

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);


  const inView  = useInView(sectionRef, {
    amount: 0.1, 
    once:false
  });

  useEffect(() => {
    if (!inView) {
      setActiveCard(null); 
    }
  }, [inView]);

  useEffect(() => {
    setCardStyle({
        opacity: 0,
        filter: 'blur(30px)',
        transition: 'none'
    });

    const timeoutId = setTimeout(() => {
        setCardStyle({
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'filter .6s ease, opacity .6s ease'
        });
    }, 150); 

    return () => clearTimeout(timeoutId);
}, [activeCard]);

const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
      <div ref={sectionRef} >
        <div className='py-10 px-10 w-full flex mb-20 relative'>
        <div className='h-full items-center justify-center w-[34%]'>
                {ComplianceCardData.map((section, index) => (
                    <div key={index} data-cardid={section.id} 
                    // className='xl:px-10 pb-10 w-full flex flex-col justify-center h-[70vh]' 
                    className={`xl:pl-5 pb-10 w-full flex flex-col justify-center items-center h-[70vh] transition-opacity ${
                      (activeCard === section.id && sectionRefs.current) ? 'opacity-100' : 'opacity-20'
              }`}
                     ref={el => (cardRefs.current[index] = el)} >
                      {scrollDirection === 'down' && activeCard !== ComplianceCardData.length && (
                        <div className='py-[20vh]'>
                        </div>
                      )

                      }
                        <div ref={sectionRefs} className="w-full !lg:pb-5">
                            <h1 className='py-2 md:py-2 !leading-[1] text-responsive-xl font-[600]'>{section.title}</h1>
                            <p className='py-2 w-[100%] md:py-2 !leading-[1.2] text-responsive-md font-[400]'>{section.content}</p>
                            {section.button && (
                                <div>
                                    <Button
                                        href={section.buttonLink}
                                        size={'lg'}
                                        className="bg-white text-black text-responsive-md font-semibold"
                                        style={{ paddingLeft: 0, paddingRight: 0 }}
                                        // endContent={<ArrowUpRight color={'#000000'} width={'25'} height={'25'} />}
                                    >
                                        {section.buttonName}
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div
              className={`z-10 w-[66%] sticky top-[15vh] right-0 h-[75vh] flex justify-center`} style={cardStyle}
            >     
                        <div className="w-full !h-auto pl-16">
                            <Image
                            src={ComplianceCardData.find(card => card.id === activeCard)?.image}
                            alt={'Active Card Image'}
                            className='lg:w-[75vw] lg:h-[75vh] rounded-none'
                            />
                        </div>
                    </div>
              </div>
       </div>
      
  );
}
export default ComplainceCardAnimation;
