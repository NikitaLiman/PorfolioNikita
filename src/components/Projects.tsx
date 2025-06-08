import React from "react";
import styles from "../Sass/Projects.module.scss";
import ProjectCard from "../components/Cards/ProjectsCart";

import voltexImage from "../img/Снимок экрана 2025-01-31 202833.png";

import searchKinoImage from "../img/Снимок экрана 2025-01-31 201334.png";
import swiftChat from "../img/Chatt.png";

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
      title: "SwiftChat",
      image: swiftChat,
      technologies:
        "Web Sockets, SCSS, Zustand, NextJS, TypeScript, JavaScript, PostgreSQL, Prisma ORM",
      url: "https://swift-chat-fawn.vercel.app/",
      description:
        "An advanced Web-Chat application leveraging NextJS,Web Sockets and PostgreSQL",
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
