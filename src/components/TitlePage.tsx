import React from 'react';
import Styles from '../Sass/TitlePage.module.scss';

import logo from '../img/MyImg.png';
import quote from '../img/quote-up.png';
import stars from '../img/Frame 4.png';

const TitlePage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.container__content}>
        <div className={Styles.greeting}>
          <button>Hello!</button>
        </div>
        <div className={Styles.part_info}>
          <h1>
            I'm <span>Nikita</span>,
          </h1>
          <p>Frontend Developer</p>
        </div>
        <div className={Styles.partFewInfo}>
          <div className={Styles.FewInfo}>
            <img src={quote} alt="" />
            <p>
              I am a passionate Frontend Developer, skilled in crafting modern and user-friendly web
              applications.
            </p>
          </div>

          <div className={Styles.absoluteBlock}>
            <img src={logo} alt="" />
          </div>

          <div className={Styles.Expirience}>
            <img src={stars} alt="" />
            <p>
              <span>2 Years</span> Expirience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
