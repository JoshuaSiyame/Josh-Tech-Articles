// import modules/packages
import React from "react";
import "./RightAsideNav.css";

// RightAsideNav component 
const RightAsideNav = () => {
    return (
        <aside id="right-nav-aside">
            <h4 className="main-container-section-header">Popular articles</h4>
            <div id="right-nav-aside-content-container">
                <div className="right-nav-aside-content">
                    <h4 className="aside-content-header">Articles</h4>
                    <ol id="" className="aside-content-list">
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">
                                How to Redeploy Your Vercel Functions to a Different Region for Manual Failover
                            </a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">
                            How to Redeploy Your Vercel Functions to a Different Region for Manual Failover
                            </a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">
                            How to Redeploy Your Vercel Functions to a Different Region for Manual Failover
                            </a>
                        </li>
                        <li className="aside-content-list-item">
                            <a href="" className="aside-content-list-item-link">TypeScript for MERN stack</a>
                        </li>
                    </ol>
                </div>
            </div>
        </aside>
    );
};

export default RightAsideNav;