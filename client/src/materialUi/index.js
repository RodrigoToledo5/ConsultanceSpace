import { createTheme} from '@material-ui/core/styles';
import { blue, red} from '@material-ui/core/colors';

const theme = createTheme({
  props:{
    MuiButton:{
      variant:"contained",
      color:"secondary",
    },
    "MuiDataGrid-root":{
      color: "secondary"
    },
  },
  palette: {
    type: "light",
    primary: {
      main: blue[500],
      contrastText: "#00000"
    },
    secondary: {
      main: blue[500],
      contrastText: "#ffff"
    },
    text: {
      primary: "#00000",
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