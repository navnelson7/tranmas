import React from "react";
import { Button } from "react-bootstrap";
import Webcam from "react-webcam";
const CapturaFotoEmpleado = ({ setImage, image }) => {
  const videoConstraints = {
    width: 720, // 1280
    height: 560, //720
    facingMode: "user",
  };
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
    },
    // eslint-disable-next-line
    [webcamRef]
  );
  return (
    <div>
      <Webcam
        audio={false}
        height={500}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={460}
        videoConstraints={videoConstraints}
      />
      <Button variant="success" onClick={capture}>
        Capture photo
      </Button>
    </div>
  );
};

export default CapturaFotoEmpleado;
