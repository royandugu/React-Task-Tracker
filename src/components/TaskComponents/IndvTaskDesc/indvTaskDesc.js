import { useQuery } from "react-query";
import {fetchTasks} from "../../QueryFetchers/fetcher";
import {AiOutlineCloseCircle} from "react-icons/ai"


import "./indvTaskDesc.css";


const IndvTaskDesc=({id,clicked,setClicked})=>{
    const {data,status}=useQuery(`task${id}`,fetchTasks);
    const modelClsName=(clicked)?"modelBox show":"modelBox hide";
    
    let title;
    let description;
    let buttonClass="viewBtn dark unClickable";
    
    

    if(status==="loading") {
        title="Loading";
        description="Loading";
    } 
    else if(status==="error") {
        title="Error";
        description="Error";
    }
    else{
        const indvData=data.filter(index=>index.id===id);
        title=indvData[0].name;
        description=indvData[0].desc;
        buttonClass=(indvData[0].semMenu==="Important")?"viewBtn danger":(indvData[0].semMenu==="Link")?"viewBtn primary":(indvData[0].semMenu==="Note")?"viewBtn warning":"viewBtn dark";
    }
    return(
        <div className={modelClsName}>
            <div className="closeButtonContainer bg-dark">
                <AiOutlineCloseCircle className="closeIcon" onClick={()=>setClicked(false)}/>
            </div>
            <div className="contentContainer">
                <h3 className="header"> {title} </h3> 
                <p> {description} </p>
                <button className={buttonClass}> Mark Done </button> 
            </div>
        </div>
    )
}

export default IndvTaskDesc;