// menubar-Toggle-reducer


const menubarToggle = (state,action) =>{
    if(action.type==='TOGGLE_MENUBAR')
    return {
            ...state,
            isMenubarOpen: !isMenubarOpen
        }

}

throw new Error(`No matching ${action.type} action type`)

export default menubarToggle;