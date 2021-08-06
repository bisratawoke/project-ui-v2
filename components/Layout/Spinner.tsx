import {FaSpinner} from 'react-icons/fa';
import {ReactElement} from 'react';


const Spinner = ():ReactElement => {

	return (
	
		<div className="flex-grow  bg-gray-300 flex justify-center items-center">
			<FaSpinner className="animate-spin h-7 w-8" />
		</div>
	
	)

}

export default Spinner;
