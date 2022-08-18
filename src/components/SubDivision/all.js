import Renderer from "../TaskComponents/TaskRenderer/tRenderer";


const All=({stateData,setData,deleter})=>{
    console.log(stateData);
    return(
        <Renderer stateData={stateData} setData={setData} deleter={deleter}/>
    )
}


export default All;