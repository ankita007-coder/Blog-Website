import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AboutUs, Contact, Dashboard, Feedback, HomeLayout, Landing, Login, Products, Register } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    children: [
      {
        path: '/',
        element: <Landing/>,
        children: [
          {
            index: true,
            element: <Dashboard/>
          },
          {
            path: 'products',
            element: <Products/>
          },
          {
            path: 'about-us',
            element: <AboutUs/>
          },
          {
            path: 'contact-us',
            element: <Contact/>
          },
          {
            path: 'feedback',
            element: <Feedback/>
          }
        ],
      },{
        path:'login',
        element: <Login/>
      },
      {
        path:'register',
        element: <Register/>
      }
    ],  
  }
])
const App = () => {
  return <RouterProvider router={router}/>
}

export default App