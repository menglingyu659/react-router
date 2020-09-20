import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams,
//   useLocation,
//   useHistory,
//   withRouter,
//   Redirect,
//   Prompt,
// } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useLocation,
  useHistory,
  withRouter,
  Redirect,
  Prompt,
} from "./component";

function Home(props) {
  console.log(props);
  return <span>home</span>;
}

const HomeR = withRouter(function (props) {
  // const history = useHistory();
  // const location = useLocation();
  // const match = useRouteMatch();
  // const params = useParams();
  // console.log(history);
  // console.log(location);
  // console.log(match);
  // console.log(params);
  console.log(props);
  return <span>HomeR</span>;
});

function Detail(props) {
  console.log(props);
  const [flag, setFlag] = useState(true);
  return (
    <span>
      detail
      <Prompt when={flag} message={'113'}></Prompt>
      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        change flag
      </button>
      {`${flag}`}
    </span>
  );
}

function Info(props) {
  console.log(props);
  return (
    <span>
      info
      <Redirect
        to={{
          pathname: "/9",
        }}
      ></Redirect>
    </span>
  );
}

function No(props) {
  console.log(props);
  return <div>404</div>;
}

function App() {
  return (
    <div>
      <Router>
        <p>
          <Link to="/123">Home</Link>
        </p>
        <p>
          <Link to="/detail">Detail</Link>
        </p>
        <p>
          <Link to="/info">Info</Link>
        </p>
        <p>
          <Link to="/none">none</Link>
        </p>
        <br />
        <Switch>
          <Route path="/detail" component={Detail}></Route>
          <Route path="/info" component={Info}></Route>
          <Route
            exact
            path="/:id"
            // children={() => <HomeR a="a"></HomeR>}
            component={Home}
          ></Route>
          <Route component={No}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
