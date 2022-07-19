import {GiNotebook} from "react-icons/gi";
import {IoIosPeople} from "react-icons/io";
import "./bottomBarNavigation.css";
const BottomBarNavigation=()=>{
    const showMeeting=()=>{
        document.querySelector(".meetingBar").classList.add("selected");
        document.querySelector(".taskBar").classList.remove("selected");
    }
    const showTask=()=>{
        document.querySelector(".meetingBar").classList.remove("selected");
        document.querySelector(".taskBar").classList.add("selected");
    }
    return(
        <>
            <div className="taskBar selected" onClick={showTask}>
                <GiNotebook className="taskIcon"/>
                <p> Today Task  </p>
            </div>
            <div className="meetingBar" onClick={showMeeting}>
                <IoIosPeople className="meetingIcon"/>
                <p> Meetings </p> 
            </div>
        
        </>        
    )
}
export default BottomBarNavigation;