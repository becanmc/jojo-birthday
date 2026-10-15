import React from "react";
import styles from './QuizButton.module.css';

type ButtonProps = {
    children : React.ReactNode,
    correct : boolean,
    width? : React.CSSProperties["width"]
}

function defineStyle(style: string){
    console.log(style);
    return undefined;
}

function QuizButton({children, correct, width, ...props} : ButtonProps){

    const styleClick: string = correct? "green" : "red";

    return(
        <button 
            {...props} 
            className={`${styles.button}`} 
            style={{width}} 
            onClick={defineStyle(styleClick)}
        >
            { children }
        </button>
    );
}

export default QuizButton;