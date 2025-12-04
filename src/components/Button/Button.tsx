"use client";

import { Button as NextUIButton, Link } from "@nextui-org/react";

interface Props {
  label: string | React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary";
  type?: 'submit'| 'button' | 'reset';
  customClass?: string,
  transitionFrom?: 'bottomToTop' | 'leftToRight',
  isBordered?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  href?: string
}

function Button({ label, size = "lg", variant, type, transitionFrom = 'leftToRight', isBordered = false, href, isDisabled , customClass, onClick }: Props) {
  let variantUtility;
  switch (variant) {
    default:
    case "primary":
      variantUtility =
        "bg-azolla_purple hover:text-azolla_purple border-azolla_purple";
      break;
    case "secondary":
      variantUtility =
        "bg-azolla_green hover:text-azolla_green border-azolla_green";
      break;
    case "tertiary":
      variantUtility =
        "bg-azolla_blue hover:text-azolla_blue border-azolla_blue";
      break;
  }

  const hovertransition = transitionFrom === 'leftToRight' ?
    'after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left' :
    'after:scale-y-0 after:origin-top hover:after:scale-y-100 hover:after:origin-bottom'

  return (
    <NextUIButton
      size={size}
      onClick={onClick}
      type={type}
      isDisabled={isDisabled}
      variant={isBordered ? 'bordered' : 'solid'}
      className={`relative after:absolute after:bg-white inline-block text-white 
      transition-colors !duration-500 ${variantUtility} after:content-[''] after:h-full 
      after:bottom-0 after:left-0 after:right-0 font-semibold
      after:-z-10 after:transition after:!duration-500 after:ease-in-out ${hovertransition} hover:after:h-full px-7 py-3 rounded-lg
      z-10 ${customClass} flex items-center justify-center text-center`}
      as={Link}
      href={href}
    >
      {label}
    </NextUIButton>
  );
}

export default Button;
