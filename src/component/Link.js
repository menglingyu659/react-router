import React, { useContext } from "react";
import { RouterContext } from "./context";

export function Link({ to, children }) {
  const { history } = useContext(RouterContext);
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    history.push(to);
  };
  return <a onClick={handleClick}>{children}</a>;
}
