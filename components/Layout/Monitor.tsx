import {ReactElement,useEffect,useState,useContext,useRef} from 'react';
import {Context} from '../state/StateMan';
import Spinner from './Spinner';
import {useRouter} from 'next/router';
import MonthlyRequestReport from './MonthlyRequestReport';



const Monitor = ():ReactElement => {
	enum graphTypes {
		
		monthlyRequestReport,
		
		monthlyUserReport
	}
	
	const [graphInView,setGraphInView] = useState<graphTypes | null>(null)

	return (
	
		<div className="flex flex-grow flex-col">
			
			<div className="flex-shirnk bg-yellow-300 h-10 flex justify-center items-center gap-2 p-2">
			
				<button 
					className="rounded-lg text-gray-400 bg-white border-white border-2 text-lg p-2 font-sans font-normal hover:bg-gray-200"
					onClick={e => {
					
						e.preventDefault()
						
						setGraphInView(graphTypes.monthlyRequestReport)
					}}	
				>monthly request report</button>
				
				<button 
					className="rounded-lg text-gray-400 bg-white border-white border-2 text-lg p-2 font-sans font-normal hover:bg-gray-200"
					onClick={e => {
					
						e.preventDefault()
						
						setGraphInView(graphTypes.monthlyUserReport)
					}}
				>monthly user base report</button>
			</div>
			
			<Graph graphInView={graphInView} graphTypes={graphTypes}/>
		</div>
	)
}
const Graph = ({graphInView,graphTypes}):ReactElement => {
	
	
	
	useEffect(() => {
	
		
	
	} , [])
	
	
	
		
		switch (graphInView) {
		
			case graphTypes.monthlyRequestReport:
				
				return (
					<div className="flex-grow flex">
						
						<MonthlyRequestReport path={"/status/monthlyReq"} title={"no of request per month"}/>
					</div>
				
				)
			
			case graphTypes.monthlyUserReport:
				
				return (
				
				
					<div className="flex-grow">
						<MonthlyRequestReport path={"/status/monthlyUser"} title={"user base"}/>
					</div>
				)
			
			default:
				
				return (
				
					<div className="flex-grow flex">
						<Spinner />
					</div>
				
				)
		
		}
		
		
	
	
	

}

export default Monitor;
