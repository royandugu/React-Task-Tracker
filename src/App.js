import {useState} from "react";
import {BrowserRouter } from "react-router-dom";
import {fetchTasks,fetchMeetings} from "./components/QueryFetchers/fetcher";

import SideMenu from "./components/MenuLg/menuLg";
import TaskLister from "./components/TaskLister/taskLister";
import MeetingSchedulesHeader from "./components/MeetingSchedulesHeader/meetingSchedulesHeader";
import SmlSideMenu from "./components/MenuSml/smlSideMenu";
import BottomBarNavigation from "./components/BottomBarNavigation/bottomBarNavigation";


import "./App.css";


//Create Update and Delete
const App=()=>{    
    const [containerHeight,setContainerHeight]=useState(window.innerHeight);
    window.onresize=()=>setContainerHeight(window.innerHeight);

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 col-12 menuComp d-none d-lg-block">
                    <div className="posFixed">
                        <SideMenu/>
                    </div>
                </div>
                <div className="col-12 d-block d-lg-none" style={{zIndex:2}}>
                    <div className="posFixedSml bg-dark">
                        <div className="flexBox">
                            <SmlSideMenu/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 taskListContainer d-none d-lg-block">
                    <BrowserRouter>
                        <TaskLister fetcher={fetchTasks} containerHeight={containerHeight}/>
                    </BrowserRouter>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                    <BrowserRouter>
                        <MeetingSchedulesHeader fetcher={fetchMeetings} containerHeight={containerHeight}/>
                    </BrowserRouter>
                </div>
            </div>
            <div className="d-block d-lg-none">
                <BrowserRouter className="flexMenuDisplay">
                    <TaskLister fetcher={fetchTasks} containerHeight={containerHeight}/>
                    <MeetingSchedulesHeader fetcher={fetchMeetings} containerHeight={containerHeight}/>
                </BrowserRouter>
            </div>
           <div className="bottomBarNavigation bg-dark d-block d-lg-none">
                <div className="bottomButtonContainer">
                    <BrowserRouter>
                        <BottomBarNavigation/>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    )
} 
export default App;