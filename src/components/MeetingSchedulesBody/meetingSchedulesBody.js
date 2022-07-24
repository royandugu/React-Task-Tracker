import QueryState from "../QueryState/queryState";
import "./meetingSchedulesBody.css";

const MeetingScheduleBody=({stateData,queryFetch,setData,status,containerHeight})=>{
    
    return(
        <div className="meetingContainer" style={{height:containerHeight-165}}>
            <QueryState stateData={stateData} queryFetch={queryFetch} setData={setData} status={status} deleter={deleter}/>
        </div>
    );
}
export default MeetingScheduleBody;