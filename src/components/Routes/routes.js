import { Route, Routes } from "react-router-dom";

import All from "../SubDivision/all";
import Important from "../SubDivision/Important";
import Links from "../SubDivision/Links";
import Notes from "../SubDivision/Notes";

const RouteMaker = ({data,deleter,setTask,isTask}) => {
    if(isTask){
        return (
        //Filter out for important
            <Routes>
                <Route path="/" element={<All tasks={data} setTask={setTask} deleter={deleter}/>}/> 
                <Route path="/Important" element={<Important tasks={data} setTask={setTask} deleter={deleter}/>} />
                <Route path="/Notes" element={<Notes tasks={data} setTask={setTask} deleter={deleter}/>} />
                <Route path="/Links" element={<Links tasks={data} setTask={setTask} deleter={deleter}/>} />
            </Routes>
        )
    }
    else {
        return(
            <h1> Meetings </h1>
        )
    }
}

export default RouteMaker;