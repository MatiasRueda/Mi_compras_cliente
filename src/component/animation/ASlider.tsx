import { ReactNode } from "react";
import { motion } from "framer-motion";

function ASlider(props: {children: ReactNode, clase: string, left:number, right: number}): JSX.Element {
    return (
        <motion.div className={props.clase} 
            drag="x"
            dragConstraints={{left: props.left, right: props.right}}>
                {props.children}
        </motion.div>
    )
}

export default ASlider;