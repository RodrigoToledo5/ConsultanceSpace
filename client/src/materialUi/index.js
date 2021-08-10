import { createTheme} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import { blue } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;