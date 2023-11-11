import { AnimatePresence , wrap , motion, Variants } from "framer-motion";
import { useState } from "react";

function ASliderOfertas(props:{elementos?: JSX.Element[], clasePadre: string, claseHijo: string}): JSX.Element {
    const [[indice, direction], setIndice] = useState<number[]>([0, 0]);
    const imagenIndex = wrap(0, (props.elementos? props.elementos.length : 0), indice);

    const paginate = (newDirection: number) => {
        setIndice([indice + newDirection, newDirection]);
    };

    const variants: Variants = {
        enter: (direction: number) => {
          return {
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
          };
        },
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1
        },
        exit: (direction: number) => {
          return {
            zIndex: 0,
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
            transition: {
                duration: 0.1,
            }
          };
        }
      };

    return (
        <div className={props.clasePadre}>
            <button aria-label="anterior" className={props.claseHijo + "-prev"} 
                 onClick={() => paginate(-1)}>
                  {"<"}
            </button>
            <div className={props.claseHijo}>
              <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                      key={indice}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ delay: 0.3 }}>
                        {props.elementos != undefined && props.elementos[imagenIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
            <button aria-label="siguiente" className={props.claseHijo + "-next"} 
                 onClick={() => paginate(1)}>
                  {">"}
            </button>
        </div>
    )
}
export default ASliderOfertas;