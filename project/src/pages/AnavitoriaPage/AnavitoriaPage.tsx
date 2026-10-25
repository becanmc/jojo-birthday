import { useEffect, useState } from "react";
import styles from "./AnavitoriaPage.module.css";
import TypeWriter from "../../components/atoms/Text/Typewriter/Typewriter";
import MusicCard from "../../components/molecules/Cards/MusicCard/MusicCard";

const topLyrics = "\"Que venham as surpresas, os atrasos, os abismos, desencontros<br />Desafios, canastras, perigos<br />Que sinalizem astros, profecias, as intuições e os guias espirituais<br />As intuições e os guias espirituais<br />As intuições e os guias...";
const bottomLyrics = ["Eu quero estar contigo", "E nada mais.", "\""];

function AnavitoriaPage(){
    const [showBottom, setShowBottom] = useState(false);
    const [topComplete, setTopComplete] = useState(false);
    const [bottomComplete, setBottomComplete] = useState(false);
    const [showCard, setShowCard] = useState(false);

    useEffect(() => {
        if (!topComplete) return;

        const timeout = window.setTimeout(() => setShowBottom(true), 1000);
        return () => window.clearTimeout(timeout);
    }, [topComplete]);

    useEffect(() => {
        if (!bottomComplete) return;

        const timeout = window.setTimeout(() => setShowCard(true), 2000);
        return () => window.clearTimeout(timeout);
    }, [bottomComplete]);

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
                            showCursor={!bottomComplete}
                            onComplete={() => setBottomComplete(true)}
                        />
                    )}
                </div>
            </div>
            {showCard && (
                <div className={styles.card}>
                    <MusicCard />
                </div>
            )}
        </section>
    );
}

export default AnavitoriaPage;