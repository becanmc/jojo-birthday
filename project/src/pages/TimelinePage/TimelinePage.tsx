import timelineData from "../../../data/timeline.json";
import Timeline, { type TimelineEvent } from "../../components/organisms/Timeline/Timeline";
import Title from "../../components/atoms/Text/Title/Title";
import Subtitle from "../../components/atoms/Text/Subtitle/Subtitle";
import styles from "./TimelinePage.module.css";

const events = timelineData as TimelineEvent[];

function TimelinePage() {
    return (
        <div className={styles.content}>
            <div className={styles.heading}>
                <Title size="small">
                    Acontecimentos do dia 25 de Outubro ao longo da história
                </Title>
                <Subtitle>Passe o mouse por cima para revelar</Subtitle>
            </div>
            <Timeline events={events} />
        </div>
    );
}

export default TimelinePage;