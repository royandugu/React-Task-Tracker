import {useState,useEffect} from "react";
import Renderer from "../Renderer/renderer";
import "../Renderer/renderer.css";

const Notes=({stateData,setData,deleter})=>{
    const [notes, setNote]=useState(stateData.filter(index=>index.semMenu==="Note"));
    useEffect(()=>setNote(stateData.filter(index=>index.semMenu==="Note")),[stateData]);

    return(
        <Renderer tasks={stateData} customTasks={notes} setTask={setData} setCustomTask={setNote} deleter={deleter} isTask={true}/>
    )
}
export default Notes;