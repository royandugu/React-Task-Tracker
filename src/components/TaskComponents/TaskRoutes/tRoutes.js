import { Route, Routes } from "react-router-dom";

import All from "../../SubDivision/all";
import Important from "../../SubDivision/Important";
import Links from "../../SubDivision/Links";
import Notes from "../../SubDivision/Notes";

const RouteMaker = ({stateData,setData}) => {
    
    //return
    return (
        <Routes>
            <Route path="/" element={<All stateData={stateData} setData={setData}/>}/> 
            <Route path="/Important" element={<Important stateData={stateData} setData={setData}/>}/> 
            <Route path="/Notes" element={<Notes stateData={stateData} setData={setData}/>}/>
            <Route path="/Links" element={<Links stateData={stateData} setData={setData}/>} />
        </Routes>
    )
}

export default RouteMaker;