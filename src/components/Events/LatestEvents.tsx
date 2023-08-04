import { useRef } from "react";
import useSlideInAnimation from "../../hooks/useSlideInAnimation";
import styles from "./LatestEvents.module.css";

const Events = () => {
  const containerRef = useRef(null);
  const isVisible = useSlideInAnimation(containerRef);
  return (
    <div ref={containerRef} className={`${styles.eventsContainer} `}>
      <div
        className={`${styles.imageContainer} ${
          isVisible ? "slideInFromLeft" : ""
        }`}
      >
        {" "}
      </div>

      <div
        className={`${styles.details} ${isVisible ? "slideInFromLeft" : ""}`}
      >
        <h2>Latest Events</h2>
        <p>
          As Swuffah Foundation, having organised numerous distinguished events,
          has had the privilege of extending invitations to world renowned
          scholars, who graced these occasions as esteemed guest speakers.
          Register yourself for our upcoming events by completing the
          registration process below.
        </p>
        <a className={`${styles.btn} ${isVisible ? "slideInFromLeft" : ""}`}>
          Register
        </a>
      </div>
    </div>
  );
};

export default Events;
