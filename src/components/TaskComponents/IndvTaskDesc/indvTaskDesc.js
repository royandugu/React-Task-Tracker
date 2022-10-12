import { useQuery } from "react-query";
import {fetchTasks} from "../../QueryFetchers/fetcher";


const IndvTaskDesc=({id})=>{
    const {data,status}=useQuery(`task ${id}`,fetchTasks);
    if(status==="loading") return <h5> Loading </h5>
    else if(status==="error") return <h5> Error </h5>
    else { 
        //Later to be done by backend
        return(
            <h5> This is an individual task </h5>
        )
    }
}

export default IndvTaskDesc;