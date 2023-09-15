// import modules/packages
import React from "react";
import "./Testimonials.css";

// Testimonials component
const Testimonials = () =>{
    // function to remove the top nav two element
    const removeNav = () =>{
        const topNavTwo: any = document.getElementById("top-nav-two");
        {topNavTwo? topNavTwo.style.display = "none": console.log(false)}
    }

    // call the function
    removeNav();
    
    return (
        <div id="testimonials" className="app-section-wrapper">
            <h2>Testimonials</h2>
        </div>
    );
};

export default Testimonials;