import "./bottomBarNavigation.css";
const BottomBarNavigation=()=>{
    const restContainer=document.querySelector(".restContainer");
    const showMeeting=()=>{
        restContainer.classList.remove("slideRight");
        restContainer.classList.add("slideLeft");
    }
    const showTask=()=>{
        restContainer.classList.remove("slideLeft");
        restContainer.classList.add("slideRight");
    }
    return(
        <>
            <div className="taskBar" onClick={showTask}>
                <h5> Today Task  </h5>
            </div>
            <div className="meetingBar" onClick={showMeeting}>
                <h5> Meetings </h5> 
            </div>
        
        </>        
    )
}
export default BottomBarNavigation;