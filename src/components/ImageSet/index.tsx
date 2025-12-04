'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

interface Props {
  images: string[],
  customClass?: string,
}

const ImageSet = ({ images, customClass }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => ((++prev) % images.length))
    }, 3000)
    return () => clearInterval(interval);
  }, [])

  return (
    <motion.img
      key={currentIndex}
      src={images[currentIndex]}
      alt={"image_" + currentIndex}
      initial="hidden"
      animate="visible"
      variants={imageVariants}
      fetchPriority='high'
      className={`w-full ${customClass} object-cover`}
    />
  );
};

export default ImageSet;