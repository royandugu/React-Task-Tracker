import { BrowserRouter } from "react-router-dom";
import {fetchTasks,fetchMeetings} from "./components/queryFetchers/fetcher";

import SideMenu from "./components/menu";
import TaskLister from "./components/taskLister";
import MeetingSchedulesHeader from "./components/meetingSchedulesHeader";
import SmlSideMenu from "./components/smlSideMenu";

import "./App.css";


//Create Update and Delete
const App=()=>{    
    
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
                <div className="col-lg-5 col-12 taskListContainer">
                    <BrowserRouter>
                        <TaskLister fetcher={fetchTasks}/>
                    </BrowserRouter>
                </div>
                <div className="col-lg-5 col-12 d-none d-lg-block">
                    <BrowserRouter>
                        <MeetingSchedulesHeader fetcher={fetchMeetings}/>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    )
} 
export default App;