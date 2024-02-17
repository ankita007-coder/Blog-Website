import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Header'

const Header = () => {
  const items = [
                  {
                    name:'HOME',
                    link:'/'
                  },
                  {
                    name:'PRODUCTS',
                    link:'/products'
                  },
                  {
                    name: 'ABOUT US', 
                    link: 'about-us'
                  },
                  {
                    name: 'CONTACT US', 
                    link: 'contact-us',
                  },
                  {
                    name: 'FEEDBACK',
                    link: 'feedback'
                  }
                ]

  return (
    <Wrapper>
      <div className='branding'>
        <h2>sndkjln</h2>
        <Link to='/login'>Login</Link>
      </div>
      <nav>
      {
        items.map((item,index) =>{
          return <li key={index}><NavLink to={item.link}>{item.name}</NavLink></li>
        })
      }
    </nav>

    </Wrapper>
  )
}

export default Header