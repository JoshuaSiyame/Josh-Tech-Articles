// import modules/packages
import React from "react";
import "./TopNavOne.css";
import Button from "../../Button/Button";

// TopNavOne component
const TopNavOne = () => {
    return (
        <div id="top-nav-one">
            <a href="" id="site-logo">Josh-Tech-Articles</a>
            <ol id="t-n-o-l">
                <li className="t-n-o-l-i">
                    <a href="" id="feedback" className="t-n-o-l-i-l">
                        FeedBack
                    </a>
                </li>
                <li className="t-n-o-l-i">
                    <a href="" id="login" className="t-n-o-l-i-l">
                        Log In
                    </a>
                </li>
                <li className="t-n-o-l-i">
                    <a href="" id="signin" className="t-n-o-l-i-l">
                        Sign In                        
                    </a>
                </li>
            </ol>
        </div>
    );
};

export default TopNavOne;