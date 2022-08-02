import {useState,useEffect} from "react";
import Renderer from "../Renderer/renderer";
import "../Renderer/renderer.css";

const Links=({stateData,setData,deleter})=>{
    const [links, setLink]=useState(stateData.filter(index=>index.semMenu==="Link"));
    useEffect(()=>setLink(stateData.filter(index=>index.semMenu==="Link")),[stateData]);
    return(
        <Renderer tasks={stateData} customTasks={links} setTask={setData} setCustomTask={setLink} deleter={deleter} isTask={true}/>
    )
}
export default Links;