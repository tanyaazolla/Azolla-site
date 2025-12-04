import React from 'react'
import { motion } from 'framer-motion';

interface Props {
  words: string[],
  height: number,
  duration: number
}

// # For spring effect 
{/* <motion.div animate={{ y: ['0rem', '-21rem'] }} transition={{ repeat: Infinity, type: 'spring', stiffness : 10, restSpeed: 3, restDelta : 2 }}> */ }

/**
 * @description Vertical text scroll animation from bottom to top
 * @prop words array should have the first element appended in the last index in order to create the smooth transition Eg; ['apple','banana','cherry', 'apple'].
 * @prop height consider in rem unit, and should be equal to height of the container and line height of the text, and passes this a number not as string Eg: (height and line height = "7rem" prop should be passed as 7)
 * @prop duration in number, it can be milliseconds, seconds
 */

const VerticalTextAnimation = ({ words, height, duration }: Props) => {

  const generateKeyFrames = () => {
    const keyFrames: string[] = [];
    const noOfIteration = words.length;
    Array.from({ length: noOfIteration }).map((val, index) => {
      const frame = `-${(index * height)}rem`;
      if (noOfIteration - 1 === index)
        keyFrames.push(frame)
      else
        keyFrames.push(frame, frame, frame, frame, frame)
    })
    return keyFrames;
  }

  const variants = {
    scrollUp: {
      y: generateKeyFrames(),
      transition: { repeat: Infinity, duration }
    }
  }

  return (
    <motion.div variants={variants} animate="scrollUp" >
      {words.map((word, index) => <div key={word + index}>{word}</div>)}
    </motion.div>
  )
}

export default VerticalTextAnimation