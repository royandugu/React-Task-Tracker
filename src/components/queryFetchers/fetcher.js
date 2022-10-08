export const fetchTasks=async ()=>{
    const dataPromise=await fetch("http://localhost:5000/tasks");
    return dataPromise.json();
}
export const fetchMeetings=async ()=>{
    const dataPromise=await fetch("http://localhost:5000/Meetings");
    return dataPromise.json();
}
export const deleteTask=async (id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{method:"DELETE"});
}