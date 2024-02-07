import React from 'react'
import './CommunicateMenu.scss'
import { motion } from "framer-motion";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import WidgetsIcon from '@mui/icons-material/Widgets';





const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};




export const CommunicateMenu = () => {

  const Navigate = useNavigate()



  const GoToPage=(path)=>{
  
    if(path!='logout')
    Navigate(`/user/${path}`)
  else
  {
    //logout
    Navigate('/')
  }
  
  }
  

  const Options = [{
    title:"dashboard",
    icons:<WidgetsIcon/>,
    path:"/user/dashboard",
   
  },
  {
    title:"requests",
    icons:<Diversity3Icon/>,
    path:"/user/requests",
   
  },
  {
    title:"messages",
    icons:<MarkChatUnreadIcon/>,
    path:"/user/messages",
   
  },
  {
    title:"logout",
    icons:<ExitToAppIcon/>,
    path:"/",
    
  }]





  return  <motion.ul
  className="container"
  variants={container}
  initial="hidden"
  animate="visible"
  drag
  title='Click and Drag'
  dragConstraints={{
    top: -570,
    right: 0,
    bottom: 0,
    left: -1250,
}}
 
  dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
  dragElastic={0.5}
  whileTap={{ cursor: "grabbing" }}
 
>
  {/* <Button><DragIndicatorIcon/></Button> */}
  {Options.map((item,index) => (
    <motion.li 
    onClick={()=>GoToPage(item.title)}
    whileHover={{scale:1.2,cursor:"pointer"}}
    title={item.title}
    key={index} className="item" variants={item} >{item.icons}</motion.li>
  ))}
</motion.ul>

}

export default CommunicateMenu