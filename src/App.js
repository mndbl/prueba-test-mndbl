import { Home } from "./pages/Home";
import { Footer } from './partials/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { About } from "./pages/About";
import { Navbar } from "./partials/Navbar";
import { Chart } from "./pages/Chart";
import { HotelOperation } from "./pages/HotelOperation";
import { OurNeig } from "./pages/OurNeigh";
import { GoingGreen } from "./pages/GoingGreen";
import { CustomerService } from "./pages/CustomerService";
import { MarketingPlan } from "./pages/MarketingPlan";
import { ContactUs } from "./pages/ContactUs";
import { TimeLine } from "./pages/TimeLine";
import { BusinessPlan } from "./pages/BusinessPlan";
import { Financials } from "./pages/Financials";
import { Estrategic } from "./pages/Estrategic";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/about/our-neighbourhood" component={OurNeig} />
        <Route path="/going-green" component={GoingGreen} />
        <Route path="/corporate-structure" component={Chart} />
        <Route path="/customer-service" component={CustomerService} />
        <Route path="/marketing-plan" component={MarketingPlan} />
        <Route path="/hotel-operations" component={HotelOperation} />
        <Route path="/negotiation" component={BusinessPlan} />
        <Route path="/future-development" component={TimeLine} />
        <Route path="/financials-plan" component={Financials} />
        <Route path="/strategic-management" component={Estrategic} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
