import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#42404d",
      light: "#4e5763",
      dark: "#171f2a",
      contrastText: "#fff"
    },
    secondary: {
      main: "#51bc9a",
      light: "#73c9ae",
      dark: "#38836b",
      contrastText: "#000"
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Roboto Condensed"].join(","),
    useNextVariants: true
  }
});

export default theme;
