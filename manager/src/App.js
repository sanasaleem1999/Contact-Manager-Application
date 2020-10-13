import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddManager from "./components/addmanager";
import {  Router, Route, Switch, Link} from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import ListManager from "./components/listmanager"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListManager} />
        <Route path="/addmanager" component={AddManager}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
