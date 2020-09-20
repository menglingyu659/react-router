import React, { useEffect, useState } from "react";
import { RouterContext } from "./context";

export default function ({ history, children }) {
  const [location, setLocation] = useState(history.location);
  useEffect(() => {
    const unListen = history.listen(({ location }) => {
      setLocation(location);
    });
    return unListen;
  }, []);
  const match = {
    path: "/",
    url: "/",
    params: {},
    isExact: location.pathname === "/",
  };
  return (
    <RouterContext.Provider value={{ location, history, match }}>
      {children}
    </RouterContext.Provider>
  );
}
