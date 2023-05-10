import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

const ImageContainer = ({
  children,
  width,
  index,
  setHoveredIndex,
  hoveredIndex,
  foo,
}) => {
  const activateResize = useAnimation();

  useEffect(() => {
    if (hoveredIndex === index) {
      activateResize.start("expand");
    } else if (hoveredIndex === null) {
      activateResize.start("reduce");
    } else {
      activateResize.start("reduceSecondary");
    }
  }, [hoveredIndex]);

  return (
    <motion.div
      style={{ width: width, height: "100%" }}
      variants={{
        expand: { width: "70%", height: "100%" },
        reduce: { height: "100%", width: width },
        reduceSecondary: { height: `${100 - foo * 10}%`, width: width },
      }}
      onHoverStart={() => {
        setHoveredIndex(index);
      }}
      onHoverEnd={() => {
        setHoveredIndex(null);
      }}
      animate={activateResize}
    >
      {children}
    </motion.div>
  );
};

export default ImageContainer;
