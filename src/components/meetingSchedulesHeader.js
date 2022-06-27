import {FaUser,FaCheckSquare} from "react-icons/fa";
import { useQuery } from "react-query";
import MeetingScheduleBody from "./meetingScheduleBody";
import "./meetingSchedulesHeader.css";



const MeetingSchedule=({fetcher})=>{
    const {data,status}=useQuery("Key",fetcher);
    return(
        <div className="meetingsHeaderContainer"> 
            <div className="iContainer">
                <FaCheckSquare className="text-primary"/><FaUser/> 
            </div>
            <div className="meetingBodyContainer">
                <h5> Meeting Schedule </h5>
                <MeetingScheduleBody data={data} status={status}/>
            </div>
        </div>
    )
}
export default MeetingSchedule;