import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from 'semantic-ui-react';

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_bgi8kwv","template_l4h0h2s", form.current, 'rZYieTbC_qrKU9jau')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <div> 
      <Container>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <br/>
      <input type="text" name="user_name" />
      <br/>
      <label>Email</label>
      <br/>
      <input type="email" name="user_email" />
      <br/>
      <label>Message</label>
      <br/>
      <textarea name="message" />
      <br/>
      <input type="submit" value="Send" />
    </form>
    </Container>
  </div>

  );
};

export default EmailForm;