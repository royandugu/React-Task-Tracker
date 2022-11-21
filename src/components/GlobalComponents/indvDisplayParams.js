let clicked=false,isTask=false;
let id;

export const getClicked=()=>{
    return clicked;   
}
export const setClicked=(value)=>{
    clicked=value;
}
export const getIsTask=()=>{
    return isTask;
}
export const setIsTask=(value)=>{
    isTask=value;
}
export const getId=()=>{
    return id;
}
export const setId=(value)=>{
    id=value;
}