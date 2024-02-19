import React, { useState,useEffect } from 'react'
import "./GeneralComponents.scss"
import SearchIcon from "../../assets/icons/search.svg"
import {useSelector} from 'react-redux'

/*using to perform fuzzy search */
import fuse from 'fuse.js'

const fuseOptions={
    includeScore:true,
    keys:["firstName","lastName"]
}


const FriendSearchField = () => {

    const [visible,setVisible] = useState(false)
    const {getUserStatus,users} = useSelector(state => state.getAllUsers);

    const [UserList,setUserList] = useState(users)
    const [pattern,setPattern] = useState("")



    const fuseSearch = new fuse(users,{...fuseOptions,minMatchCharLength:(pattern!=""?pattern.length:1)})

    
    const fuzzySearch=(e)=>{
        setPattern(e.target.value)

    }

    useEffect(() => {

        if(pattern!=""){

        const result = fuseSearch.search(pattern)
        
        const finallist = result.map((element)=> {
            return {...element.item,diffScore:element.score};
        })
       
         console.log(finallist)
        setUserList(finallist);
    }
    else
    setUserList(users)
       
       
     
    }, [pattern])
    


    const DisplayFilterList =()=>{
        setVisible(true);
    }

    const HideFilterList =()=>{
        setVisible(false);
    }


  return (
    <div className="friend-search-field">
        <label for="search-friend-field">
        <img src={SearchIcon}/>
        </label>
        
        <input id="search-friend-field" type="text" placeholder='Search user here ...' onFocus={DisplayFilterList} onBlur={HideFilterList} onChange={fuzzySearch}/>
        <div className='filter-list' style={{display:visible?"block":"none"}}>
            {
                getUserStatus && UserList!=undefined ? UserList.map((item,idx)=>{

                    if(idx>7)
                    return <></>
                    return <div key={idx}>
                               <div></div>
                                <div>
                                    <div>
                                    <h3>{item.firstName + " " + item.lastName }</h3>
                                    <p style={{color:"rgba(255, 255, 255, 0.3)",fontStyle:"italic",fontSize:"0.8rem"}}>{item._id}</p>
                                    </div>
                                    <span>{item.diffScore?1-item.diffScore:""}</span>
                                </div>
                                
                            </div>
                }):<></>
            }

           
            
        </div>
    </div>
  )
}

export default FriendSearchField