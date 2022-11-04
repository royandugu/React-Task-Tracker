import {BrowserRouter,Link} from "react-router-dom";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./menuLg.css";

const Menu=()=>{
    
    //return
    return (
        <BrowserRouter>
            <div className="iconContainer bg-dark">
                <p> Hello </p>
            </div>
            <ul className="nav flex-column" id="menuOne">

                <li className="nav-item">
                    <Link to="#" className="nav-link active"> Inbox </Link>
                </li>

                <li className="nav-item">
                    <Link to="#" className="nav-link"> Upcoming </Link>
                </li>
            
                <li className="nav-item">
                    <Link to="#" className="nav-link"> Deadlines </Link>
                </li>
                <li className="nav-item">
                    <Link to="#" className="nav-link"> Trash </Link>
                </li>

            </ul>
            <ul className="nav flex-column" id="menuTwo">
                
                <li className="nav-item">
                    <Link to="#" className="nav-link"> Family </Link>
                </li>
            
                <li className="nav-item">
                    <Link to="#" className="nav-link"> Progress </Link>
                </li>
                <li className="nav-item">
                    <Link to="#" className="nav-link"> Holidays </Link>
                </li>

            </ul>
            <ul className="nav flex-column" id="menuThree">
                
                <li className="nav-item">
                    <Link to="#" className="nav-link"> Work</Link>
                </li>
                <li className="nav-item">
                    <Link to="#" className="nav-link"> Planning </Link>
                </li>
                <li className="nav-item">
                    <Link to="#" className="nav-link"> Presentation </Link>
                </li>

            </ul>
        </BrowserRouter>    
    
    )
}

export default Menu;