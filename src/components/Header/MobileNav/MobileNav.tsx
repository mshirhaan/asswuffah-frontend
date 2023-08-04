import NavLink from "../NavLink";
import styles from "./MobileNav.module.css";

function MobileNav({ open }: any) {
  const navLinks = [
    { title: "Home", link: "" },
    { title: "Academy", link: "" },
    { title: "Watch", link: "" },
    { title: "Courses", link: "" },
    { title: "Admissions", link: "" },
    { title: "About", link: "" },
  ];

  return (
    <nav className={`${styles.mobileNav} ${open ? styles.open : ""}`}>
      <ul className={styles.mobileNavItems}>
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
  );
}

export default MobileNav;
