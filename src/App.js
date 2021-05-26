import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Prestazioni from "./Prestazioni";
import Prenotazione from "./Prenotazione";
import EsamiDigitali from "./EsamiDigitali";
import EsamiDigitaliAggiunta from "./EsamiDigitaliAggiunta";
import Profile from "./Profile";

function App (){
    return (
        <div className="App">
          <Router>
              <Switch>
                  <Route path="/prestazioni"><Prestazioni /></Route>
                  <Route path="/profilo"><Profile /></Route>
                  <Route path="/esami-digitali"><EsamiDigitali /></Route>
                  <Route path="/aggiunta-esami-digitali"><EsamiDigitaliAggiunta /></Route>
                  <Route path="/prenotazione"><Prenotazione /></Route>
                  <Route path="/login"><Login /></Route>
                  <Route path="/iscriviti"><Signup /></Route>
                  <Route path="/"><Home /></Route>
              </Switch>
          </Router>
        </div>
    );
}

export default App;
