import React from 'react';
import './css/App.css';
// import styled from "styled-components";
import {Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Guides from './components/Guides';
import Advanced from "./components/Advanced";
// import Html from "./components/html/Html";
// import Css from "./components/css/Css";
// import Js from "./components/js/Js";
// import ReactGuide from "./components/react/ReactGuide";
import Basics from "./components/guides/basics";
// import Node from "./components/nodejs/Nodejs";
// import Redux from "./components/redux/Redux";

function App() {
  // const [tips, setTips] = useState([]);
 
    // useEffect(() => {
    //         axios
    //         .get("https://beedev-services-help-guide-api.herokuapp.com/api/tips")
    //         .then(res => {
    //             setTips(res.data);
    //         })
    //         .catch(err => alert("Error gettinglist! \n" + err));
    // }, []);

  return (
    <div className="App">
      <nav>
          <div className="title-bar">
            <h2>A Web Developers Guide</h2>
            <h4>Tips, Tricks, and Hints</h4>
            </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/the-guides">Basic Guides</Link>
            <Link to="/advanced-guides">Advanced Guides</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/the-guides">
              <Guides />
            </Route>
          <Route path="/advanced-guides">
              <Advanced />
            </Route>
          <Route path="/basics-guide">
            <Basics />
          </Route>
          {/* <Route path="/html-guide">
            <Html />
          </Route> */}
          {/* <Route path="/css-guide">
            <Css />
           </Route> */}
           {/* <Route path="/js-guide">
             <Js />
           </Route> */}
          {/* <Route path="/react-guide">
            <ReactGuide />
          </Route> */}
          {/* <Route path="/redux-guide">
            <Redux />
          </Route> */}
          {/* <Route path="/node-guide">
            <Node />
          </Route> */}
          <Route path="/" component={Home} />
        </Switch>
        <div className="Footer">
        <div className="madeby">
        <img src="https://images.craftsnherbs.com/beelogo.jpg" alt="" />
        <h4>Created by BeeDev Services &copy; 2020</h4>
        </div>
        </div>
    </div>
  );
}

export default App;
