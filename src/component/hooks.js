import { useContext } from "react";
import { RouterContext } from "./context";

export const useRouteMatch = () => {
  const context = useContext(RouterContext);
  return context.match;
};
export const useParams = () => {
  const match = useRouteMatch();
  return match.params;
};
export const useLocation = () => {
  const context = useContext(RouterContext);
  return context.location;
};
export const useHistory = () => {
  const context = useContext(RouterContext);
  return context.history;
};
