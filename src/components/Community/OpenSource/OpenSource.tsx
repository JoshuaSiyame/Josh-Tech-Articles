// import modules/packages
import React from "react";
import "./OpenSource.css";

// Opensource component 
const OpenSource = () => {
    // function to remove the top nav two element
    const removeNav = () =>{
        const topNavTwo: any = document.getElementById("top-nav-two");
        {topNavTwo? topNavTwo.style.display = "none": console.log(false)}
    }

    // call the function
    removeNav();
    
    return (
        <div id="opensource" className="app-section-wrapper">
            <h2>OpenSource</h2>
        </div>
    )
}

export default OpenSource