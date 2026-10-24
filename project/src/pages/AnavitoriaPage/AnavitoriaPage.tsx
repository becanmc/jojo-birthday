import { useEffect, useState } from "react";
import styles from "./AnavitoriaPage.module.css";
import TypeWriter from "../../components/atoms/Text/Typewriter/Typewriter";

const topLyrics = "\"Que venham as surpresas, os atrasos, os abismos, desencontros<br />Desafios, canastras, perigos<br />Que sinalizem astros, profecias, as intuições e os guias espirituais<br />As intuições e os guias espirituais<br />As intuições e os guias...";
const bottomLyrics = ["Eu quero estar contigo", "E nada mais.", "\""];

function AnavitoriaPage(){
    const [showBottom, setShowBottom] = useState(false);
    const [topComplete, setTopComplete] = useState(false);

    useEffect(() => {
        if (!topComplete) return;

        const timeout = window.setTimeout(() => setShowBottom(true), 1000);
        return () => window.clearTimeout(timeout);
    }, [topComplete]);

    return (
        <section className={styles.content}>
            <div className={styles.lyrics_content}>
                <div className={styles.lyrics_top}>
                    <TypeWriter
                        strings={[topLyrics]}
                        typingDelay={80}
                        fontSize="var(--font-size-3)"
                        showCursor={!topComplete}
                        onComplete={() => setTopComplete(true)}
                    />
                </div>
                
                <div className={styles.lyrics_bottom}>
                    {showBottom && (
                        <TypeWriter
                            strings={bottomLyrics}
                            typingDelay={80}
                            fontSize="var(--font-size-3)"
                            pauseBetween={[2000, 1000]}
                            keepPrevious
                            lineBreakBefore={[true, false]}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

export default AnavitoriaPage;