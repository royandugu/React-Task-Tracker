import Renderer from "../Renderer/renderer";
import "../Renderer/renderer.css";


const All=({stateData,setData,deleter})=>{
    return(
        <Renderer tasks={stateData} setTask={setData} deleter={deleter} isTask={true}/>
    )
}


export default All;