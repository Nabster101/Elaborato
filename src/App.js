import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarHome from './components/Navbar/Navbar';
import CarouselHome from './components/Carousel/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <NavbarHome/>
            <CarouselHome/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
