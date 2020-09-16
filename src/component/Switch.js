import React, { useContext } from "react";
import { matchPath } from "react-router-dom";
import { RouterContext } from "./context";

export function Switch({ children }) {
  const context = useContext(RouterContext);
  let match, element;
  React.Children.forEach(children, (ele) => {
    if (element) return;
    match = ele.props.path ? matchPath(context.location.pathname, ele.props) : context.match;
    if (match) {
      element = ele;
    }
  });

  return match ? React.cloneElement(element, { computerMatch: match }) : null;
}
