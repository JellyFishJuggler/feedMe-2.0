import React from 'react';

function Cause() {
    return (
        <div className='bg-accent w-screen h-screen'>
            <div><h1 className='text-center text-white py-12 text-quicksand font-bold text-thor'>Join Our Fight Against Hunger</h1></div>
            <div className='grid grid-cols-1 md:grid-cols-2 bg-accent'>
                {/* First grid item */}

                {/*<hr className='w-1/4 mx-auto mt-2 border-white' />*/}
                <div className='col-span-1 md:col-span-2 py-10 text-batman font-quicksand text-secondary bg-primary'>
                    <p>Welcome to our donation website, where you can make a meaningful difference with just a few clicks</p>
                    <p>Our platform connects you with trusted and verified charities and causes, giving you the power to support the ones that align with your values and passions.</p>
                </div>
                {/* Second grid item */}
                <div className='md:flex'>
                    {/* Left side grid item */}
                    <div className='w-full md:w-1/2 p-4'>
                        {/* Content for the left side grid */}
                        <h2 className='text-white'>Left side content</h2>
                    </div>
                    {/* Right side grid item */}
                    <div className='w-full md:w-1/2 p-4'>
                        {/* Content for the right side grid */}
                        <h2 className='text-white'>Right side content</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cause;
