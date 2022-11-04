import "./renderOptionPanel.css";

const RenderOptionPanel=({hasClicked})=>{
    
    const containerClass=(hasClicked)?"optionListContainer showOption":"optionListContainer hideOption";
    
    //return
    return(

        <div className={containerClass}>
            <p className="active"> Ascending order </p>
            <p> Descending order </p>
        </div>

    )

}

export default RenderOptionPanel;