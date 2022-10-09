import Renderer from "../TaskComponents/TaskRenderer/tRenderer";


const All=({stateData,setData,deleter,clicked,setClicked,id,changeIdAndClick})=>{
    return(
        <Renderer stateData={stateData} setData={setData} deleter={deleter} clicked={clicked} setClicked={setClicked} id={id} changeIdAndClick={changeIdAndClick}/>
    )
}


export default All;