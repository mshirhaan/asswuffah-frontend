import styles from "./EventsCard.module.css";

const EventsCard = ({ content, imageName }: any) => {
  const imagePath = "/images/";

  return (
    <>
      <div className={styles.card}>
        <div
          className={styles.imageContainer}
          style={{ backgroundImage: `url(${imagePath + imageName})` }}
        ></div>
        <p>{content}</p>
      </div>
    </>
  );
};

export default EventsCard;
