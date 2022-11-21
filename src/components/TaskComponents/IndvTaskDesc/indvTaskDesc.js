import { useQuery } from "react-query";
import {fetchIndvTask} from "../../QueryFetchers/fetcher";

const IndvTaskDesc=({getId})=>{
    const id=getId();
    const {data,status}=useQuery(`task ${id}`,()=>fetchIndvTask(id));
    
    if(!id) return <h5> Not clicked yet </h5>;
    if(status==="loading")/*return*/ return <h5> Loading </h5>
    else if(status==="error")/*return*/ return <h5> Error </h5>
    else { 
        //return
        return(
            <h5> {data.desc} </h5>
        )
    }
}

export default IndvTaskDesc;