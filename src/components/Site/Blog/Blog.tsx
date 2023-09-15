// import modules/packages
import React from "react";
import "./Blog.css";

// Blog component
const Blog = () =>{
    // function to remove the top nav two element
    const removeNav = () =>{
        const topNavTwo: any = document.getElementById("top-nav-two");
        {topNavTwo? topNavTwo.style.display = "none": console.log(false)}
    }

    // call the function
    removeNav();
    return (
        <div id="blog" className="app-section-wrapper">
            <h2>Blog</h2>
        </div>
    );
};

export default Blog;