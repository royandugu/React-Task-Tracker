import {useState,useEffect} from "react";
import Renderer  from "./renderer";
import "./renderer.css";

const Notes=({tasks,setTask,deleter})=>{
    const [notes, setNote]=useState(tasks.filter(index=>index.semMenu==="Note"));
    useEffect(()=>setNote(tasks.filter(index=>index.semMenu==="Note")),[tasks]);

    return(
        <Renderer tasks={tasks} customTasks={notes} setTask={setTask} setCustomTask={setNote} deleter={deleter}/>
    )
}
export default Notes;