import type React from "react";
import styles from './QuizButton.module.css';

type ButtonProps = {
    children : React.ReactNode,
    correct : boolean,
    width? : React.CSSProperties["width"],
    feedback?: "green" | "red",
    disabled?: boolean,
    onClick?: (correct: boolean) => void
}

function QuizButton({children, correct, width, feedback, disabled, onClick} : ButtonProps){
    return(
        <button 
            type="button"
            className={`${styles.button} ${feedback ? styles[feedback] : ""}`}
            style={{width}} 
            disabled={disabled}
            onClick={() => onClick?.(correct)}
        >
            { children }
        </button>
    );
}

export default QuizButton;