// import modules/packages
import React, { useState } from "react";
import "./ArticleLeftNav.css";

// LeftAsideNav component
const ArticleLeftNav = () => {
    // hide top nav two
    const hideTopNav = () =>{
        // get element by id
        const topNavTwo = document.getElementById("top-nav-two");
        {topNavTwo? console.log(true): console.log(false)};

        if(topNavTwo){
            topNavTwo.style.display = "none";
        }else{
            console.log("element not found");
        };
    };

    hideTopNav();

    // use states to control left nav visibility
    const [getStartedMenu, setGetStartedMenu] = useState<boolean>(false);

    const handleSectionToggle = (): any =>{
        setGetStartedMenu(!getStartedMenu);        
    };

    return (
        <aside id="article-left-nav">
            <h4 className="main-container-section-header">Table of content</h4>
            <div id="left-nav-aside-content-container">
                <div className="left-nav-aside-content">
                    <h4 className="aside-content-header" onClick={()=>handleSectionToggle()}>Sections</h4>
                    <ol id="get-started" className={ getStartedMenu? "aside-content-list-active": "aside-content-list"}>
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
            </div>
        </aside>
    );
};

export default ArticleLeftNav;