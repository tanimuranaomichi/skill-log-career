import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import Typography from '@mui/material/Typography';
import { ThemeProvider, Drawer } from '@mui/material';
import { createTheme, styled } from '@mui/material/styles';
import { blue, green } from '@mui/material/colors';
import { GlobalStyles } from '@mui/material';
import Home from './screens/home';
import Login from './screens/login';
import Questionnaire from './screens/questionnaire';
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