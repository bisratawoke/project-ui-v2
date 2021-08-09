import {ReactElement,useState,useRef,useContext,useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import {Context} from '../state/StateMan';
import Spinner from './Spinner';


const MonthlyRequestReport = ({path,title}):ReactElement => {
	
	const [showGraph,setShowGraph] = useState<boolean>(false);
	
	const [coordList,setCoordList] = useState(null);
	
	const {state} = useContext(Context);
	
	useEffect(() => {
	
		getInfo()
	} , [path])
	
	
	//get info from api
	
	const getInfo = async():Promise<void> => {
	
		try{
			
			const opt = {
			
				headers:{
				
					'Authorization':`token ${state.token}`
				},
				
				method:'GET'
			}
		
		
			const response = await fetch(`http://${state.statusApiUrl}${path}`,opt)
			
			if(response.status === 200) {
					
				const result = await response.json()
				
				console.log(result);
				
				setCoordList(result)
				
				setShowGraph(true)
				
			
			}
			else throw {
			
				status:response.status,
				
				message:'unknown'
			}
		}catch(err) {
		
			console.log(err)
		}
	
	
	}
	if (showGraph){
	
	
	return (
	
		
			<Bar 
					
					 data={{
					    labels: ['januray', 'feburay', 'march', 'april', 'may', 'june','july','august','septmeber','november','october','december'],
					    datasets: [
					      
					      {
						
						label: title,
						
						data: [
							coordList.jan,
							coordList.feb, 
							coordList.mar,
							coordList.apr,
							coordList.may,
							coordList.jun,
							coordList.jul,
							coordList.aug,
							coordList.sep,
							coordList.oct,
							coordList.nov,
							coordList.dec
						],
						
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
					      
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						
						borderWidth: 1
						
						},
						
						
						
					  ]
						    
					}}
				/>
	)
	
	}
	
	else {
	
		return (
		
			<Spinner />
		)
	}
}

export default MonthlyRequestReport;
