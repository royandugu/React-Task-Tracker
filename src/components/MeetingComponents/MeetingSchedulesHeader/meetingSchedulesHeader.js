import { useState } from "react";
import {FaUser,FaCheckSquare} from "react-icons/fa";
import { useQuery } from "react-query";
import MeetingScheduleBody from "../MeetingSchedulesBody/meetingSchedulesBody";
import "./meetingSchedulesHeader.css";



const MeetingScheduleHeader=({fetcher,containerHeight})=>{
    const {data,status}=useQuery("Key",fetcher);
    const [meetingData,setMeetingData]=useState([]);
    const deleter=()=>{
        //Delete function for meetings
    }    
    return(
        <div className="meetingsHeaderContainer"> 
            <div className="iContainer">
                <FaCheckSquare className="text-primary"/><FaUser/> 
            </div>
            <div className="meetingBodyContainer">
                <h5 className="containerTitle"> Meeting Schedules </h5>
                <MeetingScheduleBody stateData={meetingData} queryFetch={data} setData={setMeetingData} status={status} containerHeight={containerHeight} deleter={deleter}/>
            </div>
        </div>
    )
}
export default MeetingScheduleHeader;