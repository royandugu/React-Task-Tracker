import {AiOutlineCloseCircle} from "react-icons/ai";

import ActualContent from "./actualContent";
import ToggleState from "./Contexts/toggleState";

import "./commonIndvDesc.css";

const CommonIndvDesc=()=>{
    //return
    return (
        <ToggleState>
            <div>
                <div className="closeButtonContainer bg-dark">
                    <AiOutlineCloseCircle className="closeIcon" onClick={()=>console.log("Here")}/>
                </div>
                <div className="contentContainer">
                    <ActualContent/>
                   
                </div>
            </div>
        </ToggleState>
    )
}

export default CommonIndvDesc;