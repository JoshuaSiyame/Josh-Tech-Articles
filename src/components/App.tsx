// import modules/packages
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./MainContainer/MainContainer.css";
import "./MainContent/MainContent.css";

// import components
import AppFooter from "./Utils/Footer/Footer";
import LeftAsideNav from "./Utils/LeftAsideNav/LeftAsideNav";
import RightAsideNav from "./Utils/RightAsideNav/RightAsideNav";
import MainContainer from "./MainContainer/MainContainer";
import TopNavigation from "./Utils/TopNavigation/TopNavigation";
import TopNavOne from "./Utils/TopNavigation/TopNavOne/TopNavOne";
import TopNavTwo from "./Utils/TopNavigation/TopNavTwo/TopNavTwo";
import Latest from "./Latest/Latest";
import ExpressJs from "./ExpressJs/ExpressJs";
import ReactJs from "./ReactJs/ReactJs";
import NodeJs from "./NodeJs/NodeJs";
import MongoDB from "./MongoDB/MongoDB";
import JavaScript from "./JavaScript/JavaScript";
import TypeScript from "./TypeScript/TypeScript";
import Web3 from "./Web3/Web3";
import Others from "./Others/Others";


// app component
const App = () => {
    return (
        <BrowserRouter>
            <div id="app-wrap">
                <header id="app-header">
                    <TopNavOne />
                </header>
                <div id="app-content-wrap">
                    <TopNavTwo />
                    <main id="main-container" className="app-section-wrapper">
                        <LeftAsideNav />
                        <Routes>
                            <Route path="/latest" element={<Latest />} index />
                            <Route path="/expressjs" element={<ExpressJs />} />
                            <Route path="/reactjs" element={<ReactJs />} />
                            <Route path="/nodejs" element={<NodeJs />} />
                            <Route path="/mongodb" element={<MongoDB />} />
                            <Route path="/javascript" element={<JavaScript />} />
                            <Route path="/typescript" element={<TypeScript />} />
                            <Route path="/web3" element={<Web3 />} />
                            <Route path="/others" element={<Others />} />
                        </Routes>
                        <RightAsideNav />
                    </main>
                </div>
                <footer id="app-footer">
                    <AppFooter />
                </footer>
            </div>
        </BrowserRouter>
    );
};

export default App;