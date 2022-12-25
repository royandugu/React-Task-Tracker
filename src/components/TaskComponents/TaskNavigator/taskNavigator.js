import {useEffect,useRef} from "react";
import {useLocation,Link} from "react-router-dom";

import "./taskNavigator.css";

const barMover=(pName,navRef)=>{
    let i;
    if(pName==="/") i=0;
    else if(pName==="/Important") i=1;
    else if(pName==="/Notes") i=2;
    else if(pName==="/Links") i=3;
    
    let inc=100*i;
    navRef.current.style.transform="translateX("+ inc +"%)";
}

const NavigatorTop=()=>{
    const navRef=useRef(null);
    const location=useLocation(); 
    
    useEffect(()=>{
        barMover(location.pathname,navRef);         
    },[location,navRef])

    //return
    return(
        <ul className="inBoxMenu">
                <li className="selected">
                    <Link to="/" className="link"> All </Link>
                </li>
                <li>
                    <Link to="/Important" className="link"> Important </Link>
                </li>
                <li>
                    <Link to="/Notes" className="link"> Notes </Link>
                </li>
                <li>
                    <Link to="/Links" className="link"> Links </Link>
                </li> 
                <div ref={navRef} className="bar"/>
            </ul>
    )

}

export default NavigatorTop;