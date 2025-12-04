'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, useInView } from 'framer-motion';
import styles from './TextColorChanger.module.css';

interface Props {
  text: string;
  initialColor: string;
  targetColor: string;
  delay?: number;
}

function TextColorChanger({
  text,
  initialColor,
  targetColor,
  delay = 0.5,
}: Props) {
  const [textcolor, setTextColor] = useState<string>();

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    setTimeout(() => {
      if (isInView) {
        setTextColor(targetColor);
      } else {
        setTextColor(initialColor);
      }
    }, delay * 1000);
  }, [isInView]);

  return (
    <span ref={ref}>
      <AnimatePresence>
        {textcolor === targetColor ? (
          <span
            className={`bg-gradient-to-b ${initialColor} from-50% ${targetColor} to-50% ${styles['animate-text-color']}`}
          >
            {text}
          </span>
        ) : (
          <span style={{ color: initialColor }}>{text}</span>
        )}
      </AnimatePresence>
    </span>
  );
}

export default TextColorChanger;
