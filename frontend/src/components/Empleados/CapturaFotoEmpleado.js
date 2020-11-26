import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Webcam from 'react-webcam';
const CapturaFotoEmpleado = (imageSrc) => {
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };
    const [image,setImate] = useState();
    const webcamRef = React.useRef(null);
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot()
            setImate(imageSrc)
        },
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
        <Button variant="success" onClick={capture}>Capture photo</Button>
        </div>
    );
}

export default CapturaFotoEmpleado;