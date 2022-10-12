import {AiOutlineCloseCircle} from "react-icons/ai";

import IndvTaskDesc from "../TaskComponents/IndvTaskDesc/indvTaskDesc";
import IndvMeetingDesc from "../MeetingComponents/IndvMeetingDesc/indvMeetingDesc";

import "../TaskComponents/IndvTaskDesc/indvTaskDesc.css"

const CommonIndvDesc=({id,clicked,setClicked,isTask})=>{
    const modelClsName=(clicked)?"modelBox show":"modelBox hide";
    
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