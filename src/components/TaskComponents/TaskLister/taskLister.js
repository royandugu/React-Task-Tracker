import {useState,useRef,useEffect} from "react";
import {useQuery} from "react-query";
import {fetchTasks} from "../../QueryFetchers/fetcher";

import QueryState from "../../QueryState/queryState";
import TaskNavigator from "../TaskNavigator/taskNavigator";

import "./taskLister.css";

const TaskLister=({containerHeight})=>{

    const {data,status}=useQuery("tasks",fetchTasks);
    const [task,setTask]=useState([]);
    const [windowSize,setWindowSize]=useState(window.innerWidth);

    const headerTopRef=useRef("null");
    
    useEffect(()=>{
        if(windowSize<=767) headerTopRef.current.classList.add("fixedPos");
        else headerTopRef.current.classList.remove("fixedPos");
    },[headerTopRef,windowSize])

    window.addEventListener("resize",()=>setWindowSize(window.innerWidth));    
    //return
    return(
        <div>
            <div ref={headerTopRef} className="headerTop">
                <h2> Today Task </h2>
                <TaskNavigator/>
            </div>
            <div className="restContainer" style={{height:containerHeight-165}}>
                <QueryState stateData={task} queryFetch={data} setData={setTask} status={status} isTask={true}/>
            </div>
        </div>
    );

}

export default TaskLister;