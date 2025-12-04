interface Props {
    color: string;
    width: string;
    height: string
  }

function ArrowDown({color, width, height }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color}>
        <path d="M12 16L12 8" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 13L11.913 15.913V15.913C11.961 15.961 12.039 15.961 12.087 15.913V15.913L15 13" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
  }
  
  export default ArrowDown;
  