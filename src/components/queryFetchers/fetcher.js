export const fetchTasks=async ()=>{
    const dataPromise=await fetch("http://localhost:5000/tasks");
    return dataPromise.json();
}
export const fetchIndvTask=async (id)=>{
    const dataPromise=await fetch(`http://localhost:5000/tasks/${id}`);
    return dataPromise.json();
}
export const fetchIndvMeeting=async (id)=>{
    const dataPromise=await fetch(`http://localhost:5000/Meetings/${id}`);
    return dataPromise.json();
}
export const fetchMeetings=async ()=>{
    const dataPromise=await fetch("http://localhost:5000/Meetings");
    return dataPromise.json();
}
export const deleteTask=async (id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{method:"DELETE"});
}