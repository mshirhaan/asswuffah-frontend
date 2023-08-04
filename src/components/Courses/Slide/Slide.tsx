import styles from "./Slide.module.css";

const Slide = ({ imageName, title, content, learnMoreLink }: any) => {
  const imagePath = "/images/";

  return (
    <>
      <div className={styles.slide}>
        <div
          className={styles.imageContainer}
          style={{ backgroundImage: `url(${imagePath + imageName})` }}
        ></div>
        <h3>{title}</h3>
        <p>{content}</p>
        <a className={styles.btn} href="#">
          Learn More
        </a>
      </div>
    </>
  );
};

export default Slide;
