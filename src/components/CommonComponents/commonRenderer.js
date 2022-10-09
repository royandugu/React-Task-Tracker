import {useState} from "react"

import TRoutes from "../TaskComponents/TaskRoutes/tRoutes";
import MeetingRenderer from "../MeetingComponents/MeetingRenderer/meetingRenderer";

const CommonRenderer=({stateData,setData,deleter,isTask})=>{
    const [clicked,setClicked]=useState(false);
    const [id,setId]=useState(5);

    const changeIdAndClick=(id)=>{
        setId(id);
        setClicked(true);
    }

    if(isTask){
        return <TRoutes stateData={stateData} setData={setData} deleter={deleter} clicked={clicked} setClicked={setClicked} id={id}  changeIdAndClick={changeIdAndClick}/>
    }
    else{
        return <MeetingRenderer stateData={stateData} clicked={clicked} setClicked={setClicked} id={id} setId={setId}  changeIdAndClick={changeIdAndClick}/>
    }
}
export default CommonRenderer;