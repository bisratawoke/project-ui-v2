import React,{useContext,useEffect,useState} from 'react';
import {Context,actionType,ACTIONS} from '../state/StateMan';
import FrontendNotActive from './FrontendNotActive';
const Frontend = ():React.ReactElement => {
	
	const {state,dispatch} = useContext(Context);
	
	const [isActive,setIsActive] = useState<boolean | null>(null);
	
	useEffect(() => {
		CheckIsActive();
	} , [])
	
	
	//check to see if service has been initialized
	const CheckIsActive = async () => {
	
		try{
		
		   const opt = {
		   
		   	headers:{
		   	
		   		authorization: `token ${state.token}`
		   	},
		   	method:'GET'
		   } 
		
		const response = await fetch(`${state.apiUrl}/api/project/service/frontend/isActive?proj_pub_id=${state.proj_pub_id}`,opt);
		
		console.log(response.status);
		
		if(response.status === 200) {
		
			const result = await response.json();
			
			const action = {
			
				type:ACTIONS.UPDATE_SERVICE_ACTIVE_STATUS,
				
				payload:true
			}
			dispatch(action)
			
		}
		
		else if(response.status === 400) {
		
			throw {
			
				message: 'not active'
			}
		}
		}catch(err) {
		
		
			console.log(err.message);
			
				const action = {
			
				type:ACTIONS.UPDATE_SERVICE_ACTIVE_STATUS,
				
				payload:false
			}
			dispatch(action)
		}
	
	
	}
	
	
	if(state.services.frontend.active) {
	
	return (
	
	    <div className="col-start-2 col-end-13 border-t-2 border-b-2">
               active
            </div>

	
	
	)
	
	
	}
	else if(state.services.frontend.active === false) {
	
	
	
		return (
	
	   	  <div className="col-start-1 col-end-13 flex">
			<FrontendNotActive />
			</div>
   	  	)
	
	}
	
	else {
	
		return (
	
	    <div className="col-start-2 col-end-13 border-t-2 border-b-2">
               loading
            </div>

	
	
	)
	
	}
	



}
export default Frontend;
