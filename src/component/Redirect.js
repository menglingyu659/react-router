import React, { useContext, useEffect } from "react";
import { RouterContext } from "./context";

function Redirect({ to, push }) {
  const { history } = useContext(RouterContext);
  useEffect(() => {
    push ? history.push(to) : history.replace(to);
  }, []);
  return null;
}
export { Redirect };
