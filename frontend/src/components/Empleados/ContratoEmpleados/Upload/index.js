import React, { Fragment, useState } from "react";
import { useLocation } from "react-router";
import FilesSelected from "./FilesSelected";
import SelectFiles from "./SelectFiles";

function Upload({
  newContratoEmpleado,
  setnewContratoEmpleado,
  setExecuteSaveContrato,
  setOcultarBotonesPorDefecto,
}) {
  const { pathname } = useLocation();
  const [Files, setFiles] = useState([]);
  const [AboutFiles, setAboutFiles] = useState([]);

  const changeFiles = (e) => {
    let blobFiles = [];
    let filesDescription = [];
    for (const iterator of e.target.files) {
      blobFiles.push(iterator);
      filesDescription.push({
        ...AboutFiles,
        name: iterator.name,
        size: iterator.size,
        type: iterator.type,
        date: iterator.lastModifiedDate,
      });
    }
    setOcultarBotonesPorDefecto(false);
    // GUARDA TODA LA INFORMACION DEL ARCHIVO como BUFFER ETC
    setFiles(blobFiles);

    //GUARDA LA INFORMACION DE CADA UNO DE LOS FICHEROS
    setAboutFiles(filesDescription);
  };

  return (
    <Fragment>
      <h6 className="text-center">
        <strong>
          {" "}
          {pathname.includes("/editar/contrato/empleado/")
            ? "Nota: Si agrega un archivo reemplezara el existente"
            : ""}
        </strong>
      </h6>
      {Files === null || AboutFiles.length === 0 ? (
        <SelectFiles changeFiles={changeFiles} />
      ) : (
        <FilesSelected
          setFiles={setFiles}
          Files={Files} // DATOS A GUARDAR DEL ARCHIVO
          setAboutFiles={setAboutFiles} // INFORMACION DEL ARCHIVO
          AboutFiles={AboutFiles}
          newContratoEmpleado={newContratoEmpleado}
          setnewContratoEmpleado={setnewContratoEmpleado}
          setExecuteSaveContrato={setExecuteSaveContrato}
        />
      )}
    </Fragment>
  );
}

export default Upload;
