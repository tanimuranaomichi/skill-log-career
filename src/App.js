import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { blue, green } from '@mui/material/colors';
import { GlobalStyles } from '@mui/material';
import Home from './screens/home';
import Login from './screens/login';
import Questionnaire from './screens/questionnaire';

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

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
        <ThemeProvider theme={theme} />
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              Skill Log Career
            </Typography>
          </Toolbar>
        </AppBar>
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/questionnaire' component={Questionnaire} />
            <Route path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;