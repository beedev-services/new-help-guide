import React from "react";
import { useHistory } from "react-router-dom";

function Guides() {
    const history = useHistory();
    console.log("ml: home.jsx: Home: ", history);
    const routeToBasics = event => {
        history.push("./basics-guide");
    };
    const routeToHtml = event => {
        history.push("./html-guide");
    };
    const routeToCss = event => { 
        history.push("./css-guide");
    };
    const routeToJs = event => { 
        history.push("./js-guide");
    };
    const routeToAdvanced = event => {
        history.push("./advanced-guides");
    };

    return (
        <div className="home-wrapper">
            <div className="home-section">
            <h2>A Web Developers Guide for Beginners</h2>
            <p>These guides are for the Web Developers that are just starting out</p>
            </div>
            <div className="home-buttons">
                <button className="md-button home-button" onClick={routeToBasics}>See Basics Guides</button>
                <button className="md-button home-button" onClick={routeToHtml}>See HTML Guides</button>
                <button className="md-button home-button" onClick={routeToCss}>See CSS Guides</button>
                <button className="md-button home-button" onClick={routeToJs}>See JS Guides</button>
                <button className="md-button home-button" onClick={routeToAdvanced}>Advanced Guides</button>
            </div>
        </div>
    );
}

export default Guides;