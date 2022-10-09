import { useQuery } from "react-query";
import {fetchMeetings} from "../../QueryFetchers/fetcher";

const IndvMeetingDesc=({id,clicked,setClicked})=>{
    const {data,status}=useQuery(`meeting${id}`,fetchMeetings);
    return(
        {/** Rendering */}
    );
}

export default IndvMeetingDesc;