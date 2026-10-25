import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./HappyBithdayPage.module.css";

type DecorationStyle = CSSProperties & { "--delay": string };

const decorations = [
    { src: "balão.png", alt: "Balão", className: styles.balloon },
    { src: "brigadeiro.png", alt: "Brigadeiro", className: styles.brigadeiro },
    { src: "presente2.png", alt: "Outro presente", className: styles.secondPresent },
    { src: "chapéu.png", alt: "Chapéu de aniversário", className: styles.hat },
    { src: "coroa.png", alt: "Coroa", className: styles.crown },
    { src: "presente.png", alt: "Presente", className: styles.present },
    { src: "velas.png", alt: "Velas de aniversário", className: styles.candles },
] as const;

function HappyBithdayPage() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Try autoplay when the page appears; browsers may require a user gesture.
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        let isMounted = true;

        void audio.play()
            .then(() => {
                if (isMounted) setIsPlaying(true);
            })
            .catch(() => {
                // The play button remains available if autoplay is blocked.
            });

        return () => {
            isMounted = false;
            audio.pause();
        };
    }, []);

    async function toggleMusic() {
        const audio = audioRef.current;
        if (!audio) return;

        if (audio.paused) {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch (error) {
                console.error("Não foi possível tocar a música:", error);
            }
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    }

    return (
        <section className={styles.content}>
            <h1 className={styles.title}>Happy Birthday</h1>
            <audio ref={audioRef} src="/audio/Parabéns pra Você.mp3" loop preload="auto" />
            <button
                className={styles.musicButton}
                type="button"
                onClick={toggleMusic}
                aria-label={isPlaying ? "Pausar música" : "Tocar música"}
                title={isPlaying ? "Pausar música" : "Tocar música"}
            >
                <svg
                    className={styles.musicIcon}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                >
                    {isPlaying ? (
                        <path d="M8 5v14M16 5v14" />
                    ) : (
                        <path d="m8 5 12 7-12 7z" />
                    )}
                </svg>
            </button>

            {/* The cake is separate so it can stay prominent in the center. */}
            <img
                className={`${styles.decoration} ${styles.cake}`}
                src="/elements/hb_cake.png"
                alt="Bolo de aniversário"
                aria-hidden="true"
            />

            {/* Stagger the decorations so they rise one at a time. */}
            {decorations.map((decoration, index) => (
                <img
                    key={decoration.src}
                    className={`${styles.decoration} ${decoration.className}`}
                    src={`/elements/${decoration.src}`}
                    alt={decoration.alt}
                    style={{ "--delay": `${(index + 1) * 180}ms` } as DecorationStyle}
                />
            ))}
        </section>
    );
}

export default HappyBithdayPage;
