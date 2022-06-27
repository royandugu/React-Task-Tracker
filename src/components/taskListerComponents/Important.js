import {useState,useEffect} from "react";
import Renderer  from "./renderer";
import "./all.css";

const Important=({tasks,setTask,deleter})=>{
    const [impTasks, setImpTask]=useState(tasks.filter(index=>index.semMenu==="Important"));
    useEffect(()=>setImpTask(tasks.filter(index=>index.semMenu==="Important")),[tasks]);
    
    return(
        <Renderer tasks={tasks} customTasks={impTasks} setTask={setTask} setCustomTask={setImpTask} deleter={deleter}/>
    )
}
export default Important;