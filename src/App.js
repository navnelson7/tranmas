import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from './components/Auth/Login';
import Registro from './components/Auth/Registro';

function App() {
    return ( 
      <Router>
        <Switch>
          <Route exact path="/" component = {Login} />
          <Route exact path="/registro" component= {Registro} />
        </Switch>
      </Router>
    );
}

export default App;