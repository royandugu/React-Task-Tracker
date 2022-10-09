import { useQuery } from "react-query";
import {fetchTasks} from "../../QueryFetchers/fetcher";

import "./indvTaskDesc.css";


const IndvTaskDesc=({id})=>{
    const {data,status}=useQuery(`task${id}`,fetchTasks);
    return(
        {/** Render */}   
    );
}

export default IndvTaskDesc;