import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { theme } from "./app-theme";
import Router from "./pages/Router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
