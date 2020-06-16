import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: { main: "#246eb9", dark: "#f2e86d" },
    secondary: { main: "#f50057" },
    background: { paper: "#f0f3f5", default: "#1e2d2f" },
  },

  spacing: (factor) => `${[0.5, 0.8, 1.3, 2.1, 3.4, 5.5, 8.9, 14.4][factor]}rem`,
});
