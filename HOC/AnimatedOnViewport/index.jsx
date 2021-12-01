import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

function AnimatedOnViewport({
  renderProps,
  variants,
  index = null,
  className = "",
  divStyles,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      custom={index}
      className={className}
      style={divStyles}
    >
      {renderProps()}
    </motion.div>
  );
}

export default AnimatedOnViewport;
