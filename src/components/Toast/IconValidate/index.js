import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

function IconValidate({ extension }) {
  const listIcons = ["error", "success"];

  const result = listIcons.map((icon) => {
    let iconExtension = null;
    if (icon === extension) {
      iconExtension = require(`../iconos/${icon}.svg`);
    }
    return (
      <Fragment key={uuidv4()}>
        <img src={iconExtension} alt="" />
      </Fragment>
    );
  });
  return result;
}
export default IconValidate;
