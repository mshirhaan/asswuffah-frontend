import { useRef } from "react";
import styles from "./Library.module.css";
import useSlideInAnimation from "../../hooks/useSlideInAnimation";

const Library = () => {
  const containerRef = useRef(null);
  const isVisible = useSlideInAnimation(containerRef);

  return (
    <div className={styles.library}>
      <div ref={containerRef} className={isVisible ? "slideInFromRight" : ""}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>
            Digital <br />
            Library
          </h2>
          <div>
            <div className={styles.imageContainer}> </div>
            <p>
              Avail yourself the opportunity to access an extensive collection
              of books authored by the erudite scholars of Ahlus Sunnah wal
              Jama'ah and conveniently download their PDF versions onto your
              device.
            </p>
          </div>
        </div>

        <a className={styles.btn}>Explore Library</a>
      </div>
    </div>
  );
};

export default Library;
