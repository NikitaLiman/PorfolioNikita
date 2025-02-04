import React from 'react';
import { useForm } from 'react-hook-form';

import Styles from '../../Sass/Contact.module.scss';

import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './schema';
import { z } from 'zod';

type FormData = z.infer<typeof schema>;

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log('Отправленные данные:', data);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('Email', data.email);
    formData.append('Message', data.message);
    formData.append('access_key', 'c14c5e4c-5c0e-470c-b52b-a7d5145e8ff2');

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    }).then((res) => res.json());
    if (res.success) {
      alert('Message have send');
    } else {
      console.log('Error', res);
      alert('Something went wrong ');
    }
  };

  return (
    <div className={Styles.contactbox}>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className={Styles.first}>
          <div className={Styles.name}>
            <label htmlFor="name">Name</label>
            <input id="name" placeholder="Your Name" {...register('name')} />
            {errors.name?.message && <p className="error">{errors.name.message}</p>}
          </div>

          <div className={Styles.email}>
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="email@example.com" type="email" {...register('email')} />
            {errors.email?.message && <p className="error">{errors.email.message}</p>}
          </div>
        </div>

        <div className={Styles.text}>
          <label htmlFor="message">Message</label>
          <input
            id="message"
            placeholder="Hello, my name is . . ."
            type="text"
            {...register('message')}
          />
          {errors.message?.message && <p className="error">{errors.message.message}</p>}
        </div>

        <button type="submit">Send Data</button>
      </form>
    </div>
  );
};

export default Form;
