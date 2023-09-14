// import modules/packages
import React from "react";
import "./JavaScript.css";
import RightAsideNav from "../Utils/RightAsideNav/RightAsideNav";
import LeftAsideNav from "../Utils/LeftAsideNav/LeftAsideNav";

// ReactJs component
const JavaScript = () =>{
    return (
        <>
        <LeftAsideNav />
        <div id="javascript" className="">
            <h4 className="main-container-section-header">Articles/JavaScript</h4>
            <div id="articles-content-container">
                <div id="" className="article">
                    <ol id="" className="article-date-author">
                        <li id="" className="article-date-author-item">9/11/2023</li>
                        <li id="" className="article-date-author-item">Author: Joshua Siyame</li>
                    </ol>
                    <a href="" className="article-title-link">
                        <h3 className="article-title">
                            How to Make an Express.js web server.
                        </h3>
                    </a>
                    <p className="article-brief">
                        Learn how to change your Function region if a specific region has degraded performance or availability.
                    </p>
                    <ol id="" className="article-tags">
                        <li className="article-tag-item">NodeJs</li>
                        <li className="article-tag-item">Expressjs</li>
                        <li className="article-tag-item">Deployment</li>
                    </ol>
                </div>
            </div>
        </div>
        <RightAsideNav />
        </>
    );
};

export default JavaScript;