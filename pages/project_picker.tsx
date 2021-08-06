import Footer from '../components/Layout/Footer';
import NavBar,{navItemType,positionType} from '../components/Layout/NavBar';
import {FaPlus, FaProjectDiagram} from 'react-icons/fa';
import Link from 'next/link';
import {useEffect,useContext,useState} from 'react';
import {Context,projList,project,ACTIONS} from '../components/state/StateMan';
import ProjectListItem from '../components/Layout/ProjectListItem';
import {useRouter} from 'next/router';
//navItems
const NavItems:Array<navItemType> = [

  {name:'Documentation',bgcolor:'gray',path:'/',hoverBg:'gray',textColor:'gray'},

  {name:'pricing',bgcolor:'gray',path:'/',hoverBg:'gray',textColor:'gray'},
  
  {name:'logout',bgcolor:'green',path:'/',hoverBg:'green',textColor:'gray'}



];

//position of nav items
const position:positionType = {

  colStart:7,

  colCount:3

}
//project list interface


export default function Home() {

  const {state,dispatch} = useContext(Context);
  
  const router = useRouter();
  
  const [projArray,setProjArray] = useState<projList | null>(null);

  useEffect(() => {
    
    console.log(state);
  
   
    fetchProjList();
    
    
  }, [])
  
     //fetch project list for authenticated user;
   
   const fetchProjList = async() => {
   	
   	try{
   	
	   	const opt = {
	   	
	   		headers: {
	   		
	   			authorization: `token ${state.token}`
	   		},
	   		
	   		method: 'GET'
	   	}
	   	
	   	const response = await fetch(`${state.apiUrl}/api/project/find`,opt);
	   	
	   	console.log(response.status);
	   	
	   	if(response.status === 200) {
	   	
	   		const result = await response.json();
	   		
	   		setProjArray(result.message);
	   	}
	   	else if (response.status === 401) {
	   		
	   		throw {
	   		
	   			message: 'Unauthorized user alert'
	   		}
	   	} 
	   	
	   	else{
	   		
	   		console.log('empty no records found');
	   	}
   	}
   	catch(err) {
   		
   		console.log(err.message);
   		
   		router.push(`/?token=${state.token}`);
   	
   	}
   }
    
  return (
    <div className="h-screen flex flex-col">
        <NavBar navItems={NavItems} position={position} />
        <div className="flex-grow  flex border-2 flex-col">
          <div className="border-b-2 flex justify-center items-center h-10">

              <span className="font-sans font-normal text-lg text-gray-400">projects</span>

          </div>

          <div className="flex-grow grid grid-cols-12">

              <div className="col-start-3 col-end-11 grid grid-rows-4 grid-cols-4 auto-rows-max pt-5 gap-3">
                <Link href="/createProject">
                  <div className="transition ease-in-out duration-500 transform hover:translate-y-1 hover:scale-110 border-2 border-gray-300 hover:border-blue-400  cursor-pointer flex justify-center items-center flex-col">

                      <FaPlus />
                      <span className="font-sans font-normal text-lg text-gray-400 hover:text-blue-400">create project</span>
                     
                  </div>
                </Link>

                {

                  projArray && projArray.map((project:project) => (

                      <ProjectListItem
                        
                        proj_name={project.proj_name} 
                        
                        description={project.description} 
                        
                        owner={project.owner}

                        proj_pub_id={project.proj_pub_id}

                        key={project.proj_pub_id}

                      />
                  ))

                }

              </div>
          </div>

        </div>
        <Footer />
    </div>
  )
}


