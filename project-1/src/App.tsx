import { BrowserRouter, Route } from "react-router-dom";
import { LandingPage } from "components/pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutus" component={LandingPage} />
      <Route path="/portfolio" component={LandingPage} />
      <Route path="/ourprocess" component={LandingPage} />
      <Route path="/contact" component={LandingPage} />
      <Route component={() => <h1>404</h1>} />
    </BrowserRouter>
  );
};
