import React from 'react'
import Wrapper from '../assets/wrappers/Product'
import { Form } from 'react-router-dom'
import { FormRow } from '../components'
import { FaUpload } from "react-icons/fa";

const Products = () => {
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
      <Form className='form'>
        <FormRow type="text" name="prodName" placeholder="Enter product name"/>
        <label htmlFor="prodImg">Upload Image &nbsp;<FaUpload/></label>
        <input type="file" name="prodImg" id="prodImg" 
              style={{display:'none'}}/>
        <select name="category" id="category">
          {
            categories.map((category)=>{
              return <option value={category} key={category}>{category}</option>
            })
          }
        </select>
        <textarea name="description" id="description" cols="30" rows="10" placeholder='Add product details'></textarea>
        <button type="submit">Add Product</button>
      </Form>
    </Wrapper>
  )
}

export default Products