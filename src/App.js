import React from 'react';
import Module from '@/Component/Module';
import GlobalStyle from '@/Component/GlobalStyle';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Module} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
