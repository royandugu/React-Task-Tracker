import { Route, Routes } from "react-router-dom";

import All from "./taskListerComponents/all";
import Important from "./taskListerComponents/Important";
import Notes from "./taskListerComponents/Notes";
import Links from "./taskListerComponents/Links";

const RouteMaker = ({data,deleter,setTask}) => {
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

export default RouteMaker;