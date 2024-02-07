import { createContext,useReducer } from "react";
import menubarToggler from "./menubarToggle"
import PropType from 'prop-types'


const initialstate = {
    isMenubarOpen:false,
}

export const MenubarContext = createContext({})

export const MenubarProvider = ({children})=>{
    const [state,dispatch] = useReducer(menubarToggler,initialstate)

    const toggleMenubar = ()=>{
        dispatch({
            type:"TOGGLE_MENUBAR"
        })
    }


    return <MenubarContext.Provider value={{
        ...state,
        toggleMenubar
    }}>
        {children}
    </MenubarContext.Provider>
}

MenubarProvider.PropType = {
    children:PropType.node
}