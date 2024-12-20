import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://yieldworks.com.co/graphql', // Cambia esto por tu URL de WPGraphQL
  cache: new InMemoryCache(),
});

export default client;
