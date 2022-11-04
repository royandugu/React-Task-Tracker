import { useState } from "react";
import {FaUser,FaCheckSquare} from "react-icons/fa";
import {AiOutlineMenuUnfold} from "react-icons/ai"; 

import MeetingScheduleBody from "../MeetingSchedulesBody/meetingSchedulesBody";
import RenderOptionPanel from "../RenderOptions/renderOptionPanel";

import "./meetingSchedulesHeader.css";

const MeetingScheduleHeader=({containerHeight})=>{
    
    const [hasClicked,setClicked]=useState(false);

    //return
    return(
        <> 
            <div className="iContainer">
                <FaCheckSquare className="text-primary"/><FaUser/> 
            </div>
            <div className="meetingBodyContainer">
                <div className="titleFlex">
                    <h5 className="containerTitle"> Meeting Schedules </h5>
                    <AiOutlineMenuUnfold style={{marginLeft:10,cursor:"pointer"}} onClick={()=>(hasClicked)?setClicked(false):setClicked(true)}/>
                    <RenderOptionPanel hasClicked={hasClicked}/> 
                </div>
                <MeetingScheduleBody containerHeight={containerHeight}/>
            </div>
        </>
    )

}

export default MeetingScheduleHeader;