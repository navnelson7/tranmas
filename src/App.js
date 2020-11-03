import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Auth/Login";
import NuevoUsuario from "./components/Auth/NuevoUsuario";
import Registro from "./components/Empleados/Registro";
import ListadoEmpleados from "./components/Empleados/ListadoEmpleados";
import ListadoRepuestos from "./components/Repuestos/ListadoRepuestos";
import FormRepuestos from "./components/Repuestos/FormRepuetos";
import NuevoProveedor from "./components/Proveedores/Registro";
import EditarProveedor from "./components/Proveedores/Editar";
import { SearchContextProvider } from "./context/ContextInputSearch";

import EmpleadosState from "./context/empleados/empleadosState";

import Navegacion from "./components/Navegacion";
import Proveedores from "./components/Proveedores";
import NavegacionTop from "./components/Navegacion/NavegacionTop";
import ListadoMarcas from "./components/Marcas/ListadoMarcas";
import FormularioMarcas from "./components/Marcas/FormularioMarcas";
import FormularioMedidas from "./components/Medidas/FormularioMedidas";
import ListadoMedidas from "./components/Medidas/ListadoMedidas";
import BusquedaProductos from "./components/Repuestos/BusquedaProductos";

function App() {
  return (
    <Fragment>
      <Router>
        <EmpleadosState>
            <SearchContextProvider>
                <NavegacionTop />
                <Navegacion />
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route
                    exact
                    path="/actualizar-proveedor/:id"
                    component={EditarProveedor}
                  />
                  <Route
                    exact
                    path="/nuevo-proveedor"
                    component={NuevoProveedor}
                  />
                  <Route exact path="/proveedores" component={Proveedores} />
                  <Route exact path="/nuevo-usuario" component={NuevoUsuario} />
                  <Route exact path="/registro" component={Registro} />
                  <Route exact path="/listado-empleados" component={ListadoEmpleados}/>
                  <Route exact path="/listado-repuestos" component={ListadoRepuestos}/>
                  <Route exact path="/formulario-repuestos" component={FormRepuestos}/>
                  <Route exact path="/listado-marcas" component={ListadoMarcas}/>
                  <Route exact path="/formulario-marcas" component={FormularioMarcas}/>
                  <Route exact path="/formulario-medidas" component={FormularioMedidas}/>
                  <Route exact path="/listado-medidas" component={ListadoMedidas}/>
                  <Route exact path="/busqueda-productos" component={BusquedaProductos} />
                </Switch>
            </SearchContextProvider>
        </EmpleadosState>
      </Router>
    </Fragment>
  );
}

export default App;
