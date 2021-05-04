import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { SearchContextProvider } from "./context/ContextInputSearch";
import Loader from "./components/Loader";

import Navegacion from "./components/Navegacion";
import NavegacionTop from "./components/Navegacion/NavegacionTop";
import { SpinnerLazy } from "./components/Loader/SpinnerLazy";
import Login from "./components/Auth/Login";

// LAZY IMPORTS
const RegistroViajes = lazy(() =>
  import("./components/UnidadesTransporte/ControlViajes/Registro")
);
const TableViajes = lazy(() =>
  import("./components/UnidadesTransporte/ControlViajes/TableViajes")
);
const EditarCombustible = lazy(() =>
  import("./components/UnidadesTransporte/Combustible/EditarCombustible")
);
const RegistroCombustible = lazy(() =>
  import("./components/UnidadesTransporte/Combustible/Registro")
);
const FormNuevoAccidente = lazy(() =>
  import("./components/UnidadesTransporte/Accidentes/FormNuevoAccidente")
);
const EditarEmpleado = lazy(() => import("./components/Empleados/Editar"));

const Accidentes = lazy(() =>
  import("./components/UnidadesTransporte/Accidentes/Accidentes")
);

const EstadisticasCombustible = lazy(() =>
  import("./components/UnidadesTransporte/Combustible/statistic")
);

const AlertasCambioRepuesto = lazy(() =>
  import("./components/UnidadesTransporte/AlertasCambioRepuesto")
);
const EditarAccidente = lazy(() =>
  import("./components/UnidadesTransporte/Accidentes/Editar")
);
const TableRegistroCombustible = lazy(() =>
  import("./components/UnidadesTransporte/Combustible/TableCombustible")
);
const EditarDetalleMantenimientoEdificios = lazy(() =>
  import("./components/Edificios/DetalleMantenimiento/Editar")
);
const RegistroDetalleMantenimientoEdificios = lazy(() =>
  import("./components/Edificios/DetalleMantenimiento/Registro")
);
const EditarMantenimientoEdificios = lazy(() =>
  import("./components/Edificios/MantenimientoEdificios/Editar")
);
const RegistroMantenimientoEdificios = lazy(() =>
  import("./components/Edificios/MantenimientoEdificios/Registro")
);
const TableDetalleMantenimientoEdificios = lazy(() =>
  import(
    "./components/Edificios/DetalleMantenimiento/TableDetalleMantenimientoEdificios"
  )
);
const TableMantenimientoEdificios = lazy(() =>
  import(
    "./components/Edificios/MantenimientoEdificios/TableMantenimientoEdificios"
  )
);
const EditarEdificio = lazy(() =>
  import("./components/Edificios/RegistroEdificios/Editar")
);

const RegistroEdificios = lazy(() =>
  import("./components/Edificios/RegistroEdificios/Registro")
);

const TableRegistroEdificios = lazy(() =>
  import("./components/Edificios/RegistroEdificios/TableRegistroEdificios")
);

const CardsEdificios = lazy(() => import("./components/Edificios/Cards"));
const EditarFacturaRepuesto = lazy(() =>
  import("./components/Repuestos/RegistroFacturas/Editar")
);
const RegistroFacturaRepuesto = lazy(() =>
  import("./components/Repuestos/RegistroFacturas/Registro")
);
const TableFacturas = lazy(() =>
  import("./components/Repuestos/RegistroFacturas/TableFacturas")
);
const TableFallasTransporte = lazy(() =>
  import("./components/UnidadesTransporte/LecturaFallas/TableFallas")
);

const EditarCarwash = lazy(() =>
  import("./components/UnidadesTransporte/ConsumoCarwash/Editar")
);

const RegistroCarwash = lazy(() =>
  import("./components/UnidadesTransporte/ConsumoCarwash/Registro")
);
const TableCarwash = lazy(() =>
  import("./components/UnidadesTransporte/ConsumoCarwash/TableCarwash")
);

const EditarRefrendaCirculacion = lazy(() =>
  import("./components/UnidadesTransporte/RefrendaTarjetaCirculacion/Editar")
);
const RegistroRefrendaCirculacion = lazy(() =>
  import("./components/UnidadesTransporte/RefrendaTarjetaCirculacion/Registro")
);
const TableRefrendaCirculacion = lazy(() =>
  import(
    "./components/UnidadesTransporte/RefrendaTarjetaCirculacion/TableRefrendaCirculacion"
  )
);

const RegistroRefrenda = lazy(() =>
  import("./components/Empleados/RegistroRefrenda")
);

const EditarTapiceria = lazy(() =>
  import("./components/UnidadesTransporte/ControlTapiceria/Editar")
);

const RegistroTapiceria = lazy(() =>
  import("./components/UnidadesTransporte/ControlTapiceria/Registro")
);

const TableTapiceria = lazy(() =>
  import("./components/UnidadesTransporte/ControlTapiceria/TableTapiceria")
);

const EditarAireAcondicionado = lazy(() =>
  import("./components/UnidadesTransporte/AireAcondicionado/Editar")
);

const RegistroAireAcondicionado = lazy(() =>
  import("./components/UnidadesTransporte/AireAcondicionado/Registro")
);

const TableAireAcondicionado = lazy(() =>
  import(
    "./components/UnidadesTransporte/AireAcondicionado/TableAireAcondicionado"
  )
);
const EditarRegistroEnTaller = lazy(() =>
  import("./components/UnidadesTransporte/Taller/RegistroTaller/Editar")
);
const EditarDetalleEnTaller = lazy(() =>
  import("./components/UnidadesTransporte/Taller/DetalleEnTaller/Editar")
);
const RegistroDetalleEnTaller = lazy(() =>
  import("./components/UnidadesTransporte/Taller/DetalleEnTaller/Registro")
);
const RegistroTaller = lazy(() =>
  import("./components/UnidadesTransporte/Taller/RegistroTaller")
);

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

const Proveedores = lazy(() => import("./components/Proveedores/index"));

function App() {
  return (
    <Fragment>
      <Router>
        <SearchContextProvider>
          <NavegacionTop />
          <Navegacion />
          <Switch>
            <Route exact path="/" component={Login}>
              <Suspense fallback={<Loader />}>
                <EditarTransporte />
              </Suspense>
            </Route>

            <Route exact path="/registro/viajes/:idUnidadTransporte">
              <Suspense fallback={<Loader />}>
                <RegistroViajes />
              </Suspense>
            </Route>

            <Route exact path="/control/viajes/:idUnidadTransporte">
              <Suspense fallback={<Loader />}>
                <TableViajes />
              </Suspense>
            </Route>
            <Route exact path="/actualizar-empleado/:id">
              <Suspense fallback={<Loader />}>
                <EditarEmpleado />
              </Suspense>
            </Route>
            <Route exact path="/accidentes/:id">
              <Suspense fallback={<Loader />}>
                <Accidentes />
              </Suspense>
            </Route>
            <Route exact path="/editar/combustible/:id/:idUnidadTransporte">
              <Suspense fallback={<Loader />}>
                <EditarCombustible />
              </Suspense>
            </Route>
            <Route exact path="/estadisticas/combustible/:id">
              <Suspense fallback={<Loader />}>
                <EstadisticasCombustible />
              </Suspense>
            </Route>
            <Route exact path="/registro/combustible/:id">
              <Suspense fallback={<Loader />}>
                <RegistroCombustible />
              </Suspense>
            </Route>
            <Route exact path="/editar/registro/taller/:id/:idUnidadTransporte">
              <Suspense fallback={<Loader />}>
                <EditarRegistroEnTaller />
              </Suspense>
            </Route>

            <Route exact path="/alertas/cambio/repuesto/:idUnidadTransporte">
              <Suspense fallback={<Loader />}>
                <AlertasCambioRepuesto />
              </Suspense>
            </Route>

            <Route exact path="/fallas/transporte/:id">
              <Suspense fallback={<Loader />}>
                <TableFallasTransporte />
              </Suspense>
            </Route>

            <Route exact path="/editar/facturas/repuestos/:id">
              <Suspense fallback={<Loader />}>
                <EditarFacturaRepuesto />
              </Suspense>
            </Route>
            <Route exact path="/registro/facturas/repuestos">
              <Suspense fallback={<Loader />}>
                <RegistroFacturaRepuesto />
              </Suspense>
            </Route>

            <Route exact path="/editar/matenimiento/edificios/:idMantenimiento">
              <Suspense fallback={<Loader />}>
                <EditarMantenimientoEdificios />
              </Suspense>
            </Route>

            <Route exact path="/registro/matenimiento/edificios">
              <Suspense fallback={<Loader />}>
                <RegistroMantenimientoEdificios />
              </Suspense>
            </Route>

            <Route
              exact
              path="/editar/detalle/matenimiento/edificios/:idDetalle/:idMantenimiento"
            >
              <Suspense fallback={<Loader />}>
                <EditarDetalleMantenimientoEdificios />
              </Suspense>
            </Route>

            <Route
              exact
              path="/registro/detalle/matenimiento/edificios/:idMantenimiento"
            >
              <Suspense fallback={<Loader />}>
                <RegistroDetalleMantenimientoEdificios />
              </Suspense>
            </Route>
            <Route
              exact
              path="/tabla/detalle/matenimiento/edificios/:idMantenimiento"
            >
              <Suspense fallback={<Loader />}>
                <TableDetalleMantenimientoEdificios />
              </Suspense>
            </Route>

            <Route
              exact
              path="/editar/registro/accidente/:id/:idUnidadTransporte"
            >
              <Suspense fallback={<Loader />}>
                <EditarAccidente />
              </Suspense>
            </Route>
            <Route exact path="/registro/accidente/:id">
              <FormNuevoAccidente />
            </Route>
            <Route exact path="/tabla/registro/combustible/:idUnidadTransporte">
              <Suspense fallback={<Loader />}>
                <TableRegistroCombustible />
              </Suspense>
            </Route>

            <Route exact path="/tabla/matenimiento/edificios">
              <Suspense fallback={<Loader />}>
                <TableMantenimientoEdificios />
              </Suspense>
            </Route>
            <Route exact path="/editar/registro/edificio/:idEdificio">
              <Suspense fallback={<Loader />}>
                <EditarEdificio />
              </Suspense>
            </Route>
            <Route exact path="/registro/edificios">
              <Suspense fallback={<Loader />}>
                <RegistroEdificios />
              </Suspense>
            </Route>

            <Route path="/tabla/edificios">
              <Suspense fallback={<Loader />}>
                <TableRegistroEdificios />
              </Suspense>
            </Route>

            <Route exact path="/edificios">
              <Suspense fallback={<Loader />}>
                <CardsEdificios />
              </Suspense>
            </Route>

            <Route exact path="/facturas/repuestos">
              <Suspense fallback={<Loader />}>
                <TableFacturas />
              </Suspense>
            </Route>

            <Route
              exact
              path="/editar/aire/acondicionado/:idTransporte/:idAireAcondicionado"
            >
              <Suspense fallback={<Loader />}>
                <EditarAireAcondicionado />
              </Suspense>
            </Route>

            <Route exact path="/registro/aire/acondicionado/:id">
              <Suspense fallback={<Loader />}>
                <RegistroAireAcondicionado />
              </Suspense>
            </Route>

            <Route exact path="/editar/tapiceria/:idTapiceria/:idTransporte">
              <Suspense fallback={<Loader />}>
                <EditarTapiceria />
              </Suspense>
            </Route>

            <Route exact path="/registro/tapiceria/:id">
              <Suspense fallback={<Loader />}>
                <RegistroTapiceria />
              </Suspense>
            </Route>

            <Route exact path="/tabla/tapiceria/:id">
              <Suspense fallback={<Loader />}>
                <TableTapiceria />
              </Suspense>
            </Route>

            <Route
              exact
              path="/editar/consumo/carwash/:idCarwash/:idTransporte"
            >
              <Suspense fallback={<Loader />}>
                <EditarCarwash />
              </Suspense>
            </Route>
            <Route exact path="/registro/consumo/carwash/:id">
              <Suspense fallback="Cargando....">
                <RegistroCarwash />
              </Suspense>
            </Route>
            <Route exact path="/tabla/consumo/carwash/:id">
              <Suspense fallback={<Loader />}>
                <TableCarwash />
              </Suspense>
            </Route>

            <Route
              exact
              path="/editar/refrenda/circulacion/:idRefrenda/:idTransporte"
            >
              <Suspense fallback={<Loader />}>
                <EditarRefrendaCirculacion />
              </Suspense>
            </Route>

            <Route exact path="/registro/refrenda/circulacion/:id">
              <Suspense fallback={<Loader />}>
                <RegistroRefrendaCirculacion />
              </Suspense>
            </Route>
            <Route exact path="/tabla/refrenda/circulacion/:id">
              <Suspense fallback={<Loader />}>
                <TableRefrendaCirculacion />
              </Suspense>
            </Route>
            <Route exact path="/tabla/aire/acondicionado/:id">
              <Suspense fallback={<Loader />}>
                <TableAireAcondicionado />
              </Suspense>
            </Route>

            <Route exact path="/editar/detalle/taller/:id/:idUnidadTransporte">
              <Suspense fallback={<Loader />}>
                <EditarDetalleEnTaller />
              </Suspense>
            </Route>
            <Route exact path="/registro/detalle/taller/:id/:unidadTransporte">
              <Suspense fallback={<Loader />}>
                <RegistroDetalleEnTaller />
              </Suspense>
            </Route>

            <Route exact path="/registro/taller/:id">
              <Suspense fallback={<Loader />}>
                <RegistroTaller />
              </Suspense>
            </Route>
            <Route exact path="/actualizar-unidad-transporte/:id">
              <Suspense fallback={<Loader />}>
                <EditarTransporte />
              </Suspense>
            </Route>
            <Route exact path="/registro-transporte">
              <Suspense fallback={<Loader />}>
                <RegistroTransporte />
              </Suspense>
            </Route>
            <Route exact path="/unidades-transporte">
              <Suspense fallback={<SpinnerLazy />}>
                <UnidadesTransporte />
              </Suspense>
            </Route>
            <Route exact path="/actualizar-repuestos/:id">
              <Suspense fallback={<Loader />}>
                <EditarRepuestos />
              </Suspense>
            </Route>
            <Route exact path="/actualizar-proveedor/:id">
              <Suspense fallback={<Loader />}>
                <EditarProveedor />
              </Suspense>
            </Route>
            <Route exact path="/nuevo-proveedor">
              <Suspense fallback={<Loader />}>
                <NuevoProveedor />
              </Suspense>
            </Route>
            <Route exact path="/proveedores">
              <Suspense fallback={<Loader />}>
                <Proveedores />
              </Suspense>
            </Route>
            <Route exact path="/nuevo-usuario">
              <Suspense fallback={<Loader />}>
                <NuevoUsuario />
              </Suspense>
            </Route>
            <Route exact path="/registro">
              <Suspense fallback={<Loader />}>
                <Registro />
              </Suspense>
            </Route>
            <Route exact path="/listado-empleados">
              <Suspense fallback={<Loader />}>
                <ListadoEmpleados />
              </Suspense>
            </Route>
            <Route exact path="/ficha-empleado/:Id">
              <Suspense fallback="Cargando....">
                <FichaEmpleado />
              </Suspense>
            </Route>

            <Route exact path="/listado-repuestos">
              <Suspense fallback={<Loader />}>
                <ListadoRepuestos />
              </Suspense>
            </Route>

            <Route exact path="/formulario-repuestos">
              <Suspense fallback={<Loader />}>
                <FormRepuestos />
              </Suspense>
            </Route>
            <Route exact path="/listado-marcas">
              <Suspense fallback={<Loader />}>
                <ListadoMarcas />
              </Suspense>
            </Route>
            <Route exact path="/formulario-marcas">
              <Suspense fallback={<Loader />}>
                <FormularioMarcas />
              </Suspense>
            </Route>
            <Route exact path="/formulario-medidas">
              <Suspense fallback={<Loader />}>
                <FormularioMedidas />
              </Suspense>
            </Route>
            <Route exact path="/listado-medidas">
              <Suspense fallback={<Loader />}>
                <ListadoMedidas />
              </Suspense>
            </Route>
            <Route exact path="/busqueda-productos">
              <Suspense fallback={<Loader />}>
                <BusquedaProductos />
              </Suspense>
            </Route>
            <Route exact path="/listado-estados-repuestos">
              <Suspense fallback={<Loader />}>
                <ListadoEstadoRepuestos />
              </Suspense>
            </Route>
            <Route exact path="/formulario-estados">
              <Suspense fallback={<Loader />}>
                <FormularioEstadoRepuestos />
              </Suspense>
            </Route>
            <Route exact path="/pdf-empleado">
              <Suspense fallback={<Loader />}>
                <PdfEmpleado />
              </Suspense>
            </Route>
            <Route
              exact
              path="/captura-foto-empleado"
              component={CapturaFotoEmpleado}
            >
              <Suspense fallback={<Loader />}>
                <CapturaFotoEmpleado />
              </Suspense>
            </Route>
            <Route exact path="/registro-faltas">
              <Suspense fallback={<Loader />}>
                <RegistroFaltas />
              </Suspense>
            </Route>
            <Route exact path="/registro-refrenda">
              <Suspense fallback={<Loader />}>
                <RegistroRefrenda />
              </Suspense>
            </Route>
          </Switch>
        </SearchContextProvider>
      </Router>
    </Fragment>
  );
}

export default App;
