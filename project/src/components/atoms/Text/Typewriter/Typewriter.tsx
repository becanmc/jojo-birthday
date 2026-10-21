import TypewriterComponent from "typewriter-effect";
import styles from "./Typewriter.module.css";

type TypeWriterProps = {
    strings: Array<string>
    onComplete?: () => void
}

function TypeWriter({strings, onComplete} : TypeWriterProps) {
  return (
    <div className={styles.typewriter}>
      <TypewriterComponent
        options={{ delay: 35, deleteSpeed: 30 }}
        onInit={(typewriter) => {
          let sequence = typewriter;
          strings.forEach((string, index) => {
            sequence = sequence.typeString(string);
            if (index < strings.length - 1) {
              sequence = sequence.pauseFor(700).deleteAll(30);
            }
          });
          sequence.callFunction(() => onComplete?.()).start();
        }}
      />
    </div>
  );
}

export default TypeWriter;