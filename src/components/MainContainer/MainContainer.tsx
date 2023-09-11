// import modules/packages
import React from "react";
import "./MainContainer.css";

// import components
import LeftAsideNav from "../Utils/LeftAsideNav/LeftAsideNav";
import RightAsideNav from "../Utils/RightAsideNav/RightAsideNav";
import MainContent from "../MainContent/MainContent";

// MainContent component 
const MainContainer = () => {
    return (
        <main id="main-container" className="app-section-wrapper">
            <aside id="left-nav-aside">
                <h4 className="main-container-section-header">Guides</h4>
            </aside>
            <div id="main-content">
                <h4 className="main-container-section-header">Articles/Latest</h4>
            </div>
            <aside id="right-nav-aside">
                <h4 className="main-container-section-header">Popular articles</h4>
            </aside>
        </main>
    );
};

export default MainContainer;