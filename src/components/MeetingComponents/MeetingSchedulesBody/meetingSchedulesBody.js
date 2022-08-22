import MeetingQueryState from "../MeetingQueryState/meetingQueryState";
import "./meetingSchedulesBody.css";

const MeetingScheduleBody=({stateData,queryFetch,setData,status,containerHeight,deleter})=>{
    return(
        <div className="meetingContainer" style={{height:containerHeight-165}}>
            {/* First to pass through a query state for the meetings*/}
            <MeetingQueryState stateData={stateData} status={status}/>
        </div>
    );
}
export default MeetingScheduleBody;