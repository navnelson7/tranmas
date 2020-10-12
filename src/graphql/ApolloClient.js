import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { getRepuestos } from './Queries';

export const client = new ApolloClient({
    uri: process.env.REACT_APP_BACKEND_URL,
    cache: new InMemoryCache()
});