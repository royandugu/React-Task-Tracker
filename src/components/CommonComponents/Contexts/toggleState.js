import { useState } from "react";
import ToggleContext from "./toggleContext";

const ToggleState=(props)=>{
    const [clicked,setClicked]=useState(false);
    const [smlTaskDisplay,setSmlTaskDisplay]=useState(true);
    const [isTask,setIsTask]=useState(false);
    const [id,setId]=useState();

    const collection={
        clicked:clicked,
        setClicked:setClicked,
        smlTaskDisplay:smlTaskDisplay,
        setSmlTaskDisplay:setSmlTaskDisplay,
        id:id,
        setId:setId,
        isTask:isTask,
        setIsTask:setIsTask
    }

    return(
        <ToggleContext.Provider value={collection}>
            {props.children}
        </ToggleContext.Provider>
    )
}
export default ToggleState;