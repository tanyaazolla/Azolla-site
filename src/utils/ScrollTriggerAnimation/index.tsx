'use client';
import React, { useEffect, useRef } from 'react'
import { useInView } from "framer-motion";

interface Props {
  callBack: () => void,
  index?: number
}


export const ScrollTriggerAnimation = ({ callBack, index = 0 }: any) => {

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.7 });

  useEffect(() => {
    if (isInView)
      callBack()
  }, [isInView])

  return (
    <>
      <div key={'blank' + index} style={{ top: (((index) * 71)) + 'vh' }} className="absolute w-28 h-screen">
        <div ref={ref} className="w-28 h-28" ></div>
      </div>
    </>
  )
}
