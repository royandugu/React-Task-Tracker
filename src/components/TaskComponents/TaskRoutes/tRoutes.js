import { Route, Routes } from "react-router-dom";

import All from "../../SubDivision/all";
import Important from "../../SubDivision/Important";
import Links from "../../SubDivision/Links";
import Notes from "../../SubDivision/Notes";

const RouteMaker = ({stateData,setData,deleter,clicked,setClicked,id,changeIdAndClick}) => {
    return (
        <Routes>
            <Route path="/" element={<All stateData={stateData} setData={setData} deleter={deleter} clicked={clicked} setClicked={setClicked} id={id} changeIdAndClick={changeIdAndClick}/>}/> 
            <Route path="/Important" element={<Important stateData={stateData} setData={setData} deleter={deleter} clicked={clicked} setClicked={setClicked} id={id} changeIdAndClick={changeIdAndClick}/>}/> 
            <Route path="/Notes" element={<Notes stateData={stateData} setData={setData} deleter={deleter} clicked={clicked} setClicked={setClicked} id={id} changeIdAndClick={changeIdAndClick}/>}/>
            <Route path="/Links" element={<Links stateData={stateData} setData={setData} deleter={deleter} clicked={clicked} setClicked={setClicked} id={id} changeIdAndClick={changeIdAndClick}/>} />
        </Routes>
    )
}

export default RouteMaker;