import './App.css';
import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Axios from "axios";

function App (){

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            console.log(response);
        })
    }, []);

    return (
        <div className="App">
          <Router>
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
