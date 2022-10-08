import {useState} from "react"

import TRenderer from "../TaskComponents/TaskRenderer/tRenderer"
import MeetingRenderer from "../MeetingComponents/MeetingRenderer/meetingRenderer";

const CommonRenderer=({stateData,customData,setData,setCustomTask,deleter,isTask})=>{
    const [clicked,setClicked]=useState(false);
    const [id,setId]=useState(5);

    const changeIdAndClick=(id)=>{
        setId(id);
        setClicked(true);
    }

    if(isTask){
        return <TRenderer clicked={clicked} setClicked={setClicked} id={id}  changeIdAndClick={changeIdAndClick}/>
    }
    else{
        return <MeetingRenderer clicked={clicked} setClicked={setClicked} id={id}  changeIdAndClick={changeIdAndClick}/>
    }
}
export default CommonRenderer;