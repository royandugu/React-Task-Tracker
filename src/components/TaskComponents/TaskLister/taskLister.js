import {useState} from "react";
import { useQuery,useMutation} from "react-query";
import { deleteTask } from "../../QueryFetchers/fetcher";

import QueryState from "../../QueryState/queryState";
import TaskNavigator from "../TaskNavigator/taskNavigator";

import "./taskLister.css";





const TaskLister=({fetcher,containerHeight})=>{
    const {data,status}=useQuery("tasks",fetcher);
    const [task,setTask]=useState([]);
    const {mutate:deleter}=useMutation((id)=>deleteTask(id));
    
    return(
        <div>
            <div className="headerTop">
                <h2> Today Task </h2>
                <TaskNavigator/>
            </div>
            <div className="restContainer" style={{height:containerHeight-165}}>
                <QueryState stateData={task} queryFetch={data} setData={setTask} status={status} deleter={deleter} isTask={true}/>
            </div>
        </div>
    );

}

export default TaskLister;