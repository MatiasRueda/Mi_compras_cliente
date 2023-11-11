import { motion } from "framer-motion";
import { ReactNode } from "react";

function ALayout(props: { divClase?: string, layoutClase?: string, condicion: boolean, children: ReactNode }): JSX.Element {
    return (
        <div className={props.divClase}>
            {props.children}
            {props.condicion && <motion.div className={props.layoutClase} layoutId={props.layoutClase}></motion.div>}
        </div>
    )
}

export default ALayout;