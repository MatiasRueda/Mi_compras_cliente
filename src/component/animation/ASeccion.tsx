import { motion } from "framer-motion";
import { Key, ReactNode } from "react";

function ASeccion(props: { llave?: Key, children: ReactNode }): JSX.Element {
    return (
        <motion.section 
            key={props.llave}
            style={{width: "100%"}}
            initial={{ x: "-125%" }}
            transition={{ delay: 0.70 , type: 'easyOut' }}
            animate={{ x: 0 }}>
                {props.children}    
        </motion.section>
    )
}

export default ASeccion;