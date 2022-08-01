import QueryState from "../QueryState/queryState";
import "./meetingSchedulesBody.css";

const MeetingScheduleBody=({stateData,queryFetch,setData,status,containerHeight,deleter,isTask})=>{
    return(
        <div className="meetingContainer" style={{height:containerHeight-165}}>
            <QueryState stateData={stateData} queryFetch={queryFetch} setData={setData} status={status} deleter={deleter} isTask={isTask}/>
        </div>
    );
}
export default MeetingScheduleBody;