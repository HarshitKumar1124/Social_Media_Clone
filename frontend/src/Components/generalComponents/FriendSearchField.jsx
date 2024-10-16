import React, { useState,useEffect } from 'react'
import "./GeneralComponents.scss"
import SearchIcon from "../../assets/icons/search.svg"
// import {useSelector} from 'react-redux'

/*using to perform fuzzy search */
// import fuse from 'fuse.js'
// import FuzzySearchComponent from './FuzzySearchComponent.jsx'


const fuseOptions={
    includeScore:true,
    keys:["firstName","lastName"]
}


const FriendSearchField = () => {

    // const [visible,setVisible] = useState(false)
    // const {getUserStatus,users} = useSelector(state => state.getAllUsers);
    // const {user} = useSelector(state=>state.User)

    // const [UserList,setUserList] = useState(users)
    // const [pattern,setPattern] = useState("")



    // const fuseSearch = new fuse(users,{...fuseOptions,minMatchCharLength:(pattern!=""?pattern.length:1)})

    
    // const fuzzySearch=(e)=>{
    //     setPattern(e.target.value)

    // }

    // useEffect(() => {

    //     if(pattern!=""){

    //     const result = fuseSearch.search(pattern)
        
    //     const finallist = result.map((element)=> {
    //         return {...element.item,diffScore:element.score};
    //     })
       
    //      console.log(finallist)
    //     setUserList(finallist);
    // }
    
       
       
     
    // }, [pattern])

    // useEffect(() => {
     
    //     setUserList((users!=null && users!=undefined)?users:[])
    // }, [users])
    
    


    // const DisplayFilterList =()=>{
    //     setVisible(true);
    // }

    // const HideFilterList =(e)=>{
        
    //    setTimeout(()=>{
    //     setVisible(false);
    //    },100)
    // }


    
  return (
    <div className="friend-search-field">
        <label for="search-friend-field">
        <img src={SearchIcon}/>
        </label>
        
        {/* <input id="search-friend-field" type="text" placeholder='Search user here ...' autoComplete='off' onFocus={DisplayFilterList} onBlur={HideFilterList} onChange={fuzzySearch} />  */}
        <input id="search-friend-field" type="text" placeholder='Search user here ...' autoComplete='off'/>
        {/* onBlur={HideFilterList} */}
        {/* <div className='filter-list' style={{display:visible?"block":"none"}}>
            {
                getUserStatus && UserList!=undefined ? UserList.map((item,idx)=>{

                    if(idx>5 || item._id===user._id)
                    return <></>

                   
                    return <FuzzySearchComponent key={idx} id={item._id} item={item} />
                    
                   
                }):<></>
            }

           
            
        </div> */}
    </div>
  )
}

export default FriendSearchField