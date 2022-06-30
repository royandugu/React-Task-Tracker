import { useQuery } from "react-query";
import {fetchTasks} from "../queryFetchers/fetcher";


import "./indvTaskDesc.css";


const IndvTaskDesc=({id,clicked})=>{
    const {data,status}=useQuery(`task${id}`,fetchTasks);
    const modelClsName=(clicked)?"modelBox show":"modelBox hide";
    
    let title;
    let description;
    let buttonClass="viewBtn dark unClickable";
    let idStatus;

    const includesId=()=>{
        data.map(index=>{
            if(index.id===id) return true;
        })
        return false;
    }

    if(status==="loading") {
        title="Loading";
        description="Loading";
    } 
    else if(status==="error") {
        title="Error";
        description="Error";
    }
    else{
        console.log(data);
        console.log(id);
        idStatus=includesId();
        console.log(idStatus);
        const indvData=data.filter(index=>index.id===id);
        title=indvData[0].name;
        description=indvData[0].desc;
        buttonClass=(indvData[0].semMenu==="Important")?"viewBtn danger":(indvData[0].semMenu==="Link")?"viewBtn primary":(indvData[0].semMenu==="Note")?"viewBtn warning":"viewBtn dark";
    }
    return(
        <div className={modelClsName}>
            <div className="closeButtonContainer bg-dark">
                <h5> Here to contain cross icon </h5>
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