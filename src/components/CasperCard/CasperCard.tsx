'use client';

import ArrowUpRight from '@/svg/ArrowUpRight';
import { Button, Image } from '@nextui-org/react';
import React from 'react';


interface Props {
  id:number,
  content: string;
  title: string | JSX.Element;
  image: string;
  button: boolean;
  buttonName: string;
  buttonLink: string;
  
}

function CasperCard({ content, title, image, button, buttonName, buttonLink }: Props) {
  return (
    <>
        <div className="w-full flex">
            <div className="lg:w-1/2 xxs:w-full !xxs:p-10 pl-10 !lg:pb-5">
                <div className="pr-10 pt-4 pb-4">
                <Image
                    radius={'none'}
                    src={image}
                    alt={'holderimage'}
                    className='h-[30vh] md:h-[40vh] w-[100vw]'
                    // className='md:w-[700px] xs:w-[600px] lg:w-[750px] lg:h-[500px] md:h-[200px] xs:h-[200px]'
                /> 
        </div>
        <h1 className='py-2 md:py-2 xl:pl-10 !leading-[1] text-responsive-lg font-[600] text-black'>{title}</h1>
                <p className='py-2 w-[80%] md:py-2 xl:pl-10 !leading-[1.2] text-responsive-sm font-[400] !text-dark_gray'>{content}</p>
                {button && (
                <div className='xl:pl-10'>
                   
                        <div className="flex">
                        <Button href={buttonLink} size={'lg'} className="!text-dark_gray bg-white text-responsive-sm font-semibold" style={{ paddingLeft: 0, paddingRight: 0 }} 
                        // endContent={<ArrowUpRight color={'#000000'} width={'12'} height={'12'}/>}
                        >
                            {buttonName}
                        </Button>  
                    </div>
                </div>
                )}
            </div>

        </div>
        
    </>
      
  );
}

export default CasperCard;
