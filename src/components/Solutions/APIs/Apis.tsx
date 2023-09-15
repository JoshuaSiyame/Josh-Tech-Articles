// import modules/packages
import React from 'react';
import "./Apis.css";

const Apis = () => {
  // function to remove the top nav two element
  const removeNav = () => {
    const topNavTwo: any = document.getElementById("top-nav-two");
    { topNavTwo ? topNavTwo.style.display = "none" : console.log(false) }
  }

  // call the function
  removeNav();
  return (
    <div id='apis' className='app-section-wrapper'>
      <h2>Apis</h2>
    </div>
  )
}

export default Apis;