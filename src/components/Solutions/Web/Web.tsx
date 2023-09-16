// import modules/packages
import React from "react";
import "./Web.css";

// Web component
const Web = () => {

  // function to remove the top nav two element and change the id from main-content to other-main-content
  const removeNav = () => {
    const topNavTwo: any = document.getElementById("top-nav-two");
    const mainContainer = document.getElementById("main-container");
    { topNavTwo ? topNavTwo.style.display = "none" : console.log(false) }
    { mainContainer ? console.log("found") : console.log(false) };

    if (mainContainer) {
      // remove id
      mainContainer.id = "other-main-content"
    }
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