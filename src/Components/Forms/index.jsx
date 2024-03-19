import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


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





  // const [fullName, setFullName] = useState("");
  // const [subject, setSubject] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // function onFormSubmit(event) {
  //   event.preventDefault();

  //   const body = {
  //     fullName,
  //     subject,
  //     email,
  //     message
  //   };

  //   fetch('https://v2.api.noroff.dev/online-shop', {
  //     method: 'POST',
  //     body: JSON.stringify(body),
  //   });
  // }


  // function onTextInputChange(event) {
  //   const value = event.target.value;
  //   if (event.target.name === 'full-name') {
  //     setFullName(value);
  //   }
  //   if (event.target.name === 'subject') {
  //     setSubject(value);
  //   }
  //   if (event.target.name === 'email') {
  //     setEmail(value);
  //   }
  //   if (event.target.name === 'message') {
  //     setMessage(value);
  //   }
  // }

  return (
    <div>
       {/* <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor='full-name'>Full Name</label>
        <input 
        name='full-name'
        value={fullName}
        onChange={onTextInputChange}
        type="text" 
        placeholder="Full Name" />
        <label htmlFor='subject'>Subject</label>
        <input 
        name='subject'
        value={subject}
        onChange={onTextInputChange}
        type="text" 
        placeholder="Subject" />
        <label htmlFor='email'>Email</label>
        <input 
        name='email'
        value={email}
        onChange={onTextInputChange}
        type="email" 
        placeholder="Email" />
        <label htmlFor='body-email'>Message</label>
        <textarea 
        name='message'
        value={message}
        onChange={onTextInputChange}
        placeholder="Message" />
        <button type="submit">Submit</button>
      </form>
    </div> */}
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='full-name'>Name</label>
        <input name='full-name' 
        placeholder='Name'{...register("fullName")} />
        <p>{errors.fullName?.message}</p>
        <label htmlFor='subject'>Subject</label>
        <input 
        name='subject'
        placeholder='subject'{...register("subject")} />
        <p>{errors.subject?.message}</p>
        <label htmlFor='email'>Email</label>
        <input 
        name='email'
        placeholder='Email'{...register("email")} />
        <p>{errors.email?.message}</p>
        <label htmlFor='body'>Message</label>
        <textarea 
        name='body'
        placeholder='message'{...register("body")} />
        <p>{errors.body?.message}</p>
        <input type="submit" />
      </form>
    </div>
    </div>
   
  );
}

export default ContactForm;