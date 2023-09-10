// import modules/packages
import React from "react";
import "./TopNavTwo.css";

// TopNavTwo component
const TopNavTwo = () =>{
    return (
        <div id="top-nav-two" className="app-section-wrapper">
            <input id="search-box" name="search-box" required/>
            <ol id="t-n-t-l">
                <li className="t-n-l-i">
                    <a href="" className="t-n-l-i-l">Latest</a>
                </li>
                <li className="t-n-l-i">
                    <a href="" className="t-n-l-i-l">ExpressJs</a>
                </li>
                <li className="t-n-l-i">
                    <a href="" className="t-n-l-i-l">ReactJs</a>
                </li>
                <li className="t-n-l-i">
                    <a href="" className="t-n-l-i-l">NodeJs</a>
                </li>
                <li className="t-n-l-i">
                    <a href="" className="t-n-l-i-l">MongoDB</a>
                </li>
                <li className="t-n-l-i">
                    <a href="" className="t-n-l-i-l">JavaScript</a>
                </li>
                <li className="t-n-l-i">
                    <a href="" className="t-n-l-i-l">TypeScript</a>
                </li>
                <li className="t-n-l-i">
                    <a href="" className="t-n-l-i-l">Web3</a>
                </li>
                <li className="t-n-l-i">
                    <a href="" className="t-n-l-i-l">Others</a>
                </li>
            </ol>

        </div>
    );
};

export default TopNavTwo;