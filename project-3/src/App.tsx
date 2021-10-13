import { AppBar, Toolbar, Typography, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "styles/custom-theme";
import RegisterForm from "components/register-form";

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
