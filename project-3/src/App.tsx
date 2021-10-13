import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import RegisterForm from "components/register-form";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "styles/custom-theme";

const App = () => {
  return (
    <ThemeProvider theme={CustomTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Multistep Register Form</Typography>
        </Toolbar>
      </AppBar>
      <RegisterForm />
    </ThemeProvider>
  );
};

export default App;
