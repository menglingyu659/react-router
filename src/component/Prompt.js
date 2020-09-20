import React, { useContext } from "react";
import { RouterContext } from "./context";

// class Lifecycle extends Component {
//   componentDidMount() {
//     if (this.props.onMount) {
//       this.props.onMount.call(this, this);
//     }
//   }
//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//     if (this.props.onUnmount) {
//       this.props.onUnmount.call(this, this);
//     }
//   }
//   render() {
//     return null;
//   }
// }

// export function Prompt({ message, when = true }) {
//   return (
//     <RouterContext.Consumer>
//       {(context) => {
//         if (!when) {
//           return null;
//         }
//         let method = context.history.block;
//         return (
//           <Lifecycle
//             onMount={(self) => {
//               self.release = method(message);
//             }}
//             onUnmount={(self) => {
//               self.release();
//             }}
//           ></Lifecycle>
//         );
//       }}
//     </RouterContext.Consumer>
//   );
// }

export function Prompt({ message, when = true }) {
  const { history } = useContext(RouterContext);
  let unBlock = null;
  if (when) {
    unBlock = history.block(message);
  } else {
    unBlock && unBlock();
  }
  return null;
}
