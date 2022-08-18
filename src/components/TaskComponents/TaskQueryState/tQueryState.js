import { useEffect } from "react";
import TRouter from "../TaskRoutes/tRoutes";

import "./tQueryState.css";

const QueryState=({stateData,queryFetch,setData,status,deleter})=>{
    
    useEffect(()=>{
        if(status==="success") setData(queryFetch);
    },[queryFetch,setData,status])
 
    if (status === "loading") {
            return (
                <div className="loading">
    
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" display="block">
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#2d8fff">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite" />
                        </rect>
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#2d8fff" transform="rotate(30 50 50)">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite" />
                        </rect>
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#2d8fff" transform="rotate(60 50 50)">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite" />
                        </rect>
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#2d8fff" transform="rotate(90 50 50)">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite" />
                        </rect>
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#2d8fff" transform="rotate(120 50 50)">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite" />
                        </rect>
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#2d8fff" transform="rotate(150 50 50)">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite" />
                        </rect>
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#2d8fff" transform="rotate(180 50 50)">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite" />
                        </rect>
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#2d8fff" transform="rotate(210 50 50)">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite" />
                        </rect>
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#2d8fff" transform="rotate(240 50 50)">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite" />
                        </rect>
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#2d8fff" transform="rotate(270 50 50)">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite" />
                        </rect>
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#2d8fff" transform="rotate(300 50 50)">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite" />
                        </rect>
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#2d8fff" transform="rotate(330 50 50)">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
                        </rect>
                    </svg>
                </div>
            )
        } 
        if (status === "error") {
            return (
                <div className="errorMessage">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512">
                        <path d="M223 1.5C166.4 9.3 117.6 33 77.1 72.5 34.9 113.7 9.3 165 1.5 224.3c-1.7 13.5-2 45.5-.5 59.2 5.3 48.1 24.2 94.2 54 132 14.4 18.3 38 40.1 57.8 53.3 34.5 23.2 75.4 38 117 42.3 14.5 1.5 52.2.6 65.7-1.5 12.3-2 33.9-7.3 38-9.3 17.9-9 19.1-34.8 2.1-44.8-6.8-4-13.5-4.3-24.8-1.1-93.2 26.2-193.9-18.3-238.1-105.1-21.4-42-27.6-88.4-18.2-135 6.1-30.2 21.2-62.4 40.4-86.3 27.3-34 66.4-59.7 108.1-70.9 37.3-10.1 80.5-8.8 117.8 3.5C367 75.8 411 112.4 435 155.7c11.1 19.9 18.9 41.4 23.1 63.6 3 15.8 3.7 47.6 1.5 64-3.9 28-14.7 58.4-28.4 79.7-7.3 11.3-8.8 18.8-6 28.4 1.8 5.9 9.9 13.8 16.1 15.5 6.8 1.9 15.6.9 21.3-2.4 5.8-3.4 13.6-15.1 23.4-35 11.3-23 18.5-45.3 23-70.6 2.8-15.5 3.9-52.8 2.1-70.1-3.2-30.5-11.4-58.4-25.7-87.5-31.9-64.9-91-113.4-161.9-132.8-23.2-6.3-34-7.7-63.5-8.1-19.2-.2-29.4.1-37 1.1z"/>
                        <path d="M247.7 110.4c-5.5 2.1-10.3 6.1-13.4 11.4l-2.8 4.7-.3 89.8c-.1 58.7.1 91.1.8 93.6 1.5 5.6 6.3 11.6 11.7 14.8 4.2 2.4 5.8 2.8 12.9 2.8 7.2 0 8.6-.3 12.9-3 3.1-1.9 6.1-4.9 8-7.9l3-4.9.3-90.5c.1-58.7-.1-91.7-.8-94.1-1.5-5.5-6.2-11.6-11.5-14.7-5.6-3.2-15-4.2-20.8-2zM247.7 354.4c-5.5 2-10.3 6.1-13.4 11.4-2.4 4-2.8 5.8-2.8 12.3 0 6.7.4 8.1 3 12.5 7.9 12.7 23.3 16 36 7.6 7.9-5.2 10.9-11.3 10.3-21.5-.3-6.1-.9-8.3-3.3-12.3-4.4-7-10.9-10.8-19.4-11.1-3.9-.2-8.1.3-10.4 1.1z"/>
                    </svg>
                    <h5> Failed to connect .. </h5> 
                </div>
            );
        }
        return (
            <>
                <TRouter stateData={stateData} setData={setData} deleter={deleter}/>
            </>
        )
}

export default QueryState;