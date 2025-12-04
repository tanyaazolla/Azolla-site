"use client";
import useScroll from "@/hooks/useScroll";
import { useRef } from "react";

interface Props {
  text: string[],
  isInline?: boolean
}

/**
 * @description Color change text animation -  while scroll animation
 * @prop text - array of text.
 * @prop isInline - boolean : To display inline with previous text, Add \&nbsp; before rendering this component
 * 
 */

const TextColorRevealOnScroll = ({ text, isInline=false }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const scrollY = useScroll();

  let startHeight = 0;
  let stopHeight = 0;
  let breakPoint = 0;
  if(ref && ref.current) {
    startHeight = (ref.current?.offsetTop - window.innerHeight) + (window.innerHeight / 3.25);
    stopHeight = (window.innerHeight + startHeight) - (window.innerHeight / 3.25);
    breakPoint = (stopHeight - startHeight) / text.length;
  }

  const inlineStyles = (index: number) => index === 0 && isInline ? 'inline-block' : 'block'

  const generateClipPath = (index: number) => {
    if (scrollY >= startHeight) {
      const clipProgress = (((scrollY - startHeight) - (breakPoint * (index))) / (breakPoint)) * 100;
      return `polygon(0% 0%, ${clipProgress}% 0%, ${clipProgress}% 100%, 0% 100%)`;
    }
    else return `polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`;
  }

  return (
    <>
      {
        text.map((individualText, index) => <div ref={index === 0 ? ref : null} key={individualText} className={`relative w-fit ${inlineStyles(index)}`}>
          <div className={`text-gray-600`}>{individualText}</div>
          <div
            className={`absolute text-white top-0 left-0 ${inlineStyles(index)}`}
            style={{ clipPath: generateClipPath(index) }}
          >
            {individualText}
          </div>
        </div>)
      }
    </>
  )
}

export default TextColorRevealOnScroll