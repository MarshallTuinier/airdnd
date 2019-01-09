import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { client } from "./Apollo";
import { Routes } from "./routes";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root")
);
