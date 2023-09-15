// import modules/packages
import React from "react";
import "./Articles.css";

// Articles component 
const Articles = () =>{
    // function to remove the top nav two element
    const removeNav = () =>{
        const topNavTwo: any = document.getElementById("top-nav-two");
        {topNavTwo? topNavTwo.style.display = "none": console.log(false)}
    }

    // call the function
    removeNav();
    
    return (
        <div id="all-articles" className="app-section-wrapper">
            <h2>Articles</h2>
        </div>
    );
};

export default Articles;