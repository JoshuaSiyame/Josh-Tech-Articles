// import modules/packages
import React, { useState } from 'react';
import "./Subscription.css";

// Subscription component
const Subscription = () => {

    // function to remove the top nav two element
    const removeNav = () =>{
        const topNavTwo: any = document.getElementById("top-nav-two");
        {topNavTwo? topNavTwo.style.display = "none": console.log(false)}
    }

    // call the function
    removeNav();

    return (
        <div id='subscription' className='app-section-wrapper'>
            <h2>Subscription</h2>
        </div>
    )
}

export default Subscription;