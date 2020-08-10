import React from 'react';
import './css/App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Guides from './components/Guides';
import Advanced from "./components/Advanced";
import Html from "./components/guides/html";
import Css from "./components/guides/css";
import Js from "./components/guides/js";
import Reactjs from "./components/guides/reactjs";
import Basics from "./components/guides/basics";
import Nodejs from "./components/guides/nodejs";

function App() {

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
          <Route path="/html-guide">
            <Html />
          </Route>
          <Route path="/css-guide">
            <Css />
           </Route>
           <Route path="/js-guide">
             <Js />
           </Route>
          <Route path="/react-guide">
            <Reactjs />
          </Route>
          <Route path="/node-guide">
            <Nodejs />
          </Route>
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
