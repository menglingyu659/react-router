import React, { useState } from "react";
import { createBrowserHistory } from "history";
import { RouterContext } from "./context";

export function BrowserRouter(props) {
  const history = createBrowserHistory();
  const [location, setLocation] = useState(history.location);
  history.listen((location) => {
    setLocation(location);
  });
  const o = {
    history,
    location,
  };
  return (
    <RouterContext.Provider value={{ location, history }}>
      {props.children}
    </RouterContext.Provider>
  );
}
