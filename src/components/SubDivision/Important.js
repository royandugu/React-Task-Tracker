import {useState,useEffect} from "react";
import Renderer from "../TaskComponents/TaskRenderer/tRenderer";

const Important=({stateData,setData})=>{
    const [impData, setImpData]=useState(stateData.filter(index=>index.semMenu==="Important"));
    useEffect(()=>setImpData(stateData.filter(index=>index.semMenu==="Important")),[stateData]);
    return(
        <Renderer stateData={stateData} customData={impData} setData={setData}/>
    )
}
export default Important;