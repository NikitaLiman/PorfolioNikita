import React, { useRef, useEffect, useState } from "react";
import Styles from "../Sass/Header.module.scss";

const Header = () => {
  const [active, setActive] = useState<number>(0);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id: string, index: number) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(index);
      setMenuOpen(false);
      console.log(menuOpen);
    }
  };

  const firstList = [
    { name: "Home", link: "home" },
    { name: "Service", link: "service" },
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={Styles.container}>
      <div
        ref={ref}
        className={`${Styles.container__main} ${
          scrolled ? Styles.blurred : ""
        }`}
      >
        <ul>
          {firstList.slice(0, 3).map((item, index) => (
            <li
              key={index}
              onClick={() => scrollToSection(item.link, index)}
              className={`${active === index ? Styles.active : ""} ${
                item.name === "About" ? Styles.underline : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className={Styles.middlePart}>
          <h1>Nikita Lyman</h1>
        </div>

        <ul>
          {firstList.slice(3).map((item, index) => (
            <li
              key={index + 3}
              onClick={() => scrollToSection(item.link, index + 3)}
              className={`${active === index + 3 ? Styles.active : ""} ${
                item.name === "Contact" ? Styles.underline : ""
              }`}
            >
              {item.name}
            </li>
          ))}
          <button className={Styles.vcButton}>
            <a href="/Nikita_LymanCv.pdf" download="Nikita_Lyman_CV.pdf">
              Get VC
            </a>
          </button>
        </ul>

        <div className={Styles.invisible}>
          {menuOpen && (
            <div className={Styles.invisible__nav}>
              <button className={Styles.vcButton}>
                <a href="/Nikita_LymanCv.pdf" download="Nikita_Lyman_CV.pdf">
                  Get VC
                </a>
              </button>
            </div>
          )}

          <div className={Styles.invisible__navBLock}>
            <button className={Styles.vcButton}>
              <a href="/Nikita_LymanCv.pdf" download="Nikita_Lyman_CV.pdf">
                Get VC
              </a>
            </button>
          </div>

          <div className={Styles.burger} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
