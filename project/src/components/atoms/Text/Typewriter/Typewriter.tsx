import TypewriterComponent from "typewriter-effect";
import styles from "./Typewriter.module.css";

type TypeWriterProps = {
    strings: Array<string>
}

function TypeWriter({strings} : TypeWriterProps) {
  return (
    <div className={styles.typewriter}>
      <TypewriterComponent
        options={{
          strings,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default TypeWriter;