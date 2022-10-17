import { useQuery } from "react-query";
import {fetchIndvTask} from "../../QueryFetchers/fetcher";


const IndvTaskDesc=({id})=>{
    const {data,status}=useQuery(`task ${id}`,()=>fetchIndvTask(id));
    if(status==="loading") return <h5> Loading </h5>
    else if(status==="error") return <h5> Error </h5>
    else { 
        return(
            <h5> {data.desc} </h5>
        )
    }
}

export default IndvTaskDesc;