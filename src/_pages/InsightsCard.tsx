'use client'

import useBreakpoints from "@/hooks/useBreakPoints";
import { Image } from '@nextui-org/react';


interface InsightsCard{
    image: string;
    tag:string;
    title:string;
    team:string;
}

const InsightsCard= (data: InsightsCard) => {
    const {isXs} = useBreakpoints();

    return (
        <div className="group h-full w-full text-black flex flex-col gap-2">
            <div className="overflow-hidden h-full w-full">
            <div
    className="relative shadow-black/5 shadow-none rounded-none h-full"
    style={{ maxWidth: 'fit-content', width: '100%' }}  
  >                <Image
                    radius={'none'}
                    alt='image1' 
                    src={data.image}
                    className='!h-[300px] !w-full object-cover group-hover:scale-110 transform transition-transform duration-500 ease-in-out'
                /> 
                </div>
            </div>
            <div className="p-2">
                <p className="uppercase font-medium text-responsive-xs">{data.tag}</p>
                <h1 className="capitalize font-bold text-responsive-md group-hover:underline">{data.title}</h1>
                <p className="font-medium text-responsive-xs">{data.team}</p>
            </div>
        </div>
    );
};

export default InsightsCard;
