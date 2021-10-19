import { createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";

// TODO - for some reason while use mode: "dark" I was not able to override colours - investigate it or raise an issue
const customTheme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
  },
});

export default customTheme;
