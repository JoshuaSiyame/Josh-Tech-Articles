// import modules/packages
import React from "react";
import { NavLink } from "react-router-dom";
import "./TopNavOne.css";

// TopNavOne component
const TopNavOne = () => {
    return (
        <div id="top-nav-one" className="app-section-wrapper">
            <a href="/" id="site-logo">Josh-Tech-Articles</a>
            <ol id="t-n-o-l">
                <li className="t-n-o-l-i">
                    <NavLink to="/subscribe" id="login" className="t-n-o-l-i-l">
                        Subscribe
                    </NavLink>
                </li>
                {/* <li className="t-n-o-l-i">
                    <NavLink to="/feedback" id="feedback" className="t-n-o-l-i-l">
                        FeedBack
                    </NavLink>
                </li>
                <li className="t-n-o-l-i">
                    <NavLink to="/login" id="login" className="t-n-o-l-i-l">
                        Log In
                    </NavLink>
                </li>
                <li className="t-n-o-l-i">
                    <NavLink to="/signin" id="signin" className="t-n-o-l-i-l">
                        Sign In                        
                    </NavLink>
                </li> */}
            </ol>
        </div>
    );
};

export default TopNavOne;