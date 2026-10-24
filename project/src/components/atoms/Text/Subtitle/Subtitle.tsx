import React from "react";
import styles from "./Subtitle.module.css";

type SubtitleProps = {
    children: React.ReactNode;
};

function Subtitle({ children }: SubtitleProps) {
    return <p className={styles.subtitle}>{children}</p>;
}

export default Subtitle;
