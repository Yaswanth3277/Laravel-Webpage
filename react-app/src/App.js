import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import './index.js';
import Home from './components/Home';
import Admin from './components/admin';
import Manager from './components/manager';
import Visitor from './components/visitor';
import Resident from './components/residentpage';
import Login from './components/login';
import Register from './components/register';
import Chat from './components/chat';
import HomeVisit from './components/homevisitors';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/manager" component={Manager}/>
          <Route exact path="/visitor" component={Visitor}/>
          <Route exact path="/resident" component={Resident}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/chat" component={Chat}/>
          <Route exact path="/homevisit" component={HomeVisit}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;