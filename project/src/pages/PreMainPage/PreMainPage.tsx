import { useEffect, useState } from "react";
import phrases from "../../../data/preMainfrases.json"
import styles from "./PreMainPage.module.css"

const MIN_PHRASE_DELAY = 2200;
const BASE_PHRASE_DELAY = 1000;
const DELAY_PER_CHARACTER = 40;

function PreMainPage(){
    const [visiblePhrases, setVisiblePhrases] = useState(0);

    useEffect(() => {
        if (visiblePhrases >= phrases.length) return;

        const currentPhrase = phrases[visiblePhrases - 1] ?? "";
        const phraseDelay = Math.max(
            MIN_PHRASE_DELAY,
            BASE_PHRASE_DELAY + currentPhrase.length * DELAY_PER_CHARACTER
        );

        const timeout = window.setTimeout(() => {
            setVisiblePhrases((count) => count + 1);
        }, visiblePhrases === 0 ? 900 : phraseDelay);

        return () => window.clearTimeout(timeout);
    }, [visiblePhrases]);

    return(
        <section className={styles.content}>
            <div className={styles.phrases} aria-live="polite">
                {phrases.slice(0, visiblePhrases).map((phrase, index) => (
                    <p
                        className={`${styles.phrase} ${
                            index === visiblePhrases - 1 ? styles.current : styles.previous
                        }`}
                        key={phrase}
                    >
                        {phrase}
                    </p>
                ))}
            </div>
        </section>
    );
}

export default PreMainPage;