import {useState} from "react";
import {useQuery} from "react-query";
import {fetchTasks} from "../../QueryFetchers/fetcher";

import QueryState from "../../QueryState/queryState";
import TaskNavigator from "../TaskNavigator/taskNavigator";

import "./taskLister.css";

const TaskLister=({containerHeight})=>{

    const {data,status}=useQuery("tasks",fetchTasks);
    const [task,setTask]=useState([]);
    
    //return
    return(
        <div>
            <div className="headerTop">
                <div>
                    <h2> Today Task </h2>
                    <TaskNavigator/>
                </div>
            </div>
            <div className="restContainer" style={{height:containerHeight-153}}>
                <QueryState stateData={task} queryFetch={data} setData={setTask} status={status} isTask={true}/>
            </div>
        </div>
    );
}

export default TaskLister;