import { useState } from "react";

import IndvMeetingDesc from "../IndvMeetingDesc/indvMeetingDesc";

import "./meetingRenderer.css";

const MeetingRenderer=({stateData})=>{    
    const [clicked, setClick]=useState(false);
    const [id,setId]=useState(2);

    const changeIdAndClick=(id)=>{
        setId(id);
        setClick(true);
    }

    return(
        <>
            {(stateData.length>0)?stateData.map(index=>(
                <div onClick={
                    ()=>{
                        clicked?setClick(false):setClick(true);
                        setId(index.id);
                        (index.id===id & clicked===true) ? setClick(false): changeIdAndClick(index.id)
                    }
                } className={`meetingContainerChild ${(index.semMenu==="MostImportant")?"mostImportant":(index.semMenu==="Important")?"important":"classic"}`} key={index.id}>
                    <div className="dateAndTime">
                        <p> {index.date} </p>
                        <p> {index.time} </p>
                    </div>
                    <h4 className="meetingTitle"> {index.name} </h4>
                    <p className="meetingDescription"> {index.desc} </p> 
                </div>
            )):<h1> No meeting for now </h1>}
            <IndvMeetingDesc id={id} clicked={clicked} setClick={setClick}/>
        </>
    )
}
export default MeetingRenderer;