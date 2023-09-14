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
                        {/* <LeftAsideNav /> */}
                        <Routes>
                            <Route path="/" element={<Latest />} />
                            <Route path="/expressjs" element={<ExpressJs />} />
                            <Route path="/reactjs" element={<ReactJs />} />
                            <Route path="/nodejs" element={<NodeJs />} />
                            <Route path="/mongodb" element={<MongoDB />} />
                            <Route path="/javascript" element={<JavaScript />} />
                            <Route path="/typescript" element={<TypeScript />} />
                            <Route path="/web3" element={<Web3 />} />
                            <Route path="/others" element={<Others />} />
                            <Route path="/feedback" />
                            <Route path="/login" />
                            <Route path="/signin" />
                            <Route path="/site" >
                                <Route path="/site/about" />
                                <Route path="/site/blog" />
                                <Route path="/site/testimonials" />
                            </Route>
                            <Route path="/community">
                                <Route path="/community/articles" />
                                <Route path="/community/questAns" />
                                <Route path="/community/css-tricks" />
                                <Route path="/community/meetups" />
                                <Route path="/community/opensource" />
                            </Route>
                            <Route path="/solutions">
                                <Route path="/solutions/apis" />
                                <Route path="/solutions/web" />
                                <Route path="/solutions/mobile" />
                                <Route path="/solutions/microservices" />
                            </Route>
                            <Route path="/contact">
                                <Route path="/contact/support" />
                                <Route path="/contact/expertise" />
                                <Route path="/contact/report-issue" />
                            </Route>
                        </Routes>
                        {/* <RightAsideNav /> */}
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