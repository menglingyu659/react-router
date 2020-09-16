import React, { useContext } from "react";
import { RouterContext } from "./context";
import { matchPath } from "react-router-dom";

export function Route(props) {
  const { path, component, children, render, computerMatch } = props;
  const context = useContext(RouterContext);
  const match = computerMatch
    ? computerMatch
    : path
    ? matchPath(context.location.pathname, props)
    : context.match;
  props = {
    ...context,
    match,
  };
  return (
    <RouterContext.Provider value={props}>
      {match
        ? children
          ? typeof children === "function"
            ? children(props)
            : children
          : component
          ? React.createElement(component, props)
          : render
          ? render(props)
          : null
        : typeof children === "function"
        ? children(props)
        : null}
    </RouterContext.Provider>
  );
}
