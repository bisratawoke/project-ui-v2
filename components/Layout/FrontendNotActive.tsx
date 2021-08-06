import {ReactElement,useState,useContext,useRef,useEffect} from 'react';
import {Context,ACTIONS} from '../state/StateMan';

const FrontendNotActive = ():ReactElement => {
	const {state,dispatch} = useContext(Context);
	const [showForm,setShowForm] = useState<null | boolean >(false);
	const [mssg,setMssg] = useState<null | string >(null);
	
		
	return (
		<div className="flex flex-col flex-grow bg-green-400">
		
			<div className="bg-yellow-400 flex-grow flex">
			
				{
					showForm === true ? 
						(
							<div className="flex-grow grid grid-cols-12 grid-rows-5 grid-auto-max items-center">
								<form 
									
									className="col-start-5 col-end-9 row-start-2 row-end-5 flex bg-gray-100 border-white border-2 rounded-lg flex-col gap-5 p-5"  
									onSubmit={async e => {
											
											e.preventDefault();
											try{
											
												const opt = {
												
													headers:{
													
														'authorization':`token ${state.token}`
													},
													
													method:'POST'
												}
												
												const response = await fetch(`${state.apiUrl}/api/project/service/frontend/Activate?proj_pub_id=${state.proj_pub_id}&dn=${e.currentTarget.dn.value}`,opt);
												
												console.log(response.status);
												
												if(response.status === 200) {
													
													setMssg('Service activated');
													
													
													const action = {
													
														type:ACTIONS.UPDATE_SERVICE_ACTIVE_STATUS,
														
														payload:true
													}
													dispatch(action)
													
																							
												}
												else {
												
													setMssg('Failed to activate service');
													
													
													const action = {
													
														type:ACTIONS.UPDATE_SERVICE_ACTIVE_STATUS,
														
														payload:false
													}
													dispatch(action)
													
												}
											
											}catch(err) {
											
												console.log(err.message)
												
											}
										}
								
								}>
									<label className="font-sans font-normal text-gray-400 text-sm ml-1">domain name</label>
									<input 
										placeholder="enter domain name" 
										name="dn"
										className="border-white p-2 "	
									/>
									{mssg && (
									
										<span className="font-sans font-normal text-blue-400 text-sm ml-1"> {mssg}</span>
									)}
									<input 
										type="submit" 
										
										className="bg-green-400 hover:bg-green-300 text-white border-2 rounded border-white  font-sans font-normal p-2"
										
										value="activate"
									
									/>
								
								</form>
							</div>
						
						) 
						: 
						(
							<div className="flex-grow flex flex-col justify-center items-center">
								<span className="font-sans font-normal text-2xl text-white">Activate service </span>
								<span className="font-sans font-normal text-sm text-white">Click Activate button below and folow the instructios to activate service </span>
								<button className="transition ease-in-out duration-400 transform hover:bg-red-400 hover:scale-110 hover:translate-y-1 hover:text-white font-sans font-normal text-gray-400 bg-white p-2 border-2 border-white rounded-lg" onClick={e => setShowForm(true)}>Activate</button>
							</div>
						)
					
				
				}
			
			</div>
			<div className="grid grid-cols-12 grid-rows-1 grid-auto-max bg-white flex-grow"></div>
		
		</div>
	);

};


export default FrontendNotActive;
