import React, { useRef, useEffect, useState } from "react";
import styles from "../Sass/Header.module.scss";

const Header: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const headerRef = useRef<HTMLDivElement>(null);

  const navigationItems = [
    { name: "Home", link: "home" },
    { name: "Service", link: "service" },
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "/contact", isExternal: true },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (
    item: (typeof navigationItems)[0],
    index: number
  ) => {
    if (item.isExternal) {
      window.location.href = item.link;
    } else {
      const element = document.getElementById(item.link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setActiveIndex(index);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div
        ref={headerRef}
        className={`${styles.headerContainer} ${
          isScrolled ? styles.scrolled : ""
        }`}
      >
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navigationItems.slice(0, 3).map((item, index) => (
              <li
                key={index}
                onClick={() => handleNavigation(item, index)}
                className={`${styles.navItem} ${
                  activeIndex === index ? styles.active : ""
                } ${item.name === "About" ? styles.special : ""}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.brand}>
          <h1>Nikita Lyman</h1>
        </div>

        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navigationItems.slice(3).map((item, index) => (
              <li
                key={index + 3}
                onClick={() => handleNavigation(item, index + 3)}
                className={`${styles.navItem} ${
                  activeIndex === index + 3 ? styles.active : ""
                } ${item.name === "Contact" ? styles.special : ""}`}
              >
                {item.name}
              </li>
            ))}
            <li className={styles.cvButton}>
              <a href="/Nikita_LymanCv.pdf" download="Nikita_Lyman_CV.pdf">
                Get CV
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.mobileMenu}>
          <button
            className={styles.burgerButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`${styles.burgerLine} ${
                isMenuOpen ? styles.open : ""
              }`}
            ></span>
            <span
              className={`${styles.burgerLine} ${
                isMenuOpen ? styles.open : ""
              }`}
            ></span>
            <span
              className={`${styles.burgerLine} ${
                isMenuOpen ? styles.open : ""
              }`}
            ></span>
          </button>

          <div
            className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ""}`}
          >
            <ul className={styles.mobileNavList}>
              {navigationItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleNavigation(item, index)}
                  className={`${styles.mobileNavItem} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                >
                  {item.name}
                </li>
              ))}
              <li className={styles.mobileCvButton}>
                <a href="/Nikita_LymanCv.pdf" download="Nikita_Lyman_CV.pdf">
                  Get CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
