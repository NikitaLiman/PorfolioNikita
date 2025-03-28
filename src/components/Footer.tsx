import React from "react";
import Styles from "../Sass/Footer.module.scss";
import arrow from "../img/up right.png";

import telegram from "../img/Telegram_2019_Logo.svg.png";
import gitHub from "../img/Octicons-mark-github.svg";
import IN from "../img/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.webp";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.container__content}>
        <div className={Styles.UpperPart}>
          <h1>Lets Connect there</h1>
          <a href="/Contact">
            <button>
              Hire me{" "}
              <span>
                <img src={arrow} alt="" />
              </span>
            </button>
          </a>
        </div>
        <div className={Styles.MiddlePart}>
          <div className={Styles.Social}>
            <h1>Nikita Lyman</h1>
            <p>
              I'm a frontend developer with experience in
              JavaScript,React,TypeScript,Next Js and modern web
              technologies.I'm ready for new challenges and eager to work!
            </p>
            <div className={Styles.Social__icons}>
              <ul>
                <a href="https://t.me/disappear7779">
                  <li>
                    <img src={telegram} alt="" />
                  </li>
                </a>
                <a href="https://github.com/NikitaLiman">
                  <li>
                    <img src={gitHub} alt="" />
                  </li>
                </a>
                <a href="https://www.linkedin.com/in/nikita-lyman-325844332">
                  <li>
                    <img src={IN} alt="" />
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className={Styles.NavigationContact}>
            <div className={Styles.NavigationContact__first}>
              <h1>Navigation</h1>
              <ul>
                <a href="/">
                  <li>Home</li>
                </a>
                <a href="#about">
                  <li>About</li>
                </a>
                <a href="#service">
                  <li>Servise</li>
                </a>
                <a href="#projects">
                  <li>Projects</li>
                </a>
                <a href="/contact">
                  <li>Contacts </li>
                </a>
              </ul>
            </div>
            <div className={Styles.NavigationContact__first}>
              <h1>Contact</h1>
              <ul>
                <li>
                  <span>Phone Numbers</span>
                </li>
                <li>+48 790 263 681</li>
                <li>+380 50 740 65 59</li>{" "}
                <li>
                  <span>Email</span>
                </li>
                <li>fram08fort29@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Styles.LowerPart}>
          <ul>
            <li>Copyright© 2025 Nikita Lyman. All Rights Reserved</li>
            <li>User Terms & Conditions | Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
