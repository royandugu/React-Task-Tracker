import {useState} from "react";
import { useQuery} from "react-query";

import QueryState from "../../QueryState/queryState";
import TaskNavigator from "../TaskNavigator/taskNavigator";

import "./taskLister.css";


const TaskLister=({fetcher,containerHeight})=>{
    const {data,status}=useQuery("tasks",fetcher);
    const [task,setTask]=useState([]);
    
    //return
    return(
        <div>
            <div className="headerTop">
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