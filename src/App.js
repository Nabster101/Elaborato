import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarHome from './components/Navbar/Navbar';
import CarouselHome from './components/Carousel/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Presentation from "./components/Presentation/Presentation";
import Visite from "./components/Visite/Visite";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
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
