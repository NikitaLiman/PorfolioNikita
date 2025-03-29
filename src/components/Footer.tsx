import React from "react";
import styles from "../Sass/Footer.module.scss";
import arrowIcon from "../img/up right.png";

// Social icons
import telegramIcon from "../img/Telegram_2019_Logo.svg.png";
import githubIcon from "../img/Octicons-mark-github.svg";
import linkedinIcon from "../img/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.hireMeSection}>
          <h2 className={styles.heading}>Let's Connect</h2>
          <a href="/contact" className={styles.hireButton}>
            Hire me
            <span className={styles.arrowIcon}>
              <img src={arrowIcon} alt="Arrow" />
            </span>
          </a>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.aboutSection}>
            <h3 className={styles.title}>Nikita Lyman</h3>
            <p className={styles.bio}>
              I'm a frontend developer with experience in JavaScript, React,
              TypeScript, Next.js and modern web technologies. I'm ready for new
              challenges and eager to work!
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://t.me/disappear7779"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <img src={telegramIcon} alt="Telegram" />
              </a>
              <a
                href="https://github.com/NikitaLiman"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/nikita-lyman-325844332"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>

          <div className={styles.navSection}>
            <h3 className={styles.title}>Navigation</h3>
            <nav>
              <ul className={styles.navList}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#service">Services</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.contactSection}>
            <h3 className={styles.title}>Contact</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactLabel}>Phone Numbers</li>
              <li className={styles.contactItem}>+48 790 263 681</li>
              <li className={styles.contactItem}>+380 50 740 65 59</li>
              <li className={styles.contactLabel}>Email</li>
              <li className={styles.contactItem}>fram08fort29@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>Copyright © {currentYear} Nikita Lyman. All Rights Reserved</p>
          <p>User Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
