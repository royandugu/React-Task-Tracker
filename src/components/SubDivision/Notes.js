import {useState,useEffect} from "react";
import Renderer from "../TaskComponents/TaskRenderer/tRenderer";

const Notes=({stateData,setData,deleter})=>{
    const [notes, setNote]=useState(stateData.filter(index=>index.semMenu==="Note"));
    useEffect(()=>setNote(stateData.filter(index=>index.semMenu==="Note")),[stateData]);
    return(
        <Renderer stateData={stateData} customData={notes} setData={setData} deleter={deleter}/>
    )
}
export default Notes;