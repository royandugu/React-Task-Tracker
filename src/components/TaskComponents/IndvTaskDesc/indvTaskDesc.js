import { useQuery } from "react-query";
import {fetchTasks} from "../../QueryFetchers/fetcher";

import CommonIndvDesc from "../../CommonComponents/commonIndvDesc";
import "./indvTaskDesc.css";


const IndvTaskDesc=({id,clicked,setClicked})=>{
    const {data,status}=useQuery(`task${id}`,fetchTasks);
    return(
        <CommonIndvDesc id={id} clicked={clicked} setClicked={setClicked} data={data} status={status} isTask={true}/>   
    );
}

export default IndvTaskDesc;