import React, { ReactElement,useContext,useRef,useEffect,useState } from 'react'
import NavBar,{navItemType,positionType} from '../components/Layout/NavBar'; 
import Footer from '../components/Layout/Footer';
import {Context,ACTIONS,project,projList} from '../components/state/StateMan';
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
const createProject = ():ReactElement => {

    const {state,dispatch} = useContext(Context);

    const [mssg,setMssg] = useState<null | any>(null);

    const formRef = useRef<null | HTMLFormElement>(null);

    const router = useRouter();

    useEffect(() => {
    
        formRef.current.addEventListener('submit',createProjectHandler);

    }, [])

    //create project handler

    const createProjectHandler = async(e):Promise<void> => {
        
        e.preventDefault();

        try{

           if(!e.currentTarget.proj_name.value || !e.currentTarget.proj_name.value) {
                
                throw 'please fill in the form' ;

                return ;
           }

            
      
            //new projects info
            const info:{proj_name:string;description:string} = {

                proj_name:e.currentTarget.proj_name.value,

                description:e.currentTarget.description.value

            }

            console.log(info)
           
            //request options
            //request opt interface

            interface opt {

                headers:{'Content-Type':string;'authorization':string},

                method:string;

                body:string;

            }

            const opt:opt = {

                headers:{

                    'Content-Type':'application/json',

                    'authorization':`token ${state.token}`

                },

                method: 'POST',

                body: JSON.stringify(info)


            }

            // making api request 

            const response = await fetch(`${state.apiUrl}/api/project/create`,opt);

            console.log(response.status);

           

            if(response.status === 200) {

                const result = await response.json();

                console.log(result);

                setMssg('succesfully create project');

                router.push(`/project_picker`);                

                return ;
            }

            setMssg('failed to create project \n please try again');

            return ;
        }

        catch(err) {

            console.log(err);

            setMssg('failed to create project \n please try again');

            //dispatch({type:ACTIONS.SETTOKEN,payload:'new token'});

            //router.push('/projectDashboard','/james');
        }
       

    }
    return (
        <div className="h-screen flex flex-col">
            <NavBar navItems={NavItems} position={position} />
            <div className="grid grid-cols-12 grid-rows-30 auto-rows-max flex-grow pt-20 gap-5 ">
                <div className="col-start-5 col-end-9  flex flex-col border-2 border-gray-400">
                    <div className="h-10 pt-5 flex justify-center items-center">

                        <span className="font-normal font-sans text-gray-400 text-lg">create project</span>
                    </div>

                    <form className="flex flex-col px-10 py-10 gap-5" ref={formRef}>

                        <label className="font-normal font-sans text-gray-400 text-1xl pl-2">project name</label>
                        
                        <input  required type="text" name="proj_name" placeholder="please enter the name of the new project" className="p-2 border-2 rounded-lg"/>
                        
                        <label className="font-normal font-sans text-gray-400 text-1xl pl-2">description</label>
                        
                        <input  required type="text" name="description" placeholder="write something descriptive of the project" className="p-2 border-2 rounded-lg"/>

                        {mssg && (

                            <div>
                                <span>
                                    {mssg}
                                </span>
                            </div>

                        )}
                        <input type="submit" value="submit" className="p-2 bg-green-300 text-1xl text-white font-sans font-normal hover:bg-green-200 cursor-pointer"/>

                    </form>

                </div>
              
               <div className="col-start-5 col-end-9 h-20 border-2 border-gray-400 flex justify-center items-center ">
                   <span className="font-serif font-normal text-1xl text-blue-400 hover:text-blue-300 cursor-pointer">Terms and conditions</span>
               </div>
            </div>
            <Footer/>
        </div>
    )
}

export default createProject
