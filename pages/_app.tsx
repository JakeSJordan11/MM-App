import React from "react";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import {  } from '@apollo/client';

const client = new ApolloClient({
  uri: "http://localhost:3000/api",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps, err }) {
  console.log("ran");
  // Workaround for https://github.com/vercel/next.js/issues/8592
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} err={err} />
    </ApolloProvider>
  );
}
