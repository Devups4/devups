import React from 'react';
import { Route } from 'react-router-dom';

const LogIn = ({ match }) => {
  return (
    <>
      <div>hi</div>
      <Route exact path={`${match.path}/asdf`} render={() => <div>hi</div>} />
    </>
  );
};

export default LogIn;
