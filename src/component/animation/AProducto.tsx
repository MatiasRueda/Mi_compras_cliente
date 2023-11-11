import { ReactNode } from "react";
import { motion } from "framer-motion";

function AProducto(props: { children: ReactNode}): JSX.Element {
    return (
        <motion.section
            style={{margin: "1rem"}}
            whileHover={{scale: 1.1, cursor: "pointer",zIndex: 2, transition: {duration: 0.3}}}>
                {props.children}
        </motion.section>
    )
}

export default AProducto;