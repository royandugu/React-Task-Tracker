import {useState,useEffect} from "react";
import Renderer from "../TaskComponents/TaskRenderer/tRenderer";

const Links=({stateData,setData,deleter,clicked,setClicked,id,setId})=>{
    const [links, setLink]=useState(stateData.filter(index=>index.semMenu==="Link"));
    useEffect(()=>setLink(stateData.filter(index=>index.semMenu==="Link")),[stateData]);
    return(
        <Renderer stateData={stateData} customData={links} setData={setData} deleter={deleter}/>
    )
}
export default Links;