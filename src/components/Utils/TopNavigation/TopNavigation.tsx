// import modulea/packages
import React from "react";
import "./TopNavigation.css";
import TopNavOne from "./TopNavOne/TopNavOne";

// TopNavigation component 
const TopNavigation = () =>{
    return (
        <nav className="app-section-wrapper">
            <TopNavOne />
        </nav>
    );
};

export default TopNavigation;