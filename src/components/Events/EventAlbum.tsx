import styles from "./EventAlbum.module.css";
import EventsCard from "./EventsCard/EventsCard";

const EventAlbum = () => {
  return (
    <div className={styles.eventsAlbumContainer}>
      <h2>Our Events Album</h2>
      <div className={styles.eventsAlbumCardContainer}>
        <EventsCard
          content="Lecture by world renowned scholar, 
            Shaykh Saqib Iqbal Shami (hh), UK"
          imageName={"saqib-shami.jpeg"}
        />
        <EventsCard
          content='Lecture by Shaykh Ibrahim Musliyar Bekal on the topic- "Knowledge is life of Islam."'
          imageName={"bekal-ustad.jpeg"}
        />
      </div>
    </div>
  );
};

export default EventAlbum;
