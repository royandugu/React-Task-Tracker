import {useState} from "react";
import "./meetingScheduleBody.css";

const MeetingScheduleBody=({data,status})=>{
    const [containerHeight,setContainerHeight]=useState(window.innerHeight);
    window.onresize=()=>setContainerHeight(window.innerHeight);
    let containerCls;

    const assignCls=(cls)=>{
        containerCls=cls;
    }


    if(status==="loading") return (<h1> Loading... </h1>);
    if(status==="error") return (<h1> Error... </h1>);
    return(
        <div className="meetingContainer" style={{height:containerHeight-165}}>
        {
            data.map(index=>(
                    <div key={index.id}>
                        {(index.semMenu==="Important")?assignCls("invMeetingContainer dangerContainer"):
                        (index.semMenu==="Link")?assignCls("invMeetingContainer primaryContainer"):
                        (index.semMenu==="Note")?assignCls("invMeetingContainer warningContainer"):
                        assignCls("invMeetingContainer darkContainer")}
                        <div className={containerCls} key={index.mid}>
                            <h5> {index.name} </h5> 
                            <p> {index.time}</p>
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