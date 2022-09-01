import { useState } from "react";
import {FaUser,FaCheckSquare} from "react-icons/fa";
import { useQuery } from "react-query";
import {AiOutlineMenuUnfold} from "react-icons/ai"; 

import MeetingScheduleBody from "../MeetingSchedulesBody/meetingSchedulesBody";
import RenderOptionPanel from "../RenderOptions/renderOptionPanel";

import "./meetingSchedulesHeader.css";


const MeetingScheduleHeader=({fetcher,containerHeight})=>{
    const {data,status}=useQuery("Key",fetcher);
    const [meetingData,setMeetingData]=useState([]);
    const [hasClicked,setClicked]=useState(false);

    const deleter=()=>{
        //Delete function for meetings
    } 

    return(
        <div className="meetingsHeaderContainer"> 
            <div className="iContainer">
                <FaCheckSquare className="text-primary"/><FaUser/> 
            </div>
            <div className="meetingBodyContainer">
                <div className="titleFlex">
                    <h5 className="containerTitle"> Meeting Schedules </h5>
                    <AiOutlineMenuUnfold style={{marginLeft:10,cursor:"pointer"}} onClick={()=>(hasClicked)?setClicked(false):setClicked(true)}/>
                    <RenderOptionPanel hasClicked={hasClicked}/> 
                </div>
                <MeetingScheduleBody stateData={meetingData} queryFetch={data} setData={setMeetingData} status={status} containerHeight={containerHeight} deleter={deleter}/>
            </div>
        </div>
    )
}
export default MeetingScheduleHeader;