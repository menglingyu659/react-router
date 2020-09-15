import React, { useContext } from "react";
import { RouterContext } from "./context";
import { matchPath } from "react-router-dom";

export function Route(props) {
  const { path, component, children, render } = props;
  const context = useContext(RouterContext);
  const match = path ? matchPath(context.location.pathname, props) : context.match;
  props = {
    ...context,
    match,
  };
  return match
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
    : null;
}
