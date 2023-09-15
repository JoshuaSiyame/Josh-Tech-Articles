// import modules/packages
import React from 'react';
import "./QuestAns.css";

const QuestAns = () => {
  // function to remove the top nav two element
  const removeNav = () =>{
    const topNavTwo: any = document.getElementById("top-nav-two");
    {topNavTwo? topNavTwo.style.display = "none": console.log(false)}
}

// call the function
removeNav();

  return (
    <div id='quest-ans' className='app-section-wrapper'>
        <h2>QuestAns</h2>
    </div>
  )
}

export default QuestAns;