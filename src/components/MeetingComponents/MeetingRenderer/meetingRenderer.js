import { useContext } from "react";
import toggleContext from "../../CommonComponents/Contexts/toggleContext";

import "./meetingRenderer.css";

const MeetingRenderer=({stateData})=>{   
    const changeIdAndClick=(id)=>{
        context.setId(id);
        context.setClicked(true);
        context.setIsTask(false);
    }
    const context=useContext(toggleContext);

    //return
    return(

        <form>
            {(stateData.length>0)?stateData.map(index=>(
                <div onClick={()=>(index.id===context.id & context.clicked===true & context.isTask===false) ? context.setClicked(false) : changeIdAndClick(index.id)}
                className={`meetingContainerChild ${(index.semMenu==="MostImportant")?"mostImportant":(index.semMenu==="Important")?"important":"classic"}`} key={index.id}>
                    <div className="dateAndTime">
                        <p> {index.date} </p>
                        <p> {index.time} </p>
                    </div>
                    <h4 className="meetingTitle"> {index.name} </h4>
                    <p className="meetingDescription"> {index.desc} </p> 
                </div>
            )):<h1> No meeting for now </h1>}
        </form>
        
    )
}
export default MeetingRenderer;