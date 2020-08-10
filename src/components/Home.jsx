import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();
    console.log("ml: home.jsx: Home: ", history);
    const routeToGuides = event => {
        history.push("./the-guides");
    };
    const routeToBasics = event => {
        history.push("./basics-guide");
    };
    const routeToAdvanced = event => {
        history.push("./advanced-guides");
    };

    return (
        <div className="home-wrapper">
            <div className="home-section">
            <h2>A Web Developers Guide</h2>
            <p>This was created to help Web Developers old and new with different aspects of Web Development.</p>
            <p>Not everything comes easy to everyone.  So having a set of guides can help along the way.</p>
            <p>The intent of the site is not to be an all inclusive guide but one that is a collaboration of information and will be an ever growing guide.</p>
            <p>We have broken it down into 2 main sections.  Guides for Beginners and Guides for Advanced</p>
            </div>
            <div className="home-buttons">
                <button className="md-button home-button" onClick={routeToGuides}>Beginner Guides</button>
                <button className="md-button home-button" onClick={routeToBasics}>See Basics Guides</button>
                <button className="md-button home-button" onClick={routeToAdvanced}>Advanced Guides</button>
            </div>
        </div>
    );
}

export default Home;