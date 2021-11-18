import { Switch, Route } from "react-router-dom";
import { AboutUs } from "./AboutUs";
import { OurNeig } from "./OurNeigh";
export function About() {
  return (
    <Switch>
      <Route path="/about/our-neighbourhood" component={OurNeig} />
      <Route path="/about/" component={AboutUs} />
    </Switch>
  );

}