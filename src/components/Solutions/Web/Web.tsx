// import modules/packages
import React from "react";
import "./Web.css";

// Web component
const Web = () => {

  // function to remove the top nav two element
  const removeNav = () => {
    const topNavTwo: any = document.getElementById("top-nav-two");
    { topNavTwo ? topNavTwo.style.display = "none" : console.log(false) }
  }

  // call the function
  removeNav();
  
  return (
    <div id="web" className="app-section-wrapper">
      <h2>Web</h2>
    </div>
  )
}

export default Web