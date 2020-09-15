import React from "react";
import { createBrowserHistory } from "history";
import Router from "./Router";

export function BrowserRouter(props) {
  const history = createBrowserHistory();
  return <Router history={history} {...props}></Router>;
}
