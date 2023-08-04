import styles from "./SocialContact.module.css";

const SocialContact = ({ title, content }: any) => {
  return (
    <div className={styles.socialContact}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default SocialContact;
