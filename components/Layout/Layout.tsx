import React, { ReactElement,useReducer } from 'react'
import {Context,reducer,init} from '../state/StateMan';

function Layout({children}):ReactElement {

    const [state,dispatch] =  useReducer(reducer, init);
    return (
        <Context.Provider value={{state,dispatch}}>
            {children}
        </Context.Provider>
    )
}

export default Layout
