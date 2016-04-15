import React from 'react';
import {Route} from 'react-router';
import App from './App.js';
import Player from './Player.js';

export default (
  <Route component= {App}>
    <Route path='/' component={Player}/>
  </Route>
);
