import Renderer from "../TaskComponents/TaskRenderer/tRenderer";


const All=({stateData,setData,deleter,clicked,setClicked,id,setId})=>{
    return(
        <Renderer stateData={stateData} setData={setData} deleter={deleter} clicked={clicked} setClicked={setClicked} id={id} setId={setId}/>
    )
}


export default All;