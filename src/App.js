import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home'
import Navigation from './components/Navigation'
import Entertainment from './components/Entertainment';
import Shop from './components/Shop';
import Events from './components/Events';
import Contact from './components/Contact';
import Info from './components/Info';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/entertainment' component={Entertainment} />
        <Route path='/shop' component={Shop} />
        <Route path='/events' component={Events} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Info />
      <Footer />
    </Router>
  );
}

export default App;
