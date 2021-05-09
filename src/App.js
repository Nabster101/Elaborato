import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavbarHome from './components/Navbar/Navbar';
import CarouselHome from './components/Carousel/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Presentation from "./components/Presentation/Presentation";
import Visite from "./components/Visite/Visite";
import Footer from "./components/Footer/Footer";
import 'font-awesome/css/font-awesome.min.css';
import LoginSection from "./components/LoginSection/LoginSection";

function App (){
   return (
        <div className="App">
          <Router>
            <Switch>
              <Route path="/">
                <Redirect to="/home" />
                <NavbarHome/>
                <CarouselHome/>
                <Presentation/>
                <Visite/>
                <Footer />
              </Route>
            </Switch>
          </Router>
        </div>
    );
}

export default App;
