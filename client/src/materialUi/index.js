import { createTheme} from '@material-ui/core/styles';
import { blue, red, green } from '@material-ui/core/colors';

const theme = createTheme({
  props:{
    MuiButton:{
      variant:"contained",
      color:"secondary",
    },
    
  },
  palette: {
    type: "light",
    primary: {
      main: blue[500],
      contrastText: "#ffff"
    },
    secondary: {
      main: green[500],
      contrastText: "#ffff"
    },
    text: {
      primary: "#ffffff",
      secondary: blue[500],
    },
    background:{
      paper: blue[500],
      default: red[100],
    }
  },
  typography:{
    fontFamily: "Roboto",
  },
  
});

export default theme;