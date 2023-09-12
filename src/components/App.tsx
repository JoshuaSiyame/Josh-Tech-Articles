// import modules/packages
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import components
import AppFooter from "./Utils/Footer/Footer";
import LeftAsideNav from "./Utils/LeftAsideNav/LeftAsideNav";
import RightAsideNav from "./Utils/RightAsideNav/RightAsideNav";
import MainContainer from "./MainContainer/MainContainer";
import TopNavigation from "./Utils/TopNavigation/TopNavigation";
import TopNavTwo from "./Utils/TopNavigation/TopNavTwo/TopNavTwo";

// app component
const App = () => {
    return (
        <BrowserRouter>            
                <div id="app-wrap">
                    <header id="app-header">
                        <TopNavigation />
                    </header>
                    <div id="app-content-wrap">
                        <TopNavTwo />
                        <MainContainer />
                    </div>
                    <footer id="app-footer">
                        <AppFooter />
                    </footer>
                </div>
            <Routes>
                <Route></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;