import { useQuery } from "react-query";
import {fetchTasks} from "../queryFetchers/fetcher";


const IndvTaskDesc=({id})=>{
    const {data,status}=useQuery(`task${id}`,fetchTasks);
    if(status==="loading") return (<h1> Loading... </h1>);
    if(status==="error") return (<h1> Error </h1>);

    const indvData=data.filter(index=>index.id===id);
    const buttonClass=(indvData[0].semMenu==="Important")?"viewBtn danger":(indvData[0].semMenu==="Link")?"viewBtn primary":(indvData[0].semMenu==="Note")?"viewBtn warning":"viewBtn dark";
    return(
        <div className="modelBox">
            <h3 className="header"> {indvData[0].name} </h3> 
            <h5> {indvData[0].desc} </h5>
            <button className={buttonClass}> Mark Done </button> 
        </div>
    )
}
export default IndvTaskDesc;