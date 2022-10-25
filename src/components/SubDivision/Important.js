import {useState,useEffect} from "react";
import Renderer from "../TaskComponents/TaskRenderer/tRenderer";

const Important=({stateData,setData,deleter,clicked,setClicked,id,setId})=>{
    const [impData, setImpData]=useState(stateData.filter(index=>index.semMenu==="Important"));
    useEffect(()=>setImpData(stateData.filter(index=>index.semMenu==="Important")),[stateData]);
    return(
        <Renderer stateData={stateData} customData={impData} setData={setData} setCustomTask={setImpData} deleter={deleter} clicked={clicked} setClicked={setClicked} id={id} setId={setId}/>
    )
}
export default Important;