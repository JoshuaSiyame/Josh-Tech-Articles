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
                            <NavLink to="/latest" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"} onClick={handleUnToggle}>Latest</NavLink>
                        </li>
                        <li className="m-m-l-i">
                            <NavLink to="/expressjs" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"} onClick={handleUnToggle}>ExpressJs</NavLink>
                        </li>
                        <li className="m-m-l-i">
                            <NavLink to="/reactjs" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"} onClick={handleUnToggle}>ReactJs</NavLink>
                        </li>
                        <li className="m-m-l-i">
                            <NavLink to="/nodejs" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"} onClick={handleUnToggle}>NodeJs</NavLink>
                        </li>
                        <li className="m-m-l-i">
                            <NavLink to="mongodb" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"} onClick={handleUnToggle}>MongoDB</NavLink>
                        </li>
                        <li className="m-m-l-i">
                            <NavLink to="/javascript" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"} onClick={handleUnToggle}>JavaScript</NavLink>
                        </li>
                        <li className="m-m-l-i">
                            <NavLink to="/typescript" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"} onClick={handleUnToggle}>TypeScript</NavLink>
                        </li>
                        <li className="m-m-l-i">
                            <NavLink to="/web3" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"} onClick={handleUnToggle}>Web3</NavLink>
                        </li>
                        <li className="m-m-l-i">
                            <NavLink to="/others" className={({isActive})=>isActive ? "m-m-l-i-l-active m-m-l-i-l" : "m-m-l-i-l"} onClick={handleUnToggle}>Others</NavLink>
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