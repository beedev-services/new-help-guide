import React from "react";
import { useHistory } from "react-router-dom";

function Advanced() {
    const history = useHistory();
    console.log("ml: advanced.jsx: advanced: ", history);
    const routeToGuides = event => {
        history.push("./the-guides");
    };
    const routeToReact = event => { 
        history.push("./react-guide");
    };
    const routeToRedux = event => {
        history.push("./redux-guide");
    };
    const routeToNode = event => {
        history.push("./node-guide");
    };
    const routeToJava = event => {
        history.push("./java-guide");
    };

    return (
        <div className="home-wrapper">
            <div className="home-section">
            <h2>Advanced Web Developers Guides</h2>
            <p>These guides are for the Advanced Web Developers.  Those have already have the Beginner concepts down</p>
            </div>
            <div className="home-buttons">
                <button className="md-button home-button" onClick={routeToGuides}>Beginner Guides</button>
                <button className="md-button home-button" onClick={routeToReact}>See React Guides</button>
                <button className="md-button home-button" onClick={routeToRedux}>See Reduce/Redux Guides</button>
                <button className="md-button home-button" onClick={routeToNode}>See Node Guides</button>
                <button className="md-button home-button" onClick={routeToJava}>See Java Guides</button>
            </div>
        </div>
    );
}

export default Advanced;