import "./meetingRenderer.css";

const MeetingRenderer=({stateData})=>{    
    return(
        <>
            {(stateData.length>0)?stateData.map(index=>(
                <div className={`meetingContainerChild ${(index.semMenu==="MostImportant")?"mostImportant":(index.semMenu==="Important")?"important":"classic"}`} key={index.id}>
                    <div className="dateAndTime">
                        <p> {index.date} </p>
                        <p> {index.time} </p>
                    </div>
                    <h4 className="meetingTitle"> {index.name} </h4>
                    <p className="meetingDescription"> {index.description} </p> 
                </div>
            )):<h1> No meeting for now </h1>}
        </>
    )
}
export default MeetingRenderer;