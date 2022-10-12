import { useQuery } from "react-query";
import {fetchMeetings} from "../../QueryFetchers/fetcher";

const IndvMeetingDesc=({id})=>{
    const {data,status}=useQuery(`meeting ${id}`,fetchMeetings);
    if(status==="loading") return <h5> Loading </h5> 
    else if(status==="error") return <h5> Error </h5>
    else{
        //Demo line later to be handled by backend
        return(
            <h5 className="bg-dark"> This is individual meeting desc </h5>
        );
    }
}

export default IndvMeetingDesc;