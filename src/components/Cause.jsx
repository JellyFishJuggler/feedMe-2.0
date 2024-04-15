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
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-start-1 col-span-3 flex items-center justify-start px-4 py-2"> 
                        <div className="bg-white rounded-lg shadow-lg w-160 h-40">
                            Srijan
                        </div>
                    </div>

                    <div className="col-span-2 flex justify-center gap-4 mx-5">
                        <div className="bg-blue-200  mt-4 px-4 py-2 rounded-lg shadow-lg w-480 h-40">
                            Blue Grid
                        </div>

                        <div className="bg-primary  mt-4 px-4 py-2 rounded-lg shadow-lg w-480 h-40"> 
                            Grid 2
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
            );
}

export default Cause;
