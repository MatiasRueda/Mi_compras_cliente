import { AnimatePresence , wrap , motion, Variants } from "framer-motion";
import { useState } from "react";

function ASlideShow(props: {imagenes?: string[]}): JSX.Element {
    const [[indice, direction], setIndice] = useState<number[]>([0, 0]);
    const imagenIndex = wrap(0, (props.imagenes? props.imagenes.length : 0), indice);

    const paginate = (newDirection: number) => {
        setIndice([indice + newDirection, newDirection]);
    };

    const variants: Variants = {
        enter: (direction: number) => {
          return {
            x: direction > 0 ? 300 : -300,
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
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            transition: {
                duration: 0.1,
            }
          };
        }
      };

    return (
        <div className="cont-imagenes-detalles">
            <div className="prev" onClick={() => paginate(-1)}>
                {"<"}
            </div>
            <div className="cont-imagenes">
              <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                      key={indice}
                      src={props.imagenes? props.imagenes[imagenIndex] : ""}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ delay: 0.3 }}/>
              </AnimatePresence>
            </div>
            <div className="next" onClick={() => paginate(1)}>
                {">"}
            </div>

        </div>
    )
}

export default ASlideShow;