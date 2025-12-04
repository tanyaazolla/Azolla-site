interface Props {
  title?: string;
  customClass?: string;
  onClick?: () => void;
}

const PromiseArrow = ({ title, customClass, onClick }: Props) => {
  return (
    <svg
      width='68'
      height='64'
      viewBox='0 0 68 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={customClass}
      onClick={onClick}
    >
      <title>{title}</title>
      <path
        d='M19.8623 49.156L2.4715 31.7652L19.8623 14.3744'
        stroke='#8D9499'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.92944 31.7681L66.0041 31.7681'
        stroke='#8D9499'
        strokeWidth='3'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default PromiseArrow;
