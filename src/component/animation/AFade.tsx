import { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";

function AFade(props: {children: ReactNode, estilo?: CSSProperties}): JSX.Element {
    return (
        <motion.div 
            style={props.estilo}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}>
                {props.children}
        </motion.div>
    )
}

export default AFade;