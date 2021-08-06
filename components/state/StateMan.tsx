import {createContext} from 'react';

//creating context

export const Context = createContext(null);
//init state

//state interface
export interface state {

    token:string | null;
    
    isAuth: boolean | null;
    
    apiUrl:string;

    services:services;

    currentService:string;

    proj_pub_id:string;

    proj_name:string;


}
//services interface

export interface services{

    frontend:service;
    
    backend:service;

}

//service interface

export interface service {
    
    name:string;
    
    active:boolean | null;
    
    live:boolean;

}

export const init:state = {

    token:null,
    
    isAuth: null,
    
    apiUrl:'http://swiftbase.com',

    proj_pub_id:null,

    proj_name:null,

    services:{

        frontend:{

            name:'Frontend',

            active:null,

            live:false

        },

        backend:{

            name:'Backend',

            active:null,

            live:false
        },

    },

    currentService:'splash'

}

//allowed actions

//allowed actions interface
export interface ACTIONS {

    SETTOKEN:string;

    SET_CURRENT_SERVICE:string;

    SET_PROJECT_INFO:string;
    
    SET_IS_AUTH:string;
    
    UPDATE_SERVICE_ACTIVE_STATUS:string;

}

export const ACTIONS:ACTIONS = {

    SETTOKEN:'setToken',

    SET_CURRENT_SERVICE:'setcurrentservice',

    SET_PROJECT_INFO:'SET_PROJECT_INFO',
    
    SET_IS_AUTH:'SET_IS_AUTH',
    
    UPDATE_SERVICE_ACTIVE_STATUS:' UPDATE_SERVICE_ACTIVE_STATUS'

}

//project interface

export interface project{
    proj_name:string;
    description:string;
    proj_pub_id:string;
    owner:string;
}

export type projList = Array<project>;
//reducer

export enum actionType {

    SETTOKEN='setToken',

    SET_CURRENT_SERVICE='setcurrentservice',

    SET_PROJECT_INFO='SET_PROJECT_INFO',
    
    SET_IS_AUTH='SET_IS_AUTH'
}


//action interface

export interface action {

    type:any;

    payload: any;
}

//SET_PROJECT_INFO action type

export interface SETPROJECTACTION {

    type:string;

    payload: project

}

//SET_IS_AUTH action type

//reducer function

export const reducer = (state:state,action:action):state => {

    switch(action.type){
        
        //add user token to state
        
        case ACTIONS.SETTOKEN:
            
            return {
                
                ...state,

                token:action.payload.token
                
            }
        
        //set the current service to be render
        
        case ACTIONS.SET_CURRENT_SERVICE:
            
            return {

                ...state,

                currentService:action.payload
            }
        
        
        //add project info to state
        
        case ACTIONS.SET_PROJECT_INFO:

            return {

                ...state,

                proj_pub_id:action.payload.proj_pub_id,

                proj_name:action.payload.proj_name


            }
       
       //check to see if user is authorizied
       
       case ACTIONS.SET_IS_AUTH:
          
         return {
         
         	...state,
         	
         	isAuth: action.payload.isAuth,
         	
         	token: action.payload.token
         	
         
         }
         
       
       //update services active status
       
       case ACTIONS.UPDATE_SERVICE_ACTIVE_STATUS:
       	
         return {
         
         	...state,
         	
         	services: {
         		
         		...state.services,
         		
         		frontend:{
         		
         			...state.services.frontend,
         			
         			active:action.payload
         		}
         	
         	}
         
         }
    }

}
