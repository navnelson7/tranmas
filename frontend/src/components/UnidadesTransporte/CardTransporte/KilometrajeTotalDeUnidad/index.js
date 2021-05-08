import React from "react";
import { useSubscription } from "@apollo/client";
import { listenKilometrajeMax } from "../../../../graphql/Suscription";

function KilometrajeTotalDeUnidad({ idUnidadTransporte }) {
  const { data, loading, error } = useSubscription(listenKilometrajeMax, {
    variables: {
      id: idUnidadTransporte,
    },
  });
  if (loading) {
    return <p>{""}</p>;
  }
  if (error) {
    return (
      <h5>
        <p className="center-box">{error.message}</p>
      </h5>
    );
  }
  if (data.kilometraje_global_aggregate.aggregate.max.kilometraje === null) {
    return "";
  }
  return (
    <h5>
      <p className="center-box">
        <strong>
          {data.kilometraje_global_aggregate.aggregate.max.kilometraje +
            " " +
            "Km"}
        </strong>
      </p>
    </h5>
  );
}

export default KilometrajeTotalDeUnidad;
