import React from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {

  // const [result,showResult] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qq3oxmf', 'template_20cdkfp', e.target, 'WdaQWeLGswkH-aQWT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });

    e.target.reset();
  };

  return (
    <div id='contact' className='pad-lr' >
      <form action="" onSubmit={sendEmail}>
        <label htmlFor="" >Full Name</label>
        <input type="text" name="user_name" />
        <label htmlFor="">Email</label>
        <input type="email" name="user_email" />
        <label htmlFor="">Message</label>
        <textarea rows="6" name="message" placeholder='Type your message here' />
        <input type="submit" className='send-btn' value= 'Send'  />
      </form>
    </div>
  )
}

export default Contact
