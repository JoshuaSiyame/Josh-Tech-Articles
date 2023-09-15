// import modules/packages
import React from "react";
import "./About.css";

// about component
const About = () =>{
    // function to remove the top nav two element
    const removeNav = () =>{
        const topNavTwo: any = document.getElementById("top-nav-two");
        {topNavTwo? topNavTwo.style.display = "none": console.log(false)}
    }

    // call the function
    removeNav();
    return (
        <div id="about" className="app-section-wrapper">
            <h2>About page</h2>
        </div>
    );
};

export default About;