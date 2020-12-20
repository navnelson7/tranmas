import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Auth/Login";
import { SearchContextProvider } from "./context/ContextInputSearch";

import Navegacion from "./components/Navegacion";
import NavegacionTop from "./components/Navegacion/NavegacionTop";
import RegistroCombustible from "./components/UnidadesTransporte/Combustible/Registro";
import EditarCombustible from "./components/UnidadesTransporte/Combustible/EditarCombustible";
import { SpinnerLazy } from "./components/Loader/SpinnerLazy";

//IMPORT LAZY IN COMPONENTS
const NuevoUsuario = lazy(() => import("./components/Auth/NuevoUsuario"));

const Registro = lazy(() => import("./components/Empleados/Registro"));

const NuevoProveedor = lazy(() => import("./components/Proveedores/Registro"));

const EditarProveedor = lazy(() => import("./components/Proveedores/Editar"));
const ListadoEmpleados = lazy(() =>
  import("./components/Empleados/ListadoEmpleados")
);
const RegistroTransporte = lazy(() =>
  import("./components/UnidadesTransporte/Registro")
);
const EditarTransporte = lazy(() =>
  import("./components/UnidadesTransporte/Editar")
);
const UnidadesTransporte = lazy(() =>
  import("./components/UnidadesTransporte")
);

const EditarRepuestos = lazy(() => import("./components/Repuestos/Editar"));

const FormRepuestos = lazy(() => import("./components/Repuestos/FormRepuetos"));

const ListadoRepuestos = lazy(() =>
  import("./components/Repuestos/ListadoRepuestos")
);

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

const FichaEmpleado = lazy(() =>
  import("./components/Empleados/FichaEmpleado.js")
);

const PdfEmpleado = lazy(() => import("./components/Empleados/PdfEmpleado"));
const CapturaFotoEmpleado = lazy(() =>
  import("./components/Empleados/CapturaFotoEmpleado")
);

const RegistroFaltas = lazy(() =>
  import("./components/Empleados/RegistroFaltas")
);

const Proveedores = lazy(()=>
  import("./components/Proveedores/Proveedor")
);

function App() {
  return (
    <Fragment>
      <Router>
        <SearchContextProvider>
          <NavegacionTop />
          <Navegacion />
          <Switch>
            <Route exact path="/" component={Login}>
              <Suspense fallback="Cargando....">
                <EditarTransporte />
              </Suspense>
            </Route>
            <Route exact path="/editar-combustible/:id">
              <EditarCombustible />
            </Route>
            <Route exact path="/registro-combustible/:id">
              <RegistroCombustible />
            </Route>
            <Route exact path="/actualizar-unidad-transporte/:id">
              <Suspense fallback="Cargando....">
                <EditarTransporte />
              </Suspense>
            </Route>
            <Route exact path="/registro-transporte">
              <Suspense fallback="Cargando....">
                <RegistroTransporte />
              </Suspense>
            </Route>
            <Route exact path="/unidades-transporte">
              <Suspense fallback={<SpinnerLazy/>}>
                <UnidadesTransporte />
              </Suspense>
            </Route>
            <Route exact path="/actualizar-repuestos/:id">
              <Suspense fallback="Cargando....">
                <EditarRepuestos />
              </Suspense>
            </Route>
            <Route exact path="/actualizar-proveedor/:id">
              <Suspense fallback="Cargando....">
                <EditarProveedor />
              </Suspense>
            </Route>
            <Route exact path="/nuevo-proveedor">
              <Suspense fallback="Cargando....">
                <NuevoProveedor />
              </Suspense>
            </Route>
            <Route exact path="/proveedores">
              <Suspense fallback="Cargando....">
                <Proveedores />
              </Suspense>
            </Route>
            <Route exact path="/nuevo-usuario">
              <Suspense fallback="Cargando....">
                <NuevoUsuario />
              </Suspense>
            </Route>
            <Route exact path="/registro">
              <Suspense fallback="Cargando....">
                <Registro />
              </Suspense>
            </Route>
            <Route exact path="/listado-empleados">
              <Suspense fallback="Cargando....">
                <ListadoEmpleados />
              </Suspense>
            </Route>
            <Route
              exact
              path="/ficha-empleado/:codigo_empleado"
              component={FichaEmpleado}
            >
              <Suspense fallback="Cargando....">
                <FichaEmpleado />
              </Suspense>
            </Route>

            <Route exact path="/listado-repuestos" component={ListadoRepuestos}>
              <Suspense fallback="Cargando...">
                <ListadoRepuestos />
              </Suspense>
            </Route>

            <Route exact path="/formulario-repuestos">
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
            <Route exact path="/listado-estados-repuestos">
              <Suspense fallback="Cargando...">
                <ListadoEstadoRepuestos />
              </Suspense>
            </Route>
            <Route exact path="/formulario-estados">
              <Suspense fallback="Cargando...">
                <FormularioEstadoRepuestos />
              </Suspense>
            </Route>
            <Route exact path="/pdf-empleado" component={PdfEmpleado}>
              <Suspense fallback="Cargando...">
                <PdfEmpleado />
              </Suspense>
            </Route>
            <Route
              exact
              path="/captura-foto-empleado"
              component={CapturaFotoEmpleado}
            >
              <Suspense fallback="Cargando....">
                <CapturaFotoEmpleado />
              </Suspense>
            </Route>
            <Route exact path="/registro-faltas" component={RegistroFaltas}>
              <Suspense fallback="Cargando...">
                <RegistroFaltas />
              </Suspense>
            </Route>
          </Switch>
        </SearchContextProvider>
      </Router>
    </Fragment>
  );
}

export default App;
