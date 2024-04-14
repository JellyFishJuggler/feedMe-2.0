import React from 'react';
import {Link} from 'react-router-dom'


const Button = () => {
    return (
        <div>
       
        <Link to="/Srijan">
          <button
            className="flex items-center justify-center w-[412px] h-[102px] relative bg-button rounded-[40px] border-8 hover:bg-accent hover:text-primary border-accent font-bold font-quicksand text-standard text-white"
          >
            Get Started
          </button>
        </Link>
      </div>
    );
};

export default Button;
