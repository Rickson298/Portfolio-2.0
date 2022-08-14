import { MotionProps } from "framer-motion";

export const animationToggleTheme: MotionProps = {
  initial: { scale: 0.3 },
  animate: { scale: 1 },
  exit: { scale: 0.3 },
  whileHover: { scale: 0.8 },
  transition: { ease: "backOut" },
};
