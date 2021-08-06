import React,{useEffect,useContext} from 'react';
import {Context,ACTIONS} from '../components/state/StateMan';
import Footer from '../components/Layout/Footer';
import NavBar,{navItemType,positionType} from '../components/Layout/NavBar';
import SideNavBar from '../components/Layout/SideNavBar';
import Body from '../components/Layout/Body';
//navItems
const NavItems:Array<navItemType> = [

    {name:'Documentation',bgcolor:'gray',path:'/',hoverBg:'gray',textColor:'gray'},
  
    {name:'pricing',bgcolor:'gray',path:'/',hoverBg:'gray',textColor:'gray'},
    
    {name:'logout',bgcolor:'red',path:'/createProject',hoverBg:'green',textColor:'gray'}
  
  
  
  ];
  
//position of nav items
const position:positionType = {
  
    colStart:7,
  
    colCount:3
  
}

//dashboard component

function projectDashboard():React.ReactElement {
    
    const {state} = useContext(Context);

    useEffect(() => {

        console.log(state);

    } , [])
    return (
        <div className="h-screen flex flex-col">
            <NavBar navItems={NavItems} position={position} />
            <div className="flex-grow  grid grid-cols-12 grid-rows-1 auto-rows-max">
                <SideNavBar />
                <Body />

            </div>
            <Footer />

        </div>
    )
}

export default projectDashboard
