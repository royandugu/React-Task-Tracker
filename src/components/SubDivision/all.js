import Renderer from "../Renderer/renderer";
import "../Renderer/renderer.css";


const All=({stateData,setData,deleter,isTask})=>{
    console.log(stateData);
    return(
        <Renderer stateData={stateData} setData={setData} deleter={deleter} isTask={isTask}/>
    )
}


export default All;