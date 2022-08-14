import { MotionProps } from "framer-motion";

export const animationToggleTheme: MotionProps = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
  whileHover: { scale: 0.8 },
  transition: { ease: "backOut" },
};
