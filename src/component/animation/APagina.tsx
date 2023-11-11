import { motion, AnimatePresence } from "framer-motion";
import { Key, ReactNode } from "react";

function APagina(props: { llave?: Key, clase: string , children: ReactNode }): JSX.Element {
    return (
        <AnimatePresence>
            <motion.div 
                key={props.llave}
                className={props.clase}
                style={{width: "100%"}}
                initial={{ x: "-125%" }}
                transition={{ delay: 0.70 }}
                animate={{ x: 0 }}
                exit={{ x: "100%", transition: { duration: 0.20 } }}>
                    {props.children}    
            </motion.div>
        </AnimatePresence>
    )
}

export default APagina;