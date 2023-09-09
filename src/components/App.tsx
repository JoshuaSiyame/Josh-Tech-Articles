// import modules/packages
import React from "react";
import "./App.css";

// import components
import AppFooter from "./Utils/Footer/Footer";
import LeftAsideNav from "./Utils/LeftAsideNav/LeftAsideNav";
import RightAsideNav from "./Utils/RightAsideNav/RightAsideNav";
import MainContent from "./MainContent/MainContent";
import TopNavigation from "./Utils/TopNavigation/TopNavigation";

// app component
const App = () =>{
    return (
        <div id="app-wrap">
            <header id="app-header">
                <TopNavigation />
            </header>
            <div id="app-content-wrap">
                <LeftAsideNav />
                <MainContent />
                <RightAsideNav />
            </div>
            <footer id="app-footer">
                <AppFooter />
            </footer>
        </div>
    );
};

export default App;