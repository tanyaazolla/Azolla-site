interface Props {
    color: string;
    width: string;
    height: string;
  }

function ArrowUpRight({color, width, height }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color}>
<path d="M7 17L17 7M17 7H8M17 7V16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    );
  }
  
  export default ArrowUpRight;
  