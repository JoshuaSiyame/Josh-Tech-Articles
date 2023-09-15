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
import About from "./Site/About/About";
import Blog from "./Site/Blog/Blog";
import Testimonials from "./Site/Testimonials/Testimonials";
import Articles from "./Community/Articles/Articles";
import CSSTricks from "./Community/CSSTricks/CSSTricks";
import Meetups from "./Community/Meetups/Meetups";
import OpenSource from "./Community/OpenSource/OpenSource";
import QuestAns from "./Community/QuestAns/QuestAns";
import Apis from "./Solutions/APIs/Apis";
import Microservices from "./Solutions/Microservices/Microservices";
import Mobile from "./Solutions/Mobile/Mobile";
import Web from "./Solutions/Web/Web";
import Support from "./Contact/Support/Support";
import ReportIssue from "./Contact/ReportIssue/ReportIssue";
import Subscription from "./Subscription/Subscription";


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
                            <Route path="/subscribe" element={<Subscription />} />
                            <Route path="/feedback" />
                            <Route path="/login" />
                            <Route path="/signin" />
                            <Route path="/site" >
                                <Route path="/site/about" element={<About />} />
                                <Route path="/site/blog" element={<Blog />} />
                                <Route path="/site/testimonials" element={<Testimonials />}/>
                            </Route>
                            <Route path="/community">
                                <Route path="/community/articles" element={<Articles />}/>
                                <Route path="/community/questAns" element={<QuestAns />}/>
                                <Route path="/community/css-tricks" element={<CSSTricks />}/>
                                <Route path="/community/meetups" element={<Meetups />}/>
                                <Route path="/community/opensource" element={<OpenSource />}/>
                            </Route>
                            <Route path="/solutions">
                                <Route path="/solutions/apis" element={<Apis />}/>
                                <Route path="/solutions/web" element={<Web />} />
                                <Route path="/solutions/mobile" element={<Mobile />} />
                                <Route path="/solutions/microservices" element={<Microservices />} />
                            </Route>
                            <Route path="/contact">
                                <Route path="/contact/support" element={<Support />} />
                                <Route path="/contact/report-issue" element={<ReportIssue />} />
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