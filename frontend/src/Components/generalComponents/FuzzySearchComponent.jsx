import React,{useContext} from "react";
import UserSearchChatContext from '../../utils/userSearchChatContext/userSearchCharContext'

const FuzzySearchComponent = ({id,item}) => {

    const {userSearchChat,setuserSearchChat}  = useContext(UserSearchChatContext)

    const OpenConvo=(e)=>{
        console.log('openconvo',e.currentTarget.id)
       setuserSearchChat(e.currentTarget.id)
    }



  return (
    <div id={id} onClick={OpenConvo}>
      <div></div>
      <div>
        <div>
          <h3>{item.firstName + " " + item.lastName}</h3>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.3)",
              fontStyle: "italic",
              fontSize: "0.8rem",
            }}
          >
            {item._id}
          </p>
        </div>
        <span>{item.diffScore ? 1 - item.diffScore : ""}</span>
      </div>
    </div>
  );
};

export default FuzzySearchComponent;
