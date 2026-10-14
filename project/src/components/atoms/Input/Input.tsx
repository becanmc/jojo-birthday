import React from "react";
import styles from './Input.module.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    children: React.ReactNode;
    width?: React.CSSProperties["width"];
};

function Input({children, width, ...props}: InputProps){
    return(
        <input 
            {...props} 
            className={styles.input}
            style={{width}}
            placeholder={`${children}`}
        />
    );
}

export default Input;