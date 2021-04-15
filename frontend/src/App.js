import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Auth/Login";
import { SearchContextProvider } from "./context/ContextInputSearch";

import Navegacion from "./components/Navegacion";
import NavegacionTop from "./components/Navegacion/NavegacionTop";
import RegistroCombustible from "./components/UnidadesTransporte/Combustible/Registro";
import EditarCombustible from "./components/UnidadesTransporte/Combustible/EditarCombustible";
import { SpinnerLazy } from "./components/Loader/SpinnerLazy";
import EstadisticasCombustible from "./components/UnidadesTransporte/Combustible/statistic";
import Accidentes from "./components/UnidadesTransporte/Accidentes/Accidentes";
import EditarEmpleado from "./components/Empleados/Editar";

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
              <Suspense fallback="Cargando....">
                <EditarTransporte />
              </Suspense>
            </Route>
            <Route exact path="/actualizar-empleado/:id">
              <EditarEmpleado />
            </Route>
            <Route exact path="/accidentes/:id">
              <Accidentes />
            </Route>
            <Route exact path="/editar/combustible/:id">
              <EditarCombustible />
            </Route>
            <Route exact path="/estadisticas/combustible/:id">
              <EstadisticasCombustible />
            </Route>
            <Route exact path="/registro/combustible/:id">
              <RegistroCombustible />
            </Route>
            <Route exact path="/editar/registro/taller/:id">
              <Suspense fallback="Cargando....">
                <EditarRegistroEnTaller />
              </Suspense>
            </Route>
            <Route exact path="/fallas/transporte/:id">
              <Suspense fallback="Cargando....">
                <TableFallasTransporte />
              </Suspense>
            </Route>

            <Route exact path="/editar/facturas/repuestos/:id">
              <Suspense fallback="Cargando....">
                <EditarFacturaRepuesto />
              </Suspense>
            </Route>
            <Route exact path="/registro/facturas/repuestos">
              <Suspense fallback="Cargando....">
                <RegistroFacturaRepuesto />
              </Suspense>
            </Route>

            <Route exact path="/editar/matenimiento/edificios/:idMantenimiento">
              <Suspense fallback="Cargando....">
                <EditarMantenimientoEdificios />
              </Suspense>
            </Route>

            <Route exact path="/registro/matenimiento/edificios">
              <Suspense fallback="Cargando....">
                <RegistroMantenimientoEdificios />
              </Suspense>
            </Route>

            <Route
              exact
              path="/editar/detalle/matenimiento/edificios/:idDetalle/:idMantenimiento"
            >
              <Suspense fallback="Cargando....">
                <EditarDetalleMantenimientoEdificios />
              </Suspense>
            </Route>

            <Route
              exact
              path="/registro/detalle/matenimiento/edificios/:idMantenimiento"
            >
              <Suspense fallback="Cargando....">
                <RegistroDetalleMantenimientoEdificios />
              </Suspense>
            </Route>
            <Route
              exact
              path="/tabla/detalle/matenimiento/edificios/:idMantenimiento"
            >
              <Suspense fallback="Cargando....">
                <TableDetalleMantenimientoEdificios />
              </Suspense>
            </Route>

            <Route exact path="/tabla/matenimiento/edificios">
              <Suspense fallback="Cargando....">
                <TableMantenimientoEdificios />
              </Suspense>
            </Route>
            <Route exact path="/editar/registro/edificio/:idEdificio">
              <Suspense fallback="Cargando....">
                <EditarEdificio />
              </Suspense>
            </Route>
            <Route exact path="/registro/edificios">
              <Suspense fallback="Cargando....">
                <RegistroEdificios />
              </Suspense>
            </Route>

            <Route path="/tabla/edificios">
              <Suspense fallback="Cargando....">
                <TableRegistroEdificios />
              </Suspense>
            </Route>

            <Route exact path="/edificios">
              <Suspense fallback="Cargando....">
                <CardsEdificios />
              </Suspense>
            </Route>

            <Route exact path="/facturas/repuestos">
              <Suspense fallback="Cargando....">
                <TableFacturas />
              </Suspense>
            </Route>

            <Route
              exact
              path="/editar/aire/acondicionado/:idTransporte/:idAireAcondicionado"
            >
              <Suspense fallback="Cargando....">
                <EditarAireAcondicionado />
              </Suspense>
            </Route>

            <Route exact path="/registro/aire/acondicionado/:id">
              <Suspense fallback="Cargando....">
                <RegistroAireAcondicionado />
              </Suspense>
            </Route>

            <Route exact path="/editar/tapiceria/:idTapiceria/:idTransporte">
              <Suspense fallback="Cargando....">
                <EditarTapiceria />
              </Suspense>
            </Route>

            <Route exact path="/registro/tapiceria/:id">
              <Suspense fallback="Cargando....">
                <RegistroTapiceria />
              </Suspense>
            </Route>

            <Route exact path="/tabla/tapiceria/:id">
              <Suspense fallback="Cargando....">
                <TableTapiceria />
              </Suspense>
            </Route>

            <Route
              exact
              path="/editar/consumo/carwash/:idCarwash/:idTransporte"
            >
              <Suspense fallback="Cargando....">
                <EditarCarwash />
              </Suspense>
            </Route>
            <Route exact path="/registro/consumo/carwash/:id">
              <Suspense fallback="Cargando....">
                <RegistroCarwash />
              </Suspense>
            </Route>
            <Route exact path="/tabla/consumo/carwash/:id">
              <Suspense fallback="Cargando....">
                <TableCarwash />
              </Suspense>
            </Route>

            <Route
              exact
              path="/editar/refrenda/circulacion/:idRefrenda/:idTransporte"
            >
              <Suspense fallback="Cargando....">
                <EditarRefrendaCirculacion />
              </Suspense>
            </Route>

            <Route exact path="/registro/refrenda/circulacion/:id">
              <Suspense fallback="Cargando....">
                <RegistroRefrendaCirculacion />
              </Suspense>
            </Route>
            <Route exact path="/tabla/refrenda/circulacion/:id">
              <Suspense fallback="Cargando....">
                <TableRefrendaCirculacion />
              </Suspense>
            </Route>
            <Route exact path="/tabla/aire/acondicionado/:id">
              <Suspense fallback="Cargando....">
                <TableAireAcondicionado />
              </Suspense>
            </Route>

            <Route exact path="/editar/detalle/taller/:id">
              <Suspense fallback="Cargando....">
                <EditarDetalleEnTaller />
              </Suspense>
            </Route>
            <Route exact path="/registro/detalle/taller/:id/:unidadTransporte">
              <Suspense fallback="Cargando....">
                <RegistroDetalleEnTaller />
              </Suspense>
            </Route>

            <Route exact path="/registro/taller/:id">
              <Suspense fallback="Cargando....">
                <RegistroTaller />
              </Suspense>
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
              <Suspense fallback={<SpinnerLazy />}>
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
            <Route exact path="/ficha-empleado/:Id">
              <Suspense fallback="Cargando....">
                <FichaEmpleado />
              </Suspense>
            </Route>

            <Route exact path="/listado-repuestos">
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
            <Route exact path="/pdf-empleado">
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
            <Route exact path="/registro-faltas">
              <Suspense fallback="Cargando...">
                <RegistroFaltas />
              </Suspense>
            </Route>
            <Route exact path="/registro-refrenda">
              <Suspense fallback="Cargando ...">
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
