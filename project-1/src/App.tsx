import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeContext, IThemeContext, ThemePostfix } from "contexts";
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
  const [themePostfix, setThemePostfix] = useState<ThemePostfix>("light");

  const switchTheme = () => {
    if (themePostfix === "light") {
      setThemePostfix("dark");
    } else {
      setThemePostfix("light");
    }
  };

  const themeContextProviderValue: IThemeContext = {
    themePostfix: themePostfix,
    switchTheme: switchTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextProviderValue}>
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
    </ThemeContext.Provider>
  );
};
