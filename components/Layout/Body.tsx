import React,{useContext} from 'react'
import {Context} from '../state/StateMan';
import Splash from './Splash';
import Deploy from './Deploy';
import Monitor from './Monitor';

function Body():React.ReactElement {

    const {state} = useContext(Context);

    if(state.currentService === 'splash') {

        return (
            <div className="col-start-2 col-end-13 border-t-2 border-b-2 grid grid-cols-12 grid-rows-1 auto-rows-max">
                <Splash />
            </div>

        )

    }

    else if(state.currentService === state.services.deploy.name) {

        return (
        <div className="col-start-2 col-end-13 border-t-2 border-b-2 grid grid-cols-12 grid-rows-1 auto-rows-max">
          <Deploy />
         </div>
        )

    }

    else {

        return (
            <div className="col-start-2 col-end-13 border-t-2 border-b-2 flex">
                <Monitor/>
            </div>
        )
    
    }
}

export default Body
