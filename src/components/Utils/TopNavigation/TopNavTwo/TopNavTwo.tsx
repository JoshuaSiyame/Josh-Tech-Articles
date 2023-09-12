// import modules/packages
import React, { useState } from "react";
import "./TopNavTwo.css";

// import icons 
import { FaBars, FaTimes } from "react-icons/fa";

// TopNavTwo component 
const TopNavTwo = () => {
    // states to handle menu on media less than 769px
    const [toggle, setToggle] = useState<boolean>(false);

    // handle toggle
    const handleToggle = () => {
        setToggle(!toggle);
    };

    // handle untoggle
    const handleUnToggle = () => {
        setToggle(false);
    }

    return (
        <div id="top-nav-two" className="app-section-wrapper">
            <div id="top-nav-two-container">
                <div id="search-box-container">
                    <form id="search-form-1">
                        <div className="s-b-f-g">
                            <input name="search-box-item" placeholder="search articles here..." id="s-b-f-c-1" className="s-b-f-c" />
                        </div>
                    </form>
                </div>
                <div id="main-menu-container">
                    <ol id={toggle ? "main-menu-list" : "main-menu-list-inactive"}>
                        <li className="m-m-l-i">
                            <a href="" className="m-m-l-i-l">Latest</a>
                        </li>
                        <li className="m-m-l-i">
                            <a href="" className="m-m-l-i-l">ExpressJs</a>
                        </li>
                        <li className="m-m-l-i">
                            <a href="" className="m-m-l-i-l">ReactJs</a>
                        </li>
                        <li className="m-m-l-i">
                            <a href="" className="m-m-l-i-l">NodeJs</a>
                        </li>
                        <li className="m-m-l-i">
                            <a href="" className="m-m-l-i-l">MongoDB</a>
                        </li>
                        <li className="m-m-l-i">
                            <a href="" className="m-m-l-i-l">JavaScript</a>
                        </li>
                        <li className="m-m-l-i">
                            <a href="" className="m-m-l-i-l">TypeScript</a>
                        </li>
                        <li className="m-m-l-i">
                            <a href="" className="m-m-l-i-l">Web3</a>
                        </li>
                        <li className="m-m-l-i">
                            <a href="" className="m-m-l-i-l">Others</a>
                        </li>
                        <li className="m-m-l-i" style={{ marginTop: "3em" }}>
                            <FaTimes id="close-icon" className="nav-icons" onClick={handleUnToggle} />
                        </li>
                    </ol>
                    <FaBars id="hamburger-icon" className="nav-icons" onClick={handleToggle} />
                </div>
            </div>
            <div id="alt-search-box">
                <form id="search-form-2">
                    <div className="s-b-f-g">
                        <input name="search-box-item" placeholder="search articles here..." className="s-b-f-c" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TopNavTwo;