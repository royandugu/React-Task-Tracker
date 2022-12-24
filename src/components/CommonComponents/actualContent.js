import { useContext } from "react";
import toggleContext from "./Contexts/toggleContext";

import IndvTaskDesc from "../TaskComponents/IndvTaskDesc/indvTaskDesc";
import IndvMeetingDesc from "../MeetingComponents/IndvMeetingDesc/indvMeetingDesc";

const ActualContent=()=>{
    const context=useContext(toggleContext);

    console.log(context);
    return(
        <>
        <h5> Things to do </h5>
            {/* {{(valueCollectives.isTask) ? <IndvTaskDesc id={valueCollectives.id}/> : <IndvMeetingDesc id={valueCollectives.id}/>}}
        </> */}
        </>
    )
}
export default ActualContent;