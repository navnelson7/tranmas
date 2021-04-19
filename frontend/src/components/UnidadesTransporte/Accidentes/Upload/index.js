import React, { Fragment, useState } from "react";
import FilesSelected from "./FilesSelected";
import SelectFiles from "./SelectFiles";

function Upload({ newAccidente, setnewAccidente, setExecuteSaveAccidente }) {
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
    setFiles(blobFiles);
    setAboutFiles(filesDescription);
  };

  return (
    <Fragment>
      {Files === null || AboutFiles.length === 0 ? (
        <SelectFiles changeFiles={changeFiles} />
      ) : (
        <FilesSelected
          Files={Files}
          setAboutFiles={setAboutFiles}
          AboutFiles={AboutFiles}
          newAccidente={newAccidente}
          setnewAccidente={setnewAccidente}
          setExecuteSaveAccidente={setExecuteSaveAccidente}
        />
      )}
    </Fragment>
  );
}

export default Upload;
