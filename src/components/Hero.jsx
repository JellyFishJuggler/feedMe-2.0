import React from 'react'
import Button from './button'
function Hero() {
    return (
        <div className='h-screen w-screen'>
            <nav className='text-white'>
                <ul className='flex justify-center font-quicksand font-semi text-standard my-3 gap-x-10'>
                    <li className='inline-block mx-4'>Home</li>
                    <li className='inline-block mx-4'>About</li>
                    <li className='inline-block mx-4'>Cause</li>
                    <li className='inline-block mx-4'>Features</li>
                    <li className='inline-block mx-4'>Contact</li>
                </ul>
            </nav>
            <section className='py-32'>
                <div className=' font-kodchasan  justify-center'>
                    <h1 className='text-feedme font-bold text-secondary'>FEEDME</h1>
                    <h3 className='text-deadpool text-accent font-bold font-quicksand'>Join us in the fight against hunger</h3>
                </div>

                <div className="py-10">
                    <Button />
                </div>
            </section>

        </div>
    )
}

export default Hero
