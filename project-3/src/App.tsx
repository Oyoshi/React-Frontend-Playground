import { AppBar, Toolbar, Typography, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "styles/customTheme";
import RegisterForm from "components/RegisterForm";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
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
