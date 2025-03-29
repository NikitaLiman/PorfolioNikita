import React from "react";
import Styles from "../Sass/Servises.module.scss";
import ServiceCard from "./Cards/ServisesCard";

import responsiveDesignImage from "../img/responsive-web-design-1-61f01c4b64c5f-sej.webp";
import interfaceDesignImage from "../img/Blog-187.png";
import performanceOptimizationImage from "../img/1706886456645.png";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Creation of responsive websites",
      description:
        "Websites that look and function perfectly on all devices - from desktop to mobile",
      image: responsiveDesignImage,
    },
    {
      id: 2,
      title: "Development of user interfaces",
      description:
        "Intuitive and engaging UI design that enhances user experience",
      image: interfaceDesignImage,
    },
    {
      id: 3,
      title: "Optimization of application performance",
      description: "Speed up load times and ensure smooth functionality",
      image: performanceOptimizationImage,
    },
  ];

  return (
    <section id="service" className={Styles.container}>
      <div className={Styles.container__content}>
        <div className={Styles.services}>
          <h1>
            My <span>Services</span>
          </h1>
          <p>
            I provide responsive web development, user-friendly interface
            design, and performance optimization for modern web applications.
          </p>
        </div>
        <div className={Styles.cards}>
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              img={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
