import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./rules.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/ApolloClient";
import * as serviceWorker from "./serviceWorker";
import Loader from "./components/Loader";

const App = lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
