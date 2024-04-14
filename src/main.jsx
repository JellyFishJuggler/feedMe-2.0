import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Cause from './components/Cause.jsx'
import Features from './components/Features.jsx'
// import Contact from './components/Contact.jsx'
import Count from './components/Count.jsx'
import Login from './components/Login.jsx'
import {createBrowserRouter} from 'react-router-dom'
import Button from './components/Button.jsx'



import Srijan from './components/Srijan.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    element:<Hero/>,
    children: [
      {
        path :"getstarted",
        element:<Srijan/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

