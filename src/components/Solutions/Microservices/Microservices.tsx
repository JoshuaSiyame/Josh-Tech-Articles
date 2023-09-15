// import modules/packages
import React from 'react';
import "./Microservices.css";

// Microservices component 
const Microservices = () => {

  // function to remove the top nav two element
  const removeNav = () => {
    const topNavTwo: any = document.getElementById("top-nav-two");
    { topNavTwo ? topNavTwo.style.display = "none" : console.log(false) }
  }

  // call the function
  removeNav();
  
  return (
    <div id='microservices' className='app-section-wrapper'>
      <h2>Microservices</h2>
    </div>
  )
}

export default Microservices;