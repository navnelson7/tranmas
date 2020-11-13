import React from "react";
import { Toast } from "react-bootstrap";
import IconValidate from "./IconValidate";
import { v4 as uuidv4 } from "uuid";

export function ToastComponent({
  showAlert,
  setShowAlert,
  iconType,
  textAlert,
}) {
  const toggleShowA = () => setShowAlert(!showAlert);
  return (
    <div className="float-right">
      <Toast show={showAlert} onClose={toggleShowA}>
        <Toast.Header>
          <IconValidate extension={iconType} key={uuidv4()} />
          <strong className="mr-auto text-danger">
            {iconType === "error" && "Error"}
            {iconType === "success" && "Excelente"}
          </strong>
        </Toast.Header>
        <Toast.Body>{textAlert ? textAlert : ""}</Toast.Body>
      </Toast>
    </div>
  );
}
