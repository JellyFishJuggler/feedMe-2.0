import React from 'react';

const About = () => {
  return (
    <section className='h-screen bg-accent w-screen'>
      <div className="bg-accent">
        <div className="mx-auto lg:px-8 px-4 py-12">
          <div className="container text-center text-white mx-auto">

            <h1 className='font-quicksand text-goku font-bold'>About Page</h1>
            <hr className='w-80 border-t-4 rounded-lg border-primary mx-auto my-2' />

          </div>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="bg-accent p-4 shadow-2xl shadow-right rounded-3xl w-[840px] h-[544px] mx-20 my-12">
          
          <h3 className="font-quicksand text-deadpool font-bold mx-5 my-3 mb-2 text-secondary text-left">Get to Know Us</h3>
          <div className="font-quicksand text-nobita text-left mx-5 text-secondary">
            <p>
              Join our cause to combat hunger! Your food donations can make a real difference. Visit our platform, specify the items you'd like to donate, and choose a convenient drop-off point. Every contribution counts.
            </p>
            <br />
            <p>Simplify the way you give back. Register, select the food items you can donate, and we'll ensure it reaches those in need. Your small effort can create a significant impact on someone's life. Let's fight hunger together!</p>

          </div>
        </div>
        <img src='about us.png' alt="about-us" className='w-100 h-auto' />
      </div>


    </section>
  );
};

export default About;