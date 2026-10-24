import styles from "./Timeline.module.css";

export type TimelineEvent = {
    ano: number;
    descricao: string;
    imagem: string;
};

type TimelineProps = {
    events: TimelineEvent[];
};

function Timeline({ events }: TimelineProps) {
    return (
        <section className={styles.timelineSection} aria-label="Linha do tempo">
            <ol className={styles.timeline}>
                {events.map((event, index) => {
                    return (
                        <li
                            className={`${styles.event} ${index % 2 === 0 ? styles.top : styles.bottom}`}
                            key={`${event.ano}-${index}`}
                        >
                            <span className={styles.dotMarker} aria-hidden="true">
                                <span
                                    className={event.ano === 2006 ? styles.star : styles.dot}
                                >
                                    {event.ano === 2006 ? "⭐" : null}
                                </span>
                            </span>

                            <time className={styles.year} dateTime={String(event.ano)}>
                                {event.ano}
                            </time>

                            <article className={styles.card}>
                                {event.imagem && (
                                    <img
                                        className={styles.image}
                                        src={event.imagem}
                                        alt={`Acontecimento de ${event.ano}`}
                                    />
                                )}
                                <p className={styles.description}>{event.descricao}</p>
                            </article>
                            <span className={styles.pointer} aria-hidden="true" />
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}

export default Timeline;