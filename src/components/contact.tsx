import React from 'react';
import Styles from '../Sass/Contact.module.scss';
import Form from './Form/form';

const contact = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.container__content}>
        <div className={Styles.header}>
          <h1>Contact Me</h1>
          <p>SAY HELLO TO ME</p>
        </div>
        <div className={Styles.contactForm}>
          <h1>Contact Me</h1>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default contact;
