import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from '@material-ui/core/styles';
import Routes from "./Routes";
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';

const App = ({ store, basename }) => {
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: blue[400],
      },
      secondary: {
        main: orange[50],
      } 
    },
    typography: {
      fontSize: 10,
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        <BrowserRouter basename={basename}>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
