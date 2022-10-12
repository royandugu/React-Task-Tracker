import CommonIndvDesc from "../../CommonComponents/commonIndvDesc";

import "./tRenderer.css";
//Add a boolean value that verifies if this is a task or not. If task send task else meeting
const Renderer=({stateData,customData,setData,setCustomTask,deleter,clicked, setClicked, id, changeIdAndClick})=>{
    let buttonColor;
    let currentData;
    (customData)?currentData=customData:currentData=stateData;
    
    const setbuttonColor=(btnClr)=>{
        buttonColor=btnClr;
    }

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
            <CommonIndvDesc id={id} clicked={clicked} setClicked={setClicked} isTask={true}/>
        </form>
    )
}
export default Renderer;