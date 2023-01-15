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
        context.setSmlTaskDisplay(false);
        meetingBarRef.current.classList.add("selected");
        taskBarRef.current.classList.remove("selected");
    }
    const showTask=()=>{
        context.setSmlTaskDisplay(true);
        meetingBarRef.current.classList.remove("selected");
        taskBarRef.current.classList.add("selected");
    }
    return(
        <>
            <div ref={taskBarRef} className="taskBar selected" onClick={()=>showTask()}>
                <GiNotebook className="taskIcon"/>
                <p> Today Task  </p>
            </div>
            <div ref={meetingBarRef} className="meetingBar" onClick={()=>showMeeting()}>
                <IoIosPeople className="meetingIcon"/>
                <p> Meetings </p> 
            </div>
        
        </>        
    )
}
export default BottomBarNavigation;