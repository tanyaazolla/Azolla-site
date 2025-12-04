import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
  from: number;
  to: number;
  description: string | React.ReactNode;
  showPlus?: boolean;
}

const CounterAnimation = ({
  from,
  to,
  description,
  showPlus = true,
}: Props) => {
  const count = useMotionValue(from);
  let rounded = useTransform(count, (latest) => Math.round(latest));

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: 2 });
    }
  }, [count, isInView, to]);
  return (
    <div ref={ref} className='flex flex-col items-center text-center'>
      <div className='text-[70px] leading-[70px] font-semibold'>
        <motion.span>{rounded}</motion.span>
        {showPlus && <motion.span>+</motion.span>}
      </div>
      <p className='text-2xl'>{description}</p>
    </div>
  );
};

export default CounterAnimation;
