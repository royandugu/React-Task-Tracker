import "./meetingScheduleBody.css";

const MeetingScheduleBody=({data,status,containerHeight})=>{
    let containerCls;
    let textCls;
    let btnCls;
    const assignCls=(clsContainer,clsText,clsButton)=>{
        containerCls=clsContainer;
        textCls=clsText;
        btnCls=clsButton;
    }


    if(status==="loading") return (<h1> Loading... </h1>);
    if(status==="error") return (<h1> Error... </h1>);
    return(
        <div className="meetingContainer" style={{height:containerHeight-165}}>
        {
            data.map(index=>(
                    <div key={index.id}>
                        {(index.semMenu==="Important")?assignCls("invMeetingContainer dangerContainer","dangerText","btn btnDangerDark"):
                        (index.semMenu==="Link")?assignCls("invMeetingContainer primaryContainer","primaryText","btn btnPrimaryDark"):
                        (index.semMenu==="Note")?assignCls("invMeetingContainer warningContainer","warningText","btn btnWarningDark"):
                        assignCls("invMeetingContainer darkContainer","darkText","btn btnDark")}
                        <div className={containerCls} key={index.mid}>
                            <p className={textCls}> Date : {index.date}  Time : {index.time}  </p>
                            <h5 className={textCls}> {index.name} </h5> 
                            <button className={btnCls}> Details </button> 
                        </div>
                    </div>
            ))
        }
        </div>
    );
}
export default MeetingScheduleBody;