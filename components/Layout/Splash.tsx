import React from 'react'

function Splash():React.ReactElement {
    return (

        <div className="col-start-1 col-end-13 grid grid-cols-12 grid-rows-6 bg-blue-500 ">
            <div className="col-start-1 col-end-11 bg-blue-500 flex flex-col justify-center row-start-1 row-end-3 items-center gap-1 ">
                
		<span className="font-sans font-normal text-2xl text-white">Get started </span>
		<span className="font-sans font-normal text-sm text-white">read up on how to get started with swiftbase </span>
		<button className="font-sans font-normal text-gray-400 bg-white p-2 border-2 border-white rounded-lg">Get started</button>
            </div>
       
           <div className="grid grid-cols-12 grid-rows-12  grid-auto-max col-start-1 col-end-13 gap-5 row-start-3 row-end-7  bg-white">
             <div className="col-start-3 col-end-10 row-start-1 row-span-5 grid grid-cols-4 grid-rows-5 grid-auto-max gap-5 p-5 hidden">
           	<div className="bg-white border-2 row-start-1 row-end-4 border-gray-300 transition ease-in-out duration-500 transform hover:translate-y-1 hover:scale-110 rounded-lg">
           		
           	</div>
           	<div className="bg-white border-2 row-start-1 row-end-4  border-gray-300 transition ease-in-out duration-500 transform hover:translate-y-1 hover:scale-110 rounded-lg">
           	
           	</div>
           	<div className="bg-white border-2 row-start-1 row-end-4  border-gray-300 transition ease-in-out duration-500 transform hover:translate-y-1 hover:scale-110 rounded-lg">
           	
           	</div>
           	<div className="bg-white border-2  row-start-1 row-end-4 border-gray-300 transition ease-in-out duration-500 transform hover:translate-y-1 hover:scale-110 rounded-lg">
           	
           	</div>	
             </div>
           </div>
       
        </div>

    )
}

export default Splash
