import React from "react";
import Styles from "../../Sass/ServiceCard.module.scss";

interface Props {
  title: string;
  description: string;
  img: string;
}

const ServiceCard = ({ title, description, img }: Props) => {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.cardContainer__content}>
        <div className={Styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={Styles.description}>
          <p>{description}</p>
        </div>
        <div className={Styles.image}>
          <img src={img} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
