import React from "react";
import styles from './Text.module.css'

type TextProps = {
    children: React.ReactNode
}

function Text({children} : TextProps){
    return (
        <span className={styles.text}>
            { children }
        </span>
    );
}

export default Text;