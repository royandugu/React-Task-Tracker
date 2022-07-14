import {FaBars} from "react-icons/fa";
import {BrowserRouter,Link} from "react-router-dom";
import "./smlSideMenu.css";
const SmlSideMenu=()=>{
    return(
        <BrowserRouter>
        <div className="smlMenuContainer">
            <ul className="nav flex-column smlProps hidden">
                <li className="nav-item">
                    <Link to=" " className="nav-link active"> Inbox </Link>
                </li>
                <li className="nav-item">
                    <Link to=" " className="nav-link"> Upcoming </Link> 
                </li>
                <li className="nav-item">
                    <Link to=" " className="nav-link"> Deadlines </Link> 
                </li>
                <li className="nav-item">
                    <Link to=" " className="nav-link"> Trash </Link> 
                </li>
                <li className="nav-item">
                    <Link to=" " className="nav-link"> Family </Link> 
                </li>
                <li className="nav-item">
                    <Link to=" " className="nav-link"> Progress </Link> 
                </li>
                <li className="nav-item">
                    <Link to=" " className="nav-link"> Holidays </Link> 
                </li>
                <li className="nav-item">
                    <Link to=" " className="nav-link"> Work </Link> 
                </li>
                <li className="nav-item">
                    <Link to=" " className="nav-link"> Planning </Link>
                </li>
            </ul>
            <FaBars className="text-primary" onClick={()=>{
                const smlMenu=document.querySelector(".smlProps");
                if(smlMenu.classList.contains("hidden")){
                    smlMenu.classList.remove("hidden");
                    smlMenu.classList.add("unHidden");
                }
                else {
                    smlMenu.classList.add("hidden");
                    smlMenu.classList.remove("unHidden");
                }
            }}/>
            
        </div>
        </BrowserRouter>
    );
}
export default SmlSideMenu;