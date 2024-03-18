import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" key="general"><News category="general" /></Route>
        <Route exact path="/business" key="business"><News category="business" /></Route>
        <Route exact path="/science" key="science"><News category="science" /></Route>
        <Route exact path="/technology" key="technology"><News category="technology" /></Route>
        <Route exact path="/sports" key="sports"><News category="sports" /></Route>
        <Route exact path="/health" key="health"><News category="health" /></Route>
        <Route exact path="/entertainment" key="entertainment"><News category="entertainment" /></Route>
      </Switch>
    </Router>
  );
}

export default App;
