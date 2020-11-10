import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Auth/Login";
import NuevoUsuario from "./components/Auth/NuevoUsuario";
import Registro from "./components/Empleados/Registro";
import ListadoEmpleados from "./components/Empleados/ListadoEmpleados";
import NuevoProveedor from "./components/Proveedores/Registro";
import EditarProveedor from "./components/Proveedores/Editar";
import { SearchContextProvider } from "./context/ContextInputSearch";

import EmpleadosState from "./context/empleados/empleadosState";

import Navegacion from "./components/Navegacion";
import NavegacionTop from "./components/Navegacion/NavegacionTop";

//IMPORT LAZY IN COMPONENTS
const FormRepuestos = lazy(() => import("./components/Repuestos/FormRepuetos"));

const ListadoRepuestos = lazy(() => import("./components/Repuestos/ListadoRepuestos"));

const Proveedores = lazy(() => import("./components/Proveedores"));
const ListadoMarcas = lazy(() => import("./components/Marcas/ListadoMarcas"));
const FormularioMarcas = lazy(() =>
  import("./components/Marcas/FormularioMarcas")
);
const ListadoMedidas = lazy(() =>
  import("./components/Medidas/ListadoMedidas")
);

const FormularioMedidas = lazy(() =>
  import("./components/Medidas/FormularioMedidas")
);

const BusquedaProductos = lazy(() =>
  import("./components/Repuestos/BusquedaProductos")
);

const ListadoEstadoRepuestos = lazy(() =>
  import("./components/EstadoRepuestos/ListadoEstadoRepuestos")
);
const FormularioEstadoRepuestos = lazy(() =>
  import("./components/EstadoRepuestos/FormularioEstadoRepuestos")
);
function App() {
  return (
    <Fragment>
      <Router>
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
              <Route exact path="/nuevo-proveedor" component={NuevoProveedor} />
              <Route exact path="/proveedores">
                <Suspense fallback="Cargando....">
                  <Proveedores />
                </Suspense>
              </Route>
              <Route exact path="/nuevo-usuario" component={NuevoUsuario} />
              <Route exact path="/registro" component={Registro} />
              <Route
                exact
                path="/listado-empleados"
                component={ListadoEmpleados}
              />
              <Route
                exact
                path="/listado-repuestos"
              >
                <Suspense fallback="Cargando...">
                  <ListadoRepuestos />
                </Suspense>
              </Route>
              <Route
                exact
                path="/formulario-repuestos"
              >
                <Suspense fallback="Cargando...">
                  <FormRepuestos />
                </Suspense>
              </Route>
              <Route exact path="/listado-marcas">
                <Suspense fallback="Cargando...">
                  <ListadoMarcas />
                </Suspense>
              </Route>
              <Route exact path="/formulario-marcas">
                <Suspense fallback="Cargando...">
                  <FormularioMarcas />
                </Suspense>
              </Route>
              <Route exact path="/formulario-medidas">
                <Suspense fallback="Cargando...">
                  <FormularioMedidas />
                </Suspense>
              </Route>
              <Route exact path="/listado-medidas">
                <Suspense fallback="Cargando..">
                  <ListadoMedidas />
                </Suspense>
              </Route>
              <Route exact path="/busqueda-productos">
                <Suspense fallback="Cargando...">
                  <BusquedaProductos />
                </Suspense>
              </Route>
              <Route
                exact
                path="/listado-estados-repuestos"
              >
                <Suspense fallback="Cargando...">
                  <ListadoEstadoRepuestos />
                </Suspense>
              </Route>
              <Route exact path="/formulario-estados">
                <Suspense fallback="Cargando...">
                  <FormularioEstadoRepuestos />
                </Suspense>
              </Route>
            </Switch>
          </SearchContextProvider>
      </Router>
    </Fragment>
  );
}

export default App;
