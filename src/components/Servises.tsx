import React from 'react';
import Styles from '../Sass/Servises.module.scss';
import ServisesCard from './Cards/ServisesCard';

import resDg from '../img/responsive-web-design-1-61f01c4b64c5f-sej.webp';
import UIdg from '../img/Blog-187.png';
import opt from '../img/1706886456645.png';

const Servises = () => {
  return (
    <div id="service" className={Styles.container}>
      <div className={Styles.container__content}>
        <div className={Styles.MyServises}>
          <h1>
            My <span>Servises</span>
          </h1>
          <p>
            I provide responsive web development, user-friendly interface design, and performance
            optimization for modern web applications.
          </p>
        </div>
        <div className={Styles.Cards}>
          <ServisesCard title="Creation of responsive websites" img={resDg} />
          <ServisesCard title="Development of user interfaces" img={UIdg} />
          <ServisesCard title="Optimization of application performance" img={opt} />
        </div>
      </div>
    </div>
  );
};

export default Servises;
