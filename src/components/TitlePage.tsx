import React from "react";
import styles from "../Sass/TitlePage.module.scss";

import profileImage from "../img/MyImg.png";
import quoteIcon from "../img/quote-up.png";
import starsIcon from "../img/Frame 4.png";

const TitlePage: React.FC = () => {
  return (
    <section id="home" className={styles.titlePage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.headingGroup}>
            <div className={styles.greeting}>
              <button className={styles.greetingButton}>Hello!</button>
            </div>

            <div className={styles.titleInfo}>
              <h1 className={styles.title}>
                I'm <span className={styles.highlight}>Nikita</span>,
              </h1>
              <h2 className={styles.subtitle}>Frontend Developer</h2>
            </div>
          </div>

          <div className={styles.profileContent}>
            <div className={styles.quoteBlock}>
              <img src={quoteIcon} alt="Quote" className={styles.quoteIcon} />
              <p className={styles.quoteText}>
                I am a passionate Frontend Developer, skilled in crafting modern
                and user-friendly web applications.
              </p>
            </div>

            <div className={styles.profileImageWrapper}>
              <img
                src={profileImage}
                alt="Nikita Lyman"
                className={styles.profileImage}
              />
              <div className={styles.imageBg}></div>
            </div>

            <div className={styles.experienceBlock}>
              <img src={starsIcon} alt="Stars" className={styles.starsIcon} />
              <p className={styles.experienceText}>
                <span className={styles.experienceYears}>2 Years</span>{" "}
                Experience
              </p>
            </div>
          </div>

          <div className={styles.scrollIndicator}>
            <div className={styles.mouseIcon}>
              <span className={styles.scrollWheel}></span>
            </div>
            <p className={styles.scrollText}>Scroll down</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitlePage;
