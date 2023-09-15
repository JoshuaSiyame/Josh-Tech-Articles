// import modules/packages
import React from "react";
import "./ReportIssue.css";

// ReportIssues component
const ReportIssue = () => {
    // function to remove the top nav two element
    const removeNav = () =>{
        const topNavTwo: any = document.getElementById("top-nav-two");
        {topNavTwo? topNavTwo.style.display = "none": console.log(false)}
    }

    // call the function
    removeNav();
    return (
        <div id="report-issue" className="app-section-wrapper">
            <h2>ReportIssue</h2>
        </div>
    );
};

export default ReportIssue;