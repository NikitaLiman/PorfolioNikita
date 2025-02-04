import React from 'react';
import Styles from '../../Sass/Servises.module.scss';

interface props {
  title: string;
  img: string;
}

const ServisesCard: React.FC<props> = ({ title, img }) => {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.cardContainer__content}>
        <div className={Styles.title}>
          <h1>{title}</h1>
        </div>
        <div className={Styles.Image}>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServisesCard;
