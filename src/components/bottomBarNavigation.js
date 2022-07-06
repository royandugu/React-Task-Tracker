import {Link} from "react-router-dom";

import "./bottomBarNavigation.css";
const BottomBarNavigation=()=>{
    return(
        <>
            <div className="taskBar">
                <Link to="/" className="bottomBarLink"> Today Task  </Link>
            </div>
            <div className="meetingBar">
                <Link to="/Meetings" className="bottomBarLink"> Meetings </Link> 
            </div>
        
        </>        
    )
}
export default BottomBarNavigation;