import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Textarea,
    Input,
  } from '@chakra-ui/react'
export default function Form(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a6zsgsh', 'template_pbm9iqc', form.current, 'RdTJdmGBpGpUfKpj3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="from_name" />
    //   <label>Email</label>
    //   <input type="email" name="from_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
<FormControl ref={form} onSubmit={sendEmail} w="100%" h="100%" >
  <FormLabel   mt={4} color="white">Name</FormLabel>
  <Input type='email'  name="from_name" color="white"   mt={5}/>

  <FormLabel   mt={4} color="white">Email address</FormLabel>
  <Input   mt={4} type='email' color="white" name="from_email"/>

  <FormLabel   mt={4} color="white">Message</FormLabel>
  <Textarea   mt={4} color="white" placeholder='Enter your message' name="message" />
  <Input type="submit" color="#FF004D" value="Send"   mt={2}/>

</FormControl>
  );
};