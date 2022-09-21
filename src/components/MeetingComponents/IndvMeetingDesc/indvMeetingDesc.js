import { useQuery } from "react-query";
import {fetchMeetings} from "../../QueryFetchers/fetcher";

import "./indvMeetingDesc.css";

const IndvMeetingDesc=({id,clicked,setClick})=>{
    const {data,status}=useQuery(`indvMeeting ${id}`,fetchMeetings);
    
    const modelClsName=(clicked)?"indvMeetingContainer show":"indvMeetingContainer hide";
    
    let title;
    let description;

    if(status==="loading") {
        title="Loading";
        description="Loading";
    }
    else if(status==="error"){
        title="Error";
        description="Error";
    }
    else{
        const requiredMeeting=data.filter(index=>index.mid===id);
        title=requiredMeeting[0].title;
        description=requiredMeeting[0].description;
    }
    return (
        <div className={modelClsName}>
            <h5> {title} </h5>
            <h5> {description} </h5>
        </div>    
    )
}
export default IndvMeetingDesc