import React from 'react'
import Wrapper from '../assets/wrappers/LoginAndRegister'
import { Form, Link } from 'react-router-dom'
import { FormRow } from '../components'

const Login = () => {
  return (
    <Wrapper>
        <Form className='form'>
            <h1>LOGIN</h1>
            <FormRow type="email" 
                     placeholder="Please enter your email"
                     name="email"/>
            <FormRow type="password"  
                     placeholder="Please enter your password"
                     name="password"/>
            <button type='submit'>Login</button>
            <p>Not a member ? <Link to="/register">Register</Link></p>
        </Form>
    </Wrapper>
  )
}

export default Login