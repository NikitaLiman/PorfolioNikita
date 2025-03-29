import React from "react";
import styles from "../Sass/Projects.module.scss";
import ProjectCard from "../components/Cards/ProjectsCart";

import voltexImage from "../img/Снимок экрана 2025-01-31 202833.png";

import searchKinoImage from "../img/Снимок экрана 2025-01-31 201334.png";
import katalaImage from "../img/Снимок экрана 2025-01-31 201431.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Voltex",
      image: voltexImage,
      technologies:
        "HTML, SCSS, Zustand, NextJS, TypeScript, JavaScript, PostgreSQL, Prisma ORM",
      url: "https://next-voltex.vercel.app/",
      description:
        "An advanced web application leveraging NextJS and PostgreSQL",
    },
    {
      id: 2,
      title: "SearchKino",
      image: searchKinoImage,
      technologies:
        "HTML, JSX, Redux, SCSS, TypeScript, JavaScript, React JS, Rest API",
      url: "https://nikitaliman.github.io/SearchKino/",
      description: "A movie search platform built with React and Redux",
    },
    {
      id: 3,
      title: "Katala",
      image: katalaImage,
      technologies: "HTML, JSX, Redux, SCSS, JavaScript, React JS, Rest API",
      url: "https://nikitaliman.github.io/gitHub-pages-react/",
      description: "A responsive React application with REST API integration",
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              img={project.image}
              additionalInfo={project.technologies}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
