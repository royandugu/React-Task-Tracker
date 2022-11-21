import {AiOutlineCloseCircle} from "react-icons/ai";

import {getClicked, setClicked, getIsTask, getId} from "../GlobalComponents/indvDisplayParams";

import IndvTaskDesc from "../TaskComponents/IndvTaskDesc/indvTaskDesc";
import IndvMeetingDesc from "../MeetingComponents/IndvMeetingDesc/indvMeetingDesc";

import "./commonIndvDesc.css";

const CommonIndvDesc=()=>{
    
    const modelClsName=(getClicked)?"modelBox show":"modelBox hide";
    
    //return
    return (

        <div className={modelClsName}>
            <div className="closeButtonContainer bg-dark">
                <AiOutlineCloseCircle className="closeIcon" onClick={()=>setClicked(false)}/>
            </div>
            <div className="contentContainer">
                {(getIsTask) ? <IndvTaskDesc getId={getId}/> : <IndvMeetingDesc getId={getId}/>}
            </div>
        </div>
        
    )
}

export default CommonIndvDesc;