import {useState} from "react"

import TRoutes from "../TaskComponents/TaskRoutes/tRoutes";
import MeetingRenderer from "../MeetingComponents/MeetingRenderer/meetingRenderer";

const CommonRenderer=({stateData,setData,deleter,isTask})=>{
    
    const [clicked,setClicked]=useState(false);
    const [id,setId]=useState(5);

    //return
    if(isTask){
        return <TRoutes stateData={stateData} setId={setId} setData={setData} deleter={deleter} clicked={clicked} setClicked={setClicked} id={id} />
    }
    else{
        return <MeetingRenderer stateData={stateData} setId={setId} clicked={clicked} setClicked={setClicked} id={id}/>
    }
}
export default CommonRenderer;