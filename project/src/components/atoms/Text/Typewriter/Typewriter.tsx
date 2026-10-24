import TypewriterComponent from "typewriter-effect";
import styles from "./Typewriter.module.css";

type TypeWriterProps = {
    strings: Array<string>
    onComplete?: () => void
    typingDelay?: number
    showCursor?: boolean
    fontSize?: React.CSSProperties["fontSize"]
    pauseBetween?: number | number[]
    keepPrevious?: boolean
    lineBreakBefore?: boolean[]
}

function TypeWriter({
  strings,
  onComplete,
  typingDelay = 35,
  showCursor = true,
  fontSize = "var(--font-size-6)",
  pauseBetween = 700,
  keepPrevious = false,
  lineBreakBefore = [],
} : TypeWriterProps) {
  return (
    <div
      className={`${styles.typewriter} ${showCursor ? "" : styles.hideCursor}`}
      style={{ fontSize }}
    >
      <TypewriterComponent
        options={{ delay: typingDelay, deleteSpeed: 30 }}
        onInit={(typewriter) => {
          let sequence = typewriter;
          strings.forEach((string, index) => {
            if (index > 0) {
              const pause = Array.isArray(pauseBetween)
                ? pauseBetween[index - 1] ?? 700
                : pauseBetween;
              sequence = sequence.pauseFor(pause);
              if (keepPrevious) {
                if (lineBreakBefore[index - 1] !== false) {
                  sequence = sequence.typeString("<br />");
                }
              } else {
                sequence = sequence.deleteAll(30);
              }
            }
            sequence = sequence.typeString(string);
          });
          sequence.callFunction(() => onComplete?.()).start();
        }}
      />
    </div>
  );
}

export default TypeWriter;