import React,{useContext} from 'react'
import {useRouter} from 'next/router';
import {Context,ACTIONS,SETPROJECTACTION,project} from '../state/StateMan';

function ProjectListItem({proj_pub_id,owner,proj_name,description}:project):React.ReactElement {

    const {dispatch} = useContext(Context);

    const router = useRouter();
    return (
       
            
        <div className="border-2 border-gray-300 hover:border-blue-400  transition ease-in-out transform hover:translate-y-1 hover:scale-110 cursor-pointer flex justify-center items-center flex-col"
        
            onClick={e => {

                e.preventDefault();

                const ActionEvent:SETPROJECTACTION = {

                    type: ACTIONS.SET_PROJECT_INFO,

                    payload: {proj_pub_id,owner,proj_name,description}

                }

                dispatch(ActionEvent);

                router.push('/projectDashboard');


            }}
        >

            <span className="font-sans font-normal text-lg text-gray-400">{proj_name}</span>

            <span className="font-sans font-normal text-lg text-gray-400">{description}</span>
                     
        </div>
            
     
    )
}

export default ProjectListItem
