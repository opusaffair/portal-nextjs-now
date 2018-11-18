import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const Theme = createMuiTheme({
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
    fontFamily: ['"Libre Baskerville"', '"Roboto Condensed"'].join(","),
    useNextVariants: true
  }
});

export default Theme;
