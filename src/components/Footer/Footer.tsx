import NavLink from "./NavLink";
import styles from "./Footer.module.css";
import SocialContact from "./SocialContact/SocialContact";
import SocialMedia from "./SocialMedia/SocialMedia";

const Footer = () => {
  const navLinks = [
    { title: "Course Catalog", link: "" },
    { title: "Live Events", link: "" },
    { title: "Podcasts", link: "" },
    { title: "Ask a question", link: "" },
    { title: "Privacy Policy", link: "" },
  ];
  return (
    <div className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerAddress}>
          <div className={styles.logo}></div>
          <div className={styles.address}>
            As Swuffah Foundation & Daru Swuffah Basement level, HH Diamond
            city, Jeppu, Mangalore, 575001
          </div>
        </div>
        <div className={styles.newsLetterSubscribe}>
          <h4 className={styles.heading}>
            Get free course updates and newsletters
            <br />
            in your inbox
          </h4>
          <div className={styles.email}>
            <input
              className={styles.email}
              placeholder="email address*"
              type="email"
            />
            <button className={styles.btn}>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <p>LINKS</p>
          <nav>
            <ul className={styles.list}>
              {navLinks.map((navLink) => (
                <NavLink
                  key={navLink.title}
                  title={navLink.title}
                  link={navLink.link}
                  className={styles.navLink}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.socialContact}>
        <SocialContact title="Phone" content="+91 74113 84313" />
        <SocialContact title="Email" content="asswuffah@gmail.com" />
        <SocialMedia title="Connect with us" />
      </div>
    </div>
  );
};

export default Footer;
