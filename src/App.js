import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from './components/Auth/Login';
import NuevoUsuario from './components/Auth/NuevoUsuario';
import Registro from './components/Empleados/Registro';
import ListadoEmpleados from './components/Empleados/ListadoEmpleados';
import Repuestos from './components/Repuestos/Repuestos';


import EmpleadosState from './context/empleados/empleadosState';




import ApolloCliente from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { HttpLink} from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

const createApolloCliente = () => {
  return new ApolloCliente({
    link: new HttpLink({
      uri: 'http://localhost:8080/v1/graphql',
      headers:{

      }
    }),
    cache: new InMemoryCache()
  })
}

function App() {
  const cliente = createApolloCliente();
    return ( 
      <ApolloProvider client={cliente} >
        <EmpleadosState>
          <Router>
            <Switch>
              <Route exact path="/" component = {Login} />
              <Route exact path="/nuevo-usuario" component = {NuevoUsuario} />
              <Route exact path="/registro" component= {Registro} />
              <Route exact path="/listado-empleados" component = {ListadoEmpleados} />
              <Route exact path="/repuestos" component= {Repuestos} />
            </Switch>
          </Router>
        </EmpleadosState>
      </ApolloProvider>
    );
}

export default App;