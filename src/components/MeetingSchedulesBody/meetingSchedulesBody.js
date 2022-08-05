import QueryState from "../QueryState/TaskQueryState/queryState";
import "./meetingSchedulesBody.css";

const MeetingScheduleBody=({stateData,queryFetch,setData,status,containerHeight,deleter})=>{
    return(
        <div className="meetingContainer" style={{height:containerHeight-165}}>
            <QueryState stateData={stateData} queryFetch={queryFetch} setData={setData} status={status} deleter={deleter} isTask={false}/>
        </div>
    );
}
export default MeetingScheduleBody;