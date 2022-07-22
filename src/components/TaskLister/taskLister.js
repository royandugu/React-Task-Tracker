import {useState} from "react";
import { useQuery,useMutation} from "react-query";
import { deleteTask } from "../QueryFetchers/fetcher";

import QueryState from "../QueryState/queryState";
import NavigatorTop from "../NavigatorTop/navigatorTop";

import "./taskLister.css";





const TaskLister=({fetcher,containerHeight  })=>{
    const {data,status}=useQuery("tasks",fetcher);
    const [task,setTask]=useState([]);
    const {mutate:deleter}=useMutation((id)=>deleteTask(id));
    
    
    return(
        <div>
            <div className="headerTop">
                <h2> Today Task </h2>
                <NavigatorTop/>
            </div>
            <div className="restContainer" style={{height:containerHeight-165}}>
                <QueryState data={task} queryFetch={data} setTask={setTask} status={status} deleter={deleter}></QueryState>
            </div>
        </div>
    );

}

export default TaskLister;