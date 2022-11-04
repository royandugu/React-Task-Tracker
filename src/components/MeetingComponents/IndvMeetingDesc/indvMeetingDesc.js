import { useQuery } from "react-query";
import {fetchIndvMeeting} from "../../QueryFetchers/fetcher";

const IndvMeetingDesc=({id})=>{
    
    const {data,status}=useQuery(`meeting ${id}`,()=>fetchIndvMeeting(id));
    
    if(status==="loading")/* return */ return <h5> Loading </h5> 
    else if(status==="error")/* return */ return <h5> Error </h5>
    else{
        
        //return
        return(
            <h5 className="bg-dark"> {data.desc} </h5>
        )
        
    }
    
}

export default IndvMeetingDesc;