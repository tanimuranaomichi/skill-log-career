import React, { useState, useEffect } from 'react';
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
import { DataRef } from './firebase';

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

const App = () => {
  const [Data, setData] = useState([])

  useEffect(() => {
    DataRef("UserA").orderByKey().limitToLast(10).on("value", (snapshot) => {
      const Data = snapshot.val()
      if (Data === null) return
      const entries = Object.entries(Data)
      const newData = entries.map((data) => {
        const [detail, skill] = data
        return { detail, ...skill }
      })
      setData(newData)
      console.log(newData);
    })
  }, [])
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
      {Data.map((d) => (
        <div key={d.detail}>
        </div>
      ))}

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

export default App;