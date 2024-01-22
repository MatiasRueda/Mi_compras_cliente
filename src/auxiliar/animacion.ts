import { MotionProps } from "framer-motion";

export const Fade: MotionProps = {
  initial:{opacity: 0},
  animate:{opacity: 1},
  transition:{duration: 1}
}

export const CambiarPantalla: MotionProps = {
  initial: { x: "-125%" },
  transition: { delay: 0.70 , type: 'easyOut' },
  animate: { x: 0 }
}