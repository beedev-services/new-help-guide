import React from "react";
import { useHistory } from "react-router-dom";

function About() {
    const history = useHistory();
    console.log("ml: about.jsx: ", history);

    return (
        <div className="about-wrapper">
            <div className="about-header">
                <h1>
                    About the Guide
                </h1>
            </div>
            <div className="about-text">
                <p>
                    The idea for the guide was created while 1 of the Authors was going through school for Web Dev.  Through out every Web Developers career there are times when errors happen and many times they are simple ones.  So this guide was create to help trouble shoot some errors when it might be the simple things that were forgotten.
                </p>
            </div>
            <div className="about-the-authors">
                <div className="author-heading">
                <h2>The Contributors</h2>
                </div>
                <div className="the-cards">
                    <div className="author-card">
                        <div className="author">
                            <div className="author-picture">
                                <img src="https://images.craftsnherbs.com/melissa.png" alt="" />
                            </div>
                            <div className="author-info">
                                <h4>Melissa Longenberger</h4>
                                <p>I am a Web Developer as well as a Network Engineer.  I love building websites and helping others. </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}

export default About;