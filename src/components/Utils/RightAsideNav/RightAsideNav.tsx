// import modules/packages
import React, { useState } from "react";
import "./RightAsideNav.css";

// RightAsideNav component 
const RightAsideNav = () => {
    // use state to handle the articles display
    const [articlesDisplay, setArticleDisplay] = useState<boolean>(false);

    // function to handle the display
    const handleArticlesDisplay = () =>{
        setArticleDisplay(!articlesDisplay);
    };

    return (
        <aside id="right-nav-aside">
            <h4 className="main-container-section-header">Popular articles</h4>
            <div id="right-nav-aside-content-container">
                <div className="right-nav-aside-content">
                    <h4 className="aside-content-header" onClick={()=>handleArticlesDisplay()}>Articles</h4>
                    <ol id="" className={articlesDisplay? "aside-content-list-active" :"aside-content-list" }>
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