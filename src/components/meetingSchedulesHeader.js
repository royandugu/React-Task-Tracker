import {FaUser,FaCheckSquare} from "react-icons/fa";
import { useQuery } from "react-query";
import MeetingScheduleBody from "./meetingScheduleBody";
import "./meetingSchedulesHeader.css";



const MeetingSchedule=({fetcher,containerHeight})=>{
    const {data,status}=useQuery("Key",fetcher);
    return(
        <div className="meetingsHeaderContainer"> 
            <div className="iContainer">
                <FaCheckSquare className="text-primary"/><FaUser/> 
            </div>
            <div className="meetingBodyContainer">
                <h5 className="containerTitle"> Meeting Schedules </h5>
                <MeetingScheduleBody data={data} status={status} containerHeight={containerHeight}/>
            </div>
        </div>
    )
}
export default MeetingSchedule;