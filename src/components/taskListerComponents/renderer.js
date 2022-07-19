import { useState } from "react";
import IndvTaskDesc from "./IndvTaskDesc/indvTaskDesc";


const Renderer=({tasks,customTasks,setTask,setCustomTask,deleter})=>{
    const [clicked,setClicked]=useState(false);
    const [id,setId]=useState(5);

    let buttonColor;
    let currentTasks;
    (customTasks)?currentTasks=customTasks:currentTasks=tasks;

    //To Prevent 'Too many Re-renders' 
    const setbuttonColor=(btnClr)=>{
        buttonColor=btnClr;
    }

    const changeIdAndClick=(id)=>{
        setId(id);
        setClicked(true);
    }
    
    return(
        <form className="allTask">
            {(currentTasks.length>0)?currentTasks.map(index=>(
                <div className="indvTasks" key={index.id}>
                    <div>
                        <input type="checkbox" style={clicked?{pointerEvents:"none"}:{pointerEvents:"all"}} className="taskChecker" onClick={()=>{
                            (setCustomTask) && setCustomTask(customTasks.filter(indx=>indx.id!==index.id));
                            setTask(tasks.filter(indx=>indx.id!==index.id));
                            deleter(index.id);
                        }}
                        />
                    </div>
                    <div className="task">  
                        {index.name} 
                    </div>
                    <div>
                        {   
                            (index.semMenu==="Note") ? setbuttonColor("viewBtn warning"):
                            (index.semMenu==="Important") ? setbuttonColor("viewBtn danger"):
                            (index.semMenu==="Link")? setbuttonColor("viewBtn primary"):
                            setbuttonColor("viewBtn dark")
                        }
                        <button className={buttonColor} onClick={(e)=>{
                            e.preventDefault();
                            (index.id===id & clicked===true) ? setClicked(false): changeIdAndClick(index.id);
                        }}> View  </button>
                    </div>
                </div>
            )):(<h5> There are no tasks left... </h5>)}
            <IndvTaskDesc id={id} clicked={clicked}/>
        </form>
    )
}
export default Renderer;