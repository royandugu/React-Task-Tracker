import {AiOutlineCloseCircle} from "react-icons/ai";

const CommonIndvDesc=({id,clicked,setClicked,data,status,isTask})=>{
    const modelClsName=(clicked)?"modelBox show":"modelBox hide";

    let indvData;
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
        indvData=data.filter(index=>index.id===id);
        title=indvData[0].name;
        description=indvData[0].desc;
        if(isTask) buttonClass=(indvData[0].semMenu==="Important")?"viewBtn danger":(indvData[0].semMenu==="Link")?"viewBtn primary":(indvData[0].semMenu==="Note")?"viewBtn warning":"viewBtn dark";
    }
    return(
        <div className={modelClsName}>
            <div className="closeButtonContainer bg-dark">
                <AiOutlineCloseCircle className="closeIcon" onClick={()=>setClicked(false)}/>
            </div>
            <div className="contentContainer">
                <h3 className="header"> {title} </h3> 
                <p> {description} </p>
                {(isTask)&& <button className={buttonClass}> Mark Done </button>} 
            </div>
        </div>
    )
}

export default CommonIndvDesc;