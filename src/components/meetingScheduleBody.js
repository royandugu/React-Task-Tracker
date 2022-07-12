import "./meetingScheduleBody.css";

const MeetingScheduleBody=({data,status,containerHeight})=>{
    let containerCls;
    let textCls;
    const assignCls=(clsContainer,clsText)=>{
        containerCls=clsContainer;
        textCls=clsText;
    }


    if(status==="loading") return (<h1> Loading... </h1>);
    if(status==="error") return (<h1> Error... </h1>);
    return(
        <div className="meetingContainer" style={{height:containerHeight-165}}>
        {
            data.map(index=>(
                    <div key={index.id}>
                        {(index.semMenu==="Important")?assignCls("invMeetingContainer dangerContainer","dangerText"):
                        (index.semMenu==="Link")?assignCls("invMeetingContainer primaryContainer","primaryText"):
                        (index.semMenu==="Note")?assignCls("invMeetingContainer warningContainer","warningText"):
                        assignCls("invMeetingContainer darkContainer","darkText")}
                        <div className={containerCls} key={index.mid}>
                            <p className={textCls}> Date : {index.date}  Time : {index.time}  </p>
                            <h5 className={textCls}> {index.name} </h5> 
                            <button className="btn btn-dark"> Get Details </button> 
                            <button className="btn btn-light"> Join meeting </button>  
                        </div>
                    </div>
            ))
        }
        </div>
    );
}
export default MeetingScheduleBody;