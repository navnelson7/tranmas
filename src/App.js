import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from './components/Auth/Login';
import NuevoUsuario from './components/Auth/NuevoUsuario';
import Registro from './components/Empleados/Registro';
import ListadoEmpleados from './components/Empleados/ListadoEmpleados';
import ListadoRepuestos from './components/Repuestos/ListadoRepuestos';
import FormRepuestos from './components/Repuestos/FormRepuetos';


import EmpleadosState from './context/empleados/empleadosState';
import RepuestosState from './context/repuestos/repuestosState';

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
          <RepuestosState>
            <Router>
                  <Switch>
                    <Route exact path="/" component = {Login} />
                    <Route exact path="/nuevo-usuario" component = {NuevoUsuario} />
                    <Route exact path="/registro" component= {Registro} />
                    <Route exact path="/listado-empleados" component = {ListadoEmpleados} />
                    <Route exact path="/listado-repuestos" component= {ListadoRepuestos} />
                    <Route exact path="/formulario-repuestos" component= {FormRepuestos} />
                  </Switch>
                </Router>
          </RepuestosState>
        </EmpleadosState>
      </ApolloProvider>
    );
}

export default App;