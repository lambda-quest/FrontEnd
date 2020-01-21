import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//router
import { BrowserRouter as Router, Route } from 'react-router-dom';
//redux
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootreducer from './reducer'

const store = createStore(rootreducer, applyMiddleware(thunk));

ReactDOM.render(
   <Provider store={store}>
      <Router>
         <Route component={App} />
      </Router>
   </Provider>,
   document.getElementById('root'));