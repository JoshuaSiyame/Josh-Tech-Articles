// import modules/packages
import React, { useState } from "react";
import "./ArticleRightNav.css";

// LeftAsideNav component
const ArticleRightNav = () => {
    // use states to control left nav visibility
    const [getStartedMenu, setGetStartedMenu] = useState<boolean>(false);

    const handleConceptsToggle = (): any =>{
        setGetStartedMenu(!getStartedMenu);        
    };

    return (
        <aside id="article-right-nav">
            <h4 className="main-container-section-header">Must know concepts</h4>
            <div id="left-nav-aside-content-container">
                <div className="left-nav-aside-content">
                    <h4 className="aside-content-header" onClick={()=>handleConceptsToggle()}>Concepts</h4>
                    <ol id="get-started" className={ getStartedMenu? "aside-content-list-active": "aside-content-list"}>
                        <li className="aside-content-list-item aside-content-list-item-link">
                            Arrow functions
                        </li>
                        <li className="aside-content-list-item aside-content-list-item-link">
                            Object destructuring
                        </li>
                        <li className="aside-content-list-item aside-content-list-item-link">
                            Props drilling
                        </li>
                        <li className="aside-content-list-item aside-content-list-item-link">
                            State Management
                        </li>
                    </ol>
                </div>
            </div>
        </aside>
    );
};

export default ArticleRightNav;