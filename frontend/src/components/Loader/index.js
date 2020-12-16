import React, { Fragment } from "react";
import styled from "styled-components";
import loaderIcon from "./loader.svg";

function Loader() {
  return (
    <Fragment>
      <StyleLoader>
        <div className="center-bus">
          <img
            src={loaderIcon}
            alt="tranmas express"
            height="224px"
            width="224px"
            className="loading"
          />
        </div>
      </StyleLoader>
    </Fragment>
  );
}

export default Loader;

const StyleLoader = styled.div`
  @media (max-width: 1024px) {
    .center-bus {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 25%;
    }
  }

  @media (min-width: 1024px) {
    .center-bus {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10%;
    }
  }

  .loading {
    -webkit-animation: rotation 2s infinite;
    animation: rotation 2s infinite;
    animation-delay: 1s;
  }

  @-webkit-keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
    }
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
