import styles from "./Hamburger.module.css";

const Hamburger = ({ showBackdrop, setShowBackdrop }: any) => {
  const toggleHandler = () => {
    setShowBackdrop(!showBackdrop);
  };
  return (
    <div className={styles.hamburger}>
      <button onClick={toggleHandler} className={styles.toggleButton}>
        <span
          className={`${styles.toggleButtonBar} ${
            showBackdrop ? styles.leftCrossBar : ""
          }`}
        ></span>
        <span
          className={`${styles.toggleButtonBar} ${
            showBackdrop ? styles.hide : ""
          }`}
        ></span>
        <span
          className={`${styles.toggleButtonBar} ${
            showBackdrop ? styles.rightCrossBar : ""
          }`}
        ></span>
      </button>
    </div>
  );
};

export default Hamburger;
