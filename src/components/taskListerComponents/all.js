import Renderer from "./renderer";
import "./all.css";


const All=({tasks,setTask,deleter})=>{
    return(
        <Renderer tasks={tasks} setTask={setTask} deleter={deleter}/>
    )
}


export default All;