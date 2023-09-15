// import modules/packages
import React from 'react'
import "./Mobile.css";

// Mobile component 
const Mobile = () => {
  // function to remove the top nav two element
  const removeNav = () => {
    const topNavTwo: any = document.getElementById("top-nav-two");
    { topNavTwo ? topNavTwo.style.display = "none" : console.log(false) }
  }

  // call the function
  removeNav();

  return (
    <div id='mobile' className='app-section-wrapper'>
      <h2>Mobile</h2>
    </div>
  );
};


export default Mobile;