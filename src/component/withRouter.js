import React, { useContext } from "react";
import { RouterContext } from "./context";

export const withRouter = (Component) => (props) => {
  const context = useContext(RouterContext);
  return React.createElement(Component, {
    ...props,
    ...context,
  });
};
