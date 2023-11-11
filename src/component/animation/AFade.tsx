import { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";

function AFade(props: { children: ReactNode, clase: string , estilo?: CSSProperties }): JSX.Element {
    return (
        <motion.div 
            initial={{opacity: 0}}
            style={props.estilo}
            animate={{opacity: 1}}
            className={props.clase}
            transition={{duration: 1}}>
                {props.children}
        </motion.div>
    )
}

export default AFade;