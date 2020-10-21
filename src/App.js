import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



import Login from './components/Auth/Login';
import NuevoUsuario from './components/Auth/NuevoUsuario';
import Registro from './components/Empleados/Registro';
import ListadoEmpleados from './components/Empleados/ListadoEmpleados';
import ListadoRepuestos from './components/Repuestos/ListadoRepuestos';
import FormRepuestos from './components/Repuestos/FormRepuetos';
import NuevoProveedor from "./components/Proveedores/Registro";


import EmpleadosState from './context/empleados/empleadosState';
import RepuestosState from './context/repuestos/repuestosState';
import MarcasState from './context/Marcas/marcasSate';

import Navegacion from './components/Navegacion';
import Proveedores from './components/Proveedores';
import NavegacionTop from './components/Navegacion/NavegacionTop';
import ListadoMarcas from './components/Marcas/ListadoMarcas';


function App() {
  return (
    <Fragment>
      <Router>
        <EmpleadosState>
          <MarcasState>
            <RepuestosState>
              <NavegacionTop/>
              <Navegacion />
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/nuevo-proveedor" component={NuevoProveedor} />
                <Route exact path="/proveedores" component={Proveedores} />
                <Route exact path="/nuevo-usuario" component={NuevoUsuario} />
                <Route exact path="/registro" component={Registro} />
                <Route exact path="/listado-empleados" component={ListadoEmpleados} />
                <Route exact path="/listado-repuestos" component={ListadoRepuestos} />
                <Route exact path="/formulario-repuestos" component={FormRepuestos} />
                <Route exact path="/listado-marcas" component={ListadoMarcas} />
              </Switch>
            </RepuestosState>
          </MarcasState>
        </EmpleadosState>
      </Router>
    </Fragment>
  );
}

export default App;