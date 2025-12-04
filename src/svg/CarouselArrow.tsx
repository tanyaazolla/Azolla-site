interface Props {
  customClass?: string;
  isActive?: boolean;
}

function CarouselArrow({ customClass, isActive }: Props) {
  return (
    <svg
      width='72'
      height='133'
      viewBox='0 0 72 133'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={customClass}
    >
      <circle
        opacity={isActive ? '1' : '0.2'}
        cx='66.5'
        cy='66.5'
        r='44.5'
        fill='#265CFF'
        className={customClass}
      />
      <path
        d='M39.4023 56.8676L49.0706 66.5358L39.4023 76.204'
        stroke={isActive ? '#F7F9FF' : '#265CFF'}
        strokeWidth='1.7'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={customClass}
      />
      <path
        d='M49.0707 66.5355L21.9996 66.5355'
        stroke={isActive ? '#F7F9FF' : '#265CFF'}
        strokeWidth='1.7'
        strokeLinecap='round'
        className={customClass}
      />
      <circle
        opacity={isActive ? '0.15' : '0'}
        cx='66.5'
        cy='66.5'
        r='66.5'
        fill='#265CFF'
        className={customClass}
      />
    </svg>
  );
}

export default CarouselArrow;
