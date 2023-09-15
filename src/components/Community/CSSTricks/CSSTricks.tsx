// import modules/packages
import React from "react";
import "./CSSTricks.css";

// CSSTricks component
const CSSTricks = () =>{
    // function to remove the top nav two element
    const removeNav = () =>{
        const topNavTwo: any = document.getElementById("top-nav-two");
        {topNavTwo? topNavTwo.style.display = "none": console.log(false)}
    }

    // call the function
    removeNav();
    return (
        <div id="css-tricks" className="app-section-wrapper">
            <h2>CSSTricks</h2>
        </div>
    );
};

export default CSSTricks;