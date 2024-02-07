import React, { useState } from 'react'
import UserDP from "../../assets/images/person_one.jpg"
import WidgetsIcon from '@mui/icons-material/Widgets';
import "./Dashboard.scss"

const MenuBar = () => {

   const [activeIdx,setActive] = useState(1)

    
    const HandleActive=(idx)=>{

       
        setActive(idx+1);

    }

    const navigationOptions = [{
        icons:'/icons/home.svg',
        text:"Dashboard"
    },
    {
        icons:"/icons/budget.svg",
        text:'Budget'
    },
    {
        icons:"/icons/bills.svg",
        text:'Transaction'
    },
    {
        icons:"/icons/wealth.svg",
        text:'Loans'
    },
    {
        icons:"/icons/report.svg",
        text:'Reports'
    },
    {
        icons:"/icons/wallet.svg",
        text:'Savings'
    }]

   




  return (
    <div className='menubar'>
        <div className='user-info'>
            <div className='user-image-box'>
                <img src={UserDP} alt="username" title="username"/>
           </div>
           <span>user-name</span>
        </div>
        <div className='navigation'>
            <ul className='navigation-list'>

                {
                    navigationOptions.map((item,idx)=>{
                        return <li className={`nav-links ${idx+1==activeIdx?'nav-links-active':null}`} onClick={()=>HandleActive(idx)} key={idx}><a >
                             <img src={item.icons} alt={item.text} title={item.text}/>
                            <span> {item.text}</span>
                            </a>
                        </li>
                    })
                }

            </ul>

        </div>

    </div>
  )
}

export default MenuBar