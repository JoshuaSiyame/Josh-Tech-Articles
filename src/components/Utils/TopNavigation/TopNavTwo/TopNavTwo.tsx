// import modules/packages
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
                            <NavLink to="/latest" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"}>Latest</NavLink>
                        </li>
                        <li className="m-m-l-i">
                            <NavLink to="/ExpressJs" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"}>ExpressJs</NavLink>
                        </li>
                        <li className="m-m-l-i">
                            <NavLink to="/ReactJs" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"}>ReactJs</NavLink>
                        </li>
                        <li className="m-m-l-i">
                            <NavLink to="/NodeJs" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"}>NodeJs</NavLink>
                        </li>
                        <li className="m-m-l-i">
                            <NavLink to="/MongoDB" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"}>MongoDB</NavLink>
                        </li>
                        <li className="m-m-l-i">
                            <NavLink to="/JavaScript" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"}>JavaScript</NavLink>
                        </li>
                        <li className="m-m-l-i">
                            <NavLink to="/TypeScript" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"}>TypeScript</NavLink>
                        </li>
                        <li className="m-m-l-i">
                            <NavLink to="/Web3" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"}>Web3</NavLink>
                        </li>
                        <li className="m-m-l-i">
                            <NavLink to="/Others" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"}>Others</NavLink>
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