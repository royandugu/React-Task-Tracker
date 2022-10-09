import {useState,useEffect} from "react";
import Renderer from "../TaskComponents/TaskRenderer/tRenderer";

const Notes=({stateData,setData,deleter,clicked,setClicked,id,changeIdAndClick})=>{
    const [notes, setNote]=useState(stateData.filter(index=>index.semMenu==="Note"));
    useEffect(()=>setNote(stateData.filter(index=>index.semMenu==="Note")),[stateData]);
    return(
        <Renderer stateData={stateData} customData={notes} setData={setData} setCustomTask={setNote} deleter={deleter} clicked={clicked} setClicked={setClicked} id={id} changeIdAndClick={changeIdAndClick}/>
    )
}
export default Notes;