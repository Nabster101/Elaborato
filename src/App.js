import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

function App (){
   return (
        <div className="App">
          <Router>
              <Redirect from="/" to="/home" />
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/iscriviti" component={Signup}/>
              </Switch>
          </Router>
        </div>
    );
}

export default App;
