import React,{useContext} from 'react'
import {Context,ACTIONS} from '../state/StateMan';

function SideNavBar():React.ReactElement {

    const {state,dispatch} = useContext(Context);

    return (
        <div className="col-start-1 col-end-2 bg-gray-100 border-2 border-white">
            <div className="flex gap-5 flex-col">

                <div 
                    
                    className="flex justify-center item-center border-b-2 border-white mb-10" 
                          
                >
                    <span className="font-sans font-normal text-1xl text-yellow-400">{state.proj_name}</span>

                </div>

                <div 
                    
                    className="flex justify-center item-center border-b-2 border-white cursor-pointer py-2 border-t-2 bg-gray-100 hover:bg-white" 
                    
                    onClick={e => {

                        e.preventDefault();

                        dispatch({type:ACTIONS.SET_CURRENT_SERVICE,payload:state.services.frontend.name})

                    }}
                
                > 
                    <span className="font-sans font-normal text-1xl text-gray-400 hover:text-red-400">Frontend service</span>

                </div>

                <div 
                    
                    className="flex justify-center item-center border-b-2 border-white cursor-pointer py-2 border-t-2 bg-gray-100 hover:bg-white"

                    onClick={e => {

                        e.preventDefault();

                        dispatch({type:ACTIONS.SET_CURRENT_SERVICE,payload:state.services.backend.name})


                    }}

                >
                    
                    <span className="font-sans font-normal text-1xl text-gray-400 hover:text-red-400">Backend service</span>

                </div>

                <div 
                    
                    className="flex justify-center item-center border-b-2 border-white cursor-pointer py-2 border-t-2  hover:bg-white">
                    <span className="font-sans font-normal text-1xl text-gray-400 hover:text-red-400">Pricing</span>
                
                </div>
                <div className="flex justify-center item-center border-b-2 border-white cursor-pointer py-2 border-t-2 hover-bg-white">
                    <span className="font-sans font-normal text-1xl text-gray-400 hover:text-red-400">Documentation</span>
                </div>
                <button className="flex justify-center item-center border-b-2 border-white cursor-pointer bg-red-500 py-2 border-t-2 hover:bg-red-300 ">
                    <span className="font-sans font-normal text-1xl text-white">Logout</span>
                </button>


                
            </div>
           
           

        </div>
    )
}

export default SideNavBar
