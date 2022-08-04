import { Route, Routes } from "react-router-dom";

import All from "../SubDivision/all";
import Important from "../SubDivision/Important";
import Links from "../SubDivision/Links";
import Notes from "../SubDivision/Notes";

const RouteMaker = ({stateData,setData,deleter,isTask}) => {
    return (
        //Filter out for important
        <Routes>
            <Route path="/" element={<All stateData={stateData} setData={setData} deleter={deleter} isTask={isTask}/>}/> 
            <Route path="/Important" element={<Important stateData={stateData} setData={setData} deleter={deleter} isTask={isTask}/>}/> 
            <Route path="/Notes" element={<Notes stateData={stateData} setData={setData} deleter={deleter} isTask={isTask}/>}/>
            <Route path="/Links" element={<Links stateData={stateData} setData={setData} deleter={deleter} isTask={isTask}/>} />
        </Routes>
    )
}

export default RouteMaker;