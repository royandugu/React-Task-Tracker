import { useContext } from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";

import toggleContext from "./Contexts/toggleContext";

import IndvTaskDesc from "../TaskComponents/IndvTaskDesc/indvTaskDesc";
import IndvMeetingDesc from "../MeetingComponents/IndvMeetingDesc/indvMeetingDesc";

import "./commonIndvDesc.css";

const CommonIndvDesc=()=>{ 
    const context=useContext(toggleContext);
    const containerClass=(context.clicked)?"modelBox show":"modelBox hide";
    
    
    //return
    return(
        <div className={containerClass}>
            <div className="closeButtonContainer bg-dark">
                <AiOutlineCloseCircle className="closeIcon" onClick={()=>context.setClicked(false)}/>
            </div>
            <div className="contentContainer">
                {(context.isTask)?<IndvTaskDesc id={context.id}/>:<IndvMeetingDesc id={context.id}/>}
            </div>
        </div>  
    )
}

export default CommonIndvDesc;