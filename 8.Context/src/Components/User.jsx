import React ,{useContext} from "react";
import userContext from "../Context/UserContext";

function User(){
    const {user} = useContext(userContext);
      if(!user){
        return(<>
            <h1>Plz Login...</h1>
        </>)        
      }
      else{
        return(
                 <>
                 <h1>Welcome Here!{user.userName}</h1>
                 </>
                )
      }
}

export default User;