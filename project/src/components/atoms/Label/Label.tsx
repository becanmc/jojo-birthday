import React from "react";
import styles from "./Label.module.css"

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

function Label({children, ...props}: LabelProps){
    return(
        <label className={styles.label} {...props}>        
            {children}
        </label>
    );
}


export default Label;