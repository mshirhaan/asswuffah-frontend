import styles from "./SocialMedia.module.css";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const SocialMedia = ({ title, content }: any) => {
  return (
    <div className={styles.socialMedia}>
      <h2>{title}</h2>
      <div className={styles.icons}>
        <FaFacebook />
        <FaYoutube />
        <FaInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
