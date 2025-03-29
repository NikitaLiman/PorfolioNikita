import React from "react";
import Styles from "../Sass/About.module.scss";

import htmlIcon from "../img/Ikona-html.png";
import cssIcon from "../img/file-type-css-icon-1806x2048-r5fwjl3p.png";
import javascriptIcon from "../img/javascript-js-icon-2048x2048-nyxvtvk0.png";
import reactIcon from "../img/free-react-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175110.webp";
import typescriptIcon from "../img/typescript.png";
import nextjsIcon from "../img/nextjs.e54be70c.svg";
import postgresqlIcon from "../img/Postgresql_elephant.svg.png";
import prismaIcon from "../img/prisma-4.svg";
import sassIcon from "../img/Sass_Logo_Color.svg.png";

const About = () => {
  const skills = [
    {
      name: "HTML5",
      img: htmlIcon,
      category: "frontend",
      proficiency: 90,
    },
    {
      name: "CSS",
      img: cssIcon,
      category: "frontend",
      proficiency: 85,
    },
    {
      name: "Sass",
      img: sassIcon,
      category: "frontend",
      proficiency: 80,
    },
    {
      name: "JavaScript",
      img: javascriptIcon,
      category: "language",
      proficiency: 85,
    },
    {
      name: "ReactJS",
      img: reactIcon,
      category: "framework",
      proficiency: 88,
    },
    {
      name: "TypeScript",
      img: typescriptIcon,
      category: "language",
      proficiency: 75,
    },
    {
      name: "Next.js",
      img: nextjsIcon,
      category: "framework",
      proficiency: 80,
    },
    {
      name: "PostgreSQL",
      img: postgresqlIcon,
      category: "database",
      proficiency: 70,
    },
    {
      name: "Prisma",
      img: prismaIcon,
      category: "ORM",
      proficiency: 75,
    },
  ];

  return (
    <section id="about" className={Styles.container}>
      <div className={Styles.container__content}>
        <div className={Styles.about}>
          <h1>About me</h1>
          <div className={Styles.bio}>
            <p>
              I have been working in web development for{" "}
              <strong>2 years</strong>, and it brings me great joy. During this
              time, I have gained valuable skills that have shaped my
              understanding of the field. Along with learning programming, I
              enjoy exploring other disciplines that complement my work and
              expand my knowledge.
            </p>
            <p>
              This constant learning process motivates me to continue improving
              and pushing the boundaries of what I can achieve. My passion for
              technology drives me to keep growing and developing in all areas
              of life.
            </p>
          </div>
        </div>

        <div className={Styles.skills}>
          <h1>My Skills</h1>
          <div className={Styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${Styles.skillItem} ${Styles[skill.category]}`}
                data-proficiency={skill.proficiency}
              >
                <div className={Styles.skillIcon}>
                  <img src={skill.img} alt={`${skill.name} icon`} />
                </div>
                <div className={Styles.skillDetails}>
                  <span className={Styles.skillName}>{skill.name}</span>
                  <div className={Styles.proficiencyBar}>
                    <div
                      className={Styles.proficiencyLevel}
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
