import React, { useEffect, useState } from "react";
import axios from "axios";

function DownloadFile({ NombreArchivo, setNombreArchivo }) {
  const [Progress, setProgress] = useState(0);
  useEffect(() => {
    if (NombreArchivo !== "") {
      axios({
        url:
          process.env.REACT_APP_BACKEND_FLASK +
          `download/contrato/empleado/${NombreArchivo}`, //your url
        method: "GET",
        responseType: "blob", // important
        onDownloadProgress: (progressEvent) => {
          var percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
      }).then((response) => {
        console.log(response.data);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", NombreArchivo); //or any other extension
        document.body.appendChild(link);
        link.click();
        setNombreArchivo("");
        setProgress(0);
      });
    }
    // eslint-disable-next-line
  }, [NombreArchivo]);

  return (
    <div>
      {Progress === 0 ? (
        ""
      ) : (
        <div className="alert alert-primary mr-2" role="alert">
          Descargando archivo {Progress} %
        </div>
      )}
    </div>
  );
}

export default DownloadFile;
