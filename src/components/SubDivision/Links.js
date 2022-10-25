import {useState,useEffect} from "react";
import Renderer from "../TaskComponents/TaskRenderer/tRenderer";

const Links=({stateData,setData,deleter,clicked,setClicked,id,setId})=>{
    const [links, setLink]=useState(stateData.filter(index=>index.semMenu==="Link"));
    useEffect(()=>setLink(stateData.filter(index=>index.semMenu==="Link")),[stateData]);
    return(
        <Renderer stateData={stateData} customData={links} setData={setData} setCustomTask={setLink} deleter={deleter} clicked={clicked} setClicked={setClicked} id={id} setId={setId}/>
    )
}
export default Links;