// import React from 'react'
// import ReactDOM from 'react-dom/client'
// // import App from './App.jsx'
// import './index.css'
// import {RouterProvider} from 'react-router-dom'
// import Hero from './components/Hero.jsx'
// import About from './components/About.jsx'
// import Cause from './components/Cause.jsx'
// import Features from './components/Features.jsx'
// // import Contact from './components/Contact.jsx'
// import Count from './components/Count.jsx'
// import Login from './components/Login.jsx'
// import {createBrowserRouter} from 'react-router-dom'
// // import Button from './components/Button.jsx'


// import Srijan from './components/Srijan.jsx'

// const router= createBrowserRouter([
//   {
//     path:'/',
//     element:<Hero/>,
//     children: [
//       {
//         path :"about",
//         element:<About/>
//       },
//       {
//         path :"cause",
//         element:<Cause/>
//       },
//       {
//         path :"features",
//         element:<Features/>
//       },
//       {
//         path :"count",
//         element:<Count/>
//       },
//       {
//         path :"login",
//         element:<Login/>
//       },
//       {
//         path :"getstarted",
//         element:<Srijan/>
//       }
//       //when clicked on get started navigate to srijan.jsx, page did open but not showing the content
     
//     ]
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Cause from './components/Cause.jsx';
import Features from './components/Features.jsx';
import Count from './components/Count.jsx';
import Login from './components/Login.jsx';
import Srijan from './components/Srijan.jsx';
import './index.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/cause" element={<Cause />} />
        <Route path="/features" element={<Features />} />
        <Route path="/count" element={<Count />} />
        <Route path="/login" element={<Login />} />
        <Route path="/getstarted" element={<Srijan />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


