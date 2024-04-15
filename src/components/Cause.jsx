import React from 'react';

function Cause() {
    return (
        <div className='bg-accent w-screen h-screen'>
            <div className="bg-accent">
                <div className="mx-auto lg:px-8 px-4 py-12">
                    <div className="container text-center text-white mx-auto">

                        <h1 className='font-quicksand text-goku font-bold'>Join Our Fight Against Hunger</h1>
                        <hr className='w-80 border-t-4 rounded-lg border-primary mx-auto my-2' />

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-primary h-20 w-192">Srijan</div>
                <div className="">
                    <div className="bg-blue-200 h-20 col-start-2">Blue Grid</div>
                    <div className="bg-primary h-20 col-start-3 row-start-2">Orange Grid</div>
                </div>
                {/* <div className="bg-blue-200 h-10 col-start-2 row-start-1"></div>
  <div className="bg-primary h-10 col-start-3 row-start-1"></div> */}

            </div>
        </div>
    );
}

export default Cause;
