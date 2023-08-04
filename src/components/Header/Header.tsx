import NavLink from "./NavLink";
import styles from "./Header.module.css";
import logoImg from "../../../public/images/logo.jpeg";
import Hamburger from "../Layout/HamburgerButton/Hamburger";
import MobileNav from "./MobileNav/MobileNav";

function Header({ showBackdrop, setShowBackdrop }: any) {
  const navLinks = [
    { title: "Home", link: "" },
    { title: "Academy", link: "" },
    { title: "Watch", link: "" },
    { title: "Courses", link: "" },
    { title: "Admissions", link: "" },
    { title: "About", link: "" },
  ];

  return (
    <>
      <MobileNav open={showBackdrop} />
      <header className={styles.header}>
        <div className={styles.logo}>
          <a>
            <img src={logoImg} />
          </a>
        </div>
        <nav className={styles.mainNav}>
          <ul className={styles.list}>
            {navLinks.map((navLink) => (
              <NavLink
                key={navLink.title}
                title={navLink.title}
                link={navLink.link}
                className={styles.navLink}
              />
            ))}
            <span className={styles.supportUs}>
              <NavLink title="Support Us" link="" />
            </span>
          </ul>
        </nav>
        <Hamburger
          showBackdrop={showBackdrop}
          setShowBackdrop={setShowBackdrop}
        />
      </header>
    </>
  );
}

export default Header;
