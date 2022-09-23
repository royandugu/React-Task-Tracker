import { useQuery } from "react-query";
import {fetchMeetings} from "../../QueryFetchers/fetcher";

import CommonIndvDesc from "../../CommonComponents/commonIndvDesc";

const IndvMeetingDesc=({id,clicked,setClicked})=>{
    const {data,status}=useQuery(`meeting${id}`,fetchMeetings);
    return(
        <CommonIndvDesc id={id} clicked={clicked} setClicked={setClicked} data={data} status={status} isTask={false}/>   
    );
}

export default IndvMeetingDesc;