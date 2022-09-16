import { useState } from "react";

import IndvMeetingDesc from "../IndvMeetingDesc/indvMeetingDesc";

import "./meetingRenderer.css";

const MeetingRenderer=({stateData})=>{    
    const [clicked, setClick]=useState(false);

    return(
        <>
            {(stateData.length>0)?stateData.map(index=>(
                <div onClick={
                    ()=>{
                        clicked?setClick(false):setClick(true);
                    }
                } className={`meetingContainerChild ${(index.semMenu==="MostImportant")?"mostImportant":(index.semMenu==="Important")?"important":"classic"}`} key={index.id}>
                    <div className="dateAndTime">
                        <p> {index.date} </p>
                        <p> {index.time} </p>
                    </div>
                    <h4 className="meetingTitle"> {index.name} </h4>
                    <p className="meetingDescription"> {index.description} </p> 
                </div>
            )):<h1> No meeting for now </h1>}
            <IndvMeetingDesc clicked={clicked} setClick={setClick} stateData={stateData}/>
        </>
    )
}
export default MeetingRenderer;