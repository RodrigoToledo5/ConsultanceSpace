import { createTheme} from '@material-ui/core/styles';
import { blue, red} from '@material-ui/core/colors';

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
      main: "#ffff",
      contrastText: blue[500]
    },
    secondary: {
      main: blue[500],
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
    h4:{marginBottom:"10px"},
  },
  
});

export default theme;