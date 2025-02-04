import React from 'react';
import Styles from '../../Sass/Projects.module.scss';

interface Props {
  img: string;
  title: string;
  additionalInfo?: string;
  url: string;
}

const ProjectsCard: React.FC<Props> = ({ title, img, additionalInfo, url }) => {
  return (
    <div id="projects" className={Styles.Card}>
      <h2>
        Project Title:
        <span> {title}</span>
      </h2>

      <div className={Styles.Card__content}>
        <img src={img} alt="" />
        <p className={Styles.text}>
          <span> Here are the Tech's used:</span> <br></br> {additionalInfo}
        </p>
        <a href={url}>
          <button>Visit</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
