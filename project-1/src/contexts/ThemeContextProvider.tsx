import React, { useState } from "react";

type ThemePostfix = "light" | "dark";

export interface IThemeContext {
  themePostfix: ThemePostfix;
  switchTheme: () => void;
}

export const ThemeContext = React.createContext<IThemeContext>({
  themePostfix: "light",
  switchTheme: () => null,
});

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [themePostfix, setThemePostfix] = useState<ThemePostfix>("light");

  const switchTheme = () => {
    if (themePostfix === "light") {
      setThemePostfix("dark");
    } else {
      setThemePostfix("light");
    }
  };

  const themeContextProviderDefaultValue: IThemeContext = {
    themePostfix: themePostfix,
    switchTheme: switchTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextProviderDefaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};
