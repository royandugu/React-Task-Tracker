import "./indvMeetingDesc.css"

const IndvMeetingDesc=({clicked,setClick,stateData})=>{
    const clsNameAttr=clicked?"indvMeetingContainer visible":"indvMeetingContainer invisible";

    return (
        <div className={clsNameAttr}>
            {/** Disply meeting descriptions */}
        </div>
    );
}
export default IndvMeetingDesc;