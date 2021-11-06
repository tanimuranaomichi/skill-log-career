import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
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
//import { DataRef, setAchievement } from './firebase';
import { database } from './firebase';


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
  const [skill, setSkill] = useState([])
  //const [data_key, setData_key] = useState([])
  const DataRef = (name) => {
    return new Promise((resolve, reject) => {
      if (name !== "") {
        database.ref(name).orderByKey().limitToLast(10).on("value", (snapshot) => {
          const messages = snapshot.val()
          if (messages === null) return
          const entries = Object.entries(messages)
          const newMessages = entries.map((data) => {
            const [key, message] = data
            return { key, ...message }
          })
          //setSkill(newMessages)
          //console.log(newMessages[1])
          //setData_key(Object.keys(newMessages[1]))
          resolve(newMessages);
        })
      }
      else {
        reject();
      }
    });
  };
  async function asyncDataRef(name) {
    var tempData = await DataRef(name);
    //console.log(tempData);
    setSkill(tempData);
    return tempData;
    //return tempData;
  };

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
      <Button variant="outlined" onClick={async () => { var data = await asyncDataRef("UserA"); console.log(data); console.log(data[1].a) }}>button</Button>
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