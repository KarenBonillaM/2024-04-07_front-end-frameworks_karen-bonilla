import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './index.css'


const schema = yup.object({
  fullName: yup
    .string()
    .min(3, "Your name should me at least 3 characters")
    .required("Please enter your name"),
  subject: yup
    .string()
    .min(3, "The subject should me at least 3 characters")
    .max(100, "The subject should not exceed 100 characters")
    .required("Please enter a subject"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  body: yup
    .string()
    .min(3, "The message should me at least 3 characters")
    .max(1000, "The message should not exceed 1000 characters")
    .required("Please enter a message"),
}).required();

function ContactForm() {
  const { register, handleSubmit, formState: { errors },} = useForm({resolver: yupResolver(schema),});

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className='contact-form'>
          <div>
            <div className='form-element'>
              <label htmlFor='full-name'>Name</label>
              <input name='full-name' 
              placeholder='Alba Andersson'{...register("fullName")} />
            </div>
            <p>{errors.fullName?.message}</p>
          </div>
          <div>
            <div className='form-element'>
              <label htmlFor='subject'>Subject</label>
              <input 
              name='subject'
              placeholder='Subject'{...register("subject")} />
            </div>
            <p>{errors.subject?.message}</p>
          </div>
          <div>
            <div className='form-element'>
              <label htmlFor='email'>Email</label>
              <input 
              name='email'
              placeholder='Email'{...register("email")} />
            </div>
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <div className='form-element'>
              <label htmlFor='body'>Message</label>
              <textarea 
              name='body'
              placeholder='Message'{...register("body")} />
            </div>
            <p>{errors.body?.message}</p>
          </div>
          <input type="submit" className='submit'/>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;