import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import ResponsiveAppBar from './components/header.js';
import Navbar from './components/navbar.js';
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '5rem',
        },
      },
    },
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#d7083bcc',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <ResponsiveAppBar/>
      <Navbar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button color="primary" variant="contained">Heello</Button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
