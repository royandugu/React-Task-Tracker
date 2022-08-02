import {useState,useEffect} from "react";
import Renderer from "../Renderer/renderer";
import "../Renderer/renderer.css";

const Important=({stateData,setData,deleter})=>{
    const [impTasks, setImpTask]=useState(stateData.filter(index=>index.semMenu==="Important"));
    useEffect(()=>setImpTask(stateData.filter(index=>index.semMenu==="Important")),[stateData]);
    
    return(
        <Renderer tasks={stateData} customTasks={impTasks} setTask={setData} setCustomTask={setImpTask} deleter={deleter} isTask={true}/>
    )
}
export default Important;