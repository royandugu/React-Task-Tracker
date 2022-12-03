import { useContext } from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";

import IndvTaskDesc from "../TaskComponents/IndvTaskDesc/indvTaskDesc";
import IndvMeetingDesc from "../MeetingComponents/IndvMeetingDesc/indvMeetingDesc";
import ToggleState from "./Contexts/toggleState";

import "./commonIndvDesc.css";

const CommonIndvDesc=()=>{
    const valueCollectives=useContext(ToggleState);
    const modelClsName=(valueCollectives.clicked)?"modelBox show":"modelBox hide";
   
    //return
    return (
        <ToggleState>
            <div className={modelClsName}>
                <div className="closeButtonContainer bg-dark">
                    <AiOutlineCloseCircle className="closeIcon" onClick={()=>console.log("Here")}/>
                </div>
                <div className="contentContainer">
                    {(valueCollectives.isTask) ? <IndvTaskDesc id={valueCollectives.id}/> : <IndvMeetingDesc id={valueCollectives.id}/>}
                </div>
            </div>
        </ToggleState>
    )
}

export default CommonIndvDesc;