import "./renderOptionPanel.css";
const RenderOptionPanel=({hasClicked})=>{
    const containerClass=(hasClicked)?"optionListContainer show":"optionListContainer hide";
    return(
        <div className={containerClass}>
            <h5> Ascending order </h5>
            <h5> Descending order </h5>
        </div>
    )
}
export default RenderOptionPanel;