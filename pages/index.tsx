import React,{ReactElement,useContext,useEffect} from 'react';
import {Context,ACTIONS} from '../components/state/StateMan';
import {useRouter} from 'next/router';
import Home from './project_picker';
import Spinner from '../components/Layout/Spinner';

const index = ():ReactElement => {
	
	const {state,dispatch} = useContext(Context);
	
	const router = useRouter();
	
	useEffect(() => {
		

		let params = new URLSearchParams(window.location.href);
		
	
		params.forEach( (token) => {
			
			if(token){
			
				Auth(token);
			
			}
			else {
			
			
				const Action = {
				
					type:ACTIONS.SET_IS_AUTH,
					
					payload: {
					
						isAuth: false,
						
						token:null
					}
				
				}
			
				dispatch(Action);
			}
			
		})
		
		
		
		
	},[])
	
	//check authenticity of token
	const Auth = async(token:string) => {
	
	
	
		try{
				
			const opt = {
					
				headers: {
				
					authorization: `token ${token}`	
				
			       },
			       
			       method:'GET'
			      
			}
			
			console.log(opt);
			const response = await fetch(`${state.apiUrl}/api/account/service/check`,opt);
			
			console.log(response.status);
			
			if(response.status === 200) {
				
				const Action = {
				
					type:ACTIONS.SET_IS_AUTH,
					
					payload: {
						
						isAuth:true,
						
						token:token
					}
				}
				
				dispatch(Action);
				
				
			
			}
			
			else {
				
				const Action = {
				
					type:ACTIONS.SET_IS_AUTH,
					
					payload: {
						
						isAuth:false,
						
						token:null
					}
				}
				
				dispatch(Action);
			
				
			}
			
		}catch(err) {
			
			
			console.log(err);
			
				const Action = {
				
					type:ACTIONS.SET_IS_AUTH,
					
					payload: {
						
						isAuth:false,
						
						token:null
					}
				}
				
				dispatch(Action);
			
		}
	
	
	
	}
	
	
	if(state.isAuth) {
		
		return (
		
			<Home />
		)
	
	}
	
	else if(state.isAuth === false) {
	
	
		return (
		
			<div> not authenticated</div>
		)
	
	}
	
	else {
	
		return (
		
			<div className="h-screen w-screen flex">
				
				<Spinner />
			</div>
		)
	}
};

export default index;
