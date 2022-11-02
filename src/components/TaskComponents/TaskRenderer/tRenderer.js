import { useMutation } from "react-query";
import { useState } from "react";

import {deleteTask} from "../../QueryFetchers/fetcher";
import CommonIndvDesc from "../../CommonComponents/commonIndvDesc";

import "./tRenderer.css";

const Renderer=({stateData,customData,setData})=>{
    const [clicked,setClicked]=useState(false);
    const [id,setId]=useState();
    const {mutate:deleter}=useMutation((id)=>deleteTask(id));
    
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
        <form className="allTask">
            {(currentData.length>0)?currentData.map(index=>(
                <div className="indvTasks" key={index.id}>
                    <div>
                        <input type="checkbox" style={clicked?{pointerEvents:"none"}:{pointerEvents:"all"}} className="taskChecker" onClick={()=>{
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
            <CommonIndvDesc id={id} clicked={clicked} setClicked={setClicked} isTask={true}/>
        </form>
    )
}
export default Renderer;