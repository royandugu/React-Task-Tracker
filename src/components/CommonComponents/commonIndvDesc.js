import {useState} from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";

import IndvTaskDesc from "../TaskComponents/IndvTaskDesc/indvTaskDesc";
import IndvMeetingDesc from "../MeetingComponents/IndvMeetingDesc/indvMeetingDesc";

import "./commonIndvDesc.css";

const CommonIndvDesc=()=>{

    //Use context hook?
    const [isTask,setIsTask]=useState(false);
    const [clicked,setClicked]=useState(false);
    const [id,setId]=useState();
   
    const modelClsName=(clicked)?"modelBox show":"modelBox hide";
   
    //return
    return (

        <div className={modelClsName}>
            <div className="closeButtonContainer bg-dark">
                <AiOutlineCloseCircle className="closeIcon" onClick={()=>setClicked(false)}/>
            </div>
            <div className="contentContainer">
                {(isTask) ? <IndvTaskDesc id={id}/> : <IndvMeetingDesc id={id}/>}
            </div>
        </div>
        
    )
}

export default CommonIndvDesc;