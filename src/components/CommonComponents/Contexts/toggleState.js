import { useState,useRef } from "react";
import ToggleContext from "./toggleContext";

const ToggleState=(props)=>{
    const [clicked,setClicked]=useState(false);
    const [isTask,setIsTask]=useState(false);
    const [id,setId]=useState();
    const headerTopRef=useRef("null");

    const collection={
        clicked:clicked,
        setClicked:setClicked,
        id:id,
        setId:setId,
        isTask:isTask,
        setIsTask:setIsTask,
        headerTopRef:headerTopRef
    }

    return(
        <ToggleContext.Provider value={collection}>
            {props.children}
        </ToggleContext.Provider>
    )
}
export default ToggleState;