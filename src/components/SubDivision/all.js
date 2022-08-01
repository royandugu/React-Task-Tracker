import Renderer from "../Renderer/renderer";
import "../Renderer/renderer.css";


const All=({tasks,setTask,deleter})=>{
    return(
        <Renderer tasks={tasks} setTask={setTask} deleter={deleter} isTask={true}/>
    )
}


export default All;