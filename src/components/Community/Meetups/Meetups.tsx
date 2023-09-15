// import modules/packages
import React from "react";
import "./Meetups.css";

// Meetups component
const Meetups = () =>{
    // function to remove the top nav two element
    const removeNav = () =>{
        const topNavTwo: any = document.getElementById("top-nav-two");
        {topNavTwo? topNavTwo.style.display = "none": console.log(false)}
    }

    // call the function
    removeNav();
    
    return (
        <div id="meetups" className="app-section-wrapper">
            <h2>Meetups</h2>
        </div>
    );
};

export default Meetups;