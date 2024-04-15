import React from 'react';

function Count() {
    return (
        <div className='flex justify-evenly font-quicksand text-deadpool py-16 font-semibold text-secondary text-center bg-cover bg-no-repeat'
            style={{ backgroundImage: 'url("/public/hero-section.png")'}}>
            <div className='flex flex-col '>
                <div className='text-spiderman'>
                    150+
                </div>
                <div>
                    Donations
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='text-spiderman'>
                    156
                </div>
                <div>
                    Happy Smiles
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='text-spiderman'>
                    2453
                </div>
                <div>
                    Hours of Support
                </div>
            </div>
        </div>
    );
}

export default Count;