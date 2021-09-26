import React from 'react';
import Module from '@/Component/Module';
import GlobalStyle from '@/Component/GlobalStyle';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import UserPage from './Page/UserPage';
import LogIn from './Page/LogIn';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Module} />
          <Route path="/login" component={LogIn} />
          <Route path="/userpage/:userId" component={UserPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
