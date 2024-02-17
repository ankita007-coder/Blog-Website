import React from 'react'
import { Sidebar } from "../components";

const customStyle={
  width:'80vw',
  backgroundImage: 'url("https://img.freepik.com/free-vector/realistic-blurry-spring-background_23-2148833435.jpg?w=900&t=st=1708075575~exp=1708076175~hmac=be17dc62e218544e96a666ddf07347cb1b9135387353893613168952ddeb3a89")', // Wrap the URL in quotes
  backgroundSize: 'cover',
  fontFamily: '"Dancing Script", cursive',
  fontSize: '4rem',
  fontWeight: 'bold',
  textAlign: 'center',
}
const Dashboard = () => {
  return (
    <div className='row'>
      <div style={{width:'20vw'}}>
        <Sidebar/>
      </div>
      <div style={customStyle}>
        <p>Anything and everything <br /> to make your
        Gardening experience <br /> joyful</p>
      </div>
    </div>
  )
}

export default Dashboard