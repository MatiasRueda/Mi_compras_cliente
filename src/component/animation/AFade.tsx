import { CSSProperties, Key, ReactNode } from "react";
import { motion } from "framer-motion";

function AFade(props: { children: ReactNode , llave?: Key }): JSX.Element {
    const estilo: CSSProperties = {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <motion.div 
            key={props.llave}
            initial={{opacity: 0}}
            style={estilo}
            animate={{opacity: 1}}
            transition={{duration: 1}}>
                {props.children}
        </motion.div>
    )
}

export default AFade;