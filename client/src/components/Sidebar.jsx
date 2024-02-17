import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Sidebar'

const Sidebar = () => {
  const categories = ['Bonsai',
                    'Flower Saplings', 
                    'Fruit saplings',
                    'Organic manure',
                    'Gardening tools',
                    'Vegetable saplings',
                    'Fruit seeds',
                    'Vegetable seeds'
                  ]
  return (
    <Wrapper>
      <h4>PRODUCT CATEGORIES</h4>
      <div className='line'></div>
      <ul>
        {
          categories.map((category,index) =>{
            return <li key={index}>
              <Link>{category}</Link>
            </li>
          })
        }
      </ul>      
    </Wrapper>
  )
}

export default Sidebar