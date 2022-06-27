import "./meetingScheduleBody.css";

const meetingScheduleBody=({data,status})=>{
    if(status==="loading") return (<h1> Loading... </h1>);
    if(status==="error") return (<h1> Error... </h1>);
    return(
        <div className="meetingContainer">
        {
            data.map(index=>(
                <div className="invMeetingContainer" key={index.id}>
                    <h5> {index.name} </h5> 
                </div>
            ))
        }
        </div>
    );
}
export default meetingScheduleBody;