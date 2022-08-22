const MeetingRenderer=({stateData})=>{
    
    return(
        <>
            {(stateData.length>0)?stateData.map(index=>(
                <h1> {index.name} </h1> 
            )):<h1> No meeting for now </h1>}
        </>
    )
}
export default MeetingRenderer;