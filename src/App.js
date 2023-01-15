import {useState,useContext} from "react";
import {BrowserRouter} from "react-router-dom";

import SideMenu from "./components/MenuLg/menuLg";
import TaskLister from "./components/TaskComponents/TaskLister/taskLister";
import MeetingSchedulesHeader from "./components/MeetingComponents/MeetingSchedulesHeader/meetingSchedulesHeader";
import SmlSideMenu from "./components/MenuSml/smlSideMenu";
import BottomBarNavigation from "./components/BottomBarNavigation/bottomBarNavigation";
import CommonIndvDesc from "./components/CommonComponents/commonIndvDesc";
import toggleContext from "./components/CommonComponents/Contexts/toggleContext";

import "./App.css";

const App=()=>{    
    
    const [containerHeight,setContainerHeight]=useState(window.innerHeight);
    const context=useContext(toggleContext);

    window.onresize=()=>setContainerHeight(window.innerHeight);

    //Return
    return(
        <div className="container-fluid" style={{padding:0}}>
            <div className="row">
                <div className="col-lg-2 col-md-2 col-12 d-none d-md-block">
                    <div className="sideMenuContainer">
                        <SideMenu/>
                    </div>
                </div>
                <div className="col-12 d-block d-md-none" style={{zIndex:2}}>
                    <div className="smlSideMenuContainer bg-dark">
                        <div className="flexBoxOne">
                            <SmlSideMenu/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 taskListContainer d-none d-md-block">
                    <BrowserRouter>
                        <TaskLister containerHeight={containerHeight}/>
                    </BrowserRouter>
                </div>
                <div className="col-lg-5 col-md-5 d-none d-md-block">
                    <BrowserRouter>
                        <MeetingSchedulesHeader containerHeight={containerHeight}/>
                    </BrowserRouter>
                </div>
            </div>
            <div className="row smlSlide d-block d-md-none">
                <div className="col-12 smlTaskLister" style={(context.smlTaskDisplay)?{display:"block"}:{display:"none"}}>
                    <BrowserRouter>
                        <TaskLister containerHeight={containerHeight}/>
                    </BrowserRouter>
                </div> 
                <div className="col-12 smlMeetingLister" style={(context.smlTaskDisplay)?{display:"none"}:{display:"block"}}>
                    <BrowserRouter>
                        <MeetingSchedulesHeader containerHeight={containerHeight}/>
                    </BrowserRouter>
                </div>
            </div>
            <div className="d-block d-md-none">
                <BrowserRouter className="flexMenuDisplay"/>
            </div>
            <div className="bottomBarNavigation bg-dark d-block d-md-none">
                <div className="bottomButtonContainer">
                    <BrowserRouter>
                        <BottomBarNavigation/>
                    </BrowserRouter>
                </div>
            </div>
            <CommonIndvDesc/>
        </div>
    )
} 

export default App; 