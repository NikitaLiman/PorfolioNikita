import React from 'react';
import Styles from '../Sass/About.module.scss';

import HTML from '../img/Ikona-html.png';
import CSS from '../img/file-type-css-icon-1806x2048-r5fwjl3p.png';
import JavaScript from '../img/javascript-js-icon-2048x2048-nyxvtvk0.png';
import ReactJS from '../img/free-react-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175110.webp';
import TypeScript from '../img/typescript.png';
import NextJs from '../img/nextjs.e54be70c.svg';
import postgresql from '../img/Postgresql_elephant.svg.png';
import prisma from '../img/prisma-4.svg';
import sass from '../img/Sass_Logo_Color.svg.png';

const About = () => {
  const Skills = [
    { name: 'HTML5', img: HTML },

    { name: 'CSS', img: CSS },

    { name: 'Sass', img: sass },

    { name: 'JavaScript', img: JavaScript },

    { name: 'ReactJS', img: ReactJS },

    { name: 'TypeScript', img: TypeScript },

    { name: 'NextJs', img: NextJs },

    { name: 'Postgresql', img: postgresql },

    { name: 'prisma', img: prisma },
  ];

  return (
    <div id="about" className={Styles.container}>
      <div className={Styles.container__content}>
        <div className={Styles.About}>
          <h1>About me</h1>
          <div>
            <p>
              I have been working in web development for <strong>2 years</strong>, and it brings me
              great joy. During this time, I have gained valuable skills that have shaped my
              understanding of the field. Along with learning programming, I enjoy exploring other
              disciplines that complement my work and expand my knowledge. This constant learning
              process motivates me to continue improving and pushing the boundaries of what I can
              achieve. My passion for technology drives me to keep growing and developing in all
              areas of life.
            </p>
          </div>
        </div>
        <div className={Styles.Skills}>
          <h1>My Skills</h1>
          <div>
            <ul>
              {Skills.map((item, index) => (
                <li key={index}>
                  <span>
                    <img src={item?.img} alt="" />
                  </span>
                  {item?.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
