import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useSubmitGraphQL = ({
  mutationSubmit,
  variables,
  pushUrl = "url",
  execute = false,
}) => {
  const { push } = useHistory();

  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    if (execute) {
      const executeSubmit = async () => {
        try {
          await mutationSubmit({ variables });
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Registrado correctamente");
          push(pushUrl);
        } catch (error) {
          setLoading(false);
          setTextAlert(error.message);
          setIconType("error");
          setshowAlert(true);
        }
      };
      executeSubmit();
    }
  }, [execute, mutationSubmit, push, pushUrl, variables]);

  return {
    TextAlert,
    showAlert,
    IconType,
    Loading,
    setshowAlert,
  };
};
