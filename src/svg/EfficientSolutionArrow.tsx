interface Props {
  customClass?: string
}

const EfficientSolution_Arrow = ({ customClass }: Props) => {
  return <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={customClass}>
    <circle opacity="0.2" cx="22.6274" cy="22.6274" r="16" transform="rotate(45 22.6274 22.6274)" fill="#265CFF" />
    <path d="M24.6478 17.5767L29.6986 22.6275L24.6478 27.6782" stroke="#265CFF" strokeWidth="1.7" strokeLinecap="round"
      strokeLinejoin="round" />
    <path d="M29.6985 22.6274H15.5564" stroke="#265CFF" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
}


export default EfficientSolution_Arrow;
