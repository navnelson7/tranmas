import { ApolloClient, InMemoryCache } from "@apollo/client";

import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_BACKEND_URL,
});

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_WS ? process.env.REACT_APP_WS + process.env.REACT_APP_BACKEND_WS_URL : process.env.REACT_APP_BACKEND_WS_URL,
  options: {
    reconnect: true,
  },
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);
export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
