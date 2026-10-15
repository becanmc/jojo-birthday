import React from "react";
import styles from "./Title.module.css"

type TitleProps = {
    children: React.ReactNode;
    color?: "light" | "dark" | "green";
    size?: "small" | "medium" | "big" | "bigger";
};

function Title({children, color = "dark", size="medium"}: TitleProps){
    return(
        <h1 className={`${styles.title} ${styles[color]} ${styles[size]}`}>
            {children}
        </h1>
    );
}


export default Title;