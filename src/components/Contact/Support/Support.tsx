// import modules/packages
import React from 'react';
import "./Support.css";

// Support component
const Support = () => {
    // function to remove the top nav two element
    const removeNav = () =>{
        const topNavTwo: any = document.getElementById("top-nav-two");
        {topNavTwo? topNavTwo.style.display = "none": console.log(false)}
    }

    // call the function
    removeNav();
    return (
        <div id='support' className='app-section-wrapper'>
            <h2>Support</h2>
        </div>
    );
};

export default Support;