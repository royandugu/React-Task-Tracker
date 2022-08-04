import {useState,useEffect} from "react";
import Renderer from "../Renderer/renderer";
import "../Renderer/renderer.css";

const Notes=({stateData,setData,deleter,isTask})=>{
    const [notes, setNote]=useState(stateData.filter(index=>index.semMenu==="Note"));
    useEffect(()=>setNote(stateData.filter(index=>index.semMenu==="Note")),[stateData]);

    return(
        <Renderer stateData={stateData} customData={notes} setData={setData} setCustomTask={setNote} deleter={deleter} isTask={isTask}/>
    )
}
export default Notes;