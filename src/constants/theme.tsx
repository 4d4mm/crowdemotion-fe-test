import { PaletteType } from '@material-ui/core'
export default {
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen-Sans",
      "Ubuntu",
      "Cantarell",
      "Helvetica Neue",
      "sans-serif"
    ].join(",")
  },
  
  palette: {
    type: 'dark' as PaletteType,
    primary: {
      main: "#007aff"
    },
    secondary: {
      main: "#fff"
    }
  }
};
