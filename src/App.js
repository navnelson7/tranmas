import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from './components/Auth/Login';
import Registro from './components/Empleados/Registro';
import Repuestos from './components/Repuestos/Repuestos';

function App() {
    return ( 
      <Router>
        <Switch>
          <Route exact path="/" component = {Login} />
          <Route exact path="/registro" component= {Registro} />
          <Route exact path="/repuestos" component= {Repuestos} />
        </Switch>
      </Router>
    );
}

export default App;