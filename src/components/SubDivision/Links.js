import {useState,useEffect} from "react";
import Renderer from "../TaskComponents/TaskRenderer/tRenderer";

const Links=({stateData,setData,deleter,isTask})=>{
    const [links, setLink]=useState(stateData.filter(index=>index.semMenu==="Link"));
    useEffect(()=>setLink(stateData.filter(index=>index.semMenu==="Link")),[stateData]);
    return(
        <Renderer stateData={stateData} customData={links} setData={setData} setCustomTask={setLink} deleter={deleter} />
    )
}
export default Links;