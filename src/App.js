import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './screens/home';
import Login from './screens/login';
import Questionnaire from './screens/questionnaire';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>Skill Log Career</header>
        <main>
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/questionnaire" component={Questionnaire} />
              <Route path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;