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
            <LeftAsideNav />
            <MainContent />
            <RightAsideNav />
        </main>
    );
};

export default MainContainer;