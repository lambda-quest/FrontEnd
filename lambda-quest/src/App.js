import React from 'react';
import { Route, Switch } from 'react-router-dom';
//routes
import './App.css';
import Login from './Views/Login/Login'

//auth



function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/' exact render={() => <h1>Welcome to Lambda Quest</h1>} />
      <Route path='/login' exact component={Login} />
      {/* <Route path='/register' exact component={Register} /> */}
      {/* <Route path='/about' render={} /> */}
      {/* <Route path='/game' render={} /> */}
      {/* <Route component={NotFound}/> */}
      </Switch>
    </div>
  );
}

export default App;
