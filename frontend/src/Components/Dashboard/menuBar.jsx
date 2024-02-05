import React from 'react'
import UserDP from "../../assets/images/person_one.jpg"
import WidgetsIcon from '@mui/icons-material/Widgets';
import "./Dashboard.scss"

const menuBar = () => {

    const navigationOptions = ['Dashboard','Budget','Transactions','Loans','Reports','Savings']
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
                        return <a className='nav-links' href="/" key={idx}><li>
                             <WidgetsIcon/>
                            <span> {item}</span>
                            </li>
                        </a>
                    })
                }

            </ul>

        </div>

    </div>
  )
}

export default menuBar