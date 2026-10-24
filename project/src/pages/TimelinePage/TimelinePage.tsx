import timelineData from "../../../data/timeline.json";
import Timeline, { type TimelineEvent } from "../../components/organisms/Timeline/Timeline";

const events = timelineData as TimelineEvent[];

function TimelinePage() {
    return <Timeline events={events} />;
}

export default TimelinePage;