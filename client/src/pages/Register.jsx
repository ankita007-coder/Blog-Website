import React from 'react'
import Wrapper from '../assets/wrappers/LoginAndRegister'
import { Form, Link } from 'react-router-dom'
import { FormRow } from '../components'

const Register = () => {
  return (
    <Wrapper>
        <Form className='form'>
            <h1>REGISTER</h1>
            <FormRow type="name" 
                     placeholder="Please enter your name *"
                     name="name"/>
            <FormRow type="email" 
                     placeholder="Please enter your email *"
                     name="email"/>
            <FormRow type="password"  
                     placeholder="Please enter your password *"
                     name="password"/>
            <button type='submit'>Register</button>
            <p>Already have an account ? <Link to="/login">Login</Link></p>
        </Form>
    </Wrapper>
  )
}

export default Register