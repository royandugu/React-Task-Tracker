import {useState,useEffect} from "react";
import Renderer from "../TaskComponents/TaskRenderer/tRenderer";

const Links=({stateData,setData})=>{
    const [links, setLink]=useState(stateData.filter(index=>index.semMenu==="Link"));
    useEffect(()=>setLink(stateData.filter(index=>index.semMenu==="Link")),[stateData]);
    return(
        <Renderer stateData={stateData} customData={links} setData={setData}/>
    )
}
export default Links;