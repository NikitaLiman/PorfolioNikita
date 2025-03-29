import React from "react";
import styles from "../../Sass/Projects.module.scss";

interface Props {
  img: string;
  title: string;
  additionalInfo?: string;
  url: string;
  description: string;
}

const ProjectCard = ({
  title,
  img,
  additionalInfo,
  description,
  url,
}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={img}
          alt={`${title} project screenshot`}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          <h3 className={styles.title}>{title}</h3>
        </a>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.technologies}>
          <h4 className={styles.techTitle}>Technologies:</h4>
          <p className={styles.techList}>{additionalInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
