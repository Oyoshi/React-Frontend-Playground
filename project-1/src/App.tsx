import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeContextProvider } from "contexts";
import {
  HomePage,
  AboutUsPage,
  ContactPage,
  PortfolioPage,
  OurProcessPage,
  GenericErrorPage,
  NOT_FOUND_PAGE,
} from "components/pages";

export const App = () => {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Switch>
          <Route key="HOME" exact path="/" component={HomePage} />
          <Route key="ABOUT_US" path="/aboutus" component={AboutUsPage} />
          <Route key="PORTFOLIO" path="/portfolio" component={PortfolioPage} />
          <Route
            key="OUR_PROCESS"
            path="/ourprocess"
            component={OurProcessPage}
          />
          <Route key="CONTACT" path="/contact" component={ContactPage} />
          <Route
            key="PAGE_404"
            render={() => <GenericErrorPage {...NOT_FOUND_PAGE} />}
          />
        </Switch>
      </BrowserRouter>
    </ThemeContextProvider>
  );
};
