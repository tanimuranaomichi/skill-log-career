import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, ThemeProvider, Drawer, Button } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import { createTheme, styled } from '@mui/material/styles';
import { blue, green } from '@mui/material/colors';
import Home from './screens/home';
import Login from './screens/login';
import Questionnaire from './screens/questionnaire';
import { database } from './firebase';
import Archivement from './screens/achievement';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

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
  
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
      <ThemeProvider theme={theme} />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Skill Log Career
          </Typography>
        </Toolbar>
      </AppBar>

      <Button variant="outlined" onClick={async () => { var data = await asyncDataRef("UserA"); console.log(data); console.log(data[1].a) }}>button</Button>

      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>

        <List>
          <ListItemButton component="a" href="/">
            <ListItemText primary="ホーム" />
          </ListItemButton>
          <ListItemButton component="a" href="/login">
            <ListItemText primary="ログイン" />
          </ListItemButton>
          <ListItemButton component="a" href="/questionnaire">
            <ListItemText primary="アンケート" />
          </ListItemButton>
          <ListItemButton component="a" href="/achievement">
            <ListItemText primary="実績" />
          </ListItemButton>
        </List>
      </Drawer>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/questionnaire' component={Questionnaire} />
          <Route path='/achievement' component={Archivement} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;