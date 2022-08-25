import Renderer from "../TaskComponents/TaskRenderer/tRenderer";


const All=({stateData,setData,deleter})=>{
    return(
        <Renderer stateData={stateData} setData={setData} deleter={deleter}/>
    )
}


export default All;