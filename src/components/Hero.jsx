import React from 'react'
//import Button from './Button'
import About from './About'
import Count from './Count'
import Cause from './Cause'
import Srijan from './Srijan'
import { Link } from 'react-router-dom'
import Footer from './Footer'
function Hero() {
  return (
    //white bg is appeaing on top as line 6 is not covering the whole screen -> fixed by adding h-screen w-screen

    <div className='bg-cover bg-no-repeat w-full h-auto'
        style={{backgroundImage:'url("/public/hero-section.png"', backgroundSize:'contain'}}>
      <nav className='text-white py-12 font-quicksand font-semibold'>
      <ul className='flex justify-center  font-semi text-standard '>
          <li className='inline-block mx-4'>
            <Link to="/">Home</Link>
          </li>
          <li className='inline-block mx-4'>
            <Link to="/about">About</Link>  
          </li>
          <li className='inline-block mx-4'>
            <Link to="/cause">Cause</Link>
          </li>
          <li className='inline-block mx-4'>
            <Link to="/features">Features</Link>
          </li>
          <li className='inline-block mx-4'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <section className='py-16 my-24'>
        <div className=' font-kodchasan  justify-center'>
          <h1 className='flex items-center justify-center text-feedme font-bold text-secondary'>FEEDME</h1>
          <h3 className='flex items-center justify-center text-deadpool text-accent font-bold font-quicksand -my-12'>Join us in the fight against hunger</h3>
        </div>

        <div>

          <Link to="/getstarted">

            <button
             className=" w-[412px] h-[102px] flex items-center justify-center bg-button rounded-[40px] border-8  hover:bg-accent hover:text-primary border-accent font-bold font-quicksand text-standard text-white mx-auto mt-20"
            >
              Get Started
            </button>
          </Link>
        </div>
      </section>

        <About/>
        <Count/>
        <Cause/>
<Footer/>
    </div>

  )
}

export default Hero
