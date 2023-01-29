import { FaCheckSquare, FaUser } from "react-icons/fa"

import "./userInformation.css";

const UserInformation=()=>{
    //Fetch all info from database
    return(
        <div className="iContainer">
            <FaCheckSquare className="text-primary"/><FaUser/> 
        </div>    
    )
}

export default UserInformation;