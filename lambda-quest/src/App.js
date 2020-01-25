import React from 'react';
import { Route, Switch } from 'react-router-dom';
//routes
import './App.css';
import Nav from './Views/About/Nav'
import Login from './Views/Login/Login'
import Register from './Views/Register/Register'
import About from './Views/About/About'
import Game from './Views/Game/Game'
import NotFound from './Views/NotFound/NotFound'
//auth
import history from './helpers/history'
import PrivateRoute from './helpers/auth/private-route'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route path='/' exact component={Login} />
      {/* <Route path='/login' exact component={Login} /> */}
      <Route path='/register' exact component={Register} /> 
      <Route path='/about' exact component={About} />
      <PrivateRoute path='/game' exact component={Game} />
      <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
