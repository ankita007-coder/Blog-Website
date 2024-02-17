import React from 'react'
import Wrapper from '../assets/wrappers/Contact'
import { Form } from 'react-router-dom'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FormRow } from '../components';

const Contact = () => {
  return (
    <Wrapper>
      <div className='row'>
        <div>
          <h2><FaPhone/></h2>
          <h4>PHONE NUMBER</h4>
          <p>1238797357</p>
        </div>
        <div>
          <h2><MdEmail/></h2>
          <h4>EMAIL</h4>
          <p>abc@gmail.com</p>
        </div>
        <div>
          <h2><FaLocationDot/></h2>
          <h4>OUR MAIN OFFICE</h4>
          <p>China Town 35</p>
        </div>
      </div>
      <div className='contact-form'>
        <Form className='form'>

          <h1>CONTACT US</h1>
          <FormRow type="text" name="name" placeholder="Enter your name *"/>
          <FormRow type="email" name="email" placeholder="Enter your email *"/>
          <textarea name="message" id="" rows="5" placeholder='Enter your message'></textarea>
          <button type="submit">Submit</button>
        </Form>
      </div>
    </Wrapper>
  )
}

export default Contact