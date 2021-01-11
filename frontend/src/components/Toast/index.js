import React, { useEffect , Fragment} from "react";
import styled from "styled-components";

export function ToastComponent({
  showAlert,
  iconType,
  textAlert,
  setShowAlert
}) {
  useEffect(() => {
    if (showAlert) {
      const showAlertFunction = () => {
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () {
          if (x.className !== null) {
            x.className = x.className.replace("show", "");
          }
        }, 3000);
        setShowAlert(false)
      };
      showAlertFunction();
    }
  }, [showAlert]);
  return (
    <Fragment>
      <StyleToast background={ iconType === "success" ? "#93b342" : iconType === "error" ? "#ef233c" : "#3f37c9"}>
        <div className="center-snackbar">
          <div id="snackbar">{textAlert}</div>
        </div>
      </StyleToast>
    </Fragment>
  );
}
const StyleToast = styled.div`
  .center-snackbar {
    display: flex;
    justify-content: center;
  }
  #snackbar {
    visibility: hidden;
    min-width: 250px;
    background-color: ${({background})=> background};
    color: white;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    bottom: 160px;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  #snackbar.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }
  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 160px;
      opacity: 1;
    }
  }
  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 160px;
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
  @keyframes fadeout {
    from {
      bottom: 160px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`;
