import Renderer from "./renderer";
import "./renderer.css";


const All=({tasks,setTask,deleter})=>{
    return(
        <Renderer tasks={tasks} setTask={setTask} deleter={deleter}/>
    )
}


export default All;