import { Home } from "./pages/Home";
import { Footer } from './partials/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { About } from "./pages/About";
import { Navbar } from "./partials/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home}/>
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;
