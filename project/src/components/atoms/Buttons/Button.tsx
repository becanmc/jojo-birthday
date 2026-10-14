import React from "react";
import styles from "./Button.module.css"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: string; // Use of the URL for simplicity reasons. Don't change. 
    width?: React.CSSProperties["width"]
};

function Button({icon, width, children, ...props}: ButtonProps){
    return(
        <button {...props} className={styles.button} style={{width}}> 
            {icon && <img src={icon} alt="" className={styles.icon}/>}
            {children && <span>{children}</span>}
        </button>
    );
}

export default Button;