import { useState } from "react";
import {ToggleContext} from "./toggleContext";

const ToggleState=(props)=>{
    const [clicked,setClick]=useState(false);
    const [id,setId]=useState();

    const collection={
        clicked:clicked,
        setClick:setClick,
        id:id,
        setId:setId
    }

    return(
        <ToggleContext.Provider value={collection}>
            {props.children}
        </ToggleContext.Provider>
    )
}
export default ToggleState;