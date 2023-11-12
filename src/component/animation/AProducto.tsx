import { ReactNode } from "react";
import { motion } from "framer-motion";

function AProducto(props: { click: () => void , children: ReactNode }): JSX.Element {
    return (
        <motion.div
            onClick={props.click}
            whileHover={{scale: 1.1, cursor: "pointer",zIndex: 2, transition: {duration: 0.3}}}>
                {props.children}
        </motion.div>
    )
}

export default AProducto;