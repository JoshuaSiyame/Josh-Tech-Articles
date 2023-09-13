// import modules/packages
import React from "react";
import "./MainContainer.css";

// import components
import LeftAsideNav from "../Utils/LeftAsideNav/LeftAsideNav";
import RightAsideNav from "../Utils/RightAsideNav/RightAsideNav";
import MainContent from "../MainContent/MainContent";
import ExpressJs from "../ExpressJs/ExpressJs";

// MainContent component 
const MainContainer = (displayElement: any) => {
    const { data } = displayElement;

    console.log(data)
    return (
        <main id="main-container" className="app-section-wrapper">
            <LeftAsideNav />
            <MainContent />
            <RightAsideNav />
        </main>
    );
};

export default MainContainer;