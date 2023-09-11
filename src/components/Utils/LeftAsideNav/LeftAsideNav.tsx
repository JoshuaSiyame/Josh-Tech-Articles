// import modules/packages
import React from "react";
import "./LeftAsideNav.css";

// LeftAsideNav component
const LeftAsideNav = () => {
    return (
        <aside id="left-nav-aside">
            <h4 className="main-container-section-header">Guides</h4>
            <div id="left-nav-aside-content-container">
                <div className="left-nav-aside-content">
                    <h4 className="aside-content-header">Get Started</h4>
                    <ol id="" className="aside-content-list">
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">ExpressJs Js project structure</a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">ExpressJs Ts project structure</a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">ExpressJs Js project structure</a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">ReactJs Js project structure</a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">ReactJs Ts project structure</a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">MongoDB models</a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">TypeScript for MERN stack</a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">Test-Driven-Development</a>
                        </li>
                    </ol>
                </div>
                <div className="left-nav-aside-content">
                    <h4 className="aside-content-header">Frameworks</h4>
                    <ol id="" className="aside-content-list">
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">ExpressJs</a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">ReactJs</a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">NextJs</a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">Jest</a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">React-Testing-Library</a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">Bootstrap</a>
                        </li>
                    </ol>
                </div>
                <div className="left-nav-aside-content">
                    <h4 className="aside-content-header">Projects</h4>
                    <ol id="" className="aside-content-list">
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">ExpressJs</a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">ReactJs</a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">NextJs</a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">MERN-Stack</a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">React-Testing-Library</a>
                        </li>
                    </ol>
                </div>
            </div>
        </aside>
    );
};

export default LeftAsideNav;