import React from 'react'
import {Header, Sidebar} from '../components';
import Wrapper from '../assets/wrappers/Landing';
import Dashboard from './Dashboard';
import { Outlet } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <Header/>
      <Outlet/>
    </Wrapper>
  )
}

export default Landing