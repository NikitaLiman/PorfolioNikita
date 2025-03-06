import React from 'react';
import Styles from '../Sass/Projects.module.scss';
import ProjectsCard from './Cards/ProjectsCart';

import voltex from '../img/Снимок экрана 2025-01-31 202833.png';
import SearchKino from '../img/Снимок экрана 2025-01-31 201334.png';
import katala from '../img/Снимок экрана 2025-01-31 201431.png';

const Projects = () => {
  const text = [
    {
      text1: 'HTML,SCSS, Zustand, NextJS, TypeScript, JavaScript, Postgresql, Prisma ORM',
    },
    {
      text2: 'HTML, JSX, Redux, SCSS, TypeScript, JavaScript, React JS, Rest API',
    },
    {
      text3: 'HTML, JSX, Redux, SCSS, JavaScript, React JS, Rest API',
    },
  ];

  return (
    <div id='projects' className={Styles.container}>
      <div className={Styles.container__content}>
        <ProjectsCard
          title="Voltex"
          img={voltex}
          additionalInfo={text?.[0].text1}
          url="https://next-voltex.vercel.app/"
        />
        <ProjectsCard
          title="SearchKino"
          img={SearchKino}
          additionalInfo={text?.[1].text2}
          url="https://nikitaliman.github.io/SearchKino/"
        />
        <ProjectsCard
          title="Katala"
          img={katala}
          additionalInfo={text?.[2]?.text3}
          url="https://nikitaliman.github.io/gitHub-pages-react/"
        />
      </div>
    </div>
  );
};

export default Projects;
