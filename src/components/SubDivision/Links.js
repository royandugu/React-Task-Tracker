import {useState,useEffect} from "react";
import Renderer from "../Renderer/renderer";
import "../Renderer/renderer.css";

const Links=({tasks,setTask,deleter})=>{
    const [links, setLink]=useState(tasks.filter(index=>index.semMenu==="Link"));
    useEffect(()=>setLink(tasks.filter(index=>index.semMenu==="Link")),[tasks]);
    
    return(
        <Renderer tasks={tasks} customTasks={links} setTask={setTask} setCustomTask={setLink} deleter={deleter} isTask={true}/>
    )
}
export default Links;