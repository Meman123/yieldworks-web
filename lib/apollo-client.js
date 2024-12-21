import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://yieldworks.com.co/graphql", // URL de tu servidor GraphQL
  cache: new InMemoryCache(),
});

export default client;
