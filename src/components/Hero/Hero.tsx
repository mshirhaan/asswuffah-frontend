import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroImageContainer}>
      <div className={styles.heroImageContainerText}>
        <h1 className={styles.primary}>
          IMPARTING <br /> KNOWLEDGE, <br />
          <span className={styles.secondary}>
            ILLUMINATING <br />
            HEARTS
          </span>
        </h1>
        <p>
          As-Swuffah Foundation welcomes and encourages individuals to embark on
          a profound journey, traversing the sacred path of Islamic knowledge
          and enlightenment.
        </p>
      </div>
    </div>
  );
};

export default Hero;
