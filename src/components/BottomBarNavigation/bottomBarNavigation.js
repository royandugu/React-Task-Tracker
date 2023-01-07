import { useRef,useContext } from "react";
import {GiNotebook} from "react-icons/gi";
import {IoIosPeople} from "react-icons/io";

import toggleContext from "../CommonComponents/Contexts/toggleContext";

import "./bottomBarNavigation.css";

const BottomBarNavigation=()=>{
    const meetingBarRef=useRef(null);
    const taskBarRef=useRef(null);
    const context=useContext(toggleContext);
    //When development starts in mobile mode, check if the lack of useEffect creates an issue
    const showMeeting=()=>{
        (context.headerTopRef.current).style.display="none";
        meetingBarRef.current.classList.add("selected");
        taskBarRef.current.classList.remove("selected");
    }
    const showTask=()=>{
        meetingBarRef.current.classList.remove("selected");
        taskBarRef.current.classList.add("selected");
    }
    return(
        <>
            <div ref={meetingBarRef} className="taskBar selected" onClick={()=>showMeeting()}>
                <GiNotebook className="taskIcon"/>
                <p> Today Task  </p>
            </div>
            <div ref={taskBarRef} className="meetingBar" onClick={()=>showTask()}>
                <IoIosPeople className="meetingIcon"/>
                <p> Meetings </p> 
            </div>
        
        </>        
    )
}
export default BottomBarNavigation;