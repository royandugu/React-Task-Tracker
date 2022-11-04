import {useState} from "react";
import {useQuery} from "react-query";

import {fetchMeetings} from "../../QueryFetchers/fetcher";

import QueryState from "../../QueryState/queryState";

const MeetingScheduleBody=({containerHeight})=>{
    
    const {data,status}=useQuery("Key",fetchMeetings);
    const [meetingData,setMeetingData]=useState([]);
    
    //return
    return(
        
        <div className="meetingContainer" style={{height:containerHeight-165,borderTop:"1px solid rgb(216, 216, 216)",overflowY:"scroll",padding:10}}>
            <QueryState stateData={meetingData} queryFetch={data} setData={setMeetingData} status={status} isTask={false}/>
        </div>
    
    )
}

export default MeetingScheduleBody;