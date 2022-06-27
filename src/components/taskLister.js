import {useEffect, useState} from "react";
import {useLocation,Link} from "react-router-dom";
import { useQuery,useMutation} from "react-query";
import { deleteTask } from "./queryFetchers/fetcher";

import QueryState from "./queryState";

import "./taskLister.css";


const barMover=(pName)=>{
    let i;
    if(pName==="/") i=0;
    else if(pName==="/Important") i=1;
    else if(pName==="/Notes") i=2;
    else if(pName==="/Links") i=3;
    
    const element=document.querySelector(".bar");
    let inc=100*i;
    element.style.transform="translateX("+ inc +"%)";
}


const TaskLister=({fetcher})=>{
    const {data,status}=useQuery("tasks",fetcher);
    const [task,setTask]=useState([]);
    const [containerHeight,setContainerHeight]=useState(window.innerHeight);
    
    window.onresize=()=>setContainerHeight(window.innerHeight);
    const {mutate:deleter}=useMutation((id)=>deleteTask(id));

    const location=useLocation();
    
    useEffect(()=>{
        barMover(location.pathname);         
    },[location])
    
    
    return(
        <div>
            <div className="headerTop">
                
                <h2> Today Task </h2>
                <ul className="inBoxMenu">
                <li className="selected">
                    <Link to="/" className="link"> All </Link>
                </li>
                <li>
                    <Link to="/Important" className="link"> Important </Link>
                </li>
                <li>
                    <Link to="/Notes" className="link"> Notes </Link>
                </li>
                <li>
                    <Link to="/Links" className="link"> Links </Link>
                </li> 
                <div className="bar"/>
            </ul>
            </div>
            <div className="restContainer" style={{height:containerHeight-165}}>
                <QueryState data={task} queryFetch={data} setTask={setTask} status={status} deleter={deleter}></QueryState>
            </div>
        </div>
    );

}

export default TaskLister;