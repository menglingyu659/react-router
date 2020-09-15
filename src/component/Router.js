import React, { useState } from "react";
import { RouterContext } from "./context";

export default function ({ history, children }) {
  const [location, setLocation] = useState(history.location);
  history.listen(({ location }) => {
    setLocation(location);
  });
  const match = { path: "/", url: "/", params: {}, isExact: location.pathname === "/" };
  return <RouterContext.Provider value={{ location, history, match }}>{children}</RouterContext.Provider>;
}
