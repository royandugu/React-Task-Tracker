import { useMutation } from "react-query";

import {deleteTask} from "../../QueryFetchers/fetcher";
import { setClicked, getClicked, getId, setId} from "../../GlobalComponents/indvDisplayParams";  

import "./tRenderer.css";

const Renderer=({stateData,customData,setData})=>{
    const id=getId();
    const {mutate:deleter}=useMutation((id)=>deleteTask(id)); //Change the main type to trash rather than delete
 
    let buttonColor;
    let currentData;
    
    (customData)?currentData=customData:currentData=stateData;
    
    const changeIdAndClick=(id)=>{
        setId(id);
        setClicked(true);
    }
    const setbuttonColor=(btnClr)=>{
        buttonColor=btnClr;
    }

    //return
    return(
        <form className="allTasks">
            {(currentData.length>0)?currentData.map(index=>(
                <div className="indvTask" key={index.id}>
                    <div>
                        <input type="checkbox" style={getClicked()?{pointerEvents:"none"}:{pointerEvents:"all"}} className="taskChecker" onClick={()=>{
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
                            (index.id===id & getClicked()===true) ? setClicked(false): changeIdAndClick(index.id);
                        }}> View  </button>
                    </div>
                </div>
            )):(<h5> There are no tasks left... </h5>)}
        </form>
    )
}
export default Renderer;