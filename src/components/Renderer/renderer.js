import { useState } from "react";
import IndvTaskDesc from "../TaskListerComponents/IndvTaskDesc/indvTaskDesc";


//Add a boolean value that verifies if this is a task or not. If task send task else meeting
const Renderer=({stateData,customData,setData,setCustomTask,deleter,isTask})=>{
    //Just for now
    
    const [clicked,setClicked]=useState(false);
    const [id,setId]=useState(5);

    let buttonColor;
    let currentData;
    (customData)?currentData=customData:currentData=stateData;

    //To Prevent 'Too many Re-renders' 
    const setbuttonColor=(btnClr)=>{
        buttonColor=btnClr;
    }

    const changeIdAndClick=(id)=>{
        setId(id);
        setClicked(true);
    }
    if(isTask){       
    return(
        <form className="allTask">
            {(currentData.length>0)?currentData.map(index=>(
                <div className="indvTasks" key={index.id}>
                    <div>
                        <input type="checkbox" style={clicked?{pointerEvents:"none"}:{pointerEvents:"all"}} className="taskChecker" onClick={()=>{
                            (setCustomTask) && setCustomTask(customData.filter(indx=>indx.id!==index.id));
                            setData(stateData.filter(indx=>indx.id!==index.id));
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
    else{
        return(
            <div className="meetingColumn">
                {(currentData.length>0)?currentData.map(index=>(
                    <div> {/** Test*/}
                        <h5> {index.name} </h5>
                    </div>
                )):<h5> No upcoming or ongoing meetings </h5> }
            </div>
        )
    }
}
export default Renderer;